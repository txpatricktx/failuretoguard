export interface QuizQuestion {
  id: number;
  question: string;
  options: { text: string; correct: boolean; feedback: string }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "A prisoner holds out a gun for 2 seconds. What do you do?",
    options: [
      { text: "Panic and spray the entire yard", correct: false, feedback: "Congrats, you just freekilled 6 people. They need to hold it for 3 seconds!" },
      { text: "Wait — they need to hold it for 3 seconds before it's rebelling", correct: true, feedback: "Correct! 3 seconds of contraband = rebelling. Patience, young guard." },
      { text: "Pick up the gun yourself", correct: false, feedback: "Now YOU have contraband. Brilliant strategy." },
      { text: "Type '!leave' and switch to T side", correct: false, feedback: "The coward's way out. Bold, but not recommended." }
    ]
  },
  {
    id: 2,
    question: "You want to take Warden. What's the #1 requirement?",
    options: [
      { text: "A microphone", correct: true, feedback: "Yes! No mic = no Warden. It's in the rules. It's common sense. It's the law." },
      { text: "A cool skin", correct: false, feedback: "Looking good won't help when you can't give orders." },
      { text: "At least 500 hours in CS2", correct: false, feedback: "Experience helps, but a $5 mic helps more." },
      { text: "Vibes", correct: false, feedback: "Vibes are not a substitute for verbal communication." }
    ]
  },
  {
    id: 3,
    question: "The Warden dies mid-round. What happens?",
    options: [
      { text: "Keep shooting prisoners — they're still playing the game", correct: false, feedback: "WRONG. It's an instant freeday. Stop shooting!" },
      { text: "Immediately becomes a freeday. All non-rebelling prisoners are pardoned.", correct: true, feedback: "Correct! Warden dies = freeday. Halt damaging games ASAP." },
      { text: "Everyone panics and types in all caps", correct: false, feedback: "That happens too, but it's not the OFFICIAL protocol." },
      { text: "Round resets automatically", correct: false, feedback: "This isn't a Minecraft server with plugins for everything." }
    ]
  },
  {
    id: 4,
    question: "How do you properly start Simon Says?",
    options: [
      { text: "'Let's play Simon Says, I'm Simon, crouch now!'", correct: false, feedback: "Nope! You need the exact phrase. This ain't kindergarten Simon." },
      { text: "'Simon says we are now playing simon says. Simon says I am simon.'", correct: true, feedback: "Perfect! Word for word. The sacred incantation." },
      { text: "'SIMON SAYS EVERYBODY FREEZE OR DIE'", correct: false, feedback: "Calm down, drill sergeant. There's a specific phrase." },
      { text: "Just start giving commands and hope for the best", correct: false, feedback: "This is how you get 15 confused prisoners and an admin on your case." }
    ]
  },
  {
    id: 5,
    question: "You see a prisoner with their body partially outside a marker. What do you do?",
    options: [
      { text: "Kill them immediately — their toe is out!", correct: false, feedback: "That's foot-checking and it's toxic! If ANY part is in, they're in." },
      { text: "If any part of their body is in the location, they're considered in it", correct: true, feedback: "Correct! No foot-checking. If their pinky pixel is in, they're good." },
      { text: "Measure the exact pixel distance and write a report", correct: false, feedback: "Sir, this is a video game, not a surveyor's office." },
      { text: "Take a screenshot for evidence", correct: false, feedback: "Evidence of what? You being toxic? Don't foot-check." }
    ]
  },
  {
    id: 6,
    question: "During Last Guard, what are you required to do?",
    options: [
      { text: "Follow all normal Guard Rules carefully", correct: false, feedback: "Actually, Guard Rules (2.2) DON'T apply during Last Guard!" },
      { text: "Hide and wait for the round to end", correct: false, feedback: "You're the LAST guard. No hiding. Maximum chaos required." },
      { text: "Shoot at ALL prisoners until only 2 remain", correct: true, feedback: "Correct! Go out in a blaze of glory. Shoot everything that moves until LR." },
      { text: "Surrender and accept your fate", correct: false, feedback: "There is no surrender in Jailbreak. Only violence." }
    ]
  },
  {
    id: 7,
    question: "Can the Warden trick prisoners during Simon Says?",
    options: [
      { text: "Absolutely not! Rule 2.3.e says no tricking!", correct: false, feedback: "EXCEPTION! Simon Says is the one time tricking IS allowed!" },
      { text: "Yes — confusing prisoners IS allowed during Simon Says", correct: true, feedback: "Correct! Simon Says is the ONE exception to the no-tricking rule." },
      { text: "Only on Tuesdays", correct: false, feedback: "Jailbreak doesn't have a weekly schedule." },
      { text: "Only if they say 'no offense' first", correct: false, feedback: "That's not how rules work." }
    ]
  },
  {
    id: 8,
    question: "A prisoner is AFK frozen and barely twitches their mouse. Do you kill them?",
    options: [
      { text: "Yes! Any movement = death!", correct: false, feedback: "Rule 2.2.i says don't kill for extremely small mouse movements. Chill." },
      { text: "No — don't kill for extremely small mouse movements during AFK Freeze", correct: true, feedback: "Correct! Don't be that guy. Tiny twitches happen." },
      { text: "Only if I don't like them", correct: false, feedback: "Personal vendettas are not in the rulebook." },
      { text: "Depends on my K/D ratio this round", correct: false, feedback: "Your stats don't justify freekilling." }
    ]
  },
  {
    id: 9,
    question: "You don't have a microphone and there's no Warden after 10 seconds. What should you do?",
    options: [
      { text: "Take Warden anyway and type orders", correct: false, feedback: "No mic = no Warden. It's literally rule 2.3.b." },
      { text: "Slay yourself — you're expected to leave CT", correct: true, feedback: "Correct! If no mic and no Warden in 10 seconds, slay. Consider letting someone with a mic play CT." },
      { text: "Keep guarding silently and hope for the best", correct: false, feedback: "Silent guarding is not guarding. It's just standing there menacingly." },
      { text: "Start a vote to restart the round", correct: false, feedback: "That's not a thing. Just slay and let someone else guard." }
    ]
  },
  {
    id: 10,
    question: "For Warday, the location must have...",
    options: [
      { text: "At least 2 entrances and NOT be in sight of armory", correct: true, feedback: "Correct! 2+ entrances, no armory line of sight. Fair fight." },
      { text: "The best camping spot possible", correct: false, feedback: "Found the guy who sets up warday in a closet." },
      { text: "A nice view and good vibes", correct: false, feedback: "This is a war, not a vacation rental." },
      { text: "Only 1 entrance so it's easier to defend", correct: false, feedback: "2 entrances minimum! Give the Ts a chance." }
    ]
  },
  {
    id: 11,
    question: "A prisoner asks you to repeat the order. Do you have to?",
    options: [
      { text: "No, they should have been paying attention", correct: false, feedback: "Rule 2.3.d says orders must be repeated at least once upon request!" },
      { text: "Yes — orders must be repeated at least once upon request", correct: true, feedback: "Correct! Repeat it. It's in the rules. Communication is key." },
      { text: "Only if they say 'please'", correct: false, feedback: "Manners are nice but it's a RULE, not a suggestion." },
      { text: "Type it in chat instead", correct: false, feedback: "All orders must be given over voice chat (2.3.1.b). Nice try." }
    ]
  },
  {
    id: 12,
    question: "How many luck-based games can be played per round?",
    options: [
      { text: "Unlimited — luck is fun!", correct: false, feedback: "Nope. There are limits to keep things fair." },
      { text: "Maximum of 2 total (one Map Game and one Custom Game)", correct: true, feedback: "Correct! One luck-based Map Game + one luck-based Custom Game max." },
      { text: "Zero — luck is banned", correct: false, feedback: "Luck games are allowed, just limited." },
      { text: "As many as the prisoners vote for", correct: false, feedback: "This isn't a democracy. It's a prison." }
    ]
  }
];

