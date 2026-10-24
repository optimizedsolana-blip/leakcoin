/* leakcoin data
   Add a leak = add an object to LEAKS. Fields:
   id        unique slug
   category  one of CATEGORIES keys
   topic     the thing it's about (used for topic chips): "GTA VI", "Claude", "iPhone"...
   status    confirmed | developing | rumor | debunked
   credibility 1-5  (5 = multiple independent sources or official confirmation)
   heat      0-100  how much attention it's getting right now (drives "Hot right now")
   date      YYYY-MM-DD of the leak itself
   headline, summary, details[], sources[], timeline[{date,event}], tags[]

   The entries below are well-known, publicly reported leaks included to show the format.
   Replace or extend them with your own. */

window.CATEGORIES = {
  gaming:        "Gaming",
  ai:            "AI",
  tech:          "Tech",
  crypto:        "Crypto",
  entertainment: "Entertainment",
  world:         "World"
};

window.LEAKS = [
  {
    id: "gta6-release-date",
    category: "gaming", topic: "GTA VI",
    status: "confirmed", credibility: 5, heat: 98,
    date: "2025-11-06",
    headline: "GTA VI pushed to November 19, 2026",
    summary: "Rockstar's second delay moved the game from May 26, 2026 to November 19, 2026. Rumors of a slip circulated for weeks before Take-Two's earnings call made it official.",
    details: [
      "Original window was fall 2025. First delay (May 2025) set May 26, 2026. Second delay (Nov 2025) set November 19, 2026.",
      "Take-Two says the extra months are for polish, not for a change in scope.",
      "Watch for: trailer 3 timing, pre-order dates, PC version timing (console-first at launch)."
    ],
    sources: ["Rockstar Newswire", "Take-Two earnings call", "Bloomberg"],
    timeline: [
      { date: "2025-05-02", event: "Rockstar delays GTA VI to May 26, 2026" },
      { date: "2025-11-06", event: "Second delay announced: November 19, 2026" }
    ],
    tags: ["Rockstar", "Take-Two", "release date"]
  },
  {
    id: "gta6-footage-hack-2022",
    category: "gaming", topic: "GTA VI",
    status: "confirmed", credibility: 5, heat: 70,
    date: "2022-09-18",
    headline: "90 GTA VI dev videos leak after Rockstar hack",
    summary: "A hacker dumped around 90 clips of in-development GTA VI on GTAForums, showing Vice City, two protagonists and debug tooling. Rockstar confirmed the breach the next day.",
    details: [
      "Footage showed early builds of Lucia and a male lead, a diner robbery and the Vice City map.",
      "The attacker, a teenager linked to the Lapsus$ group, was later convicted in the UK.",
      "Rockstar said the leak would not affect development or its long-term plans."
    ],
    sources: ["Rockstar Games statement", "BBC", "The Verge"],
    timeline: [
      { date: "2022-09-18", event: "Clips posted to GTAForums" },
      { date: "2022-09-19", event: "Rockstar confirms network intrusion" },
      { date: "2023-12-21", event: "Hacker sentenced to indefinite hospital order" }
    ],
    tags: ["Rockstar", "hack", "Lapsus$"]
  },
  {
    id: "gta6-trailer1-early",
    category: "gaming", topic: "GTA VI",
    status: "confirmed", credibility: 5, heat: 55,
    date: "2023-12-04",
    headline: "GTA VI trailer leaks on X, Rockstar drops it early",
    summary: "The first trailer was scheduled for December 5, 2023. A copy spread on X the night before, so Rockstar published it immediately. It set a YouTube record for a non-music video's first 24 hours.",
    details: [
      "Rockstar posted 'Our trailer has leaked so please watch the real thing on YouTube.'",
      "Confirmed Vice City setting, Lucia as a protagonist and a 2025 window (later delayed)."
    ],
    sources: ["Rockstar Games on X", "IGN"],
    timeline: [
      { date: "2023-12-04", event: "Trailer appears on X ahead of schedule" },
      { date: "2023-12-04", event: "Rockstar publishes official trailer early" }
    ],
    tags: ["Rockstar", "trailer"]
  },
  {
    id: "switch2-accessory-leaks",
    category: "gaming", topic: "Nintendo",
    status: "confirmed", credibility: 5, heat: 35,
    date: "2025-01-07",
    headline: "Switch 2 design shown by accessory makers before Nintendo",
    summary: "Case manufacturers displayed Switch 2 mockups at CES 2025, revealing the larger screen, magnetic Joy-Con and new U-shaped kickstand nine days before Nintendo's official reveal.",
    details: [
      "Genki demoed a 3D-printed mockup at CES; Nintendo later said Genki was not an official partner.",
      "Nintendo's reveal video on January 16, 2025 matched the leaked design closely."
    ],
    sources: ["The Verge", "Nintendo"],
    timeline: [
      { date: "2025-01-07", event: "Accessory mockups shown at CES" },
      { date: "2025-01-16", event: "Nintendo officially reveals Switch 2" },
      { date: "2025-06-05", event: "Switch 2 launches" }
    ],
    tags: ["Nintendo", "hardware", "CES"]
  },

  {
    id: "claude4-embargo-break",
    category: "ai", topic: "Claude",
    status: "confirmed", credibility: 5, heat: 80,
    date: "2025-05-22",
    headline: "Claude 4 details published hours before launch",
    summary: "A TIME article about Claude Opus 4 went live ahead of its embargo, surfacing the model names, safety classification and launch timing before Anthropic's developer event.",
    details: [
      "The piece named Claude Opus 4 and Sonnet 4 and described Opus 4 as the first model under Anthropic's ASL-3 safeguards.",
      "Anthropic announced both models later the same day at its first developer conference."
    ],
    sources: ["TIME", "Anthropic"],
    timeline: [
      { date: "2025-05-22", event: "TIME story goes live early, then is pulled" },
      { date: "2025-05-22", event: "Anthropic announces Claude Opus 4 and Sonnet 4" }
    ],
    tags: ["Anthropic", "embargo", "model launch"]
  },
  {
    id: "gpt5-github-post",
    category: "ai", topic: "ChatGPT",
    status: "confirmed", credibility: 5, heat: 76,
    date: "2025-08-06",
    headline: "GitHub blog post names GPT-5 models a day early",
    summary: "A GitHub post describing GPT-5, GPT-5 mini and GPT-5 nano for Copilot was published briefly and screenshotted before OpenAI's August 7 launch stream.",
    details: [
      "The post listed four variants: gpt-5, gpt-5-mini, gpt-5-nano and gpt-5-chat.",
      "OpenAI launched GPT-5 the next day with the same lineup."
    ],
    sources: ["GitHub Blog (removed)", "The Verge", "OpenAI"],
    timeline: [
      { date: "2025-08-06", event: "GitHub post appears and is taken down" },
      { date: "2025-08-07", event: "OpenAI launches GPT-5" }
    ],
    tags: ["OpenAI", "GitHub", "model launch"]
  },
  {
    id: "gpt2-chatbot-arena",
    category: "ai", topic: "ChatGPT",
    status: "confirmed", credibility: 5, heat: 40,
    date: "2024-04-28",
    headline: "Mystery 'gpt2-chatbot' on LMSYS was GPT-4o",
    summary: "An unlabeled model called gpt2-chatbot appeared on the Chatbot Arena and beat GPT-4. Sam Altman teased it on X. Two weeks later OpenAI confirmed it had been GPT-4o in testing.",
    details: [
      "Variants later appeared as im-a-good-gpt2-chatbot and im-also-a-good-gpt2-chatbot.",
      "OpenAI announced GPT-4o on May 13, 2024 and confirmed the arena tests."
    ],
    sources: ["LMSYS Chatbot Arena", "OpenAI", "Ars Technica"],
    timeline: [
      { date: "2024-04-28", event: "gpt2-chatbot appears on the arena" },
      { date: "2024-05-13", event: "OpenAI announces GPT-4o" }
    ],
    tags: ["OpenAI", "GPT-4o", "stealth test"]
  },
  {
    id: "openai-strawberry",
    category: "ai", topic: "ChatGPT",
    status: "confirmed", credibility: 4, heat: 38,
    date: "2024-07-12",
    headline: "Reuters reports OpenAI 'Strawberry' reasoning project",
    summary: "Internal documents described a project codenamed Strawberry aimed at models that plan ahead and research autonomously. It shipped two months later as o1.",
    details: [
      "Strawberry was reportedly the successor to a project previously known as Q*.",
      "OpenAI released o1-preview and o1-mini on September 12, 2024."
    ],
    sources: ["Reuters", "The Information", "OpenAI"],
    timeline: [
      { date: "2024-07-12", event: "Reuters publishes Strawberry report" },
      { date: "2024-09-12", event: "OpenAI releases o1-preview" }
    ],
    tags: ["OpenAI", "o1", "codename"]
  },

  {
    id: "iphone-air-dummies",
    category: "tech", topic: "iPhone",
    status: "confirmed", credibility: 5, heat: 52,
    date: "2025-03-10",
    headline: "iPhone Air shape leaks months early via dummy units",
    summary: "Factory dummy units and CAD-based renders showed an ultra-thin iPhone with a single camera bar long before Apple announced iPhone Air on September 9, 2025.",
    details: [
      "Leakers including Sonny Dickson and Majin Bu posted dummies showing the 5.6mm profile.",
      "Apple's announcement matched the leaked design, including the horizontal camera plateau."
    ],
    sources: ["MacRumors", "9to5Mac", "Apple"],
    timeline: [
      { date: "2025-03-10", event: "Dummy units circulate on X" },
      { date: "2025-09-09", event: "Apple announces iPhone Air" }
    ],
    tags: ["Apple", "hardware", "dummy units"]
  },
  {
    id: "ios26-rename",
    category: "tech", topic: "Apple",
    status: "confirmed", credibility: 5, heat: 30,
    date: "2025-05-28",
    headline: "Apple to rename iOS 19 to iOS 26, Gurman reports",
    summary: "Bloomberg reported that Apple would switch every OS to year-based version numbers. WWDC confirmed iOS 26, macOS 26 and the rest two weeks later.",
    details: [
      "The rename aligned iOS, iPadOS, macOS, watchOS, tvOS and visionOS on one number.",
      "The same report previewed the Liquid Glass redesign."
    ],
    sources: ["Bloomberg", "Apple WWDC 2025"],
    timeline: [
      { date: "2025-05-28", event: "Bloomberg reports the rename" },
      { date: "2025-06-09", event: "Apple confirms iOS 26 at WWDC" }
    ],
    tags: ["Apple", "Bloomberg", "software"]
  },

  {
    id: "sec-x-fake-etf",
    category: "crypto", topic: "Bitcoin",
    status: "debunked", credibility: 1, heat: 45,
    date: "2024-01-09",
    headline: "SEC X account posts fake spot Bitcoin ETF approval",
    summary: "A post from the SEC's official account announced approval of spot Bitcoin ETFs a day early. The account had been taken over via SIM swap. The real approval came the next day.",
    details: [
      "Bitcoin spiked and dropped within minutes as the post was deleted.",
      "The SEC said the account lacked two-factor authentication at the time.",
      "Real approval of 11 spot Bitcoin ETFs followed on January 10, 2024."
    ],
    sources: ["SEC statement", "CoinDesk", "Reuters"],
    timeline: [
      { date: "2024-01-09", event: "Fake approval post from SEC account" },
      { date: "2024-01-10", event: "SEC approves spot Bitcoin ETFs for real" }
    ],
    tags: ["SEC", "ETF", "hack"]
  },
  {
    id: "saylor-sunday-tracker",
    category: "crypto", topic: "Bitcoin",
    status: "confirmed", credibility: 4, heat: 42,
    date: "2025-01-05",
    headline: "Saylor's Sunday chart signals Strategy's Monday buys",
    summary: "Michael Saylor posts a portfolio tracker screenshot almost every Sunday before Strategy files an 8-K disclosing another Bitcoin purchase on Monday. Traders treat it as a pre-announcement.",
    details: [
      "The pattern has held across dozens of purchases since late 2024.",
      "The chart never states the amount, so the size of each buy stays unknown until the filing."
    ],
    sources: ["Michael Saylor on X", "SEC EDGAR filings"],
    timeline: [
      { date: "2024-11-10", event: "Pattern first widely noted" },
      { date: "2025-01-05", event: "Tracker post precedes a Monday 8-K again" }
    ],
    tags: ["Strategy", "MicroStrategy", "8-K"]
  },

  {
    id: "nwh-tobey-andrew-leak",
    category: "entertainment", topic: "Marvel",
    status: "confirmed", credibility: 5, heat: 28,
    date: "2021-11-10",
    headline: "Tobey and Andrew leak out of Spider-Man: No Way Home",
    summary: "Set photos, a leaked trailer frame and promo art all pointed to Tobey Maguire and Andrew Garfield returning. Sony denied it for months. Both appeared in the film.",
    details: [
      "Garfield repeatedly denied involvement in interviews before release.",
      "The film released on December 17, 2021 with both actors in major roles."
    ],
    sources: ["Variety", "Sony Pictures"],
    timeline: [
      { date: "2021-11-10", event: "Promo art with three Spider-Men circulates" },
      { date: "2021-12-17", event: "Film releases, confirming the leak" }
    ],
    tags: ["Sony", "Marvel", "casting"]
  },

  {
    id: "dobbs-draft-politico",
    category: "world", topic: "US Supreme Court",
    status: "confirmed", credibility: 5, heat: 33,
    date: "2022-05-02",
    headline: "Politico publishes leaked Dobbs draft opinion",
    summary: "A February draft majority opinion overturning Roe v. Wade leaked to Politico. The Court confirmed its authenticity the next day. The final ruling in June matched the draft in substance.",
    details: [
      "The Court's investigation did not identify who leaked the draft.",
      "It was the first full draft opinion to leak in the Court's modern history."
    ],
    sources: ["Politico", "Supreme Court statement"],
    timeline: [
      { date: "2022-05-02", event: "Politico publishes the draft" },
      { date: "2022-05-03", event: "Court confirms the draft is authentic" },
      { date: "2022-06-24", event: "Final Dobbs ruling issued" }
    ],
    tags: ["SCOTUS", "Politico", "documents"]
  }
];
