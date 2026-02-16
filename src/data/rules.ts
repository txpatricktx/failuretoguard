export interface Rule {
  id: string;
  title: string;
  content: string[];
  guardFail?: string;
}

export interface RuleSection {
  id: string;
  title: string;
  icon: string;
  rules: Rule[];
}

export const ruleSections: RuleSection[] = [
  {
    id: "general",
    title: "General Rules",
    icon: "📋",
    rules: [
      {
        id: "2.1.a",
        title: "Do not work against your teammates",
        content: [
          "Teammates may not sabotage or grief their teammates.",
          "Teammates may not assist the other team in eliminating their teammates except for bloodhounding as instructed by the Warden.",
          "Guards may not bait or otherwise encourage Prisoners to rebel."
        ],
        guardFail: "Guard Fail: You threw a flashbang at your own teammate because 'it was funny.' Narrator: It was not funny."
      },
      {
        id: "2.1.b",
        title: "Do not be disruptive in-game",
        content: [
          "Do not talk over the Warden.",
          "Names must be distinct, easily readable, pronounceable, and follow the Code of Conduct."
        ],
        guardFail: "Guard Fail: Named yourself 'IlIlIlIlIl' and wondered why nobody could call you out. Big brain move."
      },
      {
        id: "2.1.c",
        title: "Do not metagame",
        content: [
          "All game-related communication must be done in-game.",
          "Dead players may not reveal information to alive players.",
          "Favoritism towards a player for a reason outside of the game is prohibited."
        ],
        guardFail: "Guard Fail: Discord-called your buddy to tell him where the rebels are hiding. Very cool, very legal."
      },
      {
        id: "2.1.d",
        title: "Do not close cells",
        content: [
          "If cells are able to be closed, they must be re-opened by an available Guard."
        ],
        guardFail: "Guard Fail: Closed cells on the prisoners and went AFK. Outstanding guard duty."
      }
    ]
  },
  {
    id: "rebelling",
    title: "Rebelling",
    icon: "🔴",
    rules: [
      {
        id: "2.1.1",
        title: "A Prisoner is rebelling if they...",
        content: [
          "Are red (damaged a Guard).",
          "Fail to follow the Warden's order within 3 seconds.",
          "Occupy or attempt to go into restricted areas.",
          "Hold contraband out for 3 or more seconds.",
          "Use contraband unless ordered to do so by the Warden.",
          "Fail to drop contraband or back away when ordered within 3 seconds.",
          "Aid other Prisoners in rebelling.",
          "Interfere with games or activate buttons meant for Guards.",
          "Leave cells before being ordered to.",
          "Cheat a game or LR, unless cheating was allowed."
        ],
        guardFail: "Guard Fail: Shot a prisoner for 'rebelling' because they sneezed on their mic. Trigger-happy much?"
      },
      {
        id: "2.1.1.1",
        title: "Loopholing",
        content: [
          "Prisoners may attempt to find loopholes or technicalities in commands. If this fails and they are killed for it, it is not a freekill."
        ],
        guardFail: "Guard Fail: 'I said walk to the marker!' Prisoner: 'You didn't say WHICH marker.' *chef's kiss*"
      },
      {
        id: "2.1.1.2",
        title: "Lifetime Rebelling",
        content: [
          "Rebelling is an indefinite status. The red indication is a visual guide.",
          "If a Guard sees a Prisoner rebel and catches their username, they may shoot that Prisoner even after they are no longer red.",
          "Guards must respond to rebellers within a reasonable time frame."
        ]
      }
    ]
  },
  {
    id: "guard",
    title: "Guard Rules",
    icon: "🛡️",
    rules: [
      {
        id: "2.2.a",
        title: "Do not shoot Prisoners who are not rebelling",
        content: [
          "When shooting, you must have active and accurate knowledge of whom you are shooting.",
          "If you see a Prisoner lose a game and rejoin the stack, you may not shoot them unless you saw their name.",
          "Do not shoot off skins."
        ],
        guardFail: "Guard Fail: 'They all look the same!' is NOT a valid defense for freekilling 4 prisoners."
      },
      {
        id: "2.2.b",
        title: "Do not shoot unnecessarily, carelessly, or recklessly",
        content: [
          "Collateral damage is expressly prohibited.",
          "Do not shoot if you do not have a clean shot, are unsure of your backdrop, or otherwise cannot guarantee no collateral."
        ],
        guardFail: "Guard Fail: Sprayed through 3 innocent prisoners to hit 1 rebel. 'Collateral damage' they said. 'Skill issue' we said."
      },
      {
        id: "2.2.c",
        title: "Do not open cells or press game buttons unless ordered",
        content: [
          "Only the Warden may order cells to be opened or game buttons pressed."
        ],
        guardFail: "Guard Fail: Accidentally opened cells while trying to spray paint. 30 prisoners poured out like a broken dam."
      },
      {
        id: "2.2.d",
        title: "Do not be out of sight of Prisoners",
        content: [
          "Unless pursuing rebellers.",
          "STs do not count as Prisoners in this regard.",
          "You must have suspicion that there are rebellers."
        ],
        guardFail: "Guard Fail: Went to the bathroom IRL while guarding. Came back to find 0 prisoners and 0 teammates alive."
      },
      {
        id: "2.2.e",
        title: "Do not camp or pick up T-Secrets",
        content: ["Guards must not camp or collect T-Secrets."],
        guardFail: "Guard Fail: Found a secret room and just... stayed there. For the entire round. Doing nothing."
      },
      {
        id: "2.2.f",
        title: "Do not camp restricted areas",
        content: ["Restricted areas include armory, vents, and areas with guns."],
        guardFail: "Guard Fail: Camped armory for 3 minutes straight. The prisoners have been on a freeday this whole time."
      },
      {
        id: "2.2.g",
        title: "You must pursue Warden if there is none",
        content: [
          "Do not guard if you do not have a microphone and there are 4 or fewer Guards without microphones.",
          "If you do not have a mic and Warden hasn't been assigned within 10 seconds, you are expected to slay.",
          "If this occurs frequently, consider swapping to let someone with a mic on CT."
        ],
        guardFail: "Guard Fail: No mic, no Warden, no plan. Just vibes. Got slayed 10 seconds later."
      },
      {
        id: "2.2.h",
        title: "Do not issue conflicting commands",
        content: ["Do not issue commands that would conflict with the Warden's orders or a Prisoner's LR."],
        guardFail: "Guard Fail: Warden says 'freeze.' You say 'come here.' Prisoner explodes from confusion."
      },
      {
        id: "2.2.i",
        title: "Do not be overly toxic",
        content: [
          "Do not foot-check; if any part of a Prisoner's body is in a location, they are considered in that location.",
          "Do not kill for extremely small mouse movements during AFK Freeze."
        ],
        guardFail: "Guard Fail: Killed a prisoner because their pinky toe pixel was 0.001mm outside the marker. Certified toxic."
      }
    ]
  },
  {
    id: "lastguard",
    title: "Last Guard",
    icon: "💀",
    rules: [
      {
        id: "2.2.1",
        title: "Last Guard",
        content: [
          "Automatically occurs if there were 4+ Guards at round start and all but one have been killed before LR.",
          "The Last Guard must eliminate as many Prisoners as they can until 2 remain.",
          "All Prisoners must be shot at during Last Guard.",
          "None of the Guard Rules (2.2) apply during Last Guard."
        ],
        guardFail: "Guard Fail: Became Last Guard 15 seconds into the round. A new speedrun record for incompetence."
      }
    ]
  },
  {
    id: "warden",
    title: "Warden Rules",
    icon: "👑",
    rules: [
      {
        id: "2.3.a",
        title: "Do not open cells without a valid order",
        content: ["Cells must have a valid order before being opened."],
        guardFail: "Guard Fail: Opened cells, said nothing, and watched chaos unfold like a nature documentary."
      },
      {
        id: "2.3.b",
        title: "Do not take Warden without a microphone",
        content: ["A microphone is required to be Warden."],
        guardFail: "Guard Fail: Took Warden with no mic. Typed orders at 5 WPM while prisoners ran free."
      },
      {
        id: "2.3.c",
        title: "Do not unnecessarily delay the round",
        content: ["Keep the game moving."],
        guardFail: "Guard Fail: Spent 4 minutes explaining the rules of Simon Says. Lost half the server to boredom disconnects."
      },
      {
        id: "2.3.d",
        title: "Orders must be repeated at least once upon request",
        content: ["If a prisoner asks, repeat your order."],
      },
      {
        id: "2.3.e",
        title: "Do not trick, confuse, mislead, or lie to Prisoners",
        content: [
          "Do not phrase commands in the form 'When I say X which is not now...'",
          "Exception: Confusing Prisoners IS allowed during Simon Says."
        ],
        guardFail: "Guard Fail: 'Everyone go to the- wait not yet- okay NOW- no wait' *5 prisoners shot*"
      },
      {
        id: "2.3.f",
        title: "If the Warden dies, it immediately becomes a freeday",
        content: [
          "All non-rebelling Prisoners are pardoned.",
          "Freeday is automatically revoked upon a new Warden.",
          "Guards must halt damaging games ASAP.",
          "The current game is canceled."
        ],
        guardFail: "Guard Fail: Warden died. Guards kept shooting prisoners playing the game. 'Freeday? What's that?'"
      },
      {
        id: "2.3.g",
        title: "Do not excessively or irresponsibly pass Warden",
        content: ["Don't hot-potato the Warden role."],
        guardFail: "Guard Fail: Passed Warden 6 times in 10 seconds. It's not a relay race."
      }
    ]
  },
  {
    id: "games",
    title: "Games",
    icon: "🎮",
    rules: [
      {
        id: "3.1",
        title: "Game Rules",
        content: [
          "Games must be explained by the Warden prior to starting.",
          "Games must be fair to all Prisoners and winnable.",
          "Health must be offered before damage-over-time games.",
          "Games must be productive (have winners and losers).",
          "Games may not kill off the majority (50%, rounded down) of Prisoners.",
          "Games may not be changed if players have died or won."
        ],
        guardFail: "Guard Fail: 'The game is... uh... just stand there I guess?' *kills everyone* 'I won!'"
      },
      {
        id: "3.1.1",
        title: "Hot Lava",
        content: [
          "Hot lava kills losers who entirely fail a game.",
          "Falling onto a lower block in climb does not count as failing.",
          "If the game has a door, it may not be closed when hot lava is active.",
          "Hot lava must be announced 3 seconds before enforcement.",
          "Recalling is prohibited during hot lava."
        ],
        guardFail: "Guard Fail: Turned on hot lava with zero warning. 8 prisoners evaporated instantly."
      },
      {
        id: "3.2",
        title: "Game Criteria",
        content: [
          "First Game: Cannot be the same as last round's first game.",
          "With 15+ Prisoners: No Custom Jumps, Simon Says, First/Last Reaction, luck-based, trivia, or Optional games.",
          "Second Game: Cannot repeat, no luck-based, no Custom Jumps.",
          "Subsequent: Cannot repeat, luck-based games restricted."
        ]
      },
      {
        id: "3.3.3",
        title: "Custom Jumps",
        content: [
          "Prisoners must see the Warden perform the jump.",
          "Warden must state start and end locations beforehand.",
          "Limit of one custom jump per round.",
          "If the Warden fails, they must change the jump.",
          "Limit of 2 attempts per round."
        ],
        guardFail: "Guard Fail: Failed the custom jump 3 times, then blamed 64-tick servers. Classic."
      },
      {
        id: "3.3.4",
        title: "Simon Says",
        content: [
          "Must start with: 'Simon says we are now playing simon says. Simon says I am simon.'",
          "Must end with: 'Simon says we are no longer playing simon says. Simon says I am no longer simon.'",
          "Confusing Prisoners IS allowed during Simon Says.",
          "AFK Freeze is implied between commands.",
          "Commands may not move Prisoners in relative directions.",
          "Commands cannot stack — newest overrides all previous."
        ],
        guardFail: "Guard Fail: 'Simon says simon says simon says.' Everyone's brain melted. Including the Warden's."
      },
      {
        id: "3.3.5",
        title: "First Reaction / Last Reaction",
        content: [
          "First Reaction: First player to do the action dies.",
          "Last Reaction: Last player to do the action within 3 seconds dies.",
          "No more than 2 players may be killed.",
          "All commands are singular.",
          "AFK Freeze is implied between commands."
        ]
      }
    ]
  },
  {
    id: "lr",
    title: "Last Request",
    icon: "🎯",
    rules: [
      {
        id: "4",
        title: "Last Request (LR)",
        content: [
          "LR is reached when there are 2 remaining Prisoners.",
          "Do not exploit LR features.",
          "Do not delay LRs.",
          "Guards may decline custom or unreasonable LRs.",
          "No cheating is implied; 'no rules' allows any cheating.",
          "Restricted area and contraband rebelling rules don't apply in LR."
        ],
        guardFail: "Guard Fail: Prisoner chose Shot for Shot. Guard brought an AWP. Read the room, buddy."
      },
      {
        id: "4.1",
        title: "Shot for Shot / Mag for Mag / NoScope",
        content: [
          "Guards must ask if there are restrictions prior to shooting.",
          "If the Prisoner shoots without stating restrictions, basic rules are implied."
        ]
      },
      {
        id: "4.2",
        title: "Gun Toss",
        content: [
          "If the Prisoner tosses their gun without rules, the gun tossed furthest wins."
        ]
      }
    ]
  },
  {
    id: "specialdays",
    title: "Special Days",
    icon: "🎉",
    rules: [
      {
        id: "5",
        title: "Special Days Overview",
        content: [
          "Special days are called by the Warden at the beginning of the round.",
          "Normal rules outside this section do not apply during the day.",
          "Actively pursue the day.",
          "The Warden must explain the day over voice chat.",
          "For non-custom days, once started, the Warden may not issue new commands."
        ]
      },
      {
        id: "5.1",
        title: "Custom Day",
        content: [
          "A customized day where the Warden makes up the rules.",
          "Should not delay the round.",
          "Customizations persist over Wardens.",
          "Admins have final say on validity."
        ],
        guardFail: "Guard Fail: Called a Custom Day: 'Everyone do nothing.' Round lasted 12 minutes."
      },
      {
        id: "5.2",
        title: "Free for All",
        content: ["Do not team."],
        guardFail: "Guard Fail: Teamed with your buddy during FFA. Very honorable. Very bannable."
      },
      {
        id: "5.3",
        title: "Warday",
        content: [
          "Warday location may not be in sight of armory.",
          "Location must have at least 2 entrances (teleport counts as one).",
          "Guards must remain in warday location until expansion time.",
          "Guards may not shoot Prisoners (unless red) while outside the warday location."
        ],
        guardFail: "Guard Fail: Set up warday in a room with ONE door and camped it with an AWP. Rules? Never heard of 'em."
      }
    ]
  },
  {
    id: "commands",
    title: "Commands",
    icon: "⌨️",
    rules: [
      {
        id: "6",
        title: "In-Game Commands",
        content: [
          "!guard / !leave — Join or leave the Guard queue",
          "!w, !warden — Join the Warden queue or see current Warden",
          "!peace — As Warden, silence everyone briefly",
          "!pass — Voluntarily pass Warden",
          "!sd <day> — Open the special day menu",
          "!st <player> — Mark a Prisoner as ST",
          "!lr <lr> <guard> — Open the last request menu",
          "!hide, !n — Hide teammates",
          "!rtd — Roll the dice for a random perk/nerf"
        ],
        guardFail: "Guard Fail: Typed '!leave' instead of '!peace' and left CT mid-round. Goodbye."
      }
    ]
  },
  {
    id: "glossary",
    title: "Glossary",
    icon: "📖",
    rules: [
      {
        id: "glossary",
        title: "Key Terms",
        content: [
          "ST — Special Treatment",
          "LR — Last Request (when 2 prisoners remain)",
          "Metagame — Using info obtained outside of the game for in-game actions",
          "Freeze — No movement keys; mouse movements and modifiers allowed",
          "AFK Freeze — No movement keys, no modifiers, no mouse movements at all",
          "Restricted Areas — Areas with guns (armory), T-Secrets, or Vents",
          "Contraband — Any item that is not a knife or healthshot",
          "Camp — Physically blocking entrances/exits or occupying an area",
          "T-Secret — Hidden contraband or areas Prisoners may hide in",
          "Freeday — Prisoner is not required to follow Warden commands until revoked",
          "Movement Modifiers — Crouching, Shift Walking, or Jumping",
          "Map Game — A game that uses map-intended features",
          "Optional Game — A game prisoners must opt into",
          "Custom Game — A game that is not a Map Game"
        ]
      }
    ]
  }
];
