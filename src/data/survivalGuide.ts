export interface SurvivalTip {
  id: number;
  title: string;
  icon: string;
  tip: string;
  detail: string;
  relatedRule: string;
}

export const survivalTips: SurvivalTip[] = [
  {
    id: 1,
    title: "Get a Microphone",
    icon: "🎤",
    tip: "Step 1: Get a microphone. Step 2: Actually use it.",
    detail: "Without a mic, you can't be Warden, and if there's no Warden within 10 seconds, you're expected to slay. A $5 mic from Amazon is cheaper than your dignity.",
    relatedRule: "2.2.g"
  },
  {
    id: 2,
    title: "Don't Panic Shoot",
    icon: "🎯",
    tip: "If you're not 100% sure they're rebelling, DON'T SHOOT.",
    detail: "You need active and accurate knowledge of who you're shooting. 'They looked suspicious' is not a valid defense. Wait for actual evidence of rebellion — being red, holding contraband for 3+ seconds, etc.",
    relatedRule: "2.2.a"
  },
  {
    id: 3,
    title: "Stay Visible",
    icon: "👀",
    tip: "If the prisoners can't see you, you're probably doing something wrong.",
    detail: "Guards must stay in sight of prisoners unless actively pursuing rebellers. Going AFK in a corner, exploring secrets, or 'scouting' are all fancy words for 'not doing your job.'",
    relatedRule: "2.2.d"
  },
  {
    id: 4,
    title: "Don't Touch the Buttons",
    icon: "🔴",
    tip: "See a button? Don't press it. See cells? Don't open them. See a game? Don't start it.",
    detail: "Only the Warden can order cells opened or game buttons pressed. If you press something without orders, you've just created chaos. And in Jailbreak, chaos means death. Yours.",
    relatedRule: "2.2.c"
  },
  {
    id: 5,
    title: "Armory Is Not Your Home",
    icon: "🏠",
    tip: "Stop camping armory. It's not a studio apartment.",
    detail: "Camping restricted areas is against the rules. Get your gun and GET OUT. The prisoners aren't going to guard themselves. Well, they might — that's kind of the problem.",
    relatedRule: "2.2.f"
  },
  {
    id: 6,
    title: "Learn the 3-Second Rule",
    icon: "⏱️",
    tip: "3 seconds. That's how long prisoners have to comply. Count them.",
    detail: "Prisoners have 3 seconds to follow orders, drop contraband, or stop holding weapons. Don't shoot at 2 seconds. Don't shoot at 2.5. Wait the full 3. Count Mississippi's if you have to.",
    relatedRule: "2.1.1.b"
  },
  {
    id: 7,
    title: "Warden Dies = Freeday",
    icon: "☠️",
    tip: "When the Warden dies, STOP EVERYTHING. It's a freeday now.",
    detail: "Warden death = instant freeday. All non-rebelling prisoners are pardoned. Stop the current game if it deals damage. Do NOT continue shooting people who were 'losing' the game.",
    relatedRule: "2.3.f"
  },
  {
    id: 8,
    title: "No Foot-Checking",
    icon: "👣",
    tip: "If their pinky toe is in the marker, THEY'RE IN THE MARKER.",
    detail: "Any part of the body in a location = they're in that location. Don't be the guy measuring pixels. Don't kill for tiny mouse twitches during AFK Freeze. Be reasonable. Be human.",
    relatedRule: "2.2.i"
  },
  {
    id: 9,
    title: "Pursue Warden",
    icon: "👑",
    tip: "No Warden? BECOME the Warden. Or slay trying.",
    detail: "If there's no Warden, you must pursue it. If you can't (no mic), and there are 4 or fewer micless guards, you shouldn't even be on CT. Slay yourself before the admin does.",
    relatedRule: "2.2.g"
  },
  {
    id: 10,
    title: "Collateral is Not Acceptable",
    icon: "💥",
    tip: "If you can't guarantee your shot won't hit innocents, DON'T TAKE IT.",
    detail: "Collateral damage is expressly prohibited. Don't spray through a crowd to hit one rebel. Don't throw grenades into groups. If your backdrop has innocents, hold your fire.",
    relatedRule: "2.2.b"
  },
  {
    id: 11,
    title: "Don't Conflict with Warden",
    icon: "🤐",
    tip: "The Warden gives orders. You enforce them. That's the hierarchy.",
    detail: "Don't give commands that conflict with the Warden's orders. If the Warden says freeze, you don't say 'come here.' You're the muscle, not the brain. Know your role.",
    relatedRule: "2.2.h"
  },
  {
    id: 12,
    title: "T-Secrets Are Not Souvenirs",
    icon: "🗝️",
    tip: "T-Secrets are for prisoners. You're not a tourist.",
    detail: "Don't camp T-secrets. Don't pick them up. Don't 'investigate' them. You're a guard, not an archaeologist. Leave the secrets alone and do your actual job.",
    relatedRule: "2.2.e"
  }
];
