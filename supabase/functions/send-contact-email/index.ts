import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";
import { z } from "https://esm.sh/zod@3.23.8";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  title: z.string().trim().max(100).optional().or(z.literal("")),
  organization: z.string().trim().max(150).optional().or(z.literal("")),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(5000),
});

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#039;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY not configured");

    const body = await req.json();
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    const d = parsed.data;

    const recipient = "business@dunestrategy.com";

    const adminHtml = `
      <h2>New contact inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(d.name)}</p>
      ${d.title ? `<p><strong>Title:</strong> ${escapeHtml(d.title)}</p>` : ""}
      ${d.organization ? `<p><strong>Organization:</strong> ${escapeHtml(d.organization)}</p>` : ""}
      <p><strong>Email:</strong> ${escapeHtml(d.email)}</p>
      ${d.phone ? `<p><strong>Phone:</strong> ${escapeHtml(d.phone)}</p>` : ""}
      <hr/>
      <p style="white-space:pre-wrap">${escapeHtml(d.message)}</p>
    `;

    const confirmHtml = `
      <p>Dear ${escapeHtml(d.name)},</p>
      <p>Thank you for contacting Dune Strategy. We have received your inquiry and a member of our team will respond within two business days.</p>
      <p>All inquiries are treated with strict confidentiality.</p>
      <p>Best regards,<br/>Dune Strategy</p>
    `;

    const send = async (payload: Record<string, unknown>) => {
      const r = await fetch(`${GATEWAY_URL}/emails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "X-Connection-Api-Key": RESEND_API_KEY,
        },
        body: JSON.stringify(payload),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(`Resend [${r.status}]: ${JSON.stringify(data)}`);
      return data;
    };

    // Admin notification only — sending to arbitrary recipients requires a verified domain
    await send({
      from: "Dune Strategy <onboarding@resend.dev>",
      to: [recipient],
      reply_to: d.email,
      subject: `New inquiry from ${d.name}`,
      html: adminHtml,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    console.error("send-contact-email error:", msg);
    return new Response(JSON.stringify({ success: false, error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
