import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { GeometricAccent } from "@/components/layout/GeometricAccent";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const practiceAreas = [
  {
    title: "Enterprise direction and portfolio choices",
    summary: "Where to compete in the region, what to hold, what to exit.",
    href: "/practice-areas#strategy",
  },
  {
    title: "Revenue architecture and market development",
    summary: "Building the commercial engine for a Gulf or cross-border market.",
    href: "/practice-areas#growth",
  },
  {
    title: "Business systems and cost structure",
    summary: "Sizing the cost base to a regional operating reality.",
    href: "/practice-areas#operations",
  },
  {
    title: "Organizational form and senior leadership effectiveness",
    summary: "Designing the structure that the next phase of growth requires.",
    href: "/practice-areas#organization",
  },
  {
    title: "Technology strategy and enterprise modernization",
    summary: "Technology decisions made on commercial, not vendor, terms.",
    href: "/practice-areas#digital",
  },
  {
    title: "Operational performance and execution discipline",
    summary: "Closing the gap between intent and what actually gets delivered.",
    href: "/practice-areas#performance",
  },
  {
    title: "Control environment and institutional stability",
    summary: "Governance and controls fit for regulated, scrutinized businesses.",
    href: "/practice-areas#risk",
  },
  {
    title: "Transactions and post-combination execution",
    summary: "Commercial judgment from screening through the first year after close.",
    href: "/practice-areas#mergers",
  },
];

const industries = [
  "Financial services and banking",
  "Industrial and manufacturing",
  "Technology and software",
  "Healthcare and life sciences",
  "Energy and natural resources",
  "Consumer and retail",
  "Public and social sector",
  "Family enterprises and conglomerates",
  "Infrastructure and project-based industries",
  "Professional and business services",
];

const clientQuotes = [
  {
    text: "They knew the counterparty better than we did. The negotiation moved on terms we could live with, and the relationship survived it.",
    attribution: "Chairman, GCC industrial group",
  },
  {
    text: "We did not need another report. We needed someone who could read the market in real time. Their call on timing kept us out of a bad first move.",
    attribution: "Chief Executive, regional financial institution",
  },
  {
    text: "They stayed with us from signing through the first year of integration. The commercial logic of the deal held up under pressure.",
    attribution: "Managing Director, family business group",
  },
];

