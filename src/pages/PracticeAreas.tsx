import { Layout } from "@/components/layout/Layout";
import { GeometricAccent } from "@/components/layout/GeometricAccent";

const practiceAreas = [
  {
    id: "strategy",
    title: "Enterprise direction and portfolio choices",
    description: "Where the enterprise should compete, what it should own, and what to back out of",
    situation: "Owners, boards, and chief executives reach a point where the existing portfolio no longer reads cleanly: a business unit is heavy on capital but light on returns, an adjacent market keeps pulling attention, a controlling shareholder has set a new direction, or a regulatory shift has changed the commercial map. The question stops being analytical and becomes a commitment.",
    outsideView: "Inside the institution, the answer is usually visible in fragments held by different people. An outside view brings the fragments together, surfaces the choices that are actually on the table, and tests them against current regional conditions. The value is not a document. It is a position the owners and board can commit to.",
    resolves: [
      "Which Gulf and adjacent markets to stay in, scale into, or exit",
      "Which businesses earn their capital and which are cross-subsidized",
      "How to allocate capital across geographies with very different risk and return profiles",
      "What to own outright, what to hold through partnerships, and what to access commercially",
      "How to respond to a competitive or regulatory shift that reshapes the landscape",
    ],
    triggers: [
      "New chief executive, chairman, or controlling shareholder setting direction",
      "Board questioning whether the current portfolio still earns its capital",
      "External shift, regulatory or commercial, that requires repositioning",
      "Acquisition or divestiture opportunity that requires clarity on strategic intent",
    ],
    typicalDuration: "Twelve to twenty weeks for a portfolio review. Shorter when the question is focused: a single market, a specific business unit, or a defined investment decision.",
    progress: "Success is measured by the commercial decisions taken, the alignment achieved across owners and board, and the move into execution. We do not regard the engagement as complete while the decision is still pending.",
  },
  {
    id: "growth",
    title: "Revenue architecture and market development",
    description: "Market entry, regional expansion, and the commercial machinery behind growth",
    situation: "A foreign group is preparing to enter the Gulf and needs to test the commercial logic before committing capital. A regional company is moving into adjacent markets and needs to decide where to lead with wholly owned operations, where to partner, and where the effort is not warranted. Either way, the growth question turns on partner choice, channel structure, and pricing discipline as much as on market size.",
    outsideView: "Most growth plans in the region are written from outdated market reads. A current view of the active counterparties, the channel economics, and the pricing behavior of incumbents is hard to assemble from a head office. We bring that view, then build the entry or expansion plan against it. Where useful, we open the partner conversations directly.",
    resolves: [
      "Where the firm has a real right to win and where market size alone is doing the talking",
      "How to sequence entry across Gulf and adjacent markets without overcommitting capital or attention",
      "Realistic share given the active counterparties and the channel structure",
      "Pricing for value rather than volume, particularly against incumbents",
      "Where the commercial organization is the constraint, not the market",
    ],
    triggers: [
      "Pressure to grow beyond what current markets support",
      "Opportunity to extend a capability or asset into new geographies or segments",
      "Competitive entry into core markets requiring a commercial response",
      "Post-acquisition integration where commercial direction has to be reset",
    ],
    typicalDuration: "Eight to sixteen weeks for an entry or expansion plan. Implementation support typically continues for six to twelve months.",
    progress: "Pipeline build, win rates, pricing realization, and the commercial milestones that lead financial results. The eventual measure is revenue and margin; the leading indicators tell us where the work is.",
  },
  {
    id: "operations",
    title: "Business systems and cost structure",
    description: "Operating model fit for the Gulf, and a cost base that does not damage the commercial position",
    situation: "A regional business has outgrown its operating setup, a cost position has slipped against active competitors, an integration has left two of everything, or a recent expansion has stretched shared services beyond what they can deliver. The question is what should sit centrally, what should sit in the business units, and what the result should cost.",
    outsideView: "Cost work that damages the commercial relationship or strips out capability the business needs is not cost work. An external view helps separate spend that is waste from spend that is investment, and helps the organization design an operating model it will actually run, rather than one that looks clean on a chart.",
    resolves: [
      "Where the cost position sits relative to active regional competitors",
      "What sits centrally, what sits in the business units, and where duplication has built up",
      "How to reduce cost without losing the capabilities that hold the customer relationship",
      "Where spend is producing nothing commercial",
      "What shared services should look like and what they should cost in this setup",
    ],
    triggers: [
      "Cost position creating commercial disadvantage in core markets",
      "Integration following a transaction",
      "Scaling pressure as the business outgrows its operating setup",
      "Technology investments that enable a different operating model",
    ],
    typicalDuration: "Ten to sixteen weeks for operating model design. Implementation typically runs twelve to twenty-four months with calibrated support.",
    progress: "Cost reduction achieved, service levels held, and capability preserved. The test is whether the new way of working still holds twelve months after the program closes.",
  },
  {
    id: "organization",
    title: "Organizational form and senior leadership effectiveness",
    description: "The structure, the senior leadership, and the decision rights behind a regional plan",
    situation: "A new commercial direction has been set and the existing structure does not fit it. Decisions are getting stuck between a regional center and country operations. A senior succession is opening room to redesign. Performance is below where the market position would suggest, and the diagnosis points to how the organization is set up rather than what it is trying to do.",
    outsideView: "Organizational decisions get caught in internal politics. An outside view can hold the conversation on the commercial logic, the decision rights, and the senior bench, including the parts that are uncomfortable to raise internally. In the region, that conversation has to take ownership, governance, and the realities of the local talent market into account.",
    resolves: [
      "Whether the structure enables the commercial direction or fights it",
      "How to balance regional reach with local responsiveness across the GCC",
      "Whether the senior bench is configured for the decisions ahead",
      "Where decisions are getting stuck, and why",
      "What is actually driving the performance gap",
    ],
    triggers: [
      "Strategic shift requiring an organizational reset",
      "Senior succession opening room for redesign",
      "Performance issues with organizational roots",
      "Growth that has outrun the structure",
    ],
    typicalDuration: "Eight to twelve weeks for design. Implementation extends six to twelve months and usually involves parallel work on talent and governance.",
    progress: "Decision speed, role clarity, span of control, and senior bench depth. The commercial measure is whether execution accelerates and whether the talent that matters stays.",
  },
  {
    id: "digital",
    title: "Technology strategy and enterprise modernization",
    description: "Technology investment decisions judged on commercial return",
    situation: "Core systems are approaching end of life. A digitally mature competitor has changed customer expectations in the segment. A technology program is over budget and under-delivering, and the board needs an independent read. Data assets are sitting unused while decisions still rely on instinct.",
    outsideView: "Technology decisions in the region are crowded with vendor positioning. An outside view cuts through it and asks the commercial question first: what is the expected return, what is the risk, and how does this fit the broader direction. We treat technology choices as investment decisions, with the same discipline.",
    resolves: [
      "Which technology investments will actually move the commercial result",
      "How to modernize legacy systems without breaking the running business",
      "What data capability is needed and how to build it",
      "How to structure the technology function given the partnership and vendor reality",
      "Why technology programs consistently miss timeline and budget",
    ],
    triggers: [
      "Core systems approaching end of life",
      "Competitive pressure from digitally mature regional or international players",
      "Data assets underused for commercial decision-making",
      "Failed program requiring recovery and restart",
    ],
    typicalDuration: "Eight to fourteen weeks for a technology direction. Major program oversight typically runs eighteen to thirty-six months.",
    progress: "Commercial outcomes, not activity counts. Technology should improve the customer relationship, the cost base, or decision quality. We measure whether it does.",
  },
  {
    id: "performance",
    title: "Operational performance and execution discipline",
    description: "Closing the gap between the commercial position and what the business is actually delivering",
    situation: "Margin sits below what the market position would support. New ownership has set an accelerated value plan. A turnaround is underway and the early gains are leveling off. An integration requires fast operational reset across multiple sites and countries. The plan is in place; the issue is whether the organization can execute it.",
    outsideView: "Most performance shortfalls in the region are execution issues, not planning issues. An external presence brings pace, accountability, and the willingness to push through the cycle when internal energy fades. We stay close enough to the work to make sure recommendations actually land in operations, not in the binder.",
    resolves: [
      "Why margin is below where the commercial position would suggest",
      "Where value is escaping that can be recovered",
      "How to accelerate execution without exhausting the organization",
      "What is preventing operations from running at standard",
      "How to hold the gain after the initial push",
    ],
    triggers: [
      "Performance materially below comparable players in the region",
      "New ownership requiring an accelerated value plan",
      "Turnaround or restructuring",
      "Integration requiring rapid operational reset",
    ],
    typicalDuration: "Eight to twelve weeks for diagnosis and planning. Implementation typically runs six to eighteen months.",
    progress: "Financial and operational drivers tracked in parallel. Improvement should show in margin, working capital, and customer outcomes, not only in the consultant report.",
  },
  {
    id: "risk",
    title: "Control environment and institutional stability",
    description: "Governance and control that supports commercial decisions, not the other way around",
    situation: "A regulator has signaled increased scrutiny in the segment. A peer institution has had a governance failure and the board wants to know where its own exposures sit. Expansion into a new jurisdiction has introduced risk types the existing setup was not built for. The board is asking for assurance and is not getting it in a form it can act on.",
    outsideView: "Risk and governance work tends to drift toward compliance theater. An outside view keeps it focused on the exposures that could actually cause commercial damage and on the decisions the board needs to make, rather than on the volume of process around them.",
    resolves: [
      "Where the material exposures sit and how they are actually monitored",
      "Whether the board is getting what it needs to govern",
      "How to strengthen controls without slowing the commercial machine",
      "Readiness for the scenarios that could cause real damage",
      "Where governance is creating risk rather than containing it",
    ],
    triggers: [
      "Regulatory scrutiny or new compliance requirements in the region",
      "Governance failure at a peer institution that puts the board on notice",
      "Strategic uncertainty that requires scenario discipline",
      "Expansion into markets with different risk profiles",
    ],
    typicalDuration: "Six to twelve weeks for governance and risk diagnosis. Scenario work is typically shorter. Implementation is ongoing.",
    progress: "Governance clarity, risk visibility, and organizational resilience. The commercial measure is fewer surprises and faster recovery when surprises come.",
  },
  {
    id: "mergers",
    title: "Transactions and post-combination execution",
    description: "Independent commercial reads on regional deals, and the work that decides whether they pay back",
    situation: "An acquisition is moving toward signing and the board wants an independent read on price, synergies, and the regional context that the bankers will not have surfaced. A joint venture is on the table and the partner choice will decide more than the equity split. A prior transaction is underperforming against the case made at signing and the question is what to do next.",
    outsideView: "Most regional transactions underdeliver against the case at signing for reasons that were visible in advance: overestimated synergies, underestimated integration complexity, partnership terms that bind in practice, and cultural distance between the parties. An outside view holds objectivity when momentum favors closing, and stays with the file through the integration period when value is actually captured or lost.",
    resolves: [
      "Whether the transaction makes commercial sense, not only financial sense",
      "What the asset is actually worth in the regional context",
      "How to capture the synergies that were underwritten",
      "What integration looks like and how fast to move",
      "Why a prior transaction is not delivering the projected value",
    ],
    triggers: [
      "Active acquisition or partnership opportunity requiring an independent commercial read",
      "Diligence on a target where regional context matters",
      "Post-close integration requiring planning and senior support",
      "Underperforming prior transaction that needs intervention",
    ],
    typicalDuration: "Four to eight weeks for commercial diligence support. Integration planning and execution typically runs twelve to thirty-six months.",
    progress: "Synergy capture against the underwriting case, integration milestones, and retention of the customers and people that hold the value. The only measure that ultimately matters is whether the commercial case held.",
  },
];

