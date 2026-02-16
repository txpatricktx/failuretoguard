import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Progress } from "@/components/ui/progress";

const tickerMessages = [
  "🚨 BREAKING: Guard shoots 5 AFK prisoners, claims 'they were plotting something'",
  "📰 LOCAL GUARD camps armory for 3 rounds straight, discovers it's actually quite boring",
  "🔥 WARDEN opens cells with no orders, surprised when 28 prisoners escape",
  "💀 LAST GUARD achieved in record 8 seconds — investigation pending",
  "🎤 NO-MIC GUARD takes Warden, types 'go 2 marker' — prisoners revolt",
  "🤦 GUARD throws flashbang at own team — 'I thought it was a smoke'",
  "📋 INCIDENT REPORT: Guard found camping T-secret 'for research purposes'",
  "⚡ SIMON SAYS disaster: Warden forgets starting phrase, kills everyone",
  "🏆 NEW RECORD: Most freekills in a single round — 9 (previous record: 7)",
  "🚪 CELLS OPENED without order — guard claims 'the button looked friendly'",
];

const navSections = [
  { path: "/rules", icon: "📜", title: "THE INMATE HANDBOOK", desc: "All the rules you'll inevitably break" },
  { path: "/hall-of-shame", icon: "🏆", title: "HALL OF SHAME", desc: "The worst guards in history" },
  { path: "/incidents", icon: "📋", title: "INCIDENT REPORTS", desc: "Official documentation of guard failures" },
  { path: "/quiz", icon: "🧠", title: "COMPETENCY QUIZ", desc: "Are you fit to guard? (Spoiler: No)" },
  { path: "/survival", icon: "💀", title: "SURVIVAL GUIDE", desc: "How to not get slayed" },
  { path: "/glossary", icon: "📖", title: "PRISON SLANG", desc: "For dummies (that's you)" },
];

const Index = () => {
  const [competency, setCompetency] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCompetency(3), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pixel art prison gate */}
          <div className="text-4xl sm:text-6xl mb-4 select-none">
            🏢⛓️🏢
          </div>
          
          <h1 className="font-pixel text-lg sm:text-2xl md:text-3xl text-primary leading-relaxed mb-4">
            WELCOME TO
            <br />
            GUARD FAILURE ACADEMY
          </h1>
          
          <div className="pixel-border bg-card p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-xl sm:text-2xl text-foreground mb-2">
              ⚠️ ATTENTION: You have been assigned to <span className="text-primary font-bold">CT SIDE</span>
            </p>
            <p className="text-lg text-muted-foreground">
              You are about to fail miserably. This is not a question of <em>if</em>, but <em>how spectacularly</em>.
            </p>
          </div>

          {/* Competency Bar */}
          <div className="max-w-md mx-auto mb-8">
            <p className="font-pixel text-[0.6rem] text-muted-foreground mb-2">
              YOUR GUARD COMPETENCY LEVEL
            </p>
            <Progress value={competency} className="h-6 pixel-border" />
            <p className="font-pixel text-[0.5rem] text-accent mt-1">
              {competency}/100 — CLASSIFICATION: MENACE TO SOCIETY
            </p>
          </div>

          <p className="font-pixel text-[0.5rem] text-muted-foreground animate-blink">
            ▶ PRESS START TO FAIL ◀
          </p>
        </div>
      </section>

      {/* News Ticker */}
      <div className="bg-secondary border-y-4 border-primary overflow-hidden py-2">
        <div className="flex animate-ticker whitespace-nowrap">
          {tickerMessages.concat(tickerMessages).map((msg, i) => (
            <span key={i} className="text-sm text-foreground mx-8">
              {msg}
            </span>
          ))}
        </div>
      </div>

      {/* Navigation Grid — Prison Intake Form */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="font-pixel text-xs sm:text-sm text-foreground mb-2">
            📋 PRISONER INTAKE FORM
          </h2>
          <p className="text-lg text-muted-foreground">
            Select your department for processing
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {navSections.map((section) => (
            <Link
              key={section.path}
              to={section.path}
              className="pixel-border bg-card p-6 hover:bg-secondary transition-colors group"
            >
              <div className="text-3xl mb-3">{section.icon}</div>
              <h3 className="font-pixel text-[0.55rem] text-primary group-hover:text-foreground transition-colors mb-2">
                {section.title}
              </h3>
              <p className="text-sm text-muted-foreground">{section.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Fake Stats */}
      <section className="bg-card py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-pixel text-xs text-center text-foreground mb-8">
            📊 ACADEMY STATISTICS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: "Guards Trained", value: "4,892", sub: "(all failed)" },
              { label: "Freekills Logged", value: "31,247", sub: "and counting" },
              { label: "Incidents Filed", value: "8,103", sub: "this week alone" },
              { label: "Avg Competency", value: "3%", sub: "generous estimate" },
            ].map((stat) => (
              <div key={stat.label} className="pixel-border bg-secondary p-4">
                <p className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</p>
                <p className="font-pixel text-[0.4rem] text-foreground mt-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
