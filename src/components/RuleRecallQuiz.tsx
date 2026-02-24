import { useState, useMemo, useRef, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import {
  scenarios,
  checkAnswer,
  shuffleScenarios,
  type Scenario,
} from "@/data/situationalQuiz";

const ROUNDS = 10;

const verdicts = {
  correct: [
    "You actually know your stuff. Suspicious.",
    "Nailed it. The prisoners are slightly safer with you around.",
    "Correct! Don't let it go to your head.",
    "Right answer. Were you the one who WROTE these rules?",
    "✅ Correct. You're in the top 10% of guards. (The bar is underground.)",
  ],
  wrong: [
    "Swing and a miss. The prisoners weep.",
    "Not even close. Have you considered a career change?",
    "Wrong. The admin team is writing your name down.",
    "Incorrect. Somewhere, a prisoner just got freekilled because of people like you.",
    "❌ Nope. Back to guard school. Oh wait, this IS guard school.",
  ],
};

function randomVerdict(correct: boolean): string {
  const pool = correct ? verdicts.correct : verdicts.wrong;
  return pool[Math.floor(Math.random() * pool.length)];
}

interface ResultTier {
  min: number;
  max: number;
  emoji: string;
  rank: string;
  title: string;
  desc: string;
}

const resultTiers: ResultTier[] = [
  { min: 0, max: 2, emoji: "💀", rank: "F", title: "Rule Illiterate", desc: "You don't know the rules. You don't know that you don't know the rules. It's rules all the way down and you're drowning." },
  { min: 3, max: 4, emoji: "🚨", rank: "D", title: "Walking Liability", desc: "You've heard of rules. In theory. You've never actually applied one correctly." },
  { min: 5, max: 6, emoji: "😵", rank: "C", title: "Rule-Adjacent", desc: "You can identify that rules exist, but naming the right one? Coin flip at best." },
  { min: 7, max: 8, emoji: "🛡️", rank: "B", title: "Functional Guard", desc: "You know most of the rules. The prisoners only mildly distrust you." },
  { min: 9, max: 9, emoji: "⭐", rank: "A", title: "Rule Scholar", desc: "Congrats, you know more than 90% of guards. That's a low bar, but you cleared it." },
  { min: 10, max: 10, emoji: "👑", rank: "S", title: "Living Rulebook", desc: "Perfect score. You're either an admin, or you memorized the rules ironically. Either way, terrifying." },
];

interface RuleRecallQuizProps {
  onBack?: () => void;
}

const RuleRecallQuiz = ({ onBack }: RuleRecallQuizProps) => {
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [wasCorrect, setWasCorrect] = useState(false);
  const [verdict, setVerdict] = useState("");
  const [finished, setFinished] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const pool = useMemo(() => shuffleScenarios(scenarios).slice(0, ROUNDS), []);
  const scenario: Scenario | undefined = pool[round];

  const progress = ((round + (finished ? 1 : 0)) / ROUNDS) * 100;

  // Auto-focus input when moving to next round
  useEffect(() => {
    if (!submitted && !finished && inputRef.current) {
      inputRef.current.focus();
    }
  }, [round, submitted, finished]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitted || !scenario || answer.trim().length === 0) return;

    const correct = checkAnswer(answer, scenario);
    setWasCorrect(correct);
    setVerdict(randomVerdict(correct));
    if (correct) setScore((s) => s + 1);
    setSubmitted(true);
  };

  const handleNext = () => {
    if (round + 1 >= ROUNDS) {
      setFinished(true);
    } else {
      setRound((r) => r + 1);
      setAnswer("");
      setSubmitted(false);
      setWasCorrect(false);
      setVerdict("");
    }
  };

  const restart = () => {
    // Full page reload to reshuffle
    window.location.reload();
  };

  const tier = resultTiers.find((t) => score >= t.min && score <= t.max) || resultTiers[0];

  return (
    <>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-pixel text-sm sm:text-lg text-primary mb-2">
          📋 RULE RECALL
        </h1>
        <p className="text-lg text-muted-foreground">
          Name That Rule — Before Someone Gets Freekilled
        </p>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="font-pixel text-[0.4rem] text-muted-foreground">
            SCENARIO {Math.min(round + 1, ROUNDS)}/{ROUNDS}
          </span>
          <span className="font-pixel text-[0.4rem] text-primary">
            SCORE: {score}
          </span>
        </div>
        <Progress value={progress} className="h-4 pixel-border" />
      </div>

      {!finished && scenario ? (
        <div className="pixel-border bg-card p-6">
          {/* Scenario */}
          <div className="mb-6">
            <span className="font-pixel text-[0.4rem] text-accent mb-2 block">
              ⚠️ INCIDENT REPORT #{scenario.id}
            </span>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              {scenario.situation}
            </p>
          </div>

          {/* Question */}
          <div className="bg-secondary pixel-border p-4 mb-4">
            <p className="font-pixel text-[0.45rem] sm:text-[0.55rem] text-primary mb-1">
              WHAT RULE WAS BROKEN?
            </p>
            <p className="text-sm text-muted-foreground">
              Type the rule name, number, or describe it. Fuzzy matching — just get close.
            </p>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                disabled={submitted}
                placeholder={`e.g. "Don't shoot non-rebelling prisoners" or "2.2.a"`}
                className="flex-1 bg-secondary pixel-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60"
              />
              {!submitted && (
                <button
                  type="submit"
                  disabled={answer.trim().length === 0}
                  className="pixel-btn text-[0.45rem] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  SUBMIT
                </button>
              )}
            </div>
          </form>

          {/* Feedback */}
          {submitted && (
            <div className={`mt-4 pixel-border p-4 ${wasCorrect ? "bg-pixel-green/10 border-pixel-green" : "bg-pixel-red/10 border-accent"}`}>
              <p className="text-sm font-bold text-foreground mb-2">
                {wasCorrect ? "✅" : "❌"} {verdict}
              </p>
              <div className="bg-secondary pixel-border p-3 mt-3">
                <p className="font-pixel text-[0.4rem] text-primary mb-1">
                  RULE {scenario.ruleId}: {scenario.ruleTitle}
                </p>
                <p className="text-sm text-muted-foreground">
                  {scenario.officialWording}
                </p>
              </div>
              {wasCorrect && (
                <p className="text-xs text-muted-foreground mt-2 italic">
                  {scenario.snark}
                </p>
              )}
              <button onClick={handleNext} className="pixel-btn mt-4 text-[0.5rem]">
                {round + 1 >= ROUNDS ? "SEE RESULTS" : "NEXT SCENARIO →"}
              </button>
            </div>
          )}
        </div>
      ) : finished ? (
        /* Results Screen */
        <div className="pixel-border bg-card p-8 text-center">
          <div className="text-6xl mb-4">{tier.emoji}</div>
          <div className="font-pixel text-lg text-primary mb-2">
            RANK: {tier.rank}
          </div>
          <h2 className="font-pixel text-[0.7rem] sm:text-[0.9rem] text-foreground mb-4">
            {tier.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            {tier.desc}
          </p>
          <div className="pixel-border bg-secondary p-4 inline-block mb-6">
            <p className="font-pixel text-[0.5rem] text-foreground">
              SCORE: {score}/{ROUNDS}
            </p>
          </div>
          <br />
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
            <button onClick={restart} className="pixel-btn">
              🔄 TRY AGAIN
            </button>
            {onBack && (
              <button onClick={onBack} className="pixel-btn">
                ← BACK TO QUIZ HUB
              </button>
            )}
          </div>
        </div>
      ) : null}

      {/* Tip at the bottom */}
      {!finished && (
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            💡 Tip: You can type the rule number (e.g. "2.2.a"), the rule name, or just describe it in your own words.
          </p>
        </div>
      )}
    </>
  );
};

export default RuleRecallQuiz;
