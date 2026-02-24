export interface Scenario {
  id: number;
  situation: string;
  ruleId: string;
  ruleTitle: string;
  officialWording: string;
  /** Keywords/phrases — match ANY group (OR). Each group is an array of terms that must ALL appear (AND within group). */
  keywords: string[][];
  snark: string;
}

export const scenarios: Scenario[] = [
  {
    id: 1,
    situation:
      "A CT opens fire on a prisoner who was following every order perfectly. The prisoner hadn't rebelled, hadn't lost a game, and was standing still in the marker. The CT just… felt like it.",
    ruleId: "2.2.a",
    ruleTitle: "Do not shoot Prisoners who are not rebelling and have not lost a game",
    officialWording:
      "When shooting, you must have active and accurate knowledge of whom you are shooting. Do not shoot off skins.",
    keywords: [
      ["not rebelling"],
      ["freekill"],
      ["not shoot", "not rebel"],
      ["don't shoot", "not rebel"],
      ["shoot", "not rebel"],
      ["shoot", "not lost"],
      ["2.2.a"],
    ],
    snark: "Congrats, you identified the most basic guard rule. Only took someone dying for you to remember it.",
  },
  {
    id: 2,
    situation:
      "The Warden gets headshot by a rebel. Guards continue running the current game and kill 3 prisoners who lost. The remaining prisoners are confused and angry.",
    ruleId: "2.3.f",
    ruleTitle: "If the Warden dies, it immediately becomes a freeday",
    officialWording:
      "All Prisoners that are not actively rebelling are pardoned. Guards must halt the current game as soon as possible if it deals damage. The current game is canceled.",
    keywords: [
      ["warden", "dies", "freeday"],
      ["warden", "dead", "freeday"],
      ["warden", "die", "free"],
      ["freeday"],
      ["2.3.f"],
    ],
    snark: "Warden dies = freeday. This isn't optional. It's not a suggestion. It's the LAW of Jailbreak.",
  },
  {
    id: 3,
    situation:
      "A guard with no microphone takes Warden. They start typing orders in chat at approximately 4 words per minute. Chaos ensues.",
    ruleId: "2.3.b",
    ruleTitle: "Do not take Warden without a microphone",
    officialWording: "A microphone is required to be Warden.",
    keywords: [
      ["warden", "mic"],
      ["warden", "microphone"],
      ["no mic"],
      ["2.3.b"],
    ],
    snark: "Typing 'go 2 marker pls' in chat is not commanding. It's begging. With a keyboard.",
  },
  {
    id: 4,
    situation:
      "A guard sprays through a crowd of innocent prisoners to kill one rebel hiding behind them. Three innocent prisoners die as collateral.",
    ruleId: "2.2.b",
    ruleTitle: "Do not shoot unnecessarily, carelessly, or recklessly",
    officialWording:
      "When shooting, collateral damage is expressly prohibited. Do not shoot if you do not have a clean shot, are unsure of your backdrop, or otherwise cannot guarantee no collateral.",
    keywords: [
      ["collateral"],
      ["reckless"],
      ["careless"],
      ["clean shot"],
      ["unnecessar"],
      ["2.2.b"],
    ],
    snark: "Three innocents dead so you could get one rebel. Outstanding cost-benefit analysis.",
  },
  {
    id: 5,
    situation:
      "A prisoner's toe is slightly outside the marker during AFK Freeze. A guard instantly kills them for 'not being in the marker.'",
    ruleId: "2.2.i",
    ruleTitle: "Do not be overly toxic",
    officialWording:
      "Do not foot-check; if any part of a Prisoner's body is in a location, they are considered in that location. Do not kill for extremely small mouse movements during AFK Freeze.",
    keywords: [
      ["foot-check"],
      ["foot check"],
      ["toxic"],
      ["any part", "in"],
      ["toe"],
      ["2.2.i"],
    ],
    snark: "You measured pixels. In a video game. About a toe. Seek help.",
  },
  {
    id: 6,
    situation:
      "The Warden opens cells without giving any orders first. 30 prisoners pour out into the yard with no instructions. Pure anarchy.",
    ruleId: "2.3.a",
    ruleTitle: "Do not open cells without a valid order",
    officialWording: "Cells must have a valid order before being opened.",
    keywords: [
      ["open cells", "order"],
      ["cells", "valid order"],
      ["open cells", "no order"],
      ["cells", "without", "order"],
      ["2.3.a"],
    ],
    snark: "Opening cells with no order is like opening a lion cage and saying 'surprise!' Zero plan, maximum regret.",
  },
  {
    id: 7,
    situation:
      "A guard wanders off to explore a secret room on the map, completely leaving all prisoners unattended. No rebellers are present — they're just sightseeing.",
    ruleId: "2.2.d",
    ruleTitle: "Do not be out of sight of Prisoners unless pursuing rebellers",
    officialWording:
      "You must have suspicion that there are rebellers (missing Prisoners, hearing vents be broken, being shot at, etc.).",
    keywords: [
      ["out of sight"],
      ["sight", "prisoner"],
      ["leave", "prisoner"],
      ["away from prisoner"],
      ["2.2.d"],
    ],
    snark: "Guard goes on a solo map tour while 20 prisoners are left unsupervised. Tourism isn't in the job description.",
  },
  {
    id: 8,
    situation:
      "A guard sits inside the armory for 4 minutes, not pursuing any rebels. They're just… standing there. Menacingly. With an AWP.",
    ruleId: "2.2.f",
    ruleTitle: "Do not camp restricted areas",
    officialWording: "Restricted areas include armory, vents, and areas with guns.",
    keywords: [
      ["camp", "restricted"],
      ["camp", "armory"],
      ["restricted area"],
      ["camping"],
      ["2.2.f"],
    ],
    snark: "You turned the armory into a one-man fortress. Congratulations, you've failed at the one job that requires moving.",
  },
  {
    id: 9,
    situation:
      "The Warden says 'freeze.' Another guard then tells a prisoner 'come here.' The prisoner is now stuck between two conflicting orders and gets shot no matter what they do.",
    ruleId: "2.2.h",
    ruleTitle: "Do not issue conflicting commands",
    officialWording:
      "Do not issue commands to Prisoners that would conflict with the Warden's orders or a Prisoner's LR.",
    keywords: [
      ["conflict"],
      ["conflicting"],
      ["conflicting command"],
      ["conflicting order"],
      ["2.2.h"],
    ],
    snark: "Warden says freeze, you say move. The prisoner's brain short-circuits. This is YOUR fault.",
  },
  {
    id: 10,
    situation:
      "The Warden calls a game, but never explains the rules before starting it. Prisoners have no idea what's happening and start dying immediately.",
    ruleId: "3.1.a",
    ruleTitle: "Games must be explained before starting",
    officialWording: "The Warden must explain the game prior to starting it.",
    keywords: [
      ["explain", "game"],
      ["game", "before", "start"],
      ["explain", "before"],
      ["explain", "prior"],
      ["3.1.a"],
    ],
    snark: "'The game is… uh… figure it out!' is not an explanation. It's a war crime.",
  },
  {
    id: 11,
    situation:
      "A guard picks up a T-Secret weapon from a hidden room and starts using it. They claim they 'found it fair and square.'",
    ruleId: "2.2.e",
    ruleTitle: "Do not camp or pick up T-Secrets",
    officialWording: "Guards must not camp or collect T-Secrets.",
    keywords: [
      ["t-secret"],
      ["secret"],
      ["pick up", "secret"],
      ["collect", "secret"],
      ["2.2.e"],
    ],
    snark: "Finders keepers isn't a rule in Jailbreak. Drop it. Now.",
  },
  {
    id: 12,
    situation:
      "A dead guard tells their alive teammate in Discord where the last rebel is hiding. The alive guard rushes to that location and kills the rebel.",
    ruleId: "2.1.c",
    ruleTitle: "Do not metagame",
    officialWording:
      "All game-related communication must be done in-game. Dead players may not reveal information to alive players, including locations of alive players, secrets, etc.",
    keywords: [
      ["metagam"],
      ["meta gam"],
      ["dead", "info"],
      ["dead", "reveal"],
      ["discord", "location"],
      ["outside", "game"],
      ["2.1.c"],
    ],
    snark: "Using Discord to relay intel from beyond the grave. Ghosting has a whole new meaning.",
  },
  {
    id: 13,
    situation:
      "With 20 prisoners alive, the Warden decides to play Simon Says as the first game of the round.",
    ruleId: "3.2.2",
    ruleTitle: "With 15+ Prisoners",
    officialWording:
      "No Custom Jumps. No Simon Says. No First Reaction / Last Reaction. No luck-based, trivia, or Optional Games.",
    keywords: [
      ["15", "prisoner"],
      ["simon says", "15"],
      ["simon says", "too many"],
      ["game", "restriction"],
      ["3.2.2"],
    ],
    snark: "Simon Says with 20 people? That's not a game, that's a logistical nightmare with casualties.",
  },
  {
    id: 14,
    situation:
      "A guard throws a flashbang directly at a group of fellow guards, blinding them during a rebel fight. 'Oops, my bad,' they say, as 3 guards get killed by rebels.",
    ruleId: "2.1.a",
    ruleTitle: "Do not work against your teammates",
    officialWording:
      "Teammates may not sabotage or grief their teammates. Teammates may not assist the other team in eliminating their teammates.",
    keywords: [
      ["teammate"],
      ["team kill"],
      ["teamkill"],
      ["sabotage"],
      ["grief"],
      ["work against"],
      ["friendly fire"],
      ["2.1.a"],
    ],
    snark: "Flashbanging your own team during a firefight. Friendly fire: ON. Brain cells: OFF.",
  },
  {
    id: 15,
    situation:
      "The Warden sets up Warday in a small room that has only one entrance and is directly visible from the armory door.",
    ruleId: "5.3",
    ruleTitle: "Warday",
    officialWording:
      "The warday location may not be in sight of armory. The warday location must have at least 2 entrances. A teleport counts as one entrance.",
    keywords: [
      ["warday", "entrance"],
      ["warday", "armory"],
      ["warday", "2 entrance"],
      ["warday", "one entrance"],
      ["warday", "sight", "armory"],
      ["5.3"],
    ],
    snark: "One entrance, armory in view. You didn't set up a warday, you set up an execution chamber.",
  },
];

/** Normalize text for comparison */
function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, " ").trim();
}

/**
 * Check if the player's answer matches the scenario.
 * Returns true if ANY keyword group matches (all terms in that group found in the answer).
 */
export function checkAnswer(answer: string, scenario: Scenario): boolean {
  const norm = normalize(answer);
  if (norm.length < 3) return false;

  // Also check against rule id and title
  const ruleIdNorm = normalize(scenario.ruleId);
  const ruleTitleNorm = normalize(scenario.ruleTitle);

  // Direct rule ID match
  if (norm.includes(ruleIdNorm)) return true;

  // Check keyword groups
  return scenario.keywords.some((group) =>
    group.every((term) => norm.includes(normalize(term)))
  );
}

/** Shuffle an array (Fisher-Yates) */
export function shuffleScenarios(arr: Scenario[]): Scenario[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
