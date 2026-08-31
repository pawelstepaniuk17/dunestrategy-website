import { Layout } from "@/components/layout/Layout";
import { GeometricAccent } from "@/components/layout/GeometricAccent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });
      if (error || !data?.success) {
        throw new Error(error?.message || data?.error || "Failed to send");
      }
      toast({
        title: "Message received",
        description: "Thank you for your inquiry. We will respond within two business days.",
      });
      setFormData({
        name: "",
        title: "",
        organization: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      toast({
        title: "Could not send message",
        description: err instanceof Error ? err.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
        <GeometricAccent variant="diagonal" className="-top-10 -right-10 opacity-[0.12]" size="xl" />
        <GeometricAccent variant="dots" className="bottom-0 left-0 opacity-[0.12]" size="md" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-10 bg-gold" aria-hidden="true" />
                <p className="eyebrow text-gold">Get in touch</p>
              </div>
              <h1 className="font-serif font-normal text-[52px] leading-[1.03] sm:text-7xl md:text-8xl lg:text-[6rem] lg:leading-[1.0] tracking-tight mb-8 text-balance">
                Contact
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                The firm takes inquiries from owners, chief executives, boards, and investors weighing a market
                entry, a regional partnership, a transaction, or an operating decision in the Gulf. Initial
                conversations are direct, confidential, and without obligation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We do not disclose who contacts us or what they are weighing. The first exchange is treated with
                the same discretion as the engagement that may follow.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div className="border-l-2 border-gold/70 pl-6">
                <h3 className="font-medium mb-1">Email</h3>
                <a href="mailto:business@gulf-associates.org" className="text-muted-foreground hover:text-foreground transition-colors">
                  business@gulf-associates.org
                </a>
              </div>
              <div className="border-l-2 border-gold/70 pl-6">
                <h3 className="font-medium mb-1">Phone</h3>
                <a href="tel:+971528012369" className="text-muted-foreground hover:text-foreground transition-colors">
                  +971 52 801 2369
                </a>
              </div>
              <div className="border-l-2 border-gold/70 pl-6">
                <h3 className="font-medium mb-1">Office</h3>
                <p className="text-muted-foreground">
                  Techno Hub 2, Dubai Silicon Oasis<br />
                  Dubai, United Arab Emirates
                </p>
              </div>
              <div className="border-l-2 border-gold/70 pl-6">
                <h3 className="font-medium mb-1">Hours</h3>
                <p className="text-muted-foreground">
                  Sunday to Thursday, 9:00 AM – 6:00 PM (GST)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
        <GeometricAccent variant="dots" className="-bottom-20 -right-10 opacity-[0.10]" size="lg" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-8">
                Send a direct inquiry
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="bg-background"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="bg-background"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">The commercial situation</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-background resize-none"
                    placeholder="A short description of the decision in front of you: market entry, partnership or counterparty, transaction, operating change, or other regional matter where outside judgment would be useful."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full md:w-auto" disabled={submitting}>
                  {submitting ? "Sending..." : "Submit inquiry"}
                </Button>
              </form>
            </div>

            {/* Sidebar Info */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-8">
                What happens next
              </h2>
              <div className="space-y-8">
                <div className="border-l-2 border-gold/70 pl-6">
                  <h3 className="font-medium mb-2">Within two business days</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A partner reviews the inquiry and replies with an initial read on whether the situation is one
                    we are positioned to advise on.
                  </p>
                </div>
                <div className="border-l-2 border-gold/70 pl-6">
                  <h3 className="font-medium mb-2">A direct first conversation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If the read is positive, we set up a thirty to forty-five minute call to work through the
                    commercial situation in more detail. No materials are required beyond what you already know.
                  </p>
                </div>
                <div className="border-l-2 border-gold/70 pl-6">
                  <h3 className="font-medium mb-2">A clear answer on fit</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We say plainly whether we are the right firm for the matter. Where we are not, and where we
                    can, we point you toward someone who is.
                  </p>
                </div>
                <div className="border-l-2 border-gold/70 pl-6">
                  <h3 className="font-medium mb-2">Confidentiality from first contact</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Anything shared with us is held in confidence before any formal engagement is in place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparing for Conversation */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <GeometricAccent variant="lines" className="top-10 -right-20 opacity-[0.12]" size="lg" />
        <GeometricAccent variant="cross" className="-bottom-10 left-0 opacity-[0.10]" size="md" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
                Before the first call
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The conversation is most useful when the decision in front of you is reasonably defined: what is
                being weighed, what makes the call difficult, what has already been considered, and what would
                count as a useful answer.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A complete picture is not required. Sharpening the question is often part of the work. The more
                context you can share at the outset, the more directly the discussion can move.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Where time is short or a counterparty conversation is already underway, please flag the timing
                in the first message.
              </p>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
                What to expect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Inquiries are answered within two business days. Urgent matters are handled on shorter cycles when
                flagged.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Initial calls run thirty to forty-five minutes by phone or video. We use the time to understand
                the situation and form a view on whether we can move the commercial outcome.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are direct about fit. We would rather decline than take work where our presence does not change
                the answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Inquiries */}
      <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
        <GeometricAccent variant="diagonal" className="-top-10 -left-10 opacity-[0.12]" size="lg" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
              The kinds of inquiries we receive
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Specific commercial situations</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A market entry, a partner or counterparty decision, a transaction, a regulatory shift, or an
                operating reset where outside judgment would change the path forward.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Useful to share: the organization, the situation in plain terms, and what made you reach for
                an outside view.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Standing advisory relationships</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Owners, chairs, and chief executives looking for a continuing relationship that travels with the
                next set of regional decisions: the next market, the next partnership, the next transaction. We
                hold a small number of these by design.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These work where there is a recurring pattern of decisions in which an outside read genuinely
                changes the commercial outcome.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Other approaches</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We occasionally hear from researchers, journalists, and others seeking a regional perspective
                within our scope. We respond selectively.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Please be specific about what you are seeking and why you think the firm might be relevant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <GeometricAccent variant="dots" className="-bottom-10 -right-10 opacity-[0.12]" size="lg" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
              From first contact to engagement
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The sequence we follow before a formal engagement begins.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Initial discussion", desc: "A conversation to understand the commercial situation and form a view on whether our experience is directly relevant." },
              { step: "02", title: "Scoping", desc: "If the read is positive, we develop a preliminary scope: the question, the approach, the timeline, and the staffing." },
              { step: "03", title: "Proposal", desc: "A written proposal covering objectives, approach, deliverables, timeline, staffing, and fee structure." },
              { step: "04", title: "Engagement", desc: "Once terms are agreed, we mobilize quickly. Most engagements begin within two weeks of agreement." },
            ].map((item) => (
              <div key={item.step} className="border-t-2 border-gold/60 pt-6">
                <span className="text-xs text-muted-foreground block mb-3">{item.step}</span>
                <h3 className="font-medium mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality Note */}
      <section className="dark py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <GeometricAccent variant="dots" className="-top-20 -right-20 opacity-[0.06]" size="xl" />
        <GeometricAccent variant="lines" className="-bottom-10 -left-10 opacity-[0.06]" size="lg" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-8">
              On confidentiality
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-6">
              Anything you share with us is held in confidence. We do not disclose that you contacted us, discuss 
              your situation with anyone outside the firm, or use information from our conversations for any 
              purpose other than responding to your inquiry.
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-6">
              This applies from first contact, before any engagement. You can speak openly knowing the conversation 
              stays private.
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Strict information barriers are kept between client engagements. Knowledge gained on one mandate is 
              not carried into another. The discipline is fundamental to the trust the practice runs on.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
