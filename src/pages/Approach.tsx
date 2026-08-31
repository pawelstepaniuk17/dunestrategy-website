import { Layout } from "@/components/layout/Layout";
import { GeometricAccent } from "@/components/layout/GeometricAccent";

export default function Approach() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/images/approach-meeting.png"
          alt="An advisory meeting in a Dubai office"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/45" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" aria-hidden="true" />

        <div className="container relative mx-auto px-6 lg:px-8 pt-28 pb-20 sm:pt-36 md:pt-44 md:pb-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              <p className="eyebrow text-gold">Approach</p>
            </div>
            <h1 className="font-serif font-normal text-[52px] leading-[1.03] sm:text-7xl md:text-8xl lg:text-[6rem] lg:leading-[1.0] tracking-tight mb-8 text-balance">
              How we work
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              The firm does not sell a method. We bring commercial judgment built from continuous work in the
              Gulf, with the discipline to test it against the specifics of each situation, each counterparty,
              and each market.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What follows describes how we get to the real commercial question, build a position we can
              defend, and stay close to the decision through to execution.
            </p>
          </div>
        </div>
      </section>

      {/* Getting to the real commercial question */}
      <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
        <GeometricAccent variant="cross" className="-top-10 -right-20 opacity-25" size="lg" />
        <GeometricAccent variant="corner" className="bottom-0 left-0 opacity-[0.12] rotate-180" size="md" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                Getting to the real commercial question
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Engagements often arrive framed as a strategy question when the real question is commercial: which 
                counterparty, which structure, which sequence, what price. The first phase is spent getting to the 
                question that actually decides the outcome.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The framing sharpens as the market read comes in. We are explicit when it does, rather than holding 
                to an original brief that the situation no longer supports.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If the client and the firm cannot agree on what we are answering and why it matters commercially, 
                we are not ready to start the analytical work.
              </p>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                Breaking the question down
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Commercial questions in the region break into the parts that can actually be checked: who the 
                counterparties are, where the regulatory path leads, where capital is coming from, and what the 
                operating setup needs to carry the result.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Workplans say what we need to learn in each track, what would change our view, and how the parts 
                fit together. They are shared with the client so the logic is visible.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Plans get revised when the market or the situation moves. Discipline sits in the structure, not 
                in refusing to update it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Build Conviction */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <GeometricAccent variant="dots" className="-bottom-20 -left-10 opacity-[0.10]" size="lg" />
        <GeometricAccent variant="lines" className="top-10 -right-20 opacity-[0.12]" size="md" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
              Building conviction
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Recommendations only matter if we believe them. The work is built to develop a position we can 
              defend in front of a board, an investment committee, or a counterparty.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-t-2 border-gold/60 pt-6">
              <h3 className="text-xl font-medium mb-4">Primary checking</h3>
              <p className="text-muted-foreground leading-relaxed">
                The most reliable view of a Gulf market comes from people working in it. We talk to operators, 
                regulators, sponsors, and active investors before we rely on what is published. Reports lag the 
                market, sometimes by years.
              </p>
            </div>
            <div className="border-t-2 border-gold/60 pt-6">
              <h3 className="text-xl font-medium mb-4">Hypothesis discipline</h3>
              <p className="text-muted-foreground leading-relaxed">
                We form a working view early and test it against evidence. This is faster than open-ended 
                exploration and forces us to be specific about what would change our mind. We drop hypotheses 
                when the market does not support them.
              </p>
            </div>
            <div className="border-t-2 border-gold/60 pt-6">
              <h3 className="text-xl font-medium mb-4">Pattern recognition</h3>
              <p className="text-muted-foreground leading-relaxed">
                Many commercial situations in the region are variations of ones we have seen. Recognizing the 
                pattern early means we know where the trap usually is, and we know which parts of the analysis 
                actually matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytical Methods */}
      <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
        <GeometricAccent variant="diagonal" className="-top-10 -right-10 opacity-[0.12]" size="lg" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
              Analytical work
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The toolkit varies with the question. We use what is appropriate for the decision, not a fixed 
              method.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Commercial and financial analysis", desc: "Examination of unit economics, deal economics, capital returns, and projections. We separate accounting effects from underlying commercial reality." },
              { title: "Market and counterparty work", desc: "Sizing the opportunity, mapping the active participants, and reading the partnership and competitive dynamics that will shape entry and execution." },
              { title: "Operating and organizational reads", desc: "Assessment of how decisions, capital, and talent move through the business, where bottlenecks sit, and what the organization can actually carry." },
              { title: "Scenario and risk work", desc: "Construction of the plausible commercial paths so the client can see which decisions hold across scenarios and which are bets on a particular outcome." },
            ].map((item, i) => (
              <div key={i} className="border-t border-border pt-6">
                <h3 className="font-medium mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Support Decisions */}
      <section className="dark py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <GeometricAccent variant="dots" className="-top-20 -right-20 opacity-[0.06]" size="xl" />
        <GeometricAccent variant="dots" className="-bottom-10 -left-10 opacity-[0.06]" size="lg" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                Supporting the decision
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Engagements end in decisions, not documents. Final outputs are built around the choice in front of 
                the client: what the options are, which one we recommend, and why.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                We make recommendations. We do not present three balanced options and step back. If we cannot 
                form a view, we have not finished the work.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed">
                We support the decision-making process as well as its content. Major commercial decisions in the 
                region usually require alignment across owners, board members, sponsors, and counterparties. We 
                help structure those conversations and sequence them in the right order.
              </p>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                Working with senior decision-makers
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Our engagement model requires direct, sustained contact with the people who actually decide: chief 
                executives, owners, board members, and investment committee chairs.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                This is not about access for its own sake. It is about being in the room when the commercial 
                position takes shape, when the counterparty pushes back, and when the trade-offs get made. Working 
                at one remove from this produces weaker outcomes.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed">
                We deliberately limit the active book so partners can hold this position on every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* From recommendation to action */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <GeometricAccent variant="corner" className="top-0 right-0 opacity-[0.12] -scale-x-100" size="md" />
        <GeometricAccent variant="cross" className="-bottom-10 -left-10 opacity-[0.10]" size="lg" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                From recommendation to commercial result
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A recommendation that cannot be executed is not a recommendation. We carry execution constraints 
                into the analysis from the start: ownership, governance, regulator timelines, partner readiness, 
                and the operating capacity of the client.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Recommendations come with a sequence: what is signed first, what is built first, what is funded 
                first, and where the natural points of review sit.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We expect to be questioned on the path as much as on the destination, and we prepare for that.
              </p>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                Execution support
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Most clients ask us to stay through execution. The shape of that work varies: deal closure, 
                integration leadership, partnership setup, regulatory filings, or operating model rollout.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We structure execution support to build client capability rather than dependence. The goal is to 
                hand the work over cleanly, with the client organization able to carry it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Progress is tracked against commercial outcomes: signed agreements, captured synergies, retained 
                customers, returned capital. Activity completion is not the measure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Engagement Different */}
      <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
        <GeometricAccent variant="lines" className="top-0 -right-10 opacity-[0.12]" size="lg" />
        <GeometricAccent variant="dots" className="-bottom-10 left-0 opacity-[0.10]" size="md" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
              What is different about working with us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A short list of working choices that clients consistently point to as different from the model
              they have seen elsewhere in the region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium mb-4">Senior bandwidth</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Partners stay in the work the whole way through, including the counterparty meetings and the
                difficult internal conversations. Engagements are not sold by one set of people and delivered by
                another.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Clients deal with the people who carry the commercial judgment, not with analysts learning the file.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">A direct read</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Where the read is uncomfortable, we say so. We tell clients when a deal is mispriced, when a 
                partner is the wrong partner, when a strategy is built on stale assumptions, or when an internal 
                decision is the real bottleneck.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Clients pay for that view. Without it, the engagement is not worth running.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Concentration</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We do not chase every sector or every type of work. The focus stays on the commercial situations
                and regional contexts where the firm's experience is directly relevant. That concentration is
                what allows depth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Clients work with advisers who have seen the specific situation before, not with generalists
                applying a method learned in training.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Outcomes over output</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Documentation exists where it supports a decision or its execution, and not otherwise. Volume of
                paper is not a measure of work.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The measure is whether the commercial result moved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working Arrangements */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <GeometricAccent variant="diagonal" className="-top-10 -left-20 opacity-[0.10]" size="lg" />
        <GeometricAccent variant="dots" className="-bottom-20 -right-10 opacity-[0.08]" size="md" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Engagement staffing</h2>
              <p className="text-muted-foreground leading-relaxed">
                Two to four people on a typical engagement, with a partner active in the work. Larger engagements are
                possible for transactions or transformations that require it, and remain smaller than the equivalent 
                global-firm staffing.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6">Time on the ground</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are with clients across the GCC during active phases, in person where it matters: counterparty 
                meetings, regulator visits, board sessions, and operating reviews. We do not maintain permanent 
                presence at client sites, and we do not run from a distance.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6">Communication</h2>
              <p className="text-muted-foreground leading-relaxed">
                Regular working sessions with the client organization, formal updates at decision points, and direct 
                partner availability between scheduled sessions. Clients reach a partner, not a service desk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
        <GeometricAccent variant="cross" className="top-10 -right-10 opacity-[0.12]" size="md" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                Quality control
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every commercial conclusion we deliver is reviewed by a partner who was not in the working group. 
                That review tests the analysis and the soundness of the position.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sourcing, modeling assumptions, and counterparty information are checked against current evidence. 
                The standards are not procedural. They come from prior engagements where shortcuts cost the work.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When we find an error, we correct it and tell the client. Credibility is the asset the firm runs on.
              </p>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                What we learn from each engagement
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We review every engagement at close: what worked, what we missed, what we would do differently 
                with the same brief.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We ask clients directly for that read. The honest version is more useful than the polite one, 
                and we have learned to ask for it specifically.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The firm sharpens with each cycle. Two years on, the read on Gulf markets, counterparties, and 
                commercial structures is meaningfully better than it was, and we expect that to continue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* After Engagement */}
      <section className="dark py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <GeometricAccent variant="lines" className="-top-10 -left-20 opacity-[0.06]" size="lg" />
        <GeometricAccent variant="corner" className="-bottom-10 -right-10 opacity-[0.06]" size="lg" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-8">
              After the engagement
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-6">
              Engagements end. The relationships do not. We stay available for the questions that surface as the 
              decision plays out: a counterparty moving, a regulator changing direction, a partner underperforming, 
              a second-market opportunity arriving sooner than expected.
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-6">
              We track outcomes. When the commercial result lands as projected, we know what worked. When it does 
              not, we want to understand why. Both feed forward.
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              The clearest measure of the work is whether the client comes back for the next decision. Most do.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
