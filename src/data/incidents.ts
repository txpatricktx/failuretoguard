export interface Incident {
  id: number;
  title: string;
  caseNumber: string;
  date: string;
  severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  description: string;
  rulesViolated: string[];
  witnessStatement: string;
  outcome: string;
}

export const incidents: Incident[] = [
  {
    id: 1,
    title: "The Great Cell Catastrophe",
    caseNumber: "GFA-001",
    date: "Round 3, 2:14 remaining",
    severity: "CRITICAL",
    description: "Guard opened cells without Warden order. 24 prisoners emerged simultaneously. Guard was found cowering behind a vending machine.",
    rulesViolated: ["2.2.c - Do not open cells unless ordered by Warden"],
    witnessStatement: "'I just wanted to see what the button did.' — The Guard, moments before disaster",
    outcome: "Guard slayed. Warden rage-quit. Server emptied. A dark day for Guard Failure Academy."
  },
  {
    id: 2,
    title: "Operation Spray & Pray",
    caseNumber: "GFA-002",
    date: "Round 1, 1:45 remaining",
    severity: "HIGH",
    description: "Guard opened fire on a group of 6 prisoners who were perfectly compliant and AFK frozen. Guard claimed 'one of them twitched.' Investigation revealed: nobody twitched.",
    rulesViolated: ["2.2.a - Do not shoot non-rebelling Prisoners", "2.2.b - Do not shoot carelessly"],
    witnessStatement: "'In my defense, I had lag.' — Guard (ping: 23ms)",
    outcome: "6 freekills documented. Guard reassigned to spectator duty indefinitely."
  },
  {
    id: 3,
    title: "The Phantom Warden",
    caseNumber: "GFA-003",
    date: "Round 5, 1:55 remaining",
    severity: "MEDIUM",
    description: "Player took Warden without a microphone. Attempted to give orders via text chat. By the time they finished typing 'everyone go to the big marker,' the round was over.",
    rulesViolated: ["2.3.b - Do not take Warden without a microphone"],
    witnessStatement: "'h' — The Warden's only voice communication (Discord notification sound)",
    outcome: "Warden forcibly removed. Prisoners enjoyed a 2-minute freeday."
  },
  {
    id: 4,
    title: "Armory Incident Alpha",
    caseNumber: "GFA-004",
    date: "Round 7, 0:30 remaining",
    severity: "LOW",
    description: "Guard camped armory for the entire round. Did not move. Did not shoot. Did not communicate. When asked what they were doing, responded 'guarding.' Technically correct, but absolutely useless.",
    rulesViolated: ["2.2.f - Do not camp restricted areas"],
    witnessStatement: "'I was doing my job!' — Guard, who was not doing their job",
    outcome: "Guard was found still in armory the next round. And the round after that."
  },
  {
    id: 5,
    title: "The Friendly Fire Fiasco",
    caseNumber: "GFA-005",
    date: "Round 2, 1:50 remaining",
    severity: "CRITICAL",
    description: "Guard threw an HE grenade 'at a rebel' and eliminated 3 fellow guards and 2 innocent prisoners. The rebel survived.",
    rulesViolated: ["2.2.b - Do not shoot carelessly", "2.1.a - Do not work against teammates"],
    witnessStatement: "'The grenade bounced weird.' — Guard, who threw it at a wall 2 feet away",
    outcome: "Guard achieved the rare 'Triple Team Kill + Double Freekill' combo. Permanently benched."
  },
  {
    id: 6,
    title: "Simon Says Meltdown",
    caseNumber: "GFA-006",
    date: "Round 4, 1:20 remaining",
    severity: "HIGH",
    description: "Warden attempted Simon Says but forgot the starting phrase. Said 'We are now playing Simon Says. I am Simon.' without 'Simon says' prefix. Killed 8 prisoners who followed non-Simon commands. Then killed 4 more who didn't follow Simon commands. Nobody won.",
    rulesViolated: ["3.3.4 - Simon Says must start with proper phrase", "2.3.e - Do not trick Prisoners"],
    witnessStatement: "'Simon says... wait, did I say Simon says? Did I start it? Are we playing?' — Warden",
    outcome: "All prisoners eliminated incorrectly. Admin intervention required. Warden sent to remedial training."
  },
  {
    id: 7,
    title: "The Great Escape (Guard Edition)",
    caseNumber: "GFA-007",
    date: "Round 6, 1:40 remaining",
    severity: "MEDIUM",
    description: "Guard typed '!leave' instead of '!peace' and left the CT team mid-round. Rejoined as a prisoner. Proceeded to rebel against their former teammates.",
    rulesViolated: ["2.1.a - Do not work against teammates"],
    witnessStatement: "'Autocorrect.' — Guard, in a game with no autocorrect",
    outcome: "The betrayal was swift and unexpected. Former guard eliminated 2 ex-colleagues before being stopped."
  },
  {
    id: 8,
    title: "The Invisible Guard",
    caseNumber: "GFA-008",
    date: "Round 8, 1:00 remaining",
    severity: "MEDIUM",
    description: "Guard went completely out of sight of all prisoners. Not pursuing rebels. Not doing anything. Just... gone. Found 3 minutes later in a map secret, collecting T-secrets.",
    rulesViolated: ["2.2.d - Do not be out of sight of Prisoners", "2.2.e - Do not pick up T-Secrets"],
    witnessStatement: "'I was scouting!' — Guard, who was collecting Pokemon cards or something",
    outcome: "Guard had accumulated 4 T-secrets and was building a small fort. Confiscated and slayed."
  },
  {
    id: 9,
    title: "Warday Catastrophe",
    caseNumber: "GFA-009",
    date: "Round 1, Special Day",
    severity: "HIGH",
    description: "Warden called Warday. Chose a location with one entrance directly facing armory. When told this violated rules, moved to a closet with zero entrances. When told THAT violated rules, gave up and called freeday.",
    rulesViolated: ["5.3.a - Location may not be in sight of armory", "5.3.b - Must have 2+ entrances"],
    witnessStatement: "'Every room in this map is wrong!' — Warden, who looked at 2 rooms total",
    outcome: "Freeday was called. Prisoners celebrated. Warden contemplated their life choices."
  },
  {
    id: 10,
    title: "The Foot-Check Incident",
    caseNumber: "GFA-010",
    date: "Round 3, 0:55 remaining",
    severity: "LOW",
    description: "Guard killed a prisoner because 'their toe was outside the marker.' The toe in question: approximately 1 pixel. The marker in question: had a 3-foot radius. Guard brought out a magnifying glass emoji in chat as evidence.",
    rulesViolated: ["2.2.i - Do not foot-check"],
    witnessStatement: "'LOOK AT THE PIXEL! THE PIXEL!' — Guard, losing their mind over 1/1920th of a screen",
    outcome: "Prisoner revived. Guard sentenced to 100 hours of pixel-counting therapy."
  }
];