export interface QuizResult {
  minScore: number;
  maxScore: number;
  rank: string;
  title: string;
  description: string;
  emoji: string;
}

export const quizResults: QuizResult[] = [
  { minScore: 0, maxScore: 2, rank: "F", title: "Menace to Society", description: "You are a danger to everyone, including yourself. Please uninstall.", emoji: "💀" },
  { minScore: 3, maxScore: 4, rank: "D", title: "Professional Freekiller", description: "You've somehow made guarding WORSE. The prisoners filed a restraining order.", emoji: "🚨" },
  { minScore: 5, maxScore: 6, rank: "C", title: "Confused But Trying", description: "You know some rules exist. You just can't remember which ones. Baby steps.", emoji: "😵" },
  { minScore: 7, maxScore: 8, rank: "B", title: "Adequate Meat Shield", description: "You can follow basic orders and only accidentally freekill sometimes. Progress!", emoji: "🛡️" },
  { minScore: 9, maxScore: 10, rank: "A", title: "Competent Guard", description: "You actually read the rules? In THIS economy? Impressive.", emoji: "⭐" },
  { minScore: 11, maxScore: 12, rank: "S", title: "Barely Competent Guard", description: "Wait, this is the HIGHEST rank? Yes. In Jailbreak, 'barely competent' IS the ceiling.", emoji: "👑" }
];
