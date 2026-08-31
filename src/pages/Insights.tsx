import { Layout } from "@/components/layout/Layout";
import { GeometricAccent } from "@/components/layout/GeometricAccent";

const themes = [
  {
    title: "Market entry and expansion in the Gulf",
    description: "How regional and international companies build commercial position in GCC markets.",
    subtopics: [
      "Reading counterparties before signing partnership agreements",
      "Sequencing entry across the GCC and adjacent geographies",
      "Wholly owned versus joint venture: what actually decides the outcome",
      "Channel structure and pricing in markets dominated by concentrated retailers",
      "Regulatory pathways and the timing they impose on commercial plans",
    ],
  },
  {
    title: "Transactions and post-deal value",
    description: "Why deals in the region underdeliver and what closes the gap.",
    subtopics: [
      "Commercial diligence in markets where reported financials need translation",
      "Synergy estimation that survives integration",
      "Earn-outs and seller continuity in family-owned targets",
      "Integration design when ownership is mixed across family, sponsor, and listed shareholders",
      "Recovery work on transactions that did not deliver the underwriting case",
    ],
  },
  {
    title: "Operating model fit",
    description: "How operating decisions follow commercial decisions, and where they break.",
    subtopics: [
      "Centralization and decentralization in regional groups operating across multiple countries",
      "Shared services that improve cost without weakening the customer relationship",
      "Cost programs that hold after the external support ends",
      "Operating model design for joint ventures and partnership structures",
      "When organizational restructuring is the answer and when it is the distraction",
    ],
  },
  {
    title: "Family enterprise and ownership transitions",
    description: "Commercial implications of family ownership, governance reform, and succession.",
    subtopics: [
      "Family councils and the practical limits of their authority",
      "Bringing in non-family executives without losing institutional memory",
      "Portfolio rationalization in groups with mixed strategic and family-historical assets",
      "Generational transition planning as a commercial exercise, not only a family one",
      "Listing decisions and their effect on family control",
    ],
  },
  {
    title: "Sovereign capital and institutional partnerships",
    description: "Working with and around sovereign-linked players in the region.",
    subtopics: [
      "Co-investing with sovereign vehicles: structure, governance, and exit",
      "Selling into state-linked enterprises with patience and relationship discipline",
      "Reading policy direction from capital allocation, not announcements",
      "Local content and offset structures as commercial design questions",
      "The quiet boundary between commercial and strategic intent in sovereign deals",
    ],
  },
  {
    title: "Cross-border execution from the Gulf",
    description: "Regional companies expanding outward and how their domestic strengths translate.",
    subtopics: [
      "Where domestic relationships travel and where they do not",
      "Commercial governance for cross-border platforms run from the Gulf",
      "Talent strategy when expanding into markets with different labor structures",
      "Capital and treasury structures for regional platforms with international footprint",
      "Brand positioning when moving from regional champion to international competitor",
    ],
  },
];

const currentQuestions = [
  {
    question: "Why do regional partnerships unwind faster than the underwriting assumed?",
    context: "We are studying the recurring failure modes in Gulf joint ventures and what changes in deal design produce more durable commercial outcomes.",
  },
  {
    question: "How are family groups actually rebalancing portfolios as the second and third generations take over?",
    context: "We are tracking how generational transitions translate into commercial decisions: which businesses are kept, which are sold, and how new capital is deployed.",
  },
  {
    question: "What is the right operating model for regional platforms that now span the GCC, North Africa, and South Asia?",
    context: "Several regional clients are running into the same operating limits as their footprint widens. We are mapping the structures that hold under that complexity.",
  },
  {
    question: "How is sovereign capital allocation in the Gulf shifting, and what does it mean for commercial counterparties?",
    context: "Sovereign vehicles are concentrating in some sectors and pulling back in others. We are looking at the commercial implications for clients on both sides of those decisions.",
  },
  {
    question: "Why do cost programs in regional banks revert within two years, and what design holds?",
    context: "We are examining the structural and behavioral patterns that determine whether a cost transformation in regional banking sticks or unwinds.",
  },
  {
    question: "How should boards in the region engage with strategy without crossing into management?",
    context: "Board involvement in strategic decisions varies widely across the GCC. We are mapping the practices that produce real strategic input without diffusing executive accountability.",
  },
];

const observations = [
  {
    title: "On strategic planning in the region",
    text: "Most strategic plans in the Gulf are extrapolations dressed up as strategy. They project current trends, adjust for known commitments, and call the result a plan. Real strategic work confronts the possibility that the current commercial trajectory is wrong, and that the next move should not be a continuation of the last.",
  },
  {
    title: "On organizational change",
    text: "Organizations do not resist change. They resist being changed by people who do not understand the commercial reality they operate in. Before recommending alternatives, the first task is to understand why the current setup exists and what commercial purpose it has been serving.",
  },
  {
    title: "On advisers in the Gulf",
    text: "Outside advice in the region too often arrives in formats designed elsewhere: excessive staffing, heavy documentation, and reluctance to take a position. None of that holds up against a real commercial decision in front of a board, an investment committee, or a counterparty.",
  },
  {
    title: "On Gulf markets",
    text: "The pace of institutional and commercial development in the Gulf creates opportunities that more established markets cannot match. It also creates risks that international investors and advisers regularly underestimate, because the institutional and stakeholder context is not legible from outside.",
  },
];

