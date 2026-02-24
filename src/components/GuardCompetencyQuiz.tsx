import { useState } from "react";
import { quizQuestions, quizResults } from "@/data/quiz";
import { Progress } from "@/components/ui/progress";

interface GuardCompetencyQuizProps {
  onBack?: () => void;
}

const GuardCompetencyQuiz = ({ onBack }: GuardCompetencyQuizProps) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [finished, setFinished] = useState(false);

  const question = quizQuestions[currentQ];
  const progress = ((currentQ + (finished ? 1 : 0)) / quizQuestions.length) * 100;

  const handleSelect = (index: number) => {
    if (showFeedback) return;
    setSelected(index);
    setShowFeedback(true);
    if (question.options[index].correct) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQ + 1 >= quizQuestions.length) {
      setFinished(true);
    } else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowFeedback(false);
    }
  };

  const result = quizResults.find(
    (r) => score >= r.minScore && score <= r.maxScore
  ) || quizResults[0];

  const restart = () => {
    setCurrentQ(0);
    setScore(0);
    setSelected(null);
    setShowFeedback(false);
    setFinished(false);
  };

  return (
    <>
      <div className="text-center mb-8">
        <h1 className="font-pixel text-sm sm:text-lg text-primary mb-2">
          🧠 GUARD COMPETENCY QUIZ
        </h1>
        <p className="text-lg text-muted-foreground">
          Are You Fit to Guard? (Spoiler: Probably Not)
        </p>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="font-pixel text-[0.4rem] text-muted-foreground">
            QUESTION {Math.min(currentQ + 1, quizQuestions.length)}/{quizQuestions.length}
          </span>
          <span className="font-pixel text-[0.4rem] text-primary">
            SCORE: {score}
          </span>
        </div>
        <Progress value={progress} className="h-4 pixel-border" />
      </div>

      {!finished ? (
        <div className="pixel-border bg-card p-6">
          <p className="font-pixel text-[0.55rem] sm:text-[0.65rem] text-foreground mb-6 leading-relaxed">
            Q{currentQ + 1}: {question.question}
          </p>

          <div className="space-y-3">
            {question.options.map((opt, i) => {
              let optClass = "pixel-border bg-secondary hover:bg-muted cursor-pointer";
              if (showFeedback && i === selected) {
                optClass = opt.correct
                  ? "pixel-border bg-pixel-green/20 border-pixel-green"
                  : "pixel-border bg-pixel-red/20 border-accent";
              } else if (showFeedback && opt.correct) {
                optClass = "pixel-border bg-pixel-green/10 border-pixel-green/50";
              }

              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={showFeedback}
                  className={`w-full text-left p-4 transition-colors ${optClass}`}
                >
                  <span className="font-pixel text-[0.4rem] text-primary mr-2">
                    {String.fromCharCode(65 + i)})
                  </span>
                  <span className="text-sm text-foreground">{opt.text}</span>
                </button>
              );
            })}
          </div>

          {showFeedback && selected !== null && (
            <div className="mt-4 bg-secondary p-4 pixel-border">
              <p className="text-sm text-foreground">
                {question.options[selected].correct ? "✅ " : "❌ "}
                {question.options[selected].feedback}
              </p>
              <button onClick={handleNext} className="pixel-btn mt-4 text-[0.5rem]">
                {currentQ + 1 >= quizQuestions.length ? "SEE RESULTS" : "NEXT QUESTION →"}
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Results Screen */
        <div className="pixel-border bg-card p-8 text-center">
          <div className="text-6xl mb-4">{result.emoji}</div>
          <div className="font-pixel text-lg text-primary mb-2">
            RANK: {result.rank}
          </div>
          <h2 className="font-pixel text-[0.7rem] sm:text-[0.9rem] text-foreground mb-4">
            {result.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            {result.description}
          </p>
          <div className="pixel-border bg-secondary p-4 inline-block mb-6">
            <p className="font-pixel text-[0.5rem] text-foreground">
              SCORE: {score}/{quizQuestions.length}
            </p>
          </div>
          <br />
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={restart} className="pixel-btn">
              🔄 RETAKE QUIZ
            </button>
            {onBack && (
              <button onClick={onBack} className="pixel-btn">
                ← BACK TO QUIZ HUB
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default GuardCompetencyQuiz;
