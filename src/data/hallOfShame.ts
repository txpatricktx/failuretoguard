export interface ShameEntry {
  id: number;
  name: string;
  mugshot: string;
  category: string;
  incident: string;
  shameRating: number;
  votes: number;
}

export const shameEntries: ShameEntry[] = [
  {
    id: 1,
    name: "xX_GuardGod_Xx",
    mugshot: "👤",
    category: "Most Freekills in One Round",
    incident: "Shot 7 prisoners in 4 seconds because 'they looked suspicious.' All were AFK frozen. Perfectly still. Not a single one was rebelling. Claims his mouse 'slipped' seven times.",
    shameRating: 5,
    votes: 0
  },
  {
    id: 2,
    name: "NoMicAndy",
    mugshot: "🤐",
    category: "Worst Warden Performance",
    incident: "Took Warden with no microphone. Typed 'go to marker' at 3 WPM. By the time the order was sent, half the prisoners had already escaped through vents. Round lasted 45 seconds.",
    shameRating: 4,
    votes: 0
  },
  {
    id: 3,
    name: "TriggerHappy_Tim",
    mugshot: "🔫",
    category: "Fastest Team-Kill",
    incident: "Spawned in, turned right, and immediately headshotted a fellow guard. 'I thought he was a T.' Sir, he was wearing the same uniform as you. 0.3 seconds into the round.",
    shameRating: 5,
    votes: 0
  },
  {
    id: 4,
    name: "CellDoorCarl",
    mugshot: "🚪",
    category: "Worst Cell Management",
    incident: "Opened cells with no Warden order, no plan, and no backup. 28 prisoners swarmed out. Carl did not survive. Nobody did.",
    shameRating: 5,
    votes: 0
  },
  {
    id: 5,
    name: "ArmoryAndy",
    mugshot: "🏕️",
    category: "Best Armory Camper",
    incident: "Camped armory for the ENTIRE round. The Warden died. Freeday was called. Andy was still in armory. 'I'm protecting the weapons,' he said, guarding nothing from nobody.",
    shameRating: 3,
    votes: 0
  },
  {
    id: 6,
    name: "SimonSaysSam",
    mugshot: "🗣️",
    category: "Worst Warden Orders",
    incident: "Played Simon Says. Said 'Simon says simon says simon says crouch.' Nobody knew what to do. Killed everyone. 'They didn't follow orders.' Which orders, Sam? WHICH ONES?",
    shameRating: 5,
    votes: 0
  },
  {
    id: 7,
    name: "LastGuardLarry",
    mugshot: "😰",
    category: "Fastest Last Guard",
    incident: "All 5 guards died within 12 seconds of round start. Larry became Last Guard before cells even opened. A new record. He died 3 seconds later trying to knife a prisoner.",
    shameRating: 4,
    votes: 0
  },
  {
    id: 8,
    name: "FriendlyFred",
    mugshot: "🤝",
    category: "Most Helpful (to Prisoners)",
    incident: "Gave prisoners health, opened secret passages 'by accident,' and kept 'forgetting' to shoot rebels. Turns out Fred was on a Discord call with the T side. Classic Fred.",
    shameRating: 5,
    votes: 0
  },
  {
    id: 9,
    name: "VentCamperVince",
    mugshot: "🕳️",
    category: "Best T-Secret Enthusiast",
    incident: "Found a T-secret vent and crawled inside 'to check for rebels.' Stayed there for 4 rounds. The prisoners started bringing him snacks.",
    shameRating: 3,
    votes: 0
  },
  {
    id: 10,
    name: "PassWardenPete",
    mugshot: "🔄",
    category: "Most Warden Passes",
    incident: "Took Warden, immediately passed it. Took it again when nobody else would. Passed it again. This happened 8 times in one round. The prisoners organized a union during the confusion.",
    shameRating: 4,
    votes: 0
  }
];
