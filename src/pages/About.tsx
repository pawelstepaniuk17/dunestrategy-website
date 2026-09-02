import { Layout } from "@/components/layout/Layout";
import { GeometricAccent } from "@/components/layout/GeometricAccent";


const affiliations = [
  "Member, Dubai Chamber of Commerce and Industry",
  "Registered consultancy, Dubai Silicon Oasis Authority",
  "Affiliate member, Institute of Management Consultants (IMC)",
  "Professional indemnity insured through Lloyd's of London syndicates",
  "Compliant with UAE Federal Decree-Law No. 32 of 2021 on Commercial Companies",
  "Registered with the UAE Ministry of Economy",
];

export default function About() {
  return (
    <Layout>
      {/* 1. Who the firm is — Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/images/about-boardroom.png"
          alt="Senior executives in a boardroom discussion in Dubai"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/45" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" aria-hidden="true" />

        <div className="container relative mx-auto px-6 lg:px-8 pt-28 pb-20 sm:pt-36 md:pt-44 md:pb-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              <p className="eyebrow text-gold">The firm</p>
            </div>
            <h1 className="font-serif font-normal text-[46px] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[4.75rem] lg:leading-[1.03] tracking-tight mb-8 text-balance">
              A Gulf advisory firm for commercial decisions that have to be made in the region
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Dune Strategy is a Dubai-based advisory firm. We work with corporates, family groups, sovereign-linked
              entities, and international investors on market entry, regional expansion, partnerships, transactions,
              and the operating choices that follow them across the GCC and its connected corridors.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The firm is regional by construction, not by extension of something else. Our partners live in the
              Gulf, are in the market every week, and stay close to the file through the conversations with
              counterparties, regulators, and sponsors where the commercial outcome is actually settled.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are useful when reading the region accurately changes the answer, and when the client is positioned
              to act on what comes back.
            </p>
          </div>
        </div>
      </section>

      {/* 1b. What the firm is, what it is not */}
      <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
        <GeometricAccent variant="cross" className="-top-10 -right-20 opacity-25" size="lg" />
        <GeometricAccent variant="corner" className="bottom-0 left-0 opacity-[0.18] rotate-180" size="md" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                What we are
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A regional firm with a working knowledge of how Gulf markets actually clear: who the active
                counterparties are, how sovereign capital moves, where regulators are heading, and what partnership
                structures are pricing in each segment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We bring that view directly into the commercial decision. The output is a position the client can
                act on, with the regional reasoning visible behind it.
              </p>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                What we are not
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are not a global firm with a Dubai office. The presence in the region is the firm itself.
                Relationships, sector experience, and commercial judgment all sit here, not in a head office
                somewhere else.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are not a methodology shop and we do not sell a transformation product. We sell regional judgment
                applied to specific commercial situations, and we accept that this limits how many engagements we
                can run at any one time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Where we are most useful */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <GeometricAccent variant="lines" className="top-10 -left-20 opacity-[0.12]" size="lg" />
        <GeometricAccent variant="dots" className="-bottom-10 -right-10 opacity-[0.10]" size="md" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow text-gold mb-4">Where we are most useful</p>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
              The decisions we are built for
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Most engagements turn on a commercial call that depends on reading the region accurately: who to
              enter with, what to pay, where to commit, when to wait, and when to step back from a market that
              does not reward the effort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Market entry into the Gulf", text: "Pressure-testing the commercial logic, mapping the partner field, and navigating the regulatory path for international groups committing capital to the region for the first time or at a new scale." },
              { title: "Regional expansion across the GCC", text: "Sequencing moves across markets, choosing where to lead with wholly owned operations and where to partner, and adjusting the operating model as the footprint extends." },
              { title: "Partnerships and joint ventures", text: "Reading the counterparty as they actually behave, structuring the venture for the commercial reality, and shaping the terms that determine how the partnership performs after signing." },
              { title: "Transactions and post-deal integration", text: "Independent reads on price, synergies, and integration risk for boards and investment committees, with continuity into the period when the deal has to deliver." },
              { title: "Operating model and cross-border execution", text: "Redesigning how decisions, capital, and people move across countries, business units, and joint ventures when the existing model has stopped fitting the footprint." },
              { title: "Institutional and stakeholder navigation", text: "Working alongside leadership through regulator engagement, sponsor conversations, family-ownership transitions, and the institutional moments that decide whether a strategy lands." },
            ].map((item, i) => (
              <div key={i} className="border-t-2 border-gold/60 pt-6">
                <h3 className="text-lg font-medium mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2b. Why a Gulf advisor — regional context */}
      <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
        <GeometricAccent variant="dots" className="-bottom-10 -right-10 opacity-[0.18]" size="lg" />
        <GeometricAccent variant="corner" className="top-0 right-0 opacity-25 -scale-x-100" size="md" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-8 text-center">
              Why the region needs its own advisor
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-center">
              The Gulf operates on its own commercial logic. State capital sits inside private deals. Family groups
              behave differently from listed corporates. Regulators move quickly when policy aligns and slowly when
              it does not. The right local sponsor often matters more than the headline price, and partnership
              structures often matter more than equity stakes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-center">
              Foreign companies routinely underestimate how much depends on who they enter with. Regional companies
              sometimes overestimate how their domestic relationships travel into adjacent markets. Both errors are
              commercial, and both are avoidable with current information from people who are actually in the market.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center">
              The firm exists to close that gap before clients commit capital, signatures, or organizational change.
            </p>
          </div>
        </div>
      </section>

      {/* 3. How we approach the work */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <GeometricAccent variant="lines" className="top-0 -right-10 opacity-[0.10]" size="md" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow text-gold mb-4">How we approach work</p>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
              The way the work is run
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A small set of working standards that shape every engagement, regardless of sector or size.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-10">
            {[
              { title: "Read the market in real time", text: "Most commercial mistakes in the Gulf come from outdated assumptions about who the counterparty is and what they want. Our first job is to update that picture, with current information from people who are actually transacting." },
              { title: "Take a position", text: "Clients pay for a view they can act on. We form one and defend it. When the evidence shifts, we revise openly. We do not present balanced menus when the work calls for a recommendation." },
              { title: "Stay close to the decision", text: "Regional decisions are rarely settled in one meeting. We stay with the file through the board reviews, regulator conversations, and counterparty exchanges where the commercial outcome is actually shaped." },
              { title: "Senior involvement throughout", text: "Partners are in the room for the commercial conversations. Engagements are not handed down once the contract is signed, and the partners who begin the work see it through to completion." },
              { title: "Concentrated portfolio", text: "We hold a deliberately small book of active engagements. Senior bandwidth goes into the commercially decisive moments, not into managing breadth." },
              { title: "Commercial fee structure", text: "Fees are linked to commercial outcomes where the work allows it. We are comfortable being measured against what gets agreed, what gets built, and what gets returned." },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-gold/70 pl-6">
                <h3 className="font-medium mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3b. How an engagement runs */}
      <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
        <GeometricAccent variant="cross" className="top-10 -right-10 opacity-[0.12]" size="md" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
              How an engagement runs
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A standard sequence, adapted to the commercial situation at hand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Scoping", desc: "Define the commercial question, agree what success looks like, and confirm the client is positioned to act on the answer." },
              { step: "02", title: "Reading the market", desc: "Build a current view of counterparties, regulators, sponsors, and competitors relevant to the decision." },
              { step: "03", title: "Commercial analysis", desc: "Test the commercial logic, model the relevant scenarios, and develop a clear position on the path forward." },
              { step: "04", title: "Decision support", desc: "Work the recommendation through the board, the investment committee, or the counterparty conversations where it gets agreed." },
              { step: "05", title: "Execution", desc: "Stay close as the decision is implemented, the deal closes, or the operating change lands in the region." },
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

      {/* 4. The client situations we are built for */}
      <section className="dark py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <GeometricAccent variant="dots" className="-top-20 -right-20 opacity-[0.06]" size="xl" />
        <GeometricAccent variant="diagonal" className="-bottom-10 -left-10 opacity-[0.06]" size="lg" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow text-gold mb-4">Client situations</p>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
              The situations we are built for
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed">
              We take engagements where the commercial question is real, the client is prepared to act on the 
              answer, and our regional experience is directly relevant to the decision in front of them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-xl font-medium mb-4">When clients call us</h3>
              <ul className="space-y-4">
                {[
                  "An international group is preparing to enter a Gulf market and needs to test the commercial logic and partner field before signing or committing capital.",
                  "A regional company is moving into adjacent geographies and wants a clear view of where to lead, where to partner, and where to step back from a market that does not reward the effort.",
                  "A board is reviewing an acquisition and needs an independent read on price, synergies, integration risk, and the ownership realities that will determine whether the deal returns its capital.",
                  "An institution is responding to a regulatory or commercial shift that requires fast, well-sequenced moves with limited room for a second attempt.",
                ].map((item, i) => (
                  <li key={i} className="text-primary-foreground/75 leading-relaxed flex gap-3">
                    <span className="text-gold shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Where we decline</h3>
              <ul className="space-y-4">
                {[
                  "Mandates where the role is to validate a decision already taken. Our value depends on independence, and we hold to it.",
                  "Reports for filing. If the need is documentation to satisfy a procedural requirement, there are cheaper ways to get it.",
                  "Bench capacity. When a client needs additional bodies to execute work they already understand, we are not the right answer.",
                  "Engagements where current commitments would prevent us from giving the work the senior attention the situation requires.",
                ].map((item, i) => (
                  <li key={i} className="text-primary-foreground/75 leading-relaxed flex gap-3">
                    <span className="text-gold shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* Registrations & conduct */}
      <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
        <GeometricAccent variant="lines" className="top-0 -right-10 opacity-[0.10]" size="md" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="eyebrow text-gold mb-4">Credentials</p>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                Registrations and affiliations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Dune Strategy holds the registrations and memberships appropriate for a firm advising on
                commercial transactions and senior decisions in the UAE and across the GCC.
              </p>
              <ul className="space-y-4">
                {affiliations.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-gold mb-4">Standards</p>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                Conduct and conflicts
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Client information is held in confidence absolutely. We do not disclose engagements, discuss one
                client's situation with another, or carry information across the wall between mandates.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We screen for conflicts before each engagement. Where a potential conflict exists, we surface it
                immediately and let the client decide. We do not work both sides of a transaction.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We decline mandates where the role would be to validate a decision already taken. Our value depends
                on independence, and we hold to it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-term */}
      <section className="dark py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <GeometricAccent variant="cross" className="-top-10 -left-10 opacity-[0.06]" size="lg" />
        <GeometricAccent variant="lines" className="-bottom-10 -right-20 opacity-[0.06]" size="lg" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-8">
              Relationships across cycles
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-6">
              Most of our clients work with us more than once. The first engagement is often a market entry, a 
              transaction, or a structural decision. What follows is shaped by what comes after that move: 
              integration, second-market expansion, governance reform, succession, or a portfolio rebalancing.
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-6">
              Continuity is part of what we sell. We carry forward the institutional knowledge from one engagement 
              into the next so the work compounds rather than restarts.
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              The measure of the firm is whether clients call us first when the next commercial decision arrives 
              in the region. Most do.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
