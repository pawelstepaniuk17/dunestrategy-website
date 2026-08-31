import { Layout } from "@/components/layout/Layout";
import { GeometricAccent } from "@/components/layout/GeometricAccent";

const leadershipTeam = [
  {
    name: "Ana Teresa Espinosa Bullejos",
    title: "Chief Executive Officer",
    background: "Trained at Management Solutions in Madrid and at IDOM, where she ran operational transformation for infrastructure and industrial clients. Advises financial institutions through cost programs, operating model redesign, and governance. MBA from Universidad Complutense de Madrid, Certified Management Consultant.",
    focus: "Sets the direction of the firm and stays close to engagements: enterprise strategy, operating discipline, and the governance choices that determine whether decisions hold.",
  },
  {
    name: "Khalid Al-Mansour",
    title: "Managing Partner",
    background: "Led the Middle East strategy practice of a major global consulting firm, then served as chief strategy officer of a GCC industrial group with assets across the Gulf, North Africa, and South Asia. Has sat on both sides in sovereign-linked transactions and family-ownership transitions. INSEAD MBA, engineering degree from Imperial College London.",
    focus: "Portfolio decisions and capital allocation for regional groups, sovereign-linked transactions, and cross-border partnerships that shape Gulf institutions.",
  },
  {
    name: "Jordi Hinchado Salgado",
    title: "Chief Strategy Officer",
    background: "Built and ran new commercial lines for an engineering group across southern Europe and the Mediterranean, restructured operations for a manufacturing platform in Madrid, and began in risk and feasibility at Banco Sabadell in Barcelona. MBA in strategic management from Esade, economics degree from Universitat de Barcelona.",
    focus: "Long-horizon strategy for boards and chief executives, and the discipline of taking new commercial ventures from plan to operating reality.",
  },
  {
    name: "Sarah Bennett",
    title: "Partner, Operations and Performance",
    background: "Worked between London and Dubai at one of the larger international firms, advising banks and industrial groups through cost reset programs, integrations, and structural work following regulatory change. Known for getting on the operating floor rather than working from the steering committee deck. Deep experience in regulated sectors.",
    focus: "Operating model design, post-merger integration, and performance recovery in regulated sectors where the margin between clean execution and a costly one is narrow.",
  },
  {
    name: "Doreen Becker",
    title: "Head of Talent and Culture",
    background: "Came up through the people functions of Hays in London, Henkel in Düsseldorf, and the Bosch consulting practice in Stuttgart, with earlier experience at BMW in Munich. Designs talent strategy and organizational structures for the firm and its clients through restructuring and senior succession. M.A. from Humboldt-Universität zu Berlin.",
    focus: "Talent strategy, organizational design, and leadership effectiveness for the firm and the institutions it advises through restructuring and succession.",
  },
  {
    name: "Omar Nasser",
    title: "Partner, Organization and Governance",
    background: "Former group chief human resources officer of a regional banking group, with prior consulting work spanning organizational redesign, governance reform, and the generational handover of family-owned institutions across the GCC. Has guided founding families through the arithmetic of succession, board renewal, and the structures that outlast the founder.",
    focus: "Family-business governance, board composition, and senior succession in the institutions that anchor regional economies.",
  },
  {
    name: "Elena Volkova",
    title: "Partner, Growth and Markets",
    background: "Built commercial practices from central and eastern Europe into the Gulf and South Asia. Designed market entry and distribution structures for international entrants, and helped regional champions rethink pricing and channel economics as their markets matured. Focuses on the commercial sequencing that compounds position.",
    focus: "Market entry for international groups landing in the Gulf, partnership and distribution structures, and the commercial sequencing that determines whether a market position compounds.",
  },
];

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
      <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
        <GeometricAccent variant="diagonal" className="top-20 right-10 opacity-[0.18]" size="lg" />
        <GeometricAccent variant="dots" className="bottom-0 left-0 opacity-[0.12]" size="md" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              A Gulf advisory firm for commercial decisions that have to be made in the region
            </h1>
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              <p className="text-xs tracking-[0.18em] text-muted-foreground">The firm</p>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Gulf Associates is a Dubai-based advisory firm. We work with corporates, family groups, sovereign-linked
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
            <p className="text-sm tracking-widest uppercase text-gold mb-4">Where we are most useful</p>
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
            <p className="text-sm tracking-widest uppercase text-gold mb-4">How we approach work</p>
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
            <p className="text-sm tracking-widest uppercase text-gold mb-4">Client situations</p>
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

      {/* Partners */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <GeometricAccent variant="dots" className="-bottom-20 -right-10 opacity-[0.10]" size="lg" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mb-14">
            <p className="text-sm tracking-widest uppercase text-gold mb-4">Leadership</p>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
              Partners
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The partners combine senior consulting experience with operating roles inside Gulf institutions.
              Each has chosen to build a regional practice rather than continue inside a global firm because the
              commercial decisions in this region reward continuous presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {leadershipTeam.map((person, index) => (
              <div key={index} className="border-t-2 border-gold/60 pt-8">
                <h3 className="text-xl font-semibold mb-1">{person.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{person.title}</p>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{person.background}</p>
                <p className="text-sm"><span className="font-medium">Focus areas:</span> <span className="text-muted-foreground">{person.focus}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registrations & conduct */}
      <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
        <GeometricAccent variant="lines" className="top-0 -right-10 opacity-[0.10]" size="md" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-sm tracking-widest uppercase text-gold mb-4">Credentials</p>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                Registrations and affiliations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Gulf Associates holds the registrations and memberships appropriate for a firm advising on
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
              <p className="text-sm tracking-widest uppercase text-gold mb-4">Standards</p>
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
