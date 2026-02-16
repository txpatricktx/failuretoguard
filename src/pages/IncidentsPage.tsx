import Layout from "@/components/Layout";
import { incidents } from "@/data/incidents";
import { Link } from "react-router-dom";

const severityColors: Record<string, string> = {
  LOW: "bg-pixel-green/20 text-pixel-green",
  MEDIUM: "bg-pixel-yellow/20 text-pixel-yellow",
  HIGH: "bg-primary/20 text-primary",
  CRITICAL: "bg-accent/20 text-accent",
};

const IncidentsPage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="font-pixel text-sm sm:text-lg text-primary mb-2">
            📋 INCIDENT REPORTS
          </h1>
          <p className="text-lg text-muted-foreground">
            Official Guard Fail Scenarios — Filed Under: "How Did This Happen?"
          </p>
        </div>

        <div className="space-y-6">
          {incidents.map((inc) => (
            <div key={inc.id} className="pixel-border bg-card">
              {/* Header bar */}
              <div className="bg-secondary px-4 py-2 flex flex-wrap items-center justify-between gap-2 border-b-2 border-border">
                <div className="flex items-center gap-2">
                  <span className="font-pixel text-[0.45rem] text-muted-foreground">
                    CASE: {inc.caseNumber}
                  </span>
                  <span className={`font-pixel text-[0.4rem] px-2 py-0.5 ${severityColors[inc.severity]}`}>
                    {inc.severity}
                  </span>
                </div>
                <span className="font-pixel text-[0.4rem] text-muted-foreground">
                  {inc.date}
                </span>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-6 space-y-4">
                <h2 className="font-pixel text-[0.6rem] sm:text-[0.7rem] text-foreground">
                  {inc.title}
                </h2>

                <div>
                  <p className="font-pixel text-[0.4rem] text-primary mb-1">INCIDENT DESCRIPTION:</p>
                  <p className="text-sm text-muted-foreground">{inc.description}</p>
                </div>

                <div>
                  <p className="font-pixel text-[0.4rem] text-primary mb-1">RULES VIOLATED:</p>
                  <div className="flex flex-wrap gap-1">
                    {inc.rulesViolated.map((rule, i) => (
                      <Link
                        key={i}
                        to="/rules"
                        className="font-pixel text-[0.4rem] bg-accent/10 text-accent px-2 py-1 hover:bg-accent/20 transition-colors"
                      >
                        {rule}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-secondary p-3 pixel-border">
                  <p className="font-pixel text-[0.4rem] text-muted-foreground mb-1">👤 WITNESS STATEMENT:</p>
                  <p className="text-sm text-foreground italic">{inc.witnessStatement}</p>
                </div>

                <div>
                  <p className="font-pixel text-[0.4rem] text-pixel-red mb-1">⚖️ OUTCOME:</p>
                  <p className="text-sm text-muted-foreground">{inc.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default IncidentsPage;
