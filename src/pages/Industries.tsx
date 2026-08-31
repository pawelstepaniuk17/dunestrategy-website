import { Layout } from "@/components/layout/Layout";
import { GeometricAccent } from "@/components/layout/GeometricAccent";

const industries = [
  {
    id: "financial-services",
    title: "Financial services and banking",
    characteristics: "Banks in the Gulf are working through margin compression, regulatory convergence with international standards, and rising competition from regional champions, international entrants, and active fintech players. Ownership structures, often a mix of family, sovereign, and public shareholders, shape what is commercially possible.",
    observations: [
      "Retail banking returns now depend on cost discipline and digital adoption rather than asset growth alone",
      "Corporate banking relationships in the region remain sticky, but pricing pressure is eroding return on capital",
      "Wealth management is a real growth opportunity, with the talent and client competition to match",
      "Regulatory convergence is both a compliance burden and a commercial differentiator for institutions that move early",
      "Cross-border banking inside the GCC carries regulatory complexity that is consistently underestimated",
    ],
    engagementPatterns: "Most engagements involve commercial repositioning across retail, corporate, or wealth, alongside cost work, integration after a transaction, or operating model design. The work often runs in parallel with the regulator and the board given the systemic role of these institutions.",
    support: "A current read on the regulator and the active counterparties in regional banking, brought directly into the commercial decision in front of the institution.",
  },
  {
    id: "industrial",
    title: "Industrial and manufacturing",
    characteristics: "Industrial companies in the region are working through global supply chain reconfiguration, decarbonization pressure, and national industrialization programs at the same time. Many sit inside diversified groups where capital allocation across businesses is itself a recurring commercial question.",
    observations: [
      "Manufacturing competitiveness depends on operational discipline rather than factor cost alone",
      "Supply chain resilience has become a commercial priority, often requiring network redesign",
      "Sustainability requirements from international customers are reshaping investment decisions",
      "Workforce capability remains a binding constraint on operational improvement in many industrial settings",
      "Local content rules create both opportunity for domestic manufacturers and planning complexity for partners",
    ],
    engagementPatterns: "Engagements typically run on commercial direction, operating performance, and capability build, often extending to plant level where the operating reality decides whether the commercial plan lands.",
    support: "Commercial direction connected to what the plants and the supply base can actually carry, with the operating capability built in parallel rather than left to follow.",
  },
  {
    id: "technology",
    title: "Technology and software",
    characteristics: "The regional technology sector is maturing fast. Regional players are scaling and international entrants are increasing investment. The talent market is the binding constraint on most growth plans.",
    observations: [
      "Scaling from start-up to enterprise requires commercial and organizational capabilities most regional technology companies have not yet built",
      "Go-to-market complexity rises sharply when moving beyond initial customer segments",
      "Technology talent in the region commands premium compensation and shifts between opportunities quickly",
      "Regional players are now competing for the same enterprise customers as global firms",
      "Government digitization programs are large commercial opportunities, with patience and relationship investment as the entry cost",
    ],
    engagementPatterns: "Engagements typically focus on the move from early traction to scaled commercial position: pricing, channel design, enterprise selling into the region, and the operating maturity that has to follow.",
    support: "Helping regional technology companies move from growth at any cost to growth that funds itself, build a commercial machine that matches the product ambition, and design organizations that can hold under scale.",
  },
  {
    id: "healthcare",
    title: "Healthcare and life sciences",
    characteristics: "Health systems across the Gulf are being reshaped as governments push for better outcomes at controlled cost. Private sector participation is expanding, creating new commercial dynamics and investment opportunities.",
    observations: [
      "Healthcare demand is growing faster than capacity in most Gulf markets, creating infrastructure and workforce gaps",
      "Clinical workforce constraints set a hard ceiling on what additional capital can deliver",
      "Value-based care models are emerging but face implementation friction inside existing structures",
      "Pharmaceutical and medical device markets are evolving as regulatory frameworks mature",
      "Medical tourism is an explicit national priority in several Gulf states, with investment incentives to match",
    ],
    engagementPatterns: "Engagements run with providers, payers, health systems, and life sciences companies on commercial positioning, partnership structuring, and operating performance. The work usually has to bridge the clinical and the commercial without flattening either.",
    support: "A working read on regulators and the active institutional players in regional healthcare, brought into commercial positioning and the operating realities of delivering care at scale.",
  },
  {
    id: "energy",
    title: "Energy and natural resources",
    characteristics: "Energy companies in the Gulf are managing the commercial paradox of transition. Hydrocarbon revenue still funds national economies while the industry invests in diversification and decarbonization. The strategic horizon is unusually long, and capital decisions today set positions decades out.",
    observations: [
      "National oil companies are becoming more commercially oriented while keeping their strategic national role",
      "Transition creates both a threat to existing business models and a real opportunity in new energy assets",
      "Operational discipline remains fundamental as commodity cycles continue",
      "Talent management is a binding constraint as the industry competes with technology and finance for the same skills",
      "Downstream and adjacent integration continues to offer significant commercial value for hydrocarbon-rich economies",
    ],
    engagementPatterns: "Engagements typically involve portfolio decisions, operating performance, and transition planning, with long horizons and significant capital commitments behind each move.",
    support: "Holding operational performance in the existing business while building credible positions in new energy, with long-horizon commercial positioning translated into near-term execution.",
  },
  {
    id: "consumer",
    title: "Consumer and retail",
    characteristics: "Consumer markets in the Gulf are shaped by concentrated retail channels, fast-developing e-commerce, and consumer segments with distinct local preferences. International brands compete with regional players, and private label is shifting channel power.",
    observations: [
      "E-commerce is growing quickly, with profitability still elusive for most players",
      "Consumer preferences are fragmenting, requiring sharper segmentation",
      "Retail consolidation is concentrating channel power and pressuring brand margin",
      "Logistics and supply chain cost are now commercial differentiators, not back-office concerns",
      "Franchise models in the Gulf carry their own commercial dynamics and need to be structured deliberately",
    ],
    engagementPatterns: "Engagements typically cover commercial direction, route to market, and operating performance, with a working knowledge of both regional channel structure and global category trends.",
    support: "Brand positioning, route to market, retail rebuild, and cost recovery, all run with attention to channel power and margin in a consolidating regional landscape.",
  },
  {
    id: "public",
    title: "Public and social sector",
    characteristics: "Government entities in the Gulf are being reshaped by national development programs. Performance expectations are rising, and the delivery model is evolving to incorporate partnerships and commercial discipline.",
    observations: [
      "Government entities face rising pressure to operate with commercial discipline",
      "Talent constraints are real, with the public sector competing for skills needed across the economy",
      "Digital transformation is advancing but typically encounters implementation friction",
      "Stakeholder management in the public sector carries distinct accountability structures",
      "Public-private partnerships are increasingly common but require careful structuring to align commercial incentives",
    ],
    engagementPatterns: "Engagements run with government agencies and public entities on direction-setting, organizational redesign, and performance, with the distinct mandate and accountability structures of public service held in view throughout.",
    support: "Commercial and analytical discipline brought to public sector questions, alongside respect for the mission and the institutional context that distinguishes government from commercial organizations.",
  },
  {
    id: "family",
    title: "Family enterprises and conglomerates",
    characteristics: "Family-controlled businesses are a defining feature of the Gulf economy. They face distinct commercial and governance questions as they professionalize, navigate generational transitions, and balance family interests with commercial requirements.",
    observations: [
      "Governance has to balance family cohesion with the commercial discipline the business requires",
      "Generational transition almost always triggers a portfolio and structural rethink",
      "Bringing in professional management requires careful work on culture and authority",
      "Capital allocation across diverse portfolios is both an opportunity and a recurring source of family tension",
      "Succession planning is consistently deferred until urgency forces it, which raises commercial risk",
    ],
    engagementPatterns: "Engagements typically cover commercial direction, governance, succession, and portfolio decisions, with a reading of family dynamics carried alongside the commercial analysis.",
    support: "Respect for the distinct nature of family enterprise, with the commercial discipline appropriate to the decision at hand. Family and commercial considerations cannot be cleanly separated, and we do not pretend otherwise.",
  },
  {
    id: "infrastructure",
    title: "Infrastructure and project-based industries",
    characteristics: "Major infrastructure programs across the Gulf create sustained commercial opportunity for contractors, developers, and service providers. These industries operate on long project cycles with concentrated client bases and significant capital intensity.",
    observations: [
      "Project-based businesses suffer most often from poor bid discipline rather than weak execution",
      "Contract structure and risk allocation drive profitability more than operational efficiency",
      "Workforce capability constraints affect execution on major regional projects",
      "Relationships with government clients involve dynamics that extend well beyond any individual project",
      "The scale of regional infrastructure programs creates both commercial opportunity and capacity strain across the supply chain",
    ],
    engagementPatterns: "Engagements typically focus on bid discipline, project recovery, and operational performance, often around a specific project or a defined portfolio where significant value is at stake.",
    support: "Tighter bid discipline, execution on the projects that get won, and the commercial and operational capability needed to hold performance over the cycle.",
  },
  {
    id: "professional",
    title: "Professional and business services",
    characteristics: "Professional services firms in the Gulf range from global partnerships to regional specialists. The commercial position depends on talent, relationships, and reputation. Growth tends to strain partnership and operating structures faster than expected.",
    observations: [
      "Talent development and retention decide long-term commercial position",
      "Geographic expansion creates partnership and governance complexity that firms typically underestimate",
      "Pricing discipline erodes under competitive pressure, damaging profitability across the sector",
      "Service line diversification creates coordination cost that often outweighs the commercial benefit",
      "Client expectations in the Gulf for personal attention and relationship depth exceed what many global firms deliver",
    ],
    engagementPatterns: "Engagements typically cover commercial direction, partnership evolution, practice development, and operating performance, with attention to the distinct economics and culture of the sector.",
    support: "Sharper choices about where to compete in the region, practice models built to sustain growth, and operating setups that support the business rather than constrain it.",
  },
];

