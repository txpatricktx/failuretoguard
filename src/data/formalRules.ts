export interface FormalSubItem {
  id: string;
  text: string;
  subitems?: FormalSubItem[];
  footnote?: string;
}

export interface FormalRule {
  id: string;
  title: string;
  preamble?: string;
  items?: FormalSubItem[];
  paragraphs?: string[];
}

export interface FormalSection {
  id: string;
  number: string;
  title: string;
  preamble?: string;
  rules: FormalRule[];
}

export const formalSections: FormalSection[] = [
  {
    id: "overview",
    number: "1",
    title: "Overview",
    rules: [
      {
        id: "1.1",
        title: "Versioning",
        paragraphs: [
          "This document's versioning takes inspiration from SemVer, where the version takes the form of MAJOR.MINOR.PATCH.",
          "• The MAJOR number increases if a rule index changes (e.g: 3.3.4 referring to Simon Says) or a new restriction is implemented.",
          "• The MINOR number increases when a rule has been changed to give more freedom / options to players.",
          "• The PATCH number increases with edits that don't change any rule's meaning, such as fixing typos or formatting.",
          "Note that changes may be made by Leadership at any point in time with no advance notice."
        ]
      },
      {
        id: "1.2",
        title: "History",
        paragraphs: [
          "10/15/25 — Version 1.0.0 — Initial Release"
        ]
      },
      {
        id: "1.3",
        title: "How to Read",
        rules: [],
        items: [
          {
            id: "1.3.1",
            text: "Direct Reference — For players that were directed to a specific part of this document (e.g: 2.2.a.i), scroll to find the correct hierarchal match. 2.2.a.i would map to Section 2 (Rules) → 2.2 Guard Rules → 2.2.a Do not shoot Prisoners → 2.2.a.i must have accurate knowledge when shooting."
          },
          {
            id: "1.3.2",
            text: "All / New Players — For players new to Jailbreak who are planning on staying as a Prisoner, the General Rules (2.1) and when you are considered rebelling (2.1.1) are most important."
          },
          {
            id: "1.3.3",
            text: "Guards — For players that plan on joining Guard, the Guard Rules (2.2) are important."
          },
          {
            id: "1.3.4",
            text: "Wardens — Wardens are expected to have sufficient knowledge of all rules. Ensure you read up on the Warden Rules (2.3) and Game Rules (3.1)."
          },
          {
            id: "1.3.5",
            text: "Admins — Admins are expected to have thorough knowledge of all rules. You will likely gain this through time and experience on the server. Reach out to an Admin Trainer with any questions, and refresh yourself on this document occasionally, especially upon any changes."
          }
        ]
      },
      {
        id: "1.4",
        title: "Roles",
        items: [
          {
            id: "1.4.1",
            text: "Warden — The Warden is the commander of the prison. Their job is to oversee the Prisoners and Guards while using games to eliminate the Prisoners to reach LR."
          },
          {
            id: "1.4.2",
            text: "Guard — Guards supplement the Warden by enforcing their orders and stifling rebellions. The Warden is selected from the Guards, and Guards must pursue Warden if none is present. Guards may also be referred to as CTs."
          },
          {
            id: "1.4.3",
            text: "Prisoner — Prisoners attempt to survive the round by either winning the games that the Warden employs until reaching LR, or rebelling against the Guards and killing them. Prisoners may also be referred to as terrorists or Ts."
          }
        ]
      }
    ]
  },
  {
    id: "rules",
    number: "2",
    title: "Rules",
    rules: [
      {
        id: "2.1",
        title: "General",
        items: [
          {
            id: "a",
            text: "Do not work against your teammates.",
            subitems: [
              { id: "i", text: "Teammates may not sabotage or grief their teammates." },
              { id: "ii", text: "Teammates may not assist the other team in eliminating their teammates except for bloodhounding as instructed by the Warden." },
              { id: "iii", text: "Guards may not bait or otherwise encourage Prisoners to rebel." }
            ]
          },
          {
            id: "b",
            text: "Do not be disruptive in-game.",
            subitems: [
              { id: "i", text: "Do not talk over the Warden." },
              { id: "ii", text: "Names must be distinct, easily readable, pronounceable, and follow our Code of Conduct." }
            ]
          },
          {
            id: "c",
            text: "Do not metagame.",
            subitems: [
              { id: "i", text: "All game-related communication must be done in-game." },
              { id: "ii", text: "Dead players may not reveal information to alive players, including locations of alive players, secrets, etc." },
              { id: "iii", text: "Favoritism towards a player for a reason outside of the game (or a trivial reason in-game) is prohibited." }
            ]
          },
          {
            id: "d",
            text: "Do not close cells.",
            footnote: "If cells are able to be closed, they must be re-opened by an available Guard."
          }
        ]
      },
      {
        id: "2.1.1",
        title: "Rebelling",
        preamble: "A Prisoner is rebelling if they...",
        items: [
          {
            id: "a",
            text: "Are red.",
            footnote: "If the Warden offers a pardon and they wish to accept it, they should clearly indicate this."
          },
          {
            id: "b",
            text: "Fail to follow the Warden's order within 3 seconds.",
            subitems: [
              { id: "i", text: "Orders such as freeze or to move to a marker imply the Prisoner should continue doing so indefinitely." },
              { id: "ii", text: "Thus, if the first command is to freeze in a marker, with a new command being to move to a new location, Prisoners have 3 seconds to start moving to the location. If they unfreeze and do not immediately pursue the new command, they are rebelling." }
            ]
          },
          { id: "c", text: "Occupy or attempt to go into restricted areas." },
          { id: "d", text: "Hold contraband out for 3 or more seconds." },
          {
            id: "e",
            text: "Use contraband unless ordered to do so by the Warden.",
            subitems: [
              { id: "i", text: "This includes attempting to use contraband, such as firing a taser while it is recharging, or firing an unloaded weapon." }
            ]
          },
          { id: "f", text: "Fail to drop contraband or back away when ordered to do so by a Guard within 3 seconds." },
          { id: "g", text: "Aid other Prisoners in rebelling." },
          { id: "h", text: "Interfere with games or activate buttons meant for Guards (see 2.1.a)." },
          { id: "i", text: "Leave cells before being ordered to." },
          { id: "j", text: "Cheat a game or LR, unless cheating was allowed." }
        ]
      },
      {
        id: "2.1.1.1",
        title: "Loopholing",
        paragraphs: [
          "Prisoners may attempt to find loopholes or technicalities in commands. If this fails and they are killed for it, it is not a freekill."
        ]
      },
      {
        id: "2.1.1.2",
        title: "Lifetime",
        paragraphs: [
          "Rebelling is an indefinite status, with the red indication being a visual guide for Guards to see who recently caused damage. If a Guard sees a Prisoner rebel early in the round and catches their username, they may shoot that Prisoner even after they are no longer red.",
          "Guards are expected to respond to rebellers within a reasonable time frame, and must apply this scrutiny to all Prisoners equally (see 2.1.c.iii)."
        ]
      },
      {
        id: "2.2",
        title: "Guard Rules",
        preamble: "These rules apply to both Guards and the Warden.",
        items: [
          {
            id: "a",
            text: "Do not shoot Prisoners who are not rebelling and have not lost a game.",
            subitems: [
              { id: "i", text: "When shooting, you must have active and accurate knowledge of whom you are shooting." },
              { id: "ii", text: "If you see a Prisoner lose a game and rejoin the stack, you may not shoot them unless you saw their name." },
              { id: "iii", text: "Do not shoot off skins. If you have not lost track of a player, shooting based on position is permitted." }
            ]
          },
          {
            id: "b",
            text: "Do not shoot unnecessarily, carelessly, or recklessly.",
            subitems: [
              { id: "i", text: "When shooting, collateral damage is expressly prohibited." },
              { id: "ii", text: "Do not shoot if you do not have a clean shot, are unsure of your backdrop, or otherwise cannot guarantee no collateral." }
            ]
          },
          { id: "c", text: "Do not open cells or press game buttons unless ordered to do so by the Warden." },
          {
            id: "d",
            text: "Do not be out of sight of Prisoners unless pursuing rebellers.",
            subitems: [
              { id: "i", text: "STs do not count as Prisoners in this regard." },
              { id: "ii", text: "You must have suspicion that there are rebellers (missing Prisoners, hearing vents be broken, being shot at, etc.)." }
            ]
          },
          { id: "e", text: "Do not camp or pick up T-Secrets." },
          { id: "f", text: "Do not camp restricted areas." },
          {
            id: "g",
            text: "You must pursue Warden if there is none.",
            subitems: [
              { id: "i", text: "Do not guard if you do not have a microphone and there are 4 or fewer Guards without microphones." },
              { id: "ii", text: "If you do not have a microphone and a Warden has not been assigned within 10 seconds, you are expected to slay." },
              { id: "iii", text: "If this occurs frequently (e.g. only one player with a mic on CT), you should consider swapping to let someone with a mic on CT." }
            ]
          },
          { id: "h", text: "Do not issue commands to Prisoners that would conflict with the Warden's orders or a Prisoner's LR." },
          {
            id: "i",
            text: "Do not be overly toxic.",
            subitems: [
              { id: "i", text: "Do not foot-check; if any part of a Prisoner's body is in a location, they are considered in that location." },
              { id: "ii", text: "Do not kill for extremely small mouse movements during AFK Freeze." }
            ]
          }
        ]
      },
      {
        id: "2.2.1",
        title: "Last Guard",
        preamble: "Last Guard automatically occurs if there were 4 or more Guards at the beginning of the round, and all but one of the Guards has been killed before LR. This is considered a disastrous outcome for the Guards, as they have failed to maintain order of the prison. As a last resort, the 'Last Guard' must eliminate as many Prisoners as they can, up until reaching LR (i.e. up until two Prisoners remain).",
        items: [
          { id: "a", text: "All Prisoners must be shot at during Last Guard." },
          { id: "b", text: "None of the Guard Rules (2.2) apply during Last Guard." }
        ]
      },
      {
        id: "2.2.2",
        title: "Freeday",
        preamble: "A freeday permits a Prisoner to not participate in games until it is revoked. The most common sources of Freedays are either the Warden dying or ST being given.",
        items: [
          {
            id: "a",
            text: "The Warden must explicitly grant and revoke Freedays.",
            subitems: [
              { id: "i", text: "If the Warden previously offered ST, marking Prisoners as ST with the !st command fulfills this requirement." }
            ]
          },
          { id: "b", text: "Commands directed to Prisoners in general (i.e. not targeted using names or the name 'STs', etc.) do not include Prisoners that have a freeday." },
          { id: "c", text: "Prisoners with ST keep their ST unless explicitly revoked." },
          { id: "d", text: "A Custom Day (5.1) may grant a Freeday to all Prisoners." }
        ]
      },
      {
        id: "2.3",
        title: "Warden Rules",
        items: [
          { id: "a", text: "Do not open cells without a valid order." },
          { id: "b", text: "Do not take Warden without a microphone." },
          { id: "c", text: "Do not unnecessarily delay the round." },
          { id: "d", text: "Orders must be repeated at least once upon request." },
          {
            id: "e",
            text: "Do not trick, confuse, mislead, or otherwise lie to Prisoners.",
            footnote: "Do not phrase commands in the form 'When I say X which is not now...'"
          },
          {
            id: "f",
            text: "If the Warden dies, it immediately becomes a freeday.",
            subitems: [
              { id: "i", text: "All Prisoners that are not actively rebelling are pardoned." },
              { id: "ii", text: "This freeday is automatically revoked upon a new Warden." },
              { id: "iii", text: "Guards must halt the current game as soon as possible if it deals damage." },
              { id: "iv", text: "The current game (if any) is canceled. If no prisoners died in it, it may be restarted." },
              { id: "v", text: "If restarting, Prisoners must be reset to a fair playfield (for example, restart at the start for climb)." }
            ]
          },
          { id: "g", text: "Do not excessively or irresponsibly pass Warden." }
        ]
      },
      {
        id: "2.3.1",
        title: "Orders",
        items: [
          { id: "a", text: "Orders are invalid within Prisoner cells." },
          { id: "b", text: "All explanations and orders must be given over voice chat." },
          { id: "c", text: "All orders automatically imply no detouring or delaying." },
          {
            id: "d",
            text: "All orders implicitly allow Prisoners 3 seconds to type.",
            subitems: [
              { id: "i", text: "(Example) During crouch-walk, Prisoners must be allowed 3 seconds to stand up, freeze, type, and resume crouch-walking." }
            ]
          },
          {
            id: "e",
            text: "Commands that include movement modifiers require Prisoners to exclusively use that modifier.",
            footnote: "Example: Shift-walk requires holding shift and does not allow jumping."
          },
          { id: "f", text: "'One step' allows for a jumping step. The Warden must specify a knifing step if they mean otherwise." },
          {
            id: "g",
            text: "'Unstacking' requires Prisoner's heads to not be overlapping.",
            footnote: "Thus, if the Warden says to unstack, Prisoners may be shot if they run further than necessary to be unstacked."
          },
          { id: "h", text: "Looking 'up' or 'down' allows for having the crosshair either above or below the horizon (respectively). The Warden must specify 'directly' up or down if they mean otherwise." }
        ]
      },
      {
        id: "2.3.2",
        title: "Special Treatment (ST)",
        preamble: "ST may take any form the Warden permits. The form may not be to kill a teammate.",
        items: [
          {
            id: "a",
            text: "ST may be given for contraband, as a pardon to rebellers ('pardon st'), or earned in a game.",
            subitems: [
              { id: "i", text: "The Warden must define how to earn ST in the game prior to starting it." },
              { id: "ii", text: "ST offerings apply to all non-rebelling Prisoners (unless it is a pardon ST). If offering ST for X, all Prisoners that meet X and accept the offer must be given it." },
              { id: "iii", text: "The Warden may be precise with the criteria. 'Gun ST' includes toy guns; 'Rifle ST' excludes pistols, etc." }
            ]
          },
          { id: "b", text: "Unless otherwise stated, the form of ST is a Freeday ST." },
          {
            id: "c",
            text: "Freeday ST must allow the Prisoner to skip at least one game.",
            subitems: [
              { id: "i", text: "This carries over Wardens. If the first Warden grants a Prisoner ST and dies prior to a game being played, the next Warden must ensure the first ST still skips at least one game." },
              { id: "ii", text: "This does not apply if there are two non-rebelling Prisoners remaining (see 2.3.2.d)." },
              { id: "iii", text: "This may be waived voluntarily by the Prisoner—the Warden may not mandate this." }
            ],
            footnote: "The Warden may give an incentive to waive this, such as choosing the next game."
          },
          {
            id: "d",
            text: "ST may not grant guaranteed LR.",
            subitems: [
              { id: "i", text: "Therefore, ST may not be given if there are 3 or fewer Prisoners alive." },
              { id: "ii", text: "The Warden must revoke ST if there are 2 or fewer non-rebelling Prisoners." }
            ]
          },
          {
            id: "e",
            text: "ST may be given for information relating to rebelling Prisoners.",
            subitems: [
              { id: "i", text: "This is referred to as bloodhounding, where the remaining Prisoners reveal the position of the rebellers." },
              { id: "ii", text: "The Warden must offer a pardon to the rebellers prior to bloodhounding." }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "games",
    number: "3",
    title: "Games",
    preamble: "Games are used to kill Prisoners off and are a vital part of Jailbreak. To encourage round variety and fairness, the following rules apply.",
    rules: [
      {
        id: "3.1",
        title: "Game Rules",
        preamble: "Games must...",
        items: [
          {
            id: "a",
            text: "Be explained by the Warden prior to starting."
          },
          {
            id: "b",
            text: "Be fair to all Prisoners.",
            subitems: [
              { id: "i", text: "Games must be winnable." },
              { id: "ii", text: "When playing a game that deals damage over time, health must be offered immediately prior to starting." },
              { id: "iii", text: "Games may not unfairly force a player that is not losing to risk losing." },
              { id: "iv", text: "Team-based games must be assigned even teams." }
            ],
            footnote: "A Prisoner dying after teams are assigned does not require re-assigning teams."
          },
          {
            id: "c",
            text: "Be productive (have winners and losers).",
            subitems: [
              { id: "i", text: "The method of deciding winners and losers (e.g: hot lava [3.1.1] or AFK Freeze) must be stated before manually killing players." },
              { id: "ii", text: "The method of deciding losers must be stated at least 3 seconds before enforcement." }
            ],
            footnote: "For AFK Freeze, it is recommended to give Prisoners advance notice so they may strategize."
          },
          { id: "d", text: "Not reward a Prisoner to kill off more than 2 of their teammates." },
          {
            id: "e",
            text: "Not kill off the majority (50%, rounded down) of Prisoners in the game where possible.",
            subitems: [
              { id: "i", text: "For 7 players, you must take at least 4 winners." },
              { id: "ii", text: "For games where 'progress' can be determined (e.g. climb), the Warden may kill the Prisoners that have made the least progress." }
            ]
          },
          {
            id: "f",
            text: "Not be changed if players have died or won.",
            subitems: [
              { id: "i", text: "Example: If playing climb, you may not change it from hard to easy climb (or vice versa) if a player has already completed." }
            ]
          }
        ]
      },
      {
        id: "3.1.1",
        title: "Hot Lava",
        preamble: "Hot lava is a method that allows the Warden to gradually kill the losers of a game that offers multiple attempts. This typically is supported via the map, but may be manually enforced in the form of killing the Prisoners if they fail a given jump, fall to the ground (eg: in climb), or teleport back to the start (eg: in surf).",
        items: [
          {
            id: "a",
            text: "Unless otherwise stated, hot lava requires a Prisoner to entirely fail a game to be killed.",
            subitems: [
              { id: "i", text: "(Example) Falling onto a lower block in climb does not count as failing." },
              { id: "ii", text: "(Example) Getting stuck or staying on a surf ramp does not count as failing." },
              { id: "iii", text: "The warden may 'move' the lava, requiring Prisoners to succeed a specific part of the game or else die." }
            ]
          },
          { id: "b", text: "If the game has a door, the door may not be closed when hot lava is active." },
          {
            id: "c",
            text: "If multiple Prisoners are equally progressed through the game (i.e. tied), the Warden may order them all to pursue.",
            subitems: [
              { id: "i", text: "In this scenario, the Prisoners are effectively playing chicken with who will succeed in the game, and who will fail." },
              { id: "ii", text: "Prisoners that do not pursue within 3 seconds may be killed." },
              { id: "iii", text: "If enough Prisoners fail the attempt such that the majority winners requirement is reached within 3 seconds, the Prisoners that did not pursue may not be shot." }
            ]
          },
          { id: "d", text: "Alternatively, the Warden may have the Prisoners that are tied play a different game separate from those that are ahead of them." },
          { id: "e", text: "Hot lava must be announced by the Warden at least 3 seconds prior to enforcement." },
          { id: "f", text: "Recalling is prohibited during hot lava." }
        ]
      },
      {
        id: "3.2",
        title: "Game Criteria",
        preamble: "A game is considered 'played' if it had winners."
      },
      {
        id: "3.2.1",
        title: "First Game",
        preamble: "A game may not be played if it...",
        items: [
          { id: "a", text: "Was the first game played the previous round." },
          { id: "b", text: "Is not a Map Game or cannot guarantee a majority of winners." }
        ]
      },
      {
        id: "3.2.2",
        title: "With ≥ 15 Prisoners",
        preamble: "A game may not be played if it...",
        items: [
          { id: "a", text: "Is a Custom Jump (3.3.3)." },
          { id: "b", text: "Is Simon Says (3.3.4)." },
          { id: "c", text: "Is First Reaction / Last Reaction (3.3.5)." },
          { id: "d", text: "Is a luck-based, trivia, or Optional Game." }
        ]
      },
      {
        id: "3.2.3",
        title: "Second Game",
        preamble: "A game may not be played if it...",
        items: [
          { id: "a", text: "Was played previously within the round." },
          { id: "b", text: "Is a luck-based game." },
          { id: "c", text: "Is a Custom Jump (3.3.3)." }
        ]
      },
      {
        id: "3.2.4",
        title: "Subsequent Games",
        preamble: "A game may not be played if it...",
        items: [
          { id: "a", text: "Was played previously within the round." },
          { id: "b", text: "Is a luck-based game with < 25% probability of winning." },
          { id: "c", text: "Is an Optional Game, unless the Prisoners opt in." }
        ]
      },
      {
        id: "3.3",
        title: "Game-Specific Rules"
      },
      {
        id: "3.3.1",
        title: "Optional Games",
        items: [
          { id: "a", text: "Players may be given the choice between an Optional Game or a Map Game." },
          { id: "b", text: "If players are allowed to skip, this game does not count towards the ST game requirement (2.3.2.b)." }
        ]
      },
      {
        id: "3.3.2",
        title: "Opinionated Games",
        preamble: "An opinionated game is an Optional Game where the winner is based (either in whole or part) on the opinion of a player.",
        items: [
          { id: "a", text: "Prisoners must be informed on what the game is prior to opting in." },
          { id: "b", text: "Prisoners may not opt out once opting in." },
          { id: "c", text: "There must be at least 2 winners." }
        ]
      },
      {
        id: "3.3.3",
        title: "Custom Jumps",
        preamble: "Custom jumps involve the Warden jumping from one location to another.",
        items: [
          { id: "a", text: "Prisoners must see the Warden successfully perform the jump." },
          { id: "b", text: "The Warden must state the start and end locations prior to attempting it." },
          {
            id: "c",
            text: "The Warden may specify additional requirements (e.g. a route, backwards, use a specific booster).",
            subitems: [
              { id: "i", text: "The Warden must perform the jump with these requirements." },
              { id: "ii", text: "Requirements must be stated prior to attempting the jump." }
            ]
          },
          { id: "d", text: "A limit of one custom jump may be played per round." },
          {
            id: "e",
            text: "If the Warden fails the jump, they must change the jump.",
            subitems: [
              { id: "i", text: "Different requirements count as different jumps." },
              { id: "ii", text: "Different start and/or stop locations count as different jumps." },
              { id: "iii", text: "The Warden may not give or do multiple attempts for the jump." }
            ]
          },
          { id: "f", text: "A limit of 2 attempts per round is allowed." }
        ]
      },
      {
        id: "3.3.4",
        title: "Simon Says",
        preamble: "Simon says involves the Warden issuing commands with or without 'Simon says' prefixed to them. Prisoners must follow the commands that start with 'Simon says', and not follow them otherwise.",
        items: [
          {
            id: "a",
            text: "Simon says must start with the phrase: \"Simon says we are now playing simon says. Simon says I am simon.\" and end with the phrase: \"Simon says we are no longer playing simon says. Simon says I am no longer simon.\"",
            footnote: "Grammatical variations such as I am → I'm are permitted."
          },
          { id: "b", text: "Confusing Prisoners (2.3.e) is allowed during Simon Says." },
          { id: "c", text: "If a 'Simon Says Custom Day' is called, the first command of the day must be a simon command (2.3.a)." },
          { id: "d", text: "It is implied that Prisoners must AFK Freeze in between commands unless otherwise stated." },
          {
            id: "e",
            text: "Simon says commands may not move Prisoners in a relative direction (i.e. forwards, backwards, left, right).",
            footnote: "Use north, east, south, or west instead."
          },
          {
            id: "f",
            text: "Simon says commands cannot stack, the newest command overrides all previous commands.",
            footnote: "Commands may include multiple actions at once, such as jump while looking up."
          },
          { id: "g", text: "The Warden may not trick Prisoners regarding the start of Simon Says." }
        ]
      },
      {
        id: "3.3.5",
        title: "First Reaction / Last Reaction",
        preamble: "This game has the Warden stating 'First Reaction' or 'Last Reaction' prior to a command. If the Warden said 'First Reaction' before their command, the first player to do the action dies. Similarly, if the warden said 'Last Reaction', the last player to do the action dies.",
        items: [
          { id: "a", text: "No more than 2 players may be killed." },
          { id: "b", text: "During 'First Reaction', only the first player to do the action may be killed." },
          {
            id: "c",
            text: "During 'Last Reaction', all Prisoners who fail to do the action within 3 seconds may be killed.",
            footnote: "If all Prisoners do the action, kill the Prisoner that did the action last."
          },
          {
            id: "d",
            text: "All commands are singular.",
            subitems: [
              { id: "i", text: "If told to crouch, it is sufficient to crouch and immediately uncrouch." }
            ]
          },
          {
            id: "e",
            text: "AFK Freeze is implied between commands.",
            subitems: [
              { id: "i", text: "If the warden says 'First Reaction Crouch', any players that jump may be killed." }
            ]
          }
        ]
      },
      {
        id: "3.3.6",
        title: "Luck-Based Games",
        items: [
          { id: "a", text: "Luck-based Map Games and luck-based Custom Games count as separate games." },
          { id: "b", text: "Thus, a max of two luck-based games total may be played per round (one Map Game and one Custom Game)." },
          { id: "c", text: "(Example) The Warden may not play Primary Secondary Melee and then One Marker Lives, as that would be two luck-based Custom Games which are considered the same game." }
        ]
      }
    ]
  },
  {
    id: "lastrequest",
    number: "4",
    title: "Last Request",
    preamble: "Last Request (LR) is reached when there are 2 remaining Prisoners.",
    rules: [
      {
        id: "4",
        title: "General LR Rules",
        items: [
          { id: "a", text: "Do not exploit LR features." },
          { id: "b", text: "Do not delay LRs." },
          { id: "c", text: "Guards may decline custom or unreasonable LRs." },
          { id: "d", text: "No cheating (basic rules) is implied; if the Prisoner says no rules, any form of cheating is permitted." },
          { id: "e", text: "Rebelling for being in restricted areas (2.1.1.c) does not apply in LR." },
          { id: "f", text: "Rebelling for holding out (2.1.1.d) or using contraband (2.1.1.e) does not apply in LR." }
        ]
      },
      {
        id: "4.1",
        title: "Shot for Shot, Mag for Mag, or NoScope",
        items: [
          { id: "a", text: "Guards must ask if there are restrictions prior to shooting." },
          { id: "b", text: "If the Prisoner shoots without stating restrictions, basic rules are implied." }
        ]
      },
      {
        id: "4.2",
        title: "Gun Toss",
        items: [
          { id: "a", text: "If the Prisoner tosses their gun without any rules, it is implied the gun tossed furthest in that direction is the winner." }
        ]
      }
    ]
  },
  {
    id: "specialdays",
    number: "5",
    title: "Special Days",
    preamble: "Special days are days that the Warden may call at the beginning of the round. Rules outside of this section do not apply during this day unless otherwise stated.",
    rules: [
      {
        id: "5",
        title: "General Special Day Rules",
        items: [
          { id: "a", text: "Actively pursue the day." },
          { id: "b", text: "The Warden must explain the day over voice chat." },
          { id: "c", text: "For non-custom days, once the day has started, the Warden may not issue new commands." }
        ]
      },
      {
        id: "5.1",
        title: "Custom Day",
        preamble: "A customized day where the warden may make up the rules of the day.",
        items: [
          { id: "a", text: "Custom days should not delay the round." },
          { id: "b", text: "Customizations that the first Warden enacts persists over Wardens." },
          { id: "c", text: "Admins have final say on the validity of a custom day." }
        ]
      },
      {
        id: "5.2",
        title: "Free for All",
        items: [
          { id: "a", text: "Do not team." }
        ]
      },
      {
        id: "5.3",
        title: "Warday",
        items: [
          { id: "a", text: "The warday location may not be in sight of armory." },
          {
            id: "b",
            text: "The warday location must have at least 2 entrances.",
            subitems: [
              { id: "i", text: "A teleport counts as one entrance." }
            ]
          },
          { id: "c", text: "Guards must remain in the warday location until expansion time." },
          { id: "d", text: "Guards may not shoot Prisoners (unless they are red) while outside of the warday location." }
        ]
      }
    ]
  },
  {
    id: "commands",
    number: "6",
    title: "Commands",
    preamble: "Commands may be run in chat (prefix ! or /), or in console (prefix css_).",
    rules: [
      {
        id: "6",
        title: "Command List",
        items: [
          { id: "guard / leave", text: "Join / leave the Guard queue" },
          { id: "w, warden", text: "Join the Warden queue as a Guard, or see who the current Warden is" },
          { id: "peace", text: "As Warden, enact peace, silencing everyone for a while" },
          { id: "pass", text: "Voluntarily pass Warden" },
          { id: "sd <day>", text: "Open the special day menu" },
          { id: "st <player>", text: "Mark a Prisoner as ST" },
          { id: "lr <lr> <guard>", text: "Open the last request menu" },
          { id: "hide, n", text: "Hide teammates" },
          { id: "rtd", text: "Roll the dice for a random perk / nerf" }
        ]
      }
    ]
  },
  {
    id: "conclusion",
    number: "7",
    title: "Conclusion",
    rules: [
      {
        id: "7",
        title: "Conclusion",
        paragraphs: [
          "Though much thought, time, and wisdom has been put into this document, no amount of words can replace in-game discretion, context, and situational awareness.",
          "Admins have final say on the interpretation and enforcement of these rules on the server. If you disagree with an interpretation, you may either report them, or reach out to an Admin Trainer or Leadership member. Do not argue in-game.",
          "The Counter-Strike Leadership team has final say on all decisions regarding the server and its operations."
        ]
      }
    ]
  },
  {
    id: "glossary",
    number: "",
    title: "Glossary",
    rules: [
      {
        id: "glossary",
        title: "Glossary",
        items: [
          { id: "ST", text: "Special Treatment" },
          { id: "LR", text: "Last Request" },
          { id: "Metagame", text: "Using information obtained outside of the game for in-game actions." },
          { id: "Second", text: "The unit of time as defined by the in-game clock. Unless otherwise specified, seconds are contiguous, meaning a value such as \"3 seconds\" refers to three consecutive seconds." },
          { id: "Freeze", text: "Restriction from using movement keys—movement modifiers and mouse movements allowed." },
          { id: "Restricted areas", text: "Areas that contain guns (including Armory), T-Secrets, or Vents. Map Games that have guns are not restricted if they are being played." },
          { id: "Contraband", text: "Any item that is not a knife or healthshot." },
          { id: "Camp", text: "Physically block entrances/exits or occupy." },
          { id: "T-Secret", text: "Hidden contraband or areas that Prisoners may hide in." },
          { id: "Mouse movement", text: "The form of input used to look around, most commonly the mouse, but may be any key that causes the viewmodel to move (e.g: +lookleft). This includes swapping your primary hands (default H)." },
          { id: "AFK Freeze", text: "Requiring Freeze and restricting all movement modifiers and mouse movements." },
          { id: "Freeday", text: "A period of time upon which the prisoner or prisoners are not required to listen to the warden commands unless otherwise revoked." },
          { id: "Movement modifiers", text: "Crouching, Shift Walking, or Jumping (+duck, +walk, +jump, respectively)." },
          { id: "Step", text: "The distance achievable within a single jump." },
          { id: "Knifing step", text: "A distance that allows you to knife the starting location." },
          { id: "Map Game", text: "A game that utilizes map-intended features." },
          { id: "Optional Game", text: "A game that prisoners must opt in to, including opinionated games, or game customizations that violate the majority winners rule (3.1.e)." },
          { id: "Custom Game", text: "A game that is not a Map Game." },
          { id: "Movement keys", text: "The keys that are bound to movement commands (+forward, +left, +back, +right). By default, these are W, A, S, and D." }
        ]
      }
    ]
  }
];
