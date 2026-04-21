export type PersonalityType = 'COP' | 'ZZZZ' | 'FAKE' | '404' | 'QKIN';

export interface Answer {
  text: string;
  pointsTo: PersonalityType[];
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export const resultsData: Record<PersonalityType, { title: string; description: string }> = {
  COP: {
    title: "The Cyber Cop",
    description: "You are the self appointed moral police of the internet. Every piece of fiction needs a TED talk in your eyes. Weaponizing progressive language to attack people over fictional ships is your favorite hobby. You genuinely believe reporting posts makes you a social justice warrior. It might be time to log off and touch some grass."
  },
  ZZZZ: {
    title: "The Innocent Bystander",
    description: "You are just here for the vibes. The fandom could literally burn to the ground around you and you would still be reading your fluffy fanfic in the corner. Drama is your absolute worst enemy. You carefully avoid any online fights to protect your mental health. Your ultimate survival strategy is pure silence and a heavily blocked timeline."
  },
  FAKE: {
    title: "The 2D Simp",
    description: "You are completely obsessed with gorgeous fictional men. Real life is simply too ugly and complicated for your taste. You heavily consume gay romance but maintain a strict distance from actual queer politics. You strictly demand a perfectly aesthetic utopia without any messy reality attached to it."
  },
  '404': {
    title: "The Agent of Chaos",
    description: "You thrive in the absolute mess of the internet. Winning fandom wars does not matter to you as long as you get some good screenshots. You speak fluent coded slang and know every single piece of gossip. Your camera roll serves as a historical archive for deleted internet drama. You just want to watch the world burn."
  },
  QKIN: {
    title: "The True Queer Kin",
    description: "You serve as the actual backbone of the community. You understand that fiction is complicated and you firmly refuse to bully people over their weird kinks. Building real solidarity against censorship is your main goal. You actually step up to protect marginalized voices when things get tough. You are the warm shelter in a very toxic digital world."
  }
};

export const questions: Question[] = [
  {
    id: 1,
    text: "When you encounter highly triggering or R-18 fanart that makes you uncomfortable, what is your first reaction?",
    answers: [
      { text: "I screenshot it to put the creator on blast. I call them out for being a misogynist and report the post to get them canceled.", pointsTo: ['COP'] },
      { text: "This is gross. BL should be pure and aesthetic. This ruins my perfect flawless headcanon of the boys.", pointsTo: ['FAKE'] },
      { text: "I smash that block button and keep scrolling. I just pray the algorithm stops putting this on my timeline.", pointsTo: ['ZZZZ'] },
      { text: "This is absolutely unhinged. I save it to drop in my group chat for shock value, or I just respect that people have weird kinks.", pointsTo: ['404', 'QKIN'] }
    ]
  },
  {
    id: 2,
    text: "How do you view long comments that force moral lessons under 'guilty pleasure' content like silly smut or fluffy fanfic?",
    answers: [
      { text: "Media literacy is dead. All media affects society, and even smut needs to remain politically correct.", pointsTo: ['COP'] },
      { text: "Please spare me. I just want to read some brainless fluff after a long day of suffering. Stop giving me TED talks in the comments.", pointsTo: ['ZZZZ', 'FAKE'] },
      { text: "I hate this. Forcing moral purity tests on fictional kinks is just cyberbullying disguised as social justice. I will fight them in the replies.", pointsTo: ['QKIN'] },
      { text: "I am just here for the drama. I like the funniest insults from both sides and take screenshots for the group chat without ever joining in.", pointsTo: ['404'] }
    ]
  },
  {
    id: 3,
    text: "A big author gets bullied off the platform and announces they are deleting their account. In the comment section of their goodbye post, you will:",
    answers: [
      { text: "Say good riddance. They were pushing a toxic agenda anyway, so this is just the trash taking itself out.", pointsTo: ['COP'] },
      { text: "Carefully type out a supportive goodbye comment to avoid getting attacked myself, and then complain about the toxic haters in my private Discord.", pointsTo: ['ZZZZ'] },
      { text: "Feel furious. I publicly call out the bullies in the comments to defend the author, even if it means my own account gets targeted.", pointsTo: ['QKIN'] },
      { text: "Realize another one bites the dust. I will quickly check if anyone saved the PDFs of their fics before the account gets totally nuked.", pointsTo: ['404', 'FAKE'] }
    ]
  },
  {
    id: 4,
    text: "In real life, how do you react when you see news about Pride parades or LGBTQ rights?",
    answers: [
      { text: "I stay vigilant against the woke agenda. Real life gay men are actually super problematic and misogynistic.", pointsTo: ['COP', 'FAKE'] },
      { text: "I might quietly drop a like on the post or just scroll past. I am definitely not opening my mouth in the comment section to invite trouble.", pointsTo: ['ZZZZ'] },
      { text: "I feel genuinely happy. I hope queer folks in the real world get safer spaces, and I will actively support or educate others if I can.", pointsTo: ['QKIN'] },
      { text: "This has literally nothing to do with me. The comment section turning into a warzone is pretty entertaining to watch though.", pointsTo: ['404'] }
    ]
  },
  {
    id: 5,
    text: "What does a perfect 'Digital Third Space' (fandom community) look like to you?",
    answers: [
      { text: "A heavily moderated space that is totally unproblematic and perfectly aligns with progressive feminist standards.", pointsTo: ['COP'] },
      { text: "A pure utopia where gorgeous 2D men fall in love without any connection to the ugly reality of 3D men.", pointsTo: ['FAKE'] },
      { text: "A cozy bubble with endless fanfics where nobody bothers me. The world could end and I would still be reading.", pointsTo: ['ZZZZ'] },
      { text: "A warm shelter that tolerates messy kinks and allows mistakes. We protect each other when the censorship hammer drops.", pointsTo: ['QKIN'] }
    ]
  },
  {
    id: 6,
    text: "If someone asks why your fandom invents so many complex acronyms and coded slang, you would say:",
    answers: [
      { text: "Censored words are censored because they are trashy. Inventing acronyms is just ruining the Chinese language for everyone else.", pointsTo: ['COP'] },
      { text: "We literally have no choice. I just want to read my fics. I memorize these codes better than my school notes so my account survives the ban wave.", pointsTo: ['FAKE', 'ZZZZ'] },
      { text: "It is hilarious. Cyber slang is like encrypted spy talk. Watching normal people try to decipher our posts is the best part of my day.", pointsTo: ['404'] },
      { text: "It is a heartbreaking reality. Even if we have to use broken codes and emojis, we must speak the words the system tries to erase.", pointsTo: ['QKIN'] }
    ]
  },
  {
    id: 7,
    text: "How do you think female characters should be written in fanfic?",
    answers: [
      { text: "They must be girlbosses. Showing any female weakness or writing them as hopeless romantics is pushing a pick-me agenda.", pointsTo: ['COP'] },
      { text: "It is best if they do not exist at all. An all male cast is superior. Women just ruin the vibe of the romance.", pointsTo: ['FAKE'] },
      { text: "I do not really care as long as the plot is good. The author can write whatever they want and I will read it if it slaps.", pointsTo: ['ZZZZ', 'QKIN'] },
      { text: "They just need to be complex and real. I hate flat stereotypes and they do not need to fit some politically correct feminist template.", pointsTo: ['QKIN', 'ZZZZ'] }
    ]
  },
  {
    id: 8,
    text: "The official franchise drops a controversial plotline that fans call misogynistic. What is your reaction?",
    answers: [
      { text: "I go straight to the trenches. I spam the official account with hate and attack any fans who still defend the franchise for being bootlickers.", pointsTo: ['COP'] },
      { text: "The plot is definitely trash. I will analyze why it sucks on my own page, but I refuse to join the mindless spamming and harassment campaign.", pointsTo: ['QKIN', 'ZZZZ'] },
      { text: "The plot is bad but the official team is always garbage. I complain in my group chat for five minutes and go back to reading fanfics.", pointsTo: ['ZZZZ'] },
      { text: "Let them fight. The fandom wars in the comment section are way more entertaining than the actual canon plot.", pointsTo: ['404'] }
    ]
  },
  {
    id: 9,
    text: "An author gets attacked for trauma-dumping their real life family or school pressure onto a character. Haters accuse them of making the character a self-insert. How do you view this?",
    answers: [
      { text: "The hate is justified. We just want to read about perfect fictional boys. Trauma-dumping your real life baggage onto a character is selfish and cringe.", pointsTo: ['COP', 'FAKE'] },
      { text: "This breaks my heart. Fanfic is a coping mechanism. It is cruel to attack someone for weaving their real pain into their art, and I will loudly defend them.", pointsTo: ['QKIN'] },
      { text: "I completely understand their need to vent and feel awful for them. I will stay quiet but silently support them to avoid getting dragged into the mess.", pointsTo: ['ZZZZ'] },
      { text: "How is this even drama? I am taking screenshots straight to an anonymous forum to farm some engagement and see people fight over it.", pointsTo: ['404'] }
    ]
  }
];