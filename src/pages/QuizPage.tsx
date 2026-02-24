import { useState } from "react";
import Layout from "@/components/Layout";
import GuardCompetencyQuiz from "@/components/GuardCompetencyQuiz";
import RuleRecallQuiz from "@/components/RuleRecallQuiz";

type QuizChoice = "competency" | "recall" | null;

interface QuizPageProps {
  defaultQuiz?: QuizChoice;
}

const QuizPage = ({ defaultQuiz = null }: QuizPageProps) => {
  const [activeQuiz, setActiveQuiz] = useState<QuizChoice>(defaultQuiz);

  const handleBack = () => setActiveQuiz(null);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-12">
        {activeQuiz === null ? (
          <>
            {/* Hub Header */}
            <div className="text-center mb-10">
              <h1 className="font-pixel text-sm sm:text-lg text-primary mb-2">
                📝 QUIZ HUB
              </h1>
              <p className="text-lg text-muted-foreground">
                Pick your poison. Both end in disappointment.
              </p>
            </div>

            {/* Quiz Selector Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Guard Competency Quiz */}
              <button
                onClick={() => setActiveQuiz("competency")}
                className="pixel-border bg-card hover:bg-muted p-6 text-left transition-colors group cursor-pointer"
              >
                <div className="text-4xl mb-3">🧠</div>
                <h2 className="font-pixel text-[0.55rem] sm:text-[0.65rem] text-primary mb-2 group-hover:text-accent transition-colors">
                  GUARD COMPETENCY QUIZ
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Multiple choice. See if you're dumber than the average guard.
                </p>
                <div className="mt-4 font-pixel text-[0.35rem] text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  ▶ START QUIZ
                </div>
              </button>

              {/* Rule Recall Quiz */}
              <button
                onClick={() => setActiveQuiz("recall")}
                className="pixel-border bg-card hover:bg-muted p-6 text-left transition-colors group cursor-pointer"
              >
                <div className="text-4xl mb-3">📋</div>
                <h2 className="font-pixel text-[0.55rem] sm:text-[0.65rem] text-primary mb-2 group-hover:text-accent transition-colors">
                  RULE RECALL
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Type the rule. Prove you actually read them.
                </p>
                <div className="mt-4 font-pixel text-[0.35rem] text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  ▶ START QUIZ
                </div>
              </button>
            </div>

            {/* Bottom flavor text */}
            <div className="mt-8 text-center">
              <p className="text-xs text-muted-foreground">
                💀 Either way, the warden is watching.
              </p>
            </div>
          </>
        ) : activeQuiz === "competency" ? (
          <GuardCompetencyQuiz onBack={handleBack} />
        ) : (
          <RuleRecallQuiz onBack={handleBack} />
        )}
      </div>
    </Layout>
  );
};

export default QuizPage;