export default function PracticeAreas() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
        <GeometricAccent variant="lines" className="top-20 right-20 opacity-[0.18]" size="lg" />
        <GeometricAccent variant="dots" className="bottom-0 -left-10 opacity-[0.12]" size="md" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              Practice areas
            </h1>
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              <p className="text-xs tracking-[0.18em] text-muted-foreground">What we do</p>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              The work is built around the commercial situations our clients actually face in the region:
              entering a Gulf market, choosing the right partner, sizing an acquisition, redesigning an
              operating setup that has stopped fitting the footprint, or recovering performance against an
              accelerated plan.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each area below is an accumulated body of regional engagements and a current view of how the
              market is moving. None of it is a method to be applied off the shelf.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      {practiceAreas.map((area, index) => (
        <section
          key={area.id}
          id={area.id}
          className={`py-20 lg:py-28 ${index % 2 === 0 ? "bg-secondary" : "bg-background"} relative overflow-hidden`}
        >
          {index % 4 === 0 && (
            <GeometricAccent variant="cross" className="-top-10 -right-10 opacity-[0.10]" size="lg" />
          )}
          {index % 4 === 1 && (
            <GeometricAccent variant="diagonal" className="-bottom-10 -left-10 opacity-[0.10]" size="md" />
          )}
          {index % 4 === 2 && (
            <GeometricAccent variant="corner" className="top-0 right-0 opacity-[0.10] -scale-x-100" size="md" />
          )}
          {index % 4 === 3 && (
            <GeometricAccent variant="dots" className="-bottom-20 -right-10 opacity-[0.08]" size="lg" />
          )}
          <div className="container mx-auto px-6 lg:px-8 relative">
            <div className="max-w-5xl">
              <span className="text-sm text-muted-foreground mb-4 block">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                {area.title}
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                {area.description}
              </p>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-lg font-medium mb-4">The situation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.situation}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Why an outside view</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.outsideView}
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-lg font-medium mb-6">What the work helps resolve</h3>
                <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                  {area.resolves.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-12">
                <h3 className="text-lg font-medium mb-4">When clients call us</h3>
                <ul className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                  {area.triggers.map((trigger, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                      {trigger}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-border">
                <div>
                  <h3 className="text-lg font-medium mb-4">Typical duration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.typicalDuration}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">How we measure progress</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.progress}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
}
