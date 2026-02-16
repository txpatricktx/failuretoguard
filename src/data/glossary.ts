export interface GlossaryTerm {
  term: string;
  official: string;
  funny: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "ST (Special Treatment)",
    official: "A status given by the Warden that allows a Prisoner special privileges, such as skipping a game.",
    funny: "The Warden's way of saying 'I like you more than the other inmates.' Teacher's pet energy."
  },
  {
    term: "LR (Last Request)",
    official: "Triggered when 2 Prisoners remain. They may choose an LR game against a Guard.",
    funny: "Your reward for surviving a prison run by the most incompetent guards in gaming history. Pick your death game."
  },
  {
    term: "Metagaming",
    official: "Using information obtained outside of the game for in-game actions.",
    funny: "When your Discord buddy tells you where the rebels are because apparently honor doesn't exist."
  },
  {
    term: "Freeze",
    official: "Restriction from using movement keys. Movement modifiers and mouse movements are still allowed.",
    funny: "Stand still but you can look around panicked like a deer in headlights. Peak gaming."
  },
  {
    term: "AFK Freeze",
    official: "Requiring Freeze AND restricting all movement modifiers and mouse movements.",
    funny: "Pretend you're a statue and pray the guard doesn't notice your involuntary mouse twitch from your cat walking on your desk."
  },
  {
    term: "Restricted Areas",
    official: "Areas containing guns (including Armory), T-Secrets, or Vents.",
    funny: "The places every new prisoner runs to immediately and every guard camps indefinitely."
  },
  {
    term: "Contraband",
    official: "Any item that is not a knife or healthshot.",
    funny: "That gun you picked up 'by accident' that you've been holding for 2.9 seconds. Drop it. DROP IT."
  },
  {
    term: "Camp",
    official: "Physically blocking entrances/exits or occupying an area.",
    funny: "What guards do instead of actually guarding. Setting up a tent in armory since 2024."
  },
  {
    term: "T-Secret",
    official: "Hidden contraband or areas that Prisoners may hide in.",
    funny: "The hidden loot that guards definitely shouldn't pick up but absolutely will 'for investigation purposes.'"
  },
  {
    term: "Freeday",
    official: "A period where Prisoners are not required to follow Warden commands unless revoked.",
    funny: "The 30 seconds of pure chaos between one Warden dying and another taking over. Vibes only."
  },
  {
    term: "Movement Modifiers",
    official: "Crouching, Shift Walking, or Jumping (+duck, +walk, +jump).",
    funny: "The three things you're NOT allowed to do during AFK Freeze but your muscle memory does anyway."
  },
  {
    term: "Freekill",
    official: "Killing a Prisoner who was not rebelling and had not lost a game.",
    funny: "The #1 cause of guard slayings, admin tickets, and existential crises. 'But they LOOKED rebellious!'"
  },
  {
    term: "Map Game",
    official: "A game that utilizes map-intended features.",
    funny: "Climb, surf, and other games where the map does the work and the Warden takes the credit."
  },
  {
    term: "Optional Game",
    official: "A game that Prisoners must opt into.",
    funny: "'Who wants to play this totally fair game?' *silence* 'Fine, we'll play something else.'"
  },
  {
    term: "Custom Game",
    official: "A game that is not a Map Game.",
    funny: "When the Warden gets creative. Results may vary from 'actually fun' to 'what is happening.'"
  },
  {
    term: "Last Guard",
    official: "When all but one Guard has been killed before LR, with 4+ Guards at round start.",
    funny: "The ultimate 'I'm not locked in here with you, you're locked in here with me' moment. Except you're absolutely locked in there with them."
  },
  {
    term: "Bloodhounding",
    official: "Remaining Prisoners reveal the position of rebellers in exchange for ST.",
    funny: "Snitching, but make it a game mechanic. Prisoners playing detective for a freeday."
  },
  {
    term: "Hot Lava",
    official: "A method allowing the Warden to gradually eliminate losers of a game with multiple attempts.",
    funny: "The floor is literally lava. Your childhood game, but now with actual consequences and angry teammates."
  },
  {
    term: "Foot-Check",
    official: "Killing a Prisoner because a small part of their body is outside a designated area. This is prohibited.",
    funny: "When a guard gets out a magnifying glass to measure if your toe pixel is 0.0001mm outside the marker. Touch grass."
  }
];