export default function Industries() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/images/industries-banner.png"
          alt="A Gulf commercial district and working port at dusk seen from an office"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/45" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" aria-hidden="true" />

        <div className="container relative mx-auto px-6 lg:px-8 pt-28 pb-20 sm:pt-36 md:pt-44 md:pb-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              <p className="eyebrow text-gold">Sectors we work in</p>
            </div>
            <h1 className="font-serif font-normal text-[52px] leading-[1.03] sm:text-7xl md:text-8xl lg:text-[6rem] lg:leading-[1.0] tracking-tight mb-8 text-balance">
              Sector knowledge
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Sector knowledge in the Gulf is mostly about who the active counterparties are, how regulators are 
              moving, where capital is flowing, and which commercial structures are now standard. We carry that 
              view across the sectors below.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The view comes from working repeatedly with clients in each sector. It is updated as the market moves.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      {industries.map((industry, index) => (
        <section
          key={industry.id}
          id={industry.id}
          className={`py-20 lg:py-28 ${index % 2 === 0 ? "bg-secondary" : "bg-background"} relative overflow-hidden`}
        >
          {index % 3 === 0 && (
            <GeometricAccent variant="diagonal" className="-top-10 -right-10 opacity-[0.16]" size="lg" />
          )}
          {index % 3 === 1 && (
            <GeometricAccent variant="cross" className="-bottom-10 -left-10 opacity-[0.16]" size="md" />
          )}
          {index % 3 === 2 && (
            <GeometricAccent variant="lines" className="top-10 -right-20 opacity-[0.16]" size="md" />
          )}
          <div className="container mx-auto px-6 lg:px-8 relative">
            <div className="max-w-5xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm tracking-widest uppercase text-gold">
                  Sector {String(index + 1).padStart(2, "0")}
                </span>
                <span className="w-12 h-px bg-gold/40" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                {industry.title}
              </h2>
              
              <div className="mb-10">
                <p className="text-muted-foreground leading-relaxed">
                  {industry.characteristics}
                </p>
              </div>

              <div className="mb-10 bg-background/60 border border-border p-6 lg:p-8">
                <h3 className="text-lg font-medium mb-6">What we see across clients in this sector</h3>
                <ul className="space-y-4">
                  {industry.observations.map((observation, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-4">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                      {observation}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-10 pt-8 border-t border-border">
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-3">
                    <span className="w-6 h-px bg-gold" />
                    How engagements typically run
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {industry.engagementPatterns}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-3">
                    <span className="w-6 h-px bg-gold" />
                    What we bring
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {industry.support}
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