export default function Insights() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/images/insights-banner.png"
          alt="An analyst annotating a printed market report"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/45" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" aria-hidden="true" />

        <div className="container relative mx-auto px-6 lg:px-8 pt-28 pb-20 sm:pt-36 md:pt-44 md:pb-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              <p className="eyebrow text-gold">Perspectives</p>
            </div>
            <h1 className="font-serif font-normal text-[52px] leading-[1.03] sm:text-7xl md:text-8xl lg:text-[6rem] lg:leading-[1.0] tracking-tight mb-8 text-balance">
              Views from the work
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              The perspectives below come from engagement work in the region. The commercial questions we
              encounter repeatedly are the ones we think about most carefully. Holding a position on them is
              part of what makes the firm useful at the table.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The output is practical commercial perspective shaped by current work, not research for its own
              sake.
            </p>
          </div>
        </div>
      </section>

      {/* How Our Thinking Develops */}
      <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
        <GeometricAccent variant="cross" className="-top-10 -right-20 opacity-25" size="lg" />
        <GeometricAccent variant="corner" className="bottom-0 left-0 opacity-[0.12] rotate-180" size="md" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                How a view forms
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A view forms where pattern recognition meets direct work in the market. When a similar commercial
                situation shows up across multiple clients, we invest in understanding why. When outcomes diverge
                from what was projected, we ask what explains the difference.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                What we learn is synthesized into perspectives that can be brought into the next situation. They
                are starting points for thinking about a specific commercial decision, not templates to apply on
                top of one.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Views are provisional. New work can show that earlier conclusions were partial or wrong. We are
                more interested in being right eventually than in appearing consistent.
              </p>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                From view to commercial use
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A view earns its keep when it changes how a specific commercial decision is taken. Our thinking
                is structured around how it will be used in front of an actual counterparty, board, or
                investment committee, not around abstract principle.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We bring perspectives into engagements where they are directly relevant. The cycle moves both
                ways: engagement work shapes the thinking, and the thinking shapes how the next engagement is
                approached.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We share views with clients who may benefit from them, including outside formal engagements.
                In the Gulf, that openness is part of how relationships are built.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Observations */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <GeometricAccent variant="dots" className="-bottom-20 -left-10 opacity-[0.10]" size="lg" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
              Working observations
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Views formed through repeated engagement with similar commercial situations across the region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {observations.map((obs, index) => (
              <div key={index} className="border-l-2 border-gold/70 pl-6">
                <h3 className="text-lg font-medium mb-4">{obs.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{obs.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Themes */}
      <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
        <GeometricAccent variant="diagonal" className="-top-10 -right-10 opacity-[0.12]" size="lg" />
        <GeometricAccent variant="lines" className="-bottom-10 left-0 opacity-[0.10]" size="md" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
              Themes we work on
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our research and thinking is organized around the commercial questions we encounter most often in 
              the region.
            </p>
          </div>

          <div className="space-y-16">
            {themes.map((theme, index) => (
              <div key={index} className="border-t-2 border-gold/60 pt-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <span className="text-sm text-muted-foreground block mb-2">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl font-medium mb-4">{theme.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {theme.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="text-sm font-medium text-muted-foreground mb-4">
                      Specific questions inside the theme
                    </h4>
                    <ul className="space-y-3">
                      {theme.subtopics.map((subtopic, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                          {subtopic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Research Questions */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <GeometricAccent variant="dots" className="-bottom-10 -right-10 opacity-[0.12]" size="lg" />
        <GeometricAccent variant="corner" className="top-0 left-0 opacity-[0.10]" size="md" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
              Questions we are working through
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Open questions surfaced by recent engagement work that we are actively examining.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentQuestions.map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8 hover:border-gold/50 transition-colors">
                <p className="font-serif text-lg mb-4">{item.question}</p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="dark py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <GeometricAccent variant="dots" className="-top-20 -right-20 opacity-[0.06]" size="xl" />
        <GeometricAccent variant="cross" className="-bottom-10 -left-10 opacity-[0.06]" size="lg" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-8">
              Working with our thinking
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-6">
              We share perspectives with clients and senior leaders for whom the topic is commercially relevant. 
              We welcome discussion of these themes in the context of a specific decision.
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-6">
              The thinking is built for application in real engagements and shared in direct conversation rather 
              than broadcast. There is no library of reports.
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              If any of these themes touch a question you are weighing, we welcome the conversation.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