const engagementHighlights = [
  {
    sector: "Market entry",
    challenge:
      "An Asian industrial group was preparing to enter the GCC and needed a clear view of partner quality, regulatory path, and the realistic commercial window before committing capital.",
    outcome:
      "Mapped the partner field, ran direct conversations on the client's behalf, and shaped a joint venture that opened operations in the target market within the planned cycle.",
  },
  {
    sector: "Regional expansion",
    challenge:
      "A GCC financial institution wanted to extend into adjacent markets but needed to decide where to lead with wholly owned operations, where to partner, and where not to enter at all.",
    outcome:
      "Built a country-by-country commercial map, sequenced the moves over a multi-year horizon, and supported the first two market entries through to operational launch.",
  },
  {
    sector: "Family enterprise",
    challenge:
      "A multi-generational group needed to professionalize governance and prepare an ownership transition without disturbing the institutional relationships that underpin the business.",
    outcome:
      "Stood up a family council, brought in independent directors, and recruited the first non-family chief executive. Core counterparty relationships were preserved through the transition.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        {/* Full-bleed editorial cover */}
        <img
          src="/images/hero-boardroom.png"
          alt="Senior advisors in discussion in a Dubai boardroom"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Dark navy scrim for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30"
          aria-hidden="true"
        />

        <div className="container relative mx-auto px-6 lg:px-8 pt-28 pb-20 sm:pt-36 md:pt-44 md:pb-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8 animate-fade-in">
              <span className="h-px w-12 bg-gold" aria-hidden="true" />
              <p className="eyebrow text-gold">Management consulting · Dubai, UAE</p>
            </div>
            <h1 className="font-serif font-normal text-[52px] leading-[1.03] sm:text-7xl md:text-[5rem] lg:text-[5.75rem] lg:leading-[1.02] tracking-tight mb-10 animate-fade-in text-balance">
              Commercial judgment for the Gulf and its connected markets
            </h1>
            <p
              className="text-lg lg:text-xl text-foreground/75 leading-relaxed mb-4 max-w-2xl animate-fade-in text-pretty"
              style={{ animationDelay: "0.1s" }}
            >
              Gulf Associates advises corporates, family groups, sovereign-linked entities, and international
              investors on the decisions that shape regional position: market entry, expansion across the GCC,
              partnerships and counterparties, transactions, and the operating choices that follow.
            </p>
            <p
              className="text-lg lg:text-xl text-foreground/75 leading-relaxed mb-10 max-w-2xl animate-fade-in text-pretty"
              style={{ animationDelay: "0.15s" }}
            >
              The work is close to the deal, the partner, and the operating reality on the ground. Clients use us
              when getting the commercial call right matters more than producing another view of the market.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Speak with a partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Role Section */}
      <section className="relative py-20 lg:py-28 bg-secondary overflow-hidden">
        <GeometricAccent variant="cross" className="-top-10 -right-20 opacity-[0.18]" size="lg" />
        <GeometricAccent variant="corner" className="bottom-0 left-0 opacity-[0.18] rotate-180" size="md" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="mb-14 lg:mb-20 overflow-hidden rounded-lg border border-border">
            <div className="relative aspect-[21/9]">
              <img
                src="/images/office-collaboration.png"
                alt="Two advisors reviewing financial documents together in a Dubai office"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent" aria-hidden="true" />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-normal mb-6">Where we come in</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Most engagements begin around a commercial call that cannot be made from a head office. Whether to
                enter a Gulf market and with whom. How to price an asset that trades on relationships as much as
                fundamentals. Where the operating model has to flex for local conditions. When to commit, when to
                wait, and when to walk.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The work depends on reading counterparties, sponsors, regulators, and competitors as they actually
                behave in the region. We bring a current view of who is in the room, what they will accept, and how
                the commercial sequence is likely to unfold over the next twelve to thirty-six months.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We work with chief executives, owners, investment committees, and transaction advisers. The output is a
                position they can act on, with the reasoning behind it.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-normal mb-6">What sets the work apart</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The firm is based in Dubai and our partners spend their working week with clients across the GCC.
                Our reading of family ownership dynamics, sovereign capital priorities, regulatory direction, and
                sector-specific commercial conditions is built from continuous regional presence, not periodic
                visits.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We hold a small active book by design. Senior bandwidth goes into the commercial conversations with
                counterparties, partners, and regulators where decisions are actually shaped, rather than into work
                that is delegated downward after the engagement is signed.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Where the work allows it, fees are linked to commercial outcomes. We are comfortable being measured
                on what gets agreed, what gets built, and what gets returned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Highlights */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <GeometricAccent variant="lines" className="-top-10 -left-10 opacity-[0.12]" size="lg" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow text-gold mb-4">Representative work</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-normal mb-6">Selected engagement profiles</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not name clients. The profiles below describe the commercial situation and the result, with
              identifying detail removed.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {engagementHighlights.map((item, index) => (
              <div
                key={index}
                className="group bg-card border border-border hover:border-gold/50 transition-colors rounded-lg p-8 flex flex-col"
              >
                <span className="eyebrow text-gold mb-4">{item.sector}</span>
                <h3 className="text-lg font-medium mb-4 text-foreground">The situation</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{item.challenge}</p>
                <div className="mt-auto border-t border-gold/30 pt-6">
                  <h3 className="text-lg font-medium mb-4 text-foreground">The outcome</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="relative py-20 lg:py-28 bg-secondary overflow-hidden">
        <GeometricAccent variant="dots" className="-bottom-20 -left-10 opacity-[0.18]" size="lg" />
        <GeometricAccent variant="lines" className="top-10 -right-20 opacity-25" size="md" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow text-gold mb-4">What we do</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-normal mb-6">Practice areas</h2>
            <p className="text-muted-foreground leading-relaxed">
              The work is organized around the commercial decisions that move enterprises forward in the region:
              where to compete, where to invest, who to partner with, what to acquire, and how to make the operating
              model fit the market it has to win in.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, index) => (
              <Link
                key={index}
                to={area.href}
                className="group relative bg-background pt-8 pb-7 px-6 border-t border-foreground/15 hover:border-gold transition-colors flex flex-col"
              >
                <span className="absolute -top-px left-0 h-px w-10 bg-gold opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-300" aria-hidden="true" />
                <span className="text-xs text-gold font-medium tracking-widest mb-4 block">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-lg leading-snug text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.summary}</p>
                <ArrowRight className="mt-5 h-4 w-4 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative py-20 lg:py-28 bg-primary text-primary-foreground overflow-hidden">
        <GeometricAccent variant="dots" className="-top-20 -right-20 opacity-[0.08]" size="xl" />
        <GeometricAccent variant="diagonal" className="-bottom-10 -left-10 opacity-[0.08]" size="lg" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="eyebrow text-gold mb-4">Sector depth</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-normal mb-6">Sectors we work in</h2>
              <p className="text-primary-foreground/70 leading-relaxed mb-6">
                Sector knowledge in the Gulf is mostly about who the active counterparties are, where regulators
                are heading, where capital is flowing, and which commercial structures have become standard. We
                carry that view across banking, energy, industrials, healthcare, technology, consumer, and the
                project-based industries that drive regional capex.
              </p>
              <p className="text-primary-foreground/70 leading-relaxed mb-8">
                International clients use us to interpret the market. Regional clients use us to pressure-test
                their own reading of it before they commit.
              </p>
              <Link to="/industries">
                <Button
                  variant="outline"
                  className="border-white/40 text-white hover:border-gold hover:text-gold after:bg-gold"
                >
                  View all sectors
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div>
              <ul className="space-y-4">
                {industries.map((industry, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 py-3 border-b border-primary-foreground/20 last:border-0"
                  >
                    <span className="text-sm text-primary-foreground/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg">{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Client Perspectives */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <GeometricAccent variant="corner" className="top-0 right-0 opacity-[0.10] -scale-x-100" size="md" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow text-gold mb-4">Client perspectives</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-normal mb-6">How clients describe the work</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {clientQuotes.map((quote, index) => (
              <div key={index} className="border-t-2 border-foreground pt-8">
                <p className="text-lg leading-relaxed mb-6 italic">"{quote.text}"</p>
                <p className="text-sm text-muted-foreground">— {quote.attribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Use Cases */}
      <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
        <GeometricAccent variant="cross" className="top-0 -right-10 opacity-[0.12]" size="lg" />
        <GeometricAccent variant="lines" className="-bottom-10 left-0 opacity-25" size="md" />

        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-normal mb-8">When clients call us</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A foreign group is preparing to enter a Gulf market and needs to test the commercial logic, the
                partner field, and the regulatory path before signing or committing capital.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A regional company is moving into adjacent geographies and wants a clear view of where to lead
                with wholly owned operations, where to partner, and where to step back from a market that does
                not reward the effort.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A board is reviewing an acquisition and needs an independent read on the price, the synergies,
                the integration risk, and the ownership and counterparty realities that will determine whether
                the deal returns its capital.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-normal mb-8">And when the work is operational</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A regional business has outgrown its operating model and needs to redesign how decisions, capital,
                and people move across countries, business units, and joint ventures.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A family group is preparing the next generation for active ownership and needs governance and
                portfolio structures that protect both the business and the institutional relationships around it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                An institution is responding to a regulatory or commercial shift that requires fast, well-sequenced
                moves with limited room for a second attempt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Gulf Associates */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <GeometricAccent variant="diagonal" className="-top-10 -right-10 opacity-[0.10]" size="lg" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow text-gold mb-4">Why work with us</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-normal mb-6">What we bring</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {[
              {
                title: "Regional fluency",
                desc: "Continuous presence across the Gulf and a current reading of counterparties, regulators, and sponsors that international firms cannot replicate from a distance.",
              },
              {
                title: "Senior involvement",
                desc: "Partners are in the commercial conversations themselves. The work is not handed off once the engagement is signed.",
              },
              {
                title: "Concentrated portfolio",
                desc: "We run a deliberately small book of active engagements. Clients get senior attention through the commercially decisive moments, not just at kickoff.",
              },
              {
                title: "Cross-border perspective",
                desc: "We support international clients moving into the region and regional clients moving out of it. Both directions sharpen our judgment in the other.",
              },
              {
                title: "Commercial fee structure",
                desc: "Where the work allows it, fees are linked to what gets agreed, built, or returned. We are comfortable being measured against commercial outcomes.",
              },
              {
                title: "Continuity after close",
                desc: "Most relationships continue beyond the engagement. We stay close as integrations land, partnerships mature, and the second move follows the first.",
              },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-foreground pl-6">
                <h3 className="font-medium mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Context Section */}
      <section className="relative py-20 lg:py-28 bg-secondary overflow-hidden">
        <GeometricAccent variant="dots" className="-bottom-10 -right-10 opacity-[0.18]" size="lg" />
        <GeometricAccent variant="corner" className="top-0 right-0 opacity-25 -scale-x-100" size="md" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl lg:text-4xl font-normal mb-8 text-center">Reading the Gulf</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-center">
              The Gulf operates on its own commercial logic. State capital sits inside private deals. Family groups
              behave differently from listed corporates. Regulators move quickly when policy aligns and slowly when
              it does not. Partnership structures often matter more than equity stakes, and the right local sponsor
              can be worth more than a price advantage.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-center">
              Foreign companies routinely underestimate the importance of who they enter with. Regional companies
              sometimes overestimate how their domestic relationships travel. Both errors are commercial, not
              analytical, and both are avoidable with the right reading of the room.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center">
              The value we add is helping clients see the market on its own terms before committing capital,
              signatures, or organizational change to it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 bg-primary text-primary-foreground overflow-hidden">
        <GeometricAccent variant="dots" className="-top-20 -left-20 opacity-[0.06]" size="xl" />
        <GeometricAccent variant="cross" className="-bottom-10 -right-10 opacity-[0.06]" size="lg" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-normal mb-6">A direct conversation, before the decision</h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-8">
              If you are weighing a Gulf market move, a regional partnership, a transaction, or an operating
              decision that has to land in the region, we welcome a candid exchange about whether and how we can
              be useful.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:border-gold hover:text-gold after:bg-gold"
              >
                Speak with a partner
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
