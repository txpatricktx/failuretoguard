export interface Rule {
  id: string;
  title: string;
  content: string[];
  subitems?: string[];
  guardFail?: string;
}

export interface RuleSection {
  id: string;
  title: string;
  icon: string;
  description?: string;
  rules: Rule[];
}

export const ruleSections: RuleSection[] = [
  {
    id: "overview",
    title: "Overview",
    icon: "📋",
    description: "Jailbreak is a gamemode involving two teams — Guards and Prisoners, with the Warden attempting to control the Prisoners.",
    rules: [
      {
        id: "1.4.1",
        title: "Warden",
        content: [
          "The Warden is the commander of the prison. Their job is to oversee the Prisoners and Guards while using games to eliminate the Prisoners to reach LR."
        ]
      },
      {
        id: "1.4.2",
        title: "Guard",
        content: [
          "Guards supplement the Warden by enforcing their orders and stifling rebellions.",
          "The Warden is selected from the Guards, and Guards must pursue Warden if none is present.",
          "Guards may also be referred to as CTs."
        ]
      },
      {
        id: "1.4.3",
        title: "Prisoner",
        content: [
          "Prisoners attempt to survive the round by either winning the games that the Warden employs until reaching LR, or rebelling against the Guards and killing them.",
          "Prisoners may also be referred to as terrorists or Ts."
        ]
      }
    ]
  },
  {
    id: "general",
    title: "General Rules",
    icon: "⚖️",
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
          "Dead players may not reveal information to alive players, including locations of alive players, secrets, etc.",
          "Favoritism towards a player for a reason outside of the game (or a trivial reason in-game) is prohibited."
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
    description: "A Prisoner is considered rebelling if they meet any of the following criteria.",
    rules: [
      {
        id: "2.1.1",
        title: "A Prisoner is rebelling if they...",
        content: [
          "Are red. If the Warden offers a pardon and they wish to accept it, they should clearly indicate this.",
          "Fail to follow the Warden's order within 3 seconds.",
          "Occupy or attempt to go into restricted areas.",
          "Hold contraband out for 3 or more seconds.",
          "Use contraband unless ordered to do so by the Warden. This includes attempting to use contraband, such as firing a taser while it is recharging, or firing an unloaded weapon.",
          "Fail to drop contraband or back away when ordered to do so by a Guard within 3 seconds.",
          "Aid other Prisoners in rebelling.",
          "Interfere with games or activate buttons meant for Guards.",
          "Leave cells before being ordered to.",
          "Cheat a game or LR, unless cheating was allowed."
        ],
        guardFail: "Guard Fail: Shot a prisoner for 'rebelling' because they sneezed on their mic. Trigger-happy much?"
      },
      {
        id: "2.1.1.b",
        title: "Order Timing",
        content: [
          "Orders such as freeze or to move to a marker imply the Prisoner should continue doing so indefinitely.",
          "If the first command is to freeze in a marker, with a new command being to move to a new location, Prisoners have 3 seconds to start moving.",
          "If they unfreeze and do not immediately pursue the new command, they are rebelling."
        ]
      },
      {
        id: "2.1.1.1",
        title: "Loopholing",
        content: [
          "Prisoners may attempt to find loopholes or technicalities in commands.",
          "If this fails and they are killed for it, it is not a freekill."
        ],
        guardFail: "Guard Fail: 'I said walk to the marker!' Prisoner: 'You didn't say WHICH marker.' *chef's kiss*"
      },
      {
        id: "2.1.1.2",
        title: "Lifetime Rebelling",
        content: [
          "Rebelling is an indefinite status. It is only removed with a Warden's pardon or death.",
          "The red indication is a visual guide for Guards to see who recently caused damage.",
          "If a Guard sees a Prisoner rebel early in the round and catches their username, they may shoot that Prisoner even after they are no longer red.",
          "Guards are expected to respond to rebellers within a reasonable time frame, and must apply this scrutiny to all Prisoners equally."
        ]
      }
    ]
  },
  {
    id: "guard",
    title: "Guard Rules",
    icon: "🛡️",
    description: "These rules apply to both Guards and the Warden.",
    rules: [
      {
        id: "2.2.a",
        title: "Do not shoot Prisoners who are not rebelling and have not lost a game",
        content: [
          "When shooting, you must have active and accurate knowledge of whom you are shooting.",
          "If you see a Prisoner lose a game and rejoin the stack, you may not shoot them unless you saw their name.",
          "Do not shoot off skins. If you have not lost track of a player, shooting based on position is permitted."
        ],
        guardFail: "Guard Fail: 'They all look the same!' is NOT a valid defense for freekilling 4 prisoners."
      },
      {
        id: "2.2.b",
        title: "Do not shoot unnecessarily, carelessly, or recklessly",
        content: [
          "When shooting, collateral damage is expressly prohibited.",
          "Do not shoot if you do not have a clean shot, are unsure of your backdrop, or otherwise cannot guarantee no collateral."
        ],
        guardFail: "Guard Fail: Sprayed through 3 innocent prisoners to hit 1 rebel. 'Collateral damage' they said. 'Skill issue' we said."
      },
      {
        id: "2.2.c",
        title: "Do not open cells or press game buttons unless ordered by the Warden",
        content: [
          "Only the Warden may order cells to be opened or game buttons pressed."
        ],
        guardFail: "Guard Fail: Accidentally opened cells while trying to spray paint. 30 prisoners poured out like a broken dam."
      },
      {
        id: "2.2.d",
        title: "Do not be out of sight of Prisoners unless pursuing rebellers",
        content: [
          "STs do not count as Prisoners in this regard.",
          "You must have suspicion that there are rebellers (missing Prisoners, hearing vents be broken, being shot at, etc.)."
        ],
        guardFail: "Guard Fail: Went to the bathroom IRL while guarding. Came back to find 0 prisoners and 0 teammates alive."
      },
      {
        id: "2.2.e",
        title: "Do not camp or pick up T-Secrets",
        content: [
          "Guards must not camp or collect T-Secrets."
        ],
        guardFail: "Guard Fail: Found a secret room and just... stayed there. For the entire round. Doing nothing."
      },
      {
        id: "2.2.f",
        title: "Do not camp restricted areas",
        content: [
          "Restricted areas include armory, vents, and areas with guns."
        ],
        guardFail: "Guard Fail: Camped armory for 3 minutes straight. The prisoners have been on a freeday this whole time."
      },
      {
        id: "2.2.g",
        title: "You must pursue Warden if there is none",
        content: [
          "Do not guard if you do not have a microphone and there are 4 or fewer Guards without microphones.",
          "If you do not have a mic and a Warden has not been assigned within 10 seconds, you are expected to slay.",
          "If this occurs frequently (e.g. only one player with a mic on CT), you should consider swapping to let someone with a mic on CT."
        ],
        guardFail: "Guard Fail: No mic, no Warden, no plan. Just vibes. Got slayed 10 seconds later."
      },
      {
        id: "2.2.h",
        title: "Do not issue conflicting commands",
        content: [
          "Do not issue commands to Prisoners that would conflict with the Warden's orders or a Prisoner's LR."
        ],
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
    description: "Automatically occurs if there were 4+ Guards at round start and all but one have been killed before LR. This is a disastrous outcome — the Guards have failed to maintain order.",
    rules: [
      {
        id: "2.2.1",
        title: "Last Guard Rules",
        content: [
          "The Last Guard must eliminate as many Prisoners as they can, up until reaching LR (2 Prisoners remain).",
          "All Prisoners must be shot at during Last Guard.",
          "None of the Guard Rules (2.2) apply during Last Guard."
        ],
        guardFail: "Guard Fail: Became Last Guard 15 seconds into the round. A new speedrun record for incompetence."
      }
    ]
  },
  {
    id: "freeday",
    title: "Freeday",
    icon: "🕊️",
    description: "A freeday permits a Prisoner to not participate in games until it is revoked. The most common sources are the Warden dying or ST being given.",
    rules: [
      {
        id: "2.2.2.a",
        title: "Granting and Revoking Freedays",
        content: [
          "The Warden must explicitly grant and revoke Freedays.",
          "If the Warden previously offered ST, marking Prisoners as ST with the !st command fulfills this requirement."
        ]
      },
      {
        id: "2.2.2.b",
        title: "Commands During Freeday",
        content: [
          "Commands directed to Prisoners in general (i.e. not targeted using names or 'STs', etc.) do not include Prisoners that have a freeday."
        ]
      },
      {
        id: "2.2.2.c",
        title: "ST Persistence",
        content: [
          "Prisoners with ST keep their ST unless explicitly revoked."
        ]
      },
      {
        id: "2.2.2.d",
        title: "Custom Day Freeday",
        content: [
          "A Custom Day may grant a Freeday to all Prisoners."
        ]
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
        content: [
          "Cells must have a valid order before being opened."
        ],
        guardFail: "Guard Fail: Opened cells, said nothing, and watched chaos unfold like a nature documentary."
      },
      {
        id: "2.3.b",
        title: "Do not take Warden without a microphone",
        content: [
          "A microphone is required to be Warden."
        ],
        guardFail: "Guard Fail: Took Warden with no mic. Typed orders at 5 WPM while prisoners ran free."
      },
      {
        id: "2.3.c",
        title: "Do not unnecessarily delay the round",
        content: [
          "Keep the game moving. Do not waste time."
        ],
        guardFail: "Guard Fail: Spent 4 minutes explaining the rules of Simon Says. Lost half the server to boredom disconnects."
      },
      {
        id: "2.3.d",
        title: "Orders must be repeated at least once upon request",
        content: [
          "If a Prisoner asks, repeat your order."
        ]
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
          "All Prisoners that are not actively rebelling are pardoned.",
          "This freeday is automatically revoked upon a new Warden.",
          "Guards must halt the current game as soon as possible if it deals damage.",
          "The current game (if any) is canceled. If no prisoners died in it, it may be restarted.",
          "If restarting, Prisoners must be reset to a fair playfield (for example, restart at the start for climb)."
        ],
        guardFail: "Guard Fail: Warden died. Guards kept shooting prisoners playing the game. 'Freeday? What's that?'"
      },
      {
        id: "2.3.g",
        title: "Do not excessively or irresponsibly pass Warden",
        content: [
          "Don't hot-potato the Warden role."
        ],
        guardFail: "Guard Fail: Passed Warden 6 times in 10 seconds. It's not a relay race."
      }
    ]
  },
  {
    id: "orders",
    title: "Warden Orders",
    icon: "📢",
    description: "Rules governing how the Warden issues orders to Prisoners.",
    rules: [
      {
        id: "2.3.1.a",
        title: "Orders are invalid within Prisoner cells",
        content: [
          "Orders given while Prisoners are still in cells do not apply."
        ]
      },
      {
        id: "2.3.1.b",
        title: "All orders must be given over voice chat",
        content: [
          "All explanations and orders must be given over voice chat."
        ]
      },
      {
        id: "2.3.1.c",
        title: "All orders automatically imply no detouring or delaying",
        content: [
          "Prisoners must go directly where ordered without taking detours."
        ]
      },
      {
        id: "2.3.1.d",
        title: "All orders implicitly allow Prisoners 3 seconds to type",
        content: [
          "During crouch-walk, Prisoners must be allowed 3 seconds to stand up, freeze, type, and resume crouch-walking."
        ]
      },
      {
        id: "2.3.1.e",
        title: "Movement modifier commands require exclusive use",
        content: [
          "Commands that include movement modifiers require Prisoners to exclusively use that modifier.",
          "Example: Shift-walk requires holding shift and does not allow jumping."
        ]
      },
      {
        id: "2.3.1.f",
        title: "'One step' allows for a jumping step",
        content: [
          "The Warden must specify a knifing step if they mean otherwise."
        ]
      },
      {
        id: "2.3.1.g",
        title: "'Unstacking' requires heads to not be overlapping",
        content: [
          "If the Warden says to unstack, Prisoners may be shot if they run further than necessary to be unstacked."
        ]
      },
      {
        id: "2.3.1.h",
        title: "Looking 'up' or 'down'",
        content: [
          "Looking 'up' or 'down' allows for having the crosshair either above or below the horizon (respectively).",
          "The Warden must specify 'directly' up or down if they mean otherwise."
        ]
      }
    ]
  },
  {
    id: "st",
    title: "Special Treatment (ST)",
    icon: "⭐",
    description: "ST may take any form the Warden permits (the form may not be to kill a teammate).",
    rules: [
      {
        id: "2.3.2.a",
        title: "Granting ST",
        content: [
          "ST may be given for contraband, as a pardon to rebellers ('pardon ST'), or earned in a game.",
          "The Warden must define how to earn ST in the game prior to starting it.",
          "ST offerings apply to all non-rebelling Prisoners (unless it is a pardon ST). If offering ST for X, all Prisoners that meet X and accept the offer must be given it.",
          "The Warden may be precise with the criteria. 'Gun ST' includes toy guns; 'Rifle ST' excludes pistols, etc."
        ]
      },
      {
        id: "2.3.2.b",
        title: "Default Form of ST",
        content: [
          "Unless otherwise stated, the form of ST is a Freeday ST."
        ]
      },
      {
        id: "2.3.2.c",
        title: "Freeday ST Requirements",
        content: [
          "Freeday ST must allow the Prisoner to skip at least one game.",
          "This carries over Wardens. If the first Warden grants ST and dies before a game, the next Warden must ensure the ST still skips at least one game.",
          "This does not apply if there are two non-rebelling Prisoners remaining.",
          "This may be waived voluntarily by the Prisoner — the Warden may not mandate this. The Warden may give an incentive to waive, such as choosing the next game."
        ]
      },
      {
        id: "2.3.2.d",
        title: "ST May Not Grant Guaranteed LR",
        content: [
          "ST may not be given if there are 3 or fewer Prisoners alive.",
          "The Warden must revoke ST if there are 2 or fewer non-rebelling Prisoners."
        ]
      },
      {
        id: "2.3.2.e",
        title: "Bloodhounding",
        content: [
          "ST may be given for information relating to rebelling Prisoners.",
          "This is referred to as bloodhounding, where the remaining Prisoners reveal the position of the rebellers.",
          "The Warden must offer a pardon to the rebellers prior to bloodhounding."
        ]
      }
    ]
  },
  {
    id: "games",
    title: "Game Rules",
    icon: "🎮",
    description: "Games are used to eliminate Prisoners and are a vital part of Jailbreak. To encourage round variety and fairness, the following rules apply.",
    rules: [
      {
        id: "3.1.a",
        title: "Games must be explained before starting",
        content: [
          "The Warden must explain the game prior to starting it."
        ]
      },
      {
        id: "3.1.b",
        title: "Games must be fair to all Prisoners",
        content: [
          "Games must be winnable.",
          "When playing a game that deals damage over time, health must be offered immediately prior to starting.",
          "Games may not unfairly force a player that is not losing to risk losing.",
          "Team-based games must be assigned even teams. A Prisoner dying after teams are assigned does not require re-assigning teams."
        ],
        guardFail: "Guard Fail: 'The game is... uh... just stand there I guess?' *kills everyone* 'I won!'"
      },
      {
        id: "3.1.c",
        title: "Games must be productive (have winners and losers)",
        content: [
          "The method of deciding winners and losers (e.g. hot lava or AFK Freeze) must be stated before manually killing players.",
          "The method of deciding losers must be stated at least 3 seconds before enforcement."
        ]
      },
      {
        id: "3.1.d",
        title: "Games may not reward killing more than 2 teammates",
        content: [
          "A game may not reward a Prisoner to kill off more than 2 of their teammates."
        ]
      },
      {
        id: "3.1.e",
        title: "Majority Winners Rule",
        content: [
          "Games may not kill off the majority (50%, rounded down) of Prisoners where possible.",
          "For 7 players, you must take at least 4 winners.",
          "For games where 'progress' can be determined (e.g. climb), the Warden may kill the Prisoners that have made the least progress."
        ]
      },
      {
        id: "3.1.f",
        title: "Games may not be changed mid-game",
        content: [
          "If players have died or won, the game may not be changed.",
          "Example: If playing climb, you may not change it from hard to easy climb (or vice versa) if a player has already completed."
        ]
      }
    ]
  },
  {
    id: "hotlava",
    title: "Hot Lava",
    icon: "🌋",
    description: "Hot lava allows the Warden to gradually kill the losers of a game that offers multiple attempts.",
    rules: [
      {
        id: "3.1.1.a",
        title: "Failing the Game",
        content: [
          "Unless otherwise stated, hot lava requires a Prisoner to entirely fail a game to be killed.",
          "Falling onto a lower block in climb does not count as failing.",
          "Getting stuck or staying on a surf ramp does not count as failing.",
          "The Warden may 'move' the lava, requiring Prisoners to succeed a specific part of the game or else die."
        ]
      },
      {
        id: "3.1.1.b",
        title: "Door Rule",
        content: [
          "If the game has a door, the door may not be closed when hot lava is active."
        ]
      },
      {
        id: "3.1.1.c",
        title: "Tied Players",
        content: [
          "If multiple Prisoners are equally progressed (tied), the Warden may order them all to pursue.",
          "The Prisoners are effectively playing chicken with who will succeed and who will fail.",
          "Prisoners that do not pursue within 3 seconds may be killed.",
          "If enough Prisoners fail such that the majority winners requirement is reached within 3 seconds, the Prisoners that did not pursue may not be shot.",
          "Alternatively, the Warden may have tied Prisoners play a different game separate from those ahead."
        ]
      },
      {
        id: "3.1.1.e",
        title: "Announcement",
        content: [
          "Hot lava must be announced by the Warden at least 3 seconds prior to enforcement."
        ]
      },
      {
        id: "3.1.1.f",
        title: "No Recalling",
        content: [
          "Recalling is prohibited during hot lava."
        ]
      }
    ]
  },
  {
    id: "gamecriteria",
    title: "Game Criteria",
    icon: "📊",
    description: "Rules governing which games can be played when. A game is considered 'played' if it had winners.",
    rules: [
      {
        id: "3.2.1",
        title: "First Game Restrictions",
        content: [
          "May not be the same as the first game played the previous round.",
          "Must be a Map Game or a game that can guarantee a majority of winners."
        ]
      },
      {
        id: "3.2.2",
        title: "With 15+ Prisoners",
        content: [
          "No Custom Jumps.",
          "No Simon Says.",
          "No First Reaction / Last Reaction.",
          "No luck-based, trivia, or Optional Games."
        ]
      },
      {
        id: "3.2.3",
        title: "Second Game Restrictions",
        content: [
          "May not be a game already played this round.",
          "No luck-based games.",
          "No Custom Jumps."
        ]
      },
      {
        id: "3.2.4",
        title: "Subsequent Game Restrictions",
        content: [
          "May not be a game already played this round.",
          "No luck-based games with less than 25% probability of winning.",
          "No Optional Games, unless the Prisoners opt in."
        ]
      }
    ]
  },
  {
    id: "gamespecific",
    title: "Game-Specific Rules",
    icon: "🎯",
    rules: [
      {
        id: "3.3.1",
        title: "Optional Games",
        content: [
          "Players may be given the choice between an Optional Game or a Map Game.",
          "If players are allowed to skip, this game does not count towards the ST game requirement."
        ]
      },
      {
        id: "3.3.2",
        title: "Opinionated Games",
        content: [
          "An opinionated game is an Optional Game where the winner is based (either in whole or part) on the opinion of a player.",
          "Prisoners must be informed on what the game is prior to opting in.",
          "Prisoners may not opt out once opting in.",
          "There must be at least 2 winners."
        ]
      },
      {
        id: "3.3.3",
        title: "Custom Jumps",
        content: [
          "Prisoners must see the Warden successfully perform the jump.",
          "The Warden must state the start and end locations prior to attempting it.",
          "The Warden may specify additional requirements (e.g. a route, backwards, use a specific booster). The Warden must perform the jump with these requirements, stated prior to attempting.",
          "A limit of one custom jump may be played per round.",
          "If the Warden fails the jump, they must change the jump. Different requirements or different start/stop locations count as different jumps.",
          "The Warden may not give or do multiple attempts for the same jump.",
          "A limit of 2 attempts per round is allowed."
        ],
        guardFail: "Guard Fail: Failed the custom jump 3 times, then blamed 64-tick servers. Classic."
      },
      {
        id: "3.3.4",
        title: "Simon Says",
        content: [
          "Must start with: 'Simon says we are now playing simon says. Simon says I am simon.'",
          "Must end with: 'Simon says we are no longer playing simon says. Simon says I am no longer simon.'",
          "Grammatical variations such as I am → I'm are permitted.",
          "Confusing Prisoners (2.3.e) IS allowed during Simon Says.",
          "If a 'Simon Says Custom Day' is called, the first command of the day must be a simon command.",
          "AFK Freeze is implied between commands unless otherwise stated.",
          "Simon says commands may not move Prisoners in a relative direction (forwards, backwards, left, right). Use north, east, south, or west instead.",
          "Simon says commands cannot stack — the newest command overrides all previous commands. Commands may include multiple actions at once, such as jump while looking up.",
          "The Warden may not trick Prisoners regarding the start of Simon Says."
        ],
        guardFail: "Guard Fail: 'Simon says simon says simon says.' Everyone's brain melted. Including the Warden's."
      },
      {
        id: "3.3.5",
        title: "First Reaction / Last Reaction",
        content: [
          "The Warden states 'First Reaction' or 'Last Reaction' prior to a command.",
          "First Reaction: The first player to do the action dies. Only the first player may be killed.",
          "Last Reaction: All Prisoners who fail to do the action within 3 seconds may be killed. If all Prisoners do the action, kill the Prisoner that did the action last.",
          "No more than 2 players may be killed.",
          "All commands are singular. If told to crouch, it is sufficient to crouch and immediately uncrouch.",
          "AFK Freeze is implied between commands. If the Warden says 'First Reaction Crouch', any players that jump may be killed."
        ]
      },
      {
        id: "3.3.6",
        title: "Luck-Based Games",
        content: [
          "Luck-based Map Games and luck-based Custom Games count as separate game types.",
          "A max of two luck-based games total may be played per round (one Map Game and one Custom Game).",
          "Example: The Warden may not play Primary Secondary Melee and then One Marker Lives, as that would be two luck-based Custom Games."
        ]
      }
    ]
  },
  {
    id: "lr",
    title: "Last Request (LR)",
    icon: "🎰",
    description: "Last Request is reached when there are 2 remaining Prisoners.",
    rules: [
      {
        id: "4",
        title: "General LR Rules",
        content: [
          "Do not exploit LR features.",
          "Do not delay LRs.",
          "Guards may decline custom or unreasonable LRs.",
          "No cheating (basic rules) is implied; if the Prisoner says 'no rules', any form of cheating is permitted.",
          "Rebelling for being in restricted areas (2.1.1.c) does not apply in LR.",
          "Rebelling for holding out (2.1.1.d) or using contraband (2.1.1.e) does not apply in LR."
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
          "If the Prisoner tosses their gun without any rules, it is implied the gun tossed furthest in that direction is the winner."
        ]
      }
    ]
  },
  {
    id: "specialdays",
    title: "Special Days",
    icon: "🎉",
    description: "Special days are called by the Warden at the beginning of the round. Rules outside of this section do not apply during the day unless otherwise stated.",
    rules: [
      {
        id: "5",
        title: "General Special Day Rules",
        content: [
          "Actively pursue the day.",
          "The Warden must explain the day over voice chat.",
          "For non-custom days, once the day has started, the Warden may not issue new commands."
        ]
      },
      {
        id: "5.1",
        title: "Custom Day",
        content: [
          "A customized day where the Warden may make up the rules of the day.",
          "Custom days should not delay the round.",
          "Customizations that the first Warden enacts persist over Wardens.",
          "Admins have final say on the validity of a custom day."
        ],
        guardFail: "Guard Fail: Called a Custom Day: 'Everyone do nothing.' Round lasted 12 minutes."
      },
      {
        id: "5.2",
        title: "Free for All",
        content: [
          "Do not team."
        ],
        guardFail: "Guard Fail: Teamed with your buddy during FFA. Very honorable. Very bannable."
      },
      {
        id: "5.3",
        title: "Warday",
        content: [
          "The warday location may not be in sight of armory.",
          "The warday location must have at least 2 entrances. A teleport counts as one entrance.",
          "Guards must remain in the warday location until expansion time.",
          "Guards may not shoot Prisoners (unless they are red) while outside of the warday location."
        ],
        guardFail: "Guard Fail: Set up warday in a room with ONE door and camped it with an AWP. Rules? Never heard of 'em."
      }
    ]
  },
  {
    id: "commands",
    title: "Commands",
    icon: "⌨️",
    description: "Commands may be run in chat (prefix ! or /), or in console (prefix css_).",
    rules: [
      {
        id: "6",
        title: "In-Game Commands",
        content: [
          "!guard / !leave — Join or leave the Guard queue",
          "!w, !warden — Join the Warden queue as a Guard, or see who the current Warden is",
          "!peace — As Warden, enact peace, silencing everyone for a while",
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
    description: "Key terms and definitions used throughout the Jailbreak rules.",
    rules: [
      {
        id: "glossary",
        title: "Key Terms",
        content: [
          "ST — Special Treatment",
          "LR — Last Request (when 2 Prisoners remain)",
          "Metagame — Using information obtained outside of the game for in-game actions",
          "Second — The unit of time as defined by the in-game clock. Unless otherwise specified, seconds are contiguous (three consecutive seconds)",
          "Freeze — Restriction from using movement keys. Movement modifiers and mouse movements are allowed",
          "AFK Freeze — Requires Freeze and restricts all movement modifiers and mouse movements",
          "Restricted Areas — Areas that contain guns (including Armory), T-Secrets, or Vents. Map Games that have guns are not restricted if they are being played",
          "Contraband — Any item that is not a knife or healthshot",
          "Camp — Physically block entrances/exits or occupy",
          "T-Secret — Hidden contraband or areas that Prisoners may hide in",
          "Mouse Movement — The form of input used to look around. This includes swapping your primary hands (default H)",
          "Freeday — A period of time upon which the Prisoner(s) are not required to listen to the Warden's commands unless otherwise revoked",
          "Movement Modifiers — Crouching, Shift Walking, or Jumping (+duck, +walk, +jump)",
          "Step — The distance achievable within a single jump",
          "Knifing Step — A distance that allows you to knife the starting location",
          "Map Game — A game that utilizes map-intended features",
          "Optional Game — A game that Prisoners must opt in to, including opinionated games, or game customizations that violate the majority winners rule",
          "Custom Game — A game that is not a Map Game",
          "Movement Keys — The keys bound to movement commands (+forward, +left, +back, +right). By default: W, A, S, and D"
        ]
      }
    ]
  }
];
