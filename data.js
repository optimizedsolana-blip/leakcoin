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
 */

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
    "id": "gta6-release-date",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "confirmed",
    "credibility": 5,
    "heat": 60,
    "date": "2025-11-06",
    "headline": "GTA VI pushed to November 19, 2026",
    "summary": "Rockstar's second delay moved the game from May 26, 2026 to November 19, 2026. Rumors of a slip circulated for weeks before Take-Two's earnings call made it official.",
    "details": [
      "Original window was fall 2025. First delay (May 2025) set May 26, 2026. Second delay (Nov 2025) set November 19, 2026.",
      "Take-Two says the extra months are for polish, not for a change in scope.",
      "Watch for: trailer 3 timing, pre-order dates, PC version timing (console-first at launch)."
    ],
    "sources": [
      "Rockstar Newswire",
      "Take-Two earnings call",
      "Bloomberg"
    ],
    "timeline": [
      {
        "date": "2025-05-02",
        "event": "Rockstar delays GTA VI to May 26, 2026"
      },
      {
        "date": "2025-11-06",
        "event": "Second delay announced: November 19, 2026"
      }
    ],
    "tags": [
      "Rockstar",
      "Take-Two",
      "release date"
    ]
  },
  {
    "id": "gta6-footage-hack-2022",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "confirmed",
    "credibility": 5,
    "heat": 70,
    "date": "2022-09-18",
    "headline": "90 GTA VI dev videos leak after Rockstar hack",
    "summary": "A hacker dumped around 90 clips of in-development GTA VI on GTAForums, showing Vice City, two protagonists and debug tooling. Rockstar confirmed the breach the next day.",
    "details": [
      "Footage showed early builds of Lucia and a male lead, a diner robbery and the Vice City map.",
      "The attacker, a teenager linked to the Lapsus$ group, was later convicted in the UK.",
      "Rockstar said the leak would not affect development or its long-term plans."
    ],
    "sources": [
      "Rockstar Games statement",
      "BBC",
      "The Verge"
    ],
    "timeline": [
      {
        "date": "2022-09-18",
        "event": "Clips posted to GTAForums"
      },
      {
        "date": "2022-09-19",
        "event": "Rockstar confirms network intrusion"
      },
      {
        "date": "2023-12-21",
        "event": "Hacker sentenced to indefinite hospital order"
      }
    ],
    "tags": [
      "Rockstar",
      "hack",
      "Lapsus$"
    ]
  },
  {
    "id": "gta6-trailer1-early",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "confirmed",
    "credibility": 5,
    "heat": 55,
    "date": "2023-12-04",
    "headline": "GTA VI trailer leaks on X, Rockstar drops it early",
    "summary": "The first trailer was scheduled for December 5, 2023. A copy spread on X the night before, so Rockstar published it immediately. It set a YouTube record for a non-music video's first 24 hours.",
    "details": [
      "Rockstar posted 'Our trailer has leaked so please watch the real thing on YouTube.'",
      "Confirmed Vice City setting, Lucia as a protagonist and a 2025 window (later delayed)."
    ],
    "sources": [
      "Rockstar Games on X",
      "IGN"
    ],
    "timeline": [
      {
        "date": "2023-12-04",
        "event": "Trailer appears on X ahead of schedule"
      },
      {
        "date": "2023-12-04",
        "event": "Rockstar publishes official trailer early"
      }
    ],
    "tags": [
      "Rockstar",
      "trailer"
    ]
  },
  {
    "id": "switch2-accessory-leaks",
    "category": "gaming",
    "topic": "Nintendo",
    "status": "confirmed",
    "credibility": 5,
    "heat": 35,
    "date": "2025-01-07",
    "headline": "Switch 2 design shown by accessory makers before Nintendo",
    "summary": "Case manufacturers displayed Switch 2 mockups at CES 2025, revealing the larger screen, magnetic Joy-Con and new U-shaped kickstand nine days before Nintendo's official reveal.",
    "details": [
      "Genki demoed a 3D-printed mockup at CES; Nintendo later said Genki was not an official partner.",
      "Nintendo's reveal video on January 16, 2025 matched the leaked design closely."
    ],
    "sources": [
      "The Verge",
      "Nintendo"
    ],
    "timeline": [
      {
        "date": "2025-01-07",
        "event": "Accessory mockups shown at CES"
      },
      {
        "date": "2025-01-16",
        "event": "Nintendo officially reveals Switch 2"
      },
      {
        "date": "2025-06-05",
        "event": "Switch 2 launches"
      }
    ],
    "tags": [
      "Nintendo",
      "hardware",
      "CES"
    ]
  },
  {
    "id": "claude4-embargo-break",
    "category": "ai",
    "topic": "Claude",
    "status": "confirmed",
    "credibility": 5,
    "heat": 80,
    "date": "2025-05-22",
    "headline": "Claude 4 details published hours before launch",
    "summary": "A TIME article about Claude Opus 4 went live ahead of its embargo, surfacing the model names, safety classification and launch timing before Anthropic's developer event.",
    "details": [
      "The piece named Claude Opus 4 and Sonnet 4 and described Opus 4 as the first model under Anthropic's ASL-3 safeguards.",
      "Anthropic announced both models later the same day at its first developer conference."
    ],
    "sources": [
      "TIME",
      "Anthropic"
    ],
    "timeline": [
      {
        "date": "2025-05-22",
        "event": "TIME story goes live early, then is pulled"
      },
      {
        "date": "2025-05-22",
        "event": "Anthropic announces Claude Opus 4 and Sonnet 4"
      }
    ],
    "tags": [
      "Anthropic",
      "embargo",
      "model launch"
    ]
  },
  {
    "id": "gpt5-github-post",
    "category": "ai",
    "topic": "ChatGPT",
    "status": "confirmed",
    "credibility": 5,
    "heat": 76,
    "date": "2025-08-06",
    "headline": "GitHub blog post names GPT-5 models a day early",
    "summary": "A GitHub post describing GPT-5, GPT-5 mini and GPT-5 nano for Copilot was published briefly and screenshotted before OpenAI's August 7 launch stream.",
    "details": [
      "The post listed four variants: gpt-5, gpt-5-mini, gpt-5-nano and gpt-5-chat.",
      "OpenAI launched GPT-5 the next day with the same lineup."
    ],
    "sources": [
      "GitHub Blog (removed)",
      "The Verge",
      "OpenAI"
    ],
    "timeline": [
      {
        "date": "2025-08-06",
        "event": "GitHub post appears and is taken down"
      },
      {
        "date": "2025-08-07",
        "event": "OpenAI launches GPT-5"
      }
    ],
    "tags": [
      "OpenAI",
      "GitHub",
      "model launch"
    ]
  },
  {
    "id": "gpt2-chatbot-arena",
    "category": "ai",
    "topic": "ChatGPT",
    "status": "confirmed",
    "credibility": 5,
    "heat": 40,
    "date": "2024-04-28",
    "headline": "Mystery 'gpt2-chatbot' on LMSYS was GPT-4o",
    "summary": "An unlabeled model called gpt2-chatbot appeared on the Chatbot Arena and beat GPT-4. Sam Altman teased it on X. Two weeks later OpenAI confirmed it had been GPT-4o in testing.",
    "details": [
      "Variants later appeared as im-a-good-gpt2-chatbot and im-also-a-good-gpt2-chatbot.",
      "OpenAI announced GPT-4o on May 13, 2024 and confirmed the arena tests."
    ],
    "sources": [
      "LMSYS Chatbot Arena",
      "OpenAI",
      "Ars Technica"
    ],
    "timeline": [
      {
        "date": "2024-04-28",
        "event": "gpt2-chatbot appears on the arena"
      },
      {
        "date": "2024-05-13",
        "event": "OpenAI announces GPT-4o"
      }
    ],
    "tags": [
      "OpenAI",
      "GPT-4o",
      "stealth test"
    ]
  },
  {
    "id": "openai-strawberry",
    "category": "ai",
    "topic": "ChatGPT",
    "status": "confirmed",
    "credibility": 4,
    "heat": 38,
    "date": "2024-07-12",
    "headline": "Reuters reports OpenAI 'Strawberry' reasoning project",
    "summary": "Internal documents described a project codenamed Strawberry aimed at models that plan ahead and research autonomously. It shipped two months later as o1.",
    "details": [
      "Strawberry was reportedly the successor to a project previously known as Q*.",
      "OpenAI released o1-preview and o1-mini on September 12, 2024."
    ],
    "sources": [
      "Reuters",
      "The Information",
      "OpenAI"
    ],
    "timeline": [
      {
        "date": "2024-07-12",
        "event": "Reuters publishes Strawberry report"
      },
      {
        "date": "2024-09-12",
        "event": "OpenAI releases o1-preview"
      }
    ],
    "tags": [
      "OpenAI",
      "o1",
      "codename"
    ]
  },
  {
    "id": "iphone-air-dummies",
    "category": "tech",
    "topic": "iPhone",
    "status": "confirmed",
    "credibility": 5,
    "heat": 52,
    "date": "2025-03-10",
    "headline": "iPhone Air shape leaks months early via dummy units",
    "summary": "Factory dummy units and CAD-based renders showed an ultra-thin iPhone with a single camera bar long before Apple announced iPhone Air on September 9, 2025.",
    "details": [
      "Leakers including Sonny Dickson and Majin Bu posted dummies showing the 5.6mm profile.",
      "Apple's announcement matched the leaked design, including the horizontal camera plateau."
    ],
    "sources": [
      "MacRumors",
      "9to5Mac",
      "Apple"
    ],
    "timeline": [
      {
        "date": "2025-03-10",
        "event": "Dummy units circulate on X"
      },
      {
        "date": "2025-09-09",
        "event": "Apple announces iPhone Air"
      }
    ],
    "tags": [
      "Apple",
      "hardware",
      "dummy units"
    ]
  },
  {
    "id": "ios26-rename",
    "category": "tech",
    "topic": "Apple",
    "status": "confirmed",
    "credibility": 5,
    "heat": 30,
    "date": "2025-05-28",
    "headline": "Apple to rename iOS 19 to iOS 26, Gurman reports",
    "summary": "Bloomberg reported that Apple would switch every OS to year-based version numbers. WWDC confirmed iOS 26, macOS 26 and the rest two weeks later.",
    "details": [
      "The rename aligned iOS, iPadOS, macOS, watchOS, tvOS and visionOS on one number.",
      "The same report previewed the Liquid Glass redesign."
    ],
    "sources": [
      "Bloomberg",
      "Apple WWDC 2025"
    ],
    "timeline": [
      {
        "date": "2025-05-28",
        "event": "Bloomberg reports the rename"
      },
      {
        "date": "2025-06-09",
        "event": "Apple confirms iOS 26 at WWDC"
      }
    ],
    "tags": [
      "Apple",
      "Bloomberg",
      "software"
    ]
  },
  {
    "id": "sec-x-fake-etf",
    "category": "crypto",
    "topic": "Bitcoin",
    "status": "debunked",
    "credibility": 1,
    "heat": 45,
    "date": "2024-01-09",
    "headline": "SEC X account posts fake spot Bitcoin ETF approval",
    "summary": "A post from the SEC's official account announced approval of spot Bitcoin ETFs a day early. The account had been taken over via SIM swap. The real approval came the next day.",
    "details": [
      "Bitcoin spiked and dropped within minutes as the post was deleted.",
      "The SEC said the account lacked two-factor authentication at the time.",
      "Real approval of 11 spot Bitcoin ETFs followed on January 10, 2024."
    ],
    "sources": [
      "SEC statement",
      "CoinDesk",
      "Reuters"
    ],
    "timeline": [
      {
        "date": "2024-01-09",
        "event": "Fake approval post from SEC account"
      },
      {
        "date": "2024-01-10",
        "event": "SEC approves spot Bitcoin ETFs for real"
      }
    ],
    "tags": [
      "SEC",
      "ETF",
      "hack"
    ]
  },
  {
    "id": "saylor-sunday-tracker",
    "category": "crypto",
    "topic": "Bitcoin",
    "status": "confirmed",
    "credibility": 4,
    "heat": 42,
    "date": "2025-01-05",
    "headline": "Saylor's Sunday chart signals Strategy's Monday buys",
    "summary": "Michael Saylor posts a portfolio tracker screenshot almost every Sunday before Strategy files an 8-K disclosing another Bitcoin purchase on Monday. Traders treat it as a pre-announcement.",
    "details": [
      "The pattern has held across dozens of purchases since late 2024.",
      "The chart never states the amount, so the size of each buy stays unknown until the filing."
    ],
    "sources": [
      "Michael Saylor on X",
      "SEC EDGAR filings"
    ],
    "timeline": [
      {
        "date": "2024-11-10",
        "event": "Pattern first widely noted"
      },
      {
        "date": "2025-01-05",
        "event": "Tracker post precedes a Monday 8-K again"
      }
    ],
    "tags": [
      "Strategy",
      "MicroStrategy",
      "8-K"
    ]
  },
  {
    "id": "nwh-tobey-andrew-leak",
    "category": "entertainment",
    "topic": "Marvel",
    "status": "confirmed",
    "credibility": 5,
    "heat": 28,
    "date": "2021-11-10",
    "headline": "Tobey and Andrew leak out of Spider-Man: No Way Home",
    "summary": "Set photos, a leaked trailer frame and promo art all pointed to Tobey Maguire and Andrew Garfield returning. Sony denied it for months. Both appeared in the film.",
    "details": [
      "Garfield repeatedly denied involvement in interviews before release.",
      "The film released on December 17, 2021 with both actors in major roles."
    ],
    "sources": [
      "Variety",
      "Sony Pictures"
    ],
    "timeline": [
      {
        "date": "2021-11-10",
        "event": "Promo art with three Spider-Men circulates"
      },
      {
        "date": "2021-12-17",
        "event": "Film releases, confirming the leak"
      }
    ],
    "tags": [
      "Sony",
      "Marvel",
      "casting"
    ]
  },
  {
    "id": "dobbs-draft-politico",
    "category": "world",
    "topic": "US Supreme Court",
    "status": "confirmed",
    "credibility": 5,
    "heat": 33,
    "date": "2022-05-02",
    "headline": "Politico publishes leaked Dobbs draft opinion",
    "summary": "A February draft majority opinion overturning Roe v. Wade leaked to Politico. The Court confirmed its authenticity the next day. The final ruling in June matched the draft in substance.",
    "details": [
      "The Court's investigation did not identify who leaked the draft.",
      "It was the first full draft opinion to leak in the Court's modern history."
    ],
    "sources": [
      "Politico",
      "Supreme Court statement"
    ],
    "timeline": [
      {
        "date": "2022-05-02",
        "event": "Politico publishes the draft"
      },
      {
        "date": "2022-05-03",
        "event": "Court confirms the draft is authentic"
      },
      {
        "date": "2022-06-24",
        "event": "Final Dobbs ruling issued"
      }
    ],
    "tags": [
      "SCOTUS",
      "Politico",
      "documents"
    ]
  },
  {
    "id": "cyberleek-quits-after-coin-crash",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "confirmed",
    "credibility": 4,
    "heat": 92,
    "date": "2026-10-14",
    "headline": "GTA VI leaker Cyberleek says it's done after its crypto coin crashes",
    "summary": "Cyberleek announced the end of its GTA VI leaks after the crypto coin it tied to the releases fell far short of its target. Its final drop reportedly included bits of late-game footage, and it claims a 'dead man's switch' will release more if anyone goes after it.",
    "details": [
      "The coin's market cap reportedly fell from about $7.8M to about $1.7M, nowhere near the $30M target.",
      "RockstarINTEL says the last leak had a snippet from the ending, while GTA Intel says the group claims it is keeping the ending back.",
      "Kotaku said the whole setup looked like a rug pull."
    ],
    "sources": [
      "Kotaku",
      "RockstarINTEL",
      "GosuGamers",
      "Rolling Out"
    ],
    "timeline": [
      {
        "date": "2026-10-08",
        "event": "25-minute 'Extended Leek' posted"
      },
      {
        "date": "2026-10-14",
        "event": "Cyberleek posts 'end of the road' statement"
      }
    ],
    "tags": [
      "Cyberleek",
      "crypto",
      "spoilers"
    ]
  },
  {
    "id": "rockstar-launch-trailer-surprise-drop",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "confirmed",
    "credibility": 5,
    "heat": 90,
    "date": "2026-10-15",
    "headline": "Rockstar drops the GTA VI launch trailer with no warning",
    "summary": "Rockstar posted a roughly 90-second launch trailer across its channels with zero teasing, 35 days before release. Fans and press are calling it Trailer 3, though Rockstar didn't number it.",
    "details": [
      "Posted around 2pm BST on Thursday, October 15.",
      "Features a new track from Justice, who also scored the game.",
      "Captured on PS5 and reconfirms November 19."
    ],
    "sources": [
      "Rockstar Games",
      "Kotaku",
      "Game Rant",
      "RockstarINTEL"
    ],
    "timeline": [
      {
        "date": "2026-08-27",
        "event": "Netflix Extended Look airs, not counted as Trailer 3 by Rockstar"
      },
      {
        "date": "2026-10-15",
        "event": "Launch trailer goes live"
      }
    ],
    "tags": [
      "trailer",
      "official",
      "launch"
    ]
  },
  {
    "id": "gta-vi-pc-q1-2027-report",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "rumor",
    "credibility": 3,
    "heat": 85,
    "date": "2026-10-13",
    "headline": "Report says GTA VI on PC is planned for early 2027",
    "summary": "GamesBeat reported that Rockstar is aiming the PC version for January to March 2027, citing people familiar with the plans. Rockstar didn't comment and still only lists PS5 and Xbox Series X|S.",
    "details": [
      "GamesBeat's Dean Takahashi cited anonymous industry sources.",
      "Tom Henderson shared the claim the same day, framed as 'it's claimed'.",
      "GTA V took about 19 months to reach PC after its console launch."
    ],
    "sources": [
      "GamesBeat",
      "Insider Gaming",
      "Tom's Hardware",
      "GamingBible"
    ],
    "timeline": [
      {
        "date": "2026-10-13",
        "event": "GamesBeat report published, picked up widely"
      }
    ],
    "tags": [
      "PC",
      "release window",
      "insider"
    ]
  },
  {
    "id": "cyberleek-extended-leek-25-minutes",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "developing",
    "credibility": 3,
    "heat": 88,
    "date": "2026-10-08",
    "headline": "Cyberleek returns with 25 minutes of leaked GTA VI gameplay",
    "summary": "After going quiet for over a month, Cyberleek posted a roughly 25-minute video it called 'An Extended Leek,' heavy on nudity and street racing. VGC said the footage appears authentic, but Rockstar hasn't verified it.",
    "details": [
      "The file was reported at roughly 367 to 370MB.",
      "A shorter Lucia-focused clip reportedly followed on October 11.",
      "It includes the Thrillbilly Mud Club scene first teased in Trailer 1."
    ],
    "sources": [
      "Video Games Chronicle",
      "GameSpot",
      "Dexerto",
      "Push Square",
      "Insider Gaming"
    ],
    "timeline": [
      {
        "date": "2026-10-08",
        "event": "25-minute video posted"
      },
      {
        "date": "2026-10-11",
        "event": "Second shorter clip reported"
      }
    ],
    "tags": [
      "Cyberleek",
      "gameplay"
    ]
  },
  {
    "id": "cyberleek-30m-coin-threat",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "rumor",
    "credibility": 2,
    "heat": 78,
    "date": "2026-10-10",
    "headline": "Leaker threatens full GTA VI build dump if its coin hits $30M",
    "summary": "Cyberleek said it would release a full playable build, reportedly around 200GB, if its crypto coin reached a $30 million market cap. The coin never got close and no build came out.",
    "details": [
      "Insider Gaming covered the threat to leak the game 'from beginning to end'.",
      "Kotaku called it a doomsday scenario tied to a meme coin.",
      "There's no evidence the leaker ever had a full build."
    ],
    "sources": [
      "Kotaku",
      "Insider Gaming",
      "RockstarINTEL"
    ],
    "timeline": [
      {
        "date": "2026-08-15",
        "event": "Leaker's token launches, per on-chain researchers"
      },
      {
        "date": "2026-10-10",
        "event": "Threat reported"
      },
      {
        "date": "2026-10-14",
        "event": "Leaker quits after coin drops"
      }
    ],
    "tags": [
      "Cyberleek",
      "crypto",
      "threat"
    ]
  },
  {
    "id": "gta-vi-esrb-mature-no-online-label",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "confirmed",
    "credibility": 4,
    "heat": 70,
    "date": "2026-10-01",
    "headline": "GTA VI gets its M rating, and no 'Users Interact' label",
    "summary": "Rockstar's site and console stores swapped 'Rating Pending' for an ESRB Mature 17+ badge about seven weeks before launch. People noticed the missing 'Users Interact' tag that online games usually carry, a hint that there's no online mode at launch.",
    "details": [
      "Seven descriptors including Strong Sexual Content and Use of Drugs and Alcohol.",
      "PEGI 18 in Europe, R18+ in Australia.",
      "The no-online reading is interpretation, not a Rockstar statement."
    ],
    "sources": [
      "ESRB",
      "Screen Rant",
      "Game Rant",
      "Tech Times"
    ],
    "timeline": [
      {
        "date": "2026-10-01",
        "event": "Rating appears on Rockstar site and stores"
      }
    ],
    "tags": [
      "ratings board",
      "ESRB",
      "online"
    ]
  },
  {
    "id": "twitch-ceo-gta-vi-multiplayer-2027",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "rumor",
    "credibility": 3,
    "heat": 68,
    "date": "2026-09-18",
    "headline": "Twitch CEO expects GTA VI multiplayer next year",
    "summary": "At Tokyo Game Show, Twitch CEO Dan Clancy told Bloomberg that Twitch had talked a lot with Rockstar and expects an even bigger bump 'next year when they launch multiplayer.' Rockstar has only described the game as a single-player experience.",
    "details": [
      "Press read it as a 2027 online launch.",
      "Take-Two CEO Strauss Zelnick dodged direct questions about a new online mode.",
      "Clancy speaks for Twitch, not Rockstar."
    ],
    "sources": [
      "Bloomberg",
      "Yahoo Tech",
      "ResetEra"
    ],
    "timeline": [
      {
        "date": "2026-09-18",
        "event": "Clancy interview reported"
      }
    ],
    "tags": [
      "online",
      "multiplayer",
      "insider"
    ]
  },
  {
    "id": "take-two-subpoenas-discord-microsoft",
    "category": "gaming",
    "topic": "Rockstar",
    "status": "confirmed",
    "credibility": 5,
    "heat": 72,
    "date": "2026-08-24",
    "headline": "Take-Two subpoenas Discord, Microsoft, X and YouTube to unmask leaker",
    "summary": "Take-Two filed DMCA subpoena requests in US federal court to find whoever was spreading the GTA VI clips. By early September it said the probe was 'rapidly evolving' and asked to keep a second Discord request sealed.",
    "details": [
      "Discord said on August 24 it had not yet been served.",
      "Take-Two later said it had identified one more Discord user.",
      "It dropped the YouTube subpoena as no longer needed."
    ],
    "sources": [
      "Video Games Chronicle",
      "Kotaku",
      "TorrentFreak",
      "GamesRadar"
    ],
    "timeline": [
      {
        "date": "2026-08-24",
        "event": "Subpoena news breaks, Discord says not yet served"
      },
      {
        "date": "2026-08-31",
        "event": "Sealed second Discord subpoena request reported"
      }
    ],
    "tags": [
      "legal",
      "Take-Two",
      "investigation"
    ]
  },
  {
    "id": "rockstar-heartbreaking-leak-statement",
    "category": "gaming",
    "topic": "Rockstar",
    "status": "confirmed",
    "credibility": 5,
    "heat": 75,
    "date": "2026-08-26",
    "headline": "Rockstar breaks silence: the leaks have been 'heartbreaking'",
    "summary": "After about a week of clips spreading, Rockstar posted a rare apologetic statement saying the leaks hurt the team and may spoil parts of the game. It said the game was 'nearly there' and the November 19 date wasn't moving.",
    "details": [
      "Posted on Instagram and other socials.",
      "Apologized that everything had taken as long as it has.",
      "Pointed fans to the Netflix showing the next day."
    ],
    "sources": [
      "Rockstar Games",
      "Video Games Chronicle",
      "GameSpot",
      "Kotaku"
    ],
    "timeline": [
      {
        "date": "2026-08-18",
        "event": "First Cyberleek clips appear"
      },
      {
        "date": "2026-08-26",
        "event": "Rockstar statement"
      }
    ],
    "tags": [
      "official",
      "statement"
    ]
  },
  {
    "id": "netflix-extended-look",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "confirmed",
    "credibility": 5,
    "heat": 74,
    "date": "2026-08-27",
    "headline": "Rockstar shows 26 minutes of GTA VI on Netflix, days after the leaks",
    "summary": "Rockstar premiered 'Grand Theft Auto VI: An Extended Look' on Netflix with a six-hour head start before YouTube. It landed just days after the hacked clips went around.",
    "details": [
      "Announced August 6, aired 3pm ET August 27.",
      "Hit YouTube and the GTA VI site at 9pm ET.",
      "All PS5 footage, about 26 to 27 minutes."
    ],
    "sources": [
      "Rockstar Newswire",
      "Game Informer",
      "Engadget",
      "PC Gamer"
    ],
    "timeline": [
      {
        "date": "2026-08-06",
        "event": "Netflix event announced"
      },
      {
        "date": "2026-08-27",
        "event": "Extended Look premieres"
      }
    ],
    "tags": [
      "official",
      "Netflix",
      "gameplay"
    ]
  },
  {
    "id": "leak-source-rockstar-india-pc-build",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "rumor",
    "credibility": 2,
    "heat": 60,
    "date": "2026-08-21",
    "headline": "Were the GTA VI leaks from Rockstar India, on a PC build?",
    "summary": "Online theories pinned the leak on a hacked Rockstar India employee, and some developers said the clips looked like they were running on PC. Neither claim has been confirmed by Rockstar or Take-Two.",
    "details": [
      "One version says a Russian group sold the build on, with an unverified $50M figure.",
      "PC Gamer agreed it was probably PC but said that says little about a PC release.",
      "Console devkits are locked down, which is why the PC theory caught on."
    ],
    "sources": [
      "PC Gamer",
      "TweakTown",
      "ThePrint",
      "OC3D"
    ],
    "timeline": [
      {
        "date": "2026-08-21",
        "event": "Rockstar India and PC build theories spread"
      }
    ],
    "tags": [
      "leak source",
      "PC",
      "theory"
    ]
  },
  {
    "id": "cyberleek-first-clips-and-map",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "confirmed",
    "credibility": 4,
    "heat": 86,
    "date": "2026-08-18",
    "headline": "GTA VI gameplay and a full Leonida map leak before the Netflix reveal",
    "summary": "A leaker calling itself Cyberleek posted two gameplay clips and a claimed full map of Leonida, then kept dropping clips for days. It called the leaks a protest over the lack of a disc release while pushing its own crypto coin.",
    "details": [
      "The map image labeled five counties including Lummox and Mariana.",
      "About 15 clips spread over the following week, all showing Jason.",
      "A fan mapping project disputed the map image, and some analysts think the footage is from an older build."
    ],
    "sources": [
      "Kotaku",
      "Insider Gaming",
      "PC Gamer",
      "Axios",
      "GTABase"
    ],
    "timeline": [
      {
        "date": "2026-08-18",
        "event": "First two clips and map posted"
      },
      {
        "date": "2026-08-19",
        "event": "Third clip with a taser break-in"
      },
      {
        "date": "2026-08-24",
        "event": "Nudist club clip"
      }
    ],
    "tags": [
      "Cyberleek",
      "map",
      "gameplay"
    ]
  },
  {
    "id": "gta-vi-preorders-79-99",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "confirmed",
    "credibility": 5,
    "heat": 66,
    "date": "2026-06-25",
    "headline": "GTA VI pre-orders open at $79.99, not the feared $100",
    "summary": "Pre-orders went live with a $79.99 Standard Edition and a digital-only $99.99 Ultimate Edition. Rockstar called it a 'single-player experience' and set pre-loading for November 12.",
    "details": [
      "The pre-order bonus is the Vintage Vice City Pack.",
      "No collector's edition, just two tiers.",
      "PS5 and Xbox Series X|S only, no PC."
    ],
    "sources": [
      "Rockstar Newswire",
      "Variety",
      "VideoGamer",
      "PlayStation Universe"
    ],
    "timeline": [
      {
        "date": "2026-06-18",
        "event": "Pre-order countdown reportedly starts"
      },
      {
        "date": "2026-06-25",
        "event": "Pre-orders open"
      }
    ],
    "tags": [
      "price",
      "pre-orders",
      "official"
    ]
  },
  {
    "id": "gta-vi-physical-is-code-in-box",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "confirmed",
    "credibility": 4,
    "heat": 64,
    "date": "2026-06-25",
    "headline": "GTA VI's 'physical' copy is just a download code in a box",
    "summary": "Pre-order details said boxed copies hold a code, not a disc. A Rockstar support email later sparked hope for discs, but The Hollywood Reporter said there are no plans to print them.",
    "details": [
      "The no-disc decision was the reason Cyberleek gave for its leaks.",
      "Earlier rumors said discs were held back to stop leaks, and Zelnick said that was 'not the plan'.",
      "Rockstar hasn't explained the choice publicly."
    ],
    "sources": [
      "The Hollywood Reporter",
      "Kotaku",
      "Push Square"
    ],
    "timeline": [
      {
        "date": "2026-06-25",
        "event": "Code-in-box detail revealed with pre-orders"
      }
    ],
    "tags": [
      "physical",
      "disc",
      "pre-orders"
    ]
  },
  {
    "id": "fnac-portugal-price-leak",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "debunked",
    "credibility": 4,
    "heat": 50,
    "date": "2026-06-20",
    "headline": "Portuguese retailer 'leaks' GTA VI at up to €200, insider says fake",
    "summary": "FNAC Portugal listings showed Rockstar products priced from €89.99 to €199.99 days before pre-orders. Leaker billbil-kun said they were placeholders because the barcodes didn't use Take-Two's usual prefixes, and the real price came in lower.",
    "details": [
      "Listings were labeled RS1 to RS5 with the right release date.",
      "The listings were taken down without comment.",
      "The final US price was $79.99."
    ],
    "sources": [
      "billbil-kun on X",
      "GamesRadar",
      "Game Rant",
      "Push Square"
    ],
    "timeline": [
      {
        "date": "2026-06-20",
        "event": "Listings spotted"
      },
      {
        "date": "2026-06-21",
        "event": "billbil-kun calls them placeholders"
      },
      {
        "date": "2026-06-25",
        "event": "Official prices revealed"
      }
    ],
    "tags": [
      "price",
      "retailer listing"
    ]
  },
  {
    "id": "henderson-trailer-3-august-guess",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "debunked",
    "credibility": 2,
    "heat": 35,
    "date": "2026-07-20",
    "headline": "Tom Henderson's August Trailer 3 call didn't pan out",
    "summary": "Insider Gaming's Tom Henderson guessed Trailer 3 might drop around August 6, near Take-Two's earnings, while saying it wasn't inside info. Rockstar did a Netflix showcase instead, and the next trailer didn't arrive until October 15.",
    "details": [
      "Henderson said he had no firm evidence.",
      "He has said the game has been 'content ready' for a long time."
    ],
    "sources": [
      "Forbes",
      "GTABoom",
      "Windows Report"
    ],
    "timeline": [
      {
        "date": "2026-07-20",
        "event": "August 6 guess widely reported"
      },
      {
        "date": "2026-10-15",
        "event": "Launch trailer actually drops"
      }
    ],
    "tags": [
      "trailer",
      "insider",
      "prediction"
    ]
  },
  {
    "id": "676gb-file-size-hoax",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "debunked",
    "credibility": 5,
    "heat": 30,
    "date": "2025-12-24",
    "headline": "No, Xbox did not confirm a 676.7GB GTA VI download",
    "summary": "A doctored Xbox Store screenshot claimed GTA VI was 676.7GB and went viral on Christmas Eve. When it came back in June 2026, Insider Gaming pointed out the image listed Xbox One, which the game isn't on.",
    "details": [
      "Posted by an X account, not by Xbox.",
      "The real store listing showed only a tiny placeholder size.",
      "No official file size has been published."
    ],
    "sources": [
      "Insider Gaming"
    ],
    "timeline": [
      {
        "date": "2025-12-24",
        "event": "Fake screenshot posted"
      },
      {
        "date": "2026-06",
        "event": "Resurfaces and gets debunked again"
      }
    ],
    "tags": [
      "file size",
      "hoax",
      "Xbox"
    ]
  },
  {
    "id": "zap-actu-ai-fake-leak",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "debunked",
    "credibility": 5,
    "heat": 35,
    "date": "2025-11-26",
    "headline": "Viral 'GTA VI gameplay leak' was AI, creator admits",
    "summary": "An X account called Zap Actu GTA6 posted a clip of Lucia that got over 8 million views in a day. It later admitted the video was AI-generated as a 'social experiment' and deleted it.",
    "details": [
      "A community note flagged it but it kept spreading.",
      "The account rebranded afterward.",
      "IGN noted dozens of similar AI videos from the same account."
    ],
    "sources": [
      "IGN",
      "Notebookcheck",
      "GosuGamers"
    ],
    "timeline": [
      {
        "date": "2025-11-26",
        "event": "Clip goes viral and is exposed"
      }
    ],
    "tags": [
      "AI",
      "fake",
      "hoax"
    ]
  },
  {
    "id": "rockstar-fires-staff-over-leaks",
    "category": "gaming",
    "topic": "Rockstar",
    "status": "developing",
    "credibility": 5,
    "heat": 62,
    "date": "2025-10-30",
    "headline": "Rockstar fires 30+ staff it says leaked info, union calls it union busting",
    "summary": "Rockstar let go of over 30 workers in the UK and Canada who were in a private union Discord, saying they shared confidential game details. The IWGB union calls it illegal union busting, and the case went to an employment tribunal in Glasgow.",
    "details": [
      "Rockstar later said the chats covered specific features from upcoming titles.",
      "UK PM Keir Starmer called the case deeply concerning.",
      "The tribunal hearing was scheduled to run until October 16, 2026; the outcome hasn't been reported yet."
    ],
    "sources": [
      "Bloomberg",
      "ITV News",
      "Game Developer",
      "TechRadar"
    ],
    "timeline": [
      {
        "date": "2025-10-30",
        "event": "Firings happen"
      },
      {
        "date": "2025-11-06",
        "event": "Rockstar says firings were about leaks"
      },
      {
        "date": "2026-10-16",
        "event": "Scheduled end of Glasgow tribunal hearing"
      }
    ],
    "tags": [
      "union",
      "firings"
    ]
  },
  {
    "id": "gta-v-source-code-leak",
    "category": "gaming",
    "topic": "GTA V",
    "status": "confirmed",
    "credibility": 4,
    "heat": 38,
    "date": "2023-12-24",
    "headline": "GTA V source code leaks on Christmas Eve",
    "summary": "Material described as GTA V's source code spread on Discord and Telegram, apparently from data stolen in the 2022 Rockstar hack. Press said it also had early San Andreas maps and references to canceled projects like Bully 2.",
    "details": [
      "Reports put the package at around 4GB, with claims of a much bigger set.",
      "It was posted in a Telegram channel previously used to leak Rockstar data.",
      "Rockstar did not publicly comment."
    ],
    "sources": [
      "BleepingComputer",
      "Bitdefender",
      "AFK Gaming"
    ],
    "timeline": [
      {
        "date": "2022-09-18",
        "event": "Rockstar breached"
      },
      {
        "date": "2023-12-24",
        "event": "Source code posted"
      }
    ],
    "tags": [
      "source code",
      "hack",
      "Bully 2"
    ]
  },
  {
    "id": "bloomberg-lucia-protagonist-report",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "confirmed",
    "credibility": 5,
    "heat": 25,
    "date": "2022-07",
    "headline": "Bloomberg reveals GTA VI's Latina lead and Miami setting",
    "summary": "Jason Schreier reported that GTA VI would have a Latina woman as one of two Bonnie and Clyde style leads, set in a fictional Miami. It all turned out true when Rockstar revealed Lucia and Jason.",
    "details": [
      "Based on more than 20 current and former staff.",
      "Early plans for a much bigger Americas map were cut back.",
      "Said the game was at least two years away."
    ],
    "sources": [
      "Bloomberg",
      "TechRadar",
      "Push Square"
    ],
    "timeline": [
      {
        "date": "2022-07",
        "event": "Bloomberg report"
      },
      {
        "date": "2023-12-05",
        "event": "Trailer 1 confirms Lucia and Vice City"
      }
    ],
    "tags": [
      "Bloomberg",
      "Schreier",
      "Lucia"
    ]
  },
  {
    "id": "trilogy-pc-pulled-hidden-files",
    "category": "gaming",
    "topic": "GTA Trilogy",
    "status": "confirmed",
    "credibility": 5,
    "heat": 20,
    "date": "2021-11-12",
    "headline": "GTA Trilogy pulled from PC after dataminers find hidden files",
    "summary": "Right after launch, dataminers found developer notes, full scripts, cut music and files tied to Hot Coffee in the PC version. Rockstar took it offline to remove files 'unintentionally included' and brought it back days later.",
    "details": [
      "Launched November 11, 2021.",
      "The Rockstar Games Launcher went down too.",
      "Back on sale November 15."
    ],
    "sources": [
      "GameSpot",
      "Video Games Chronicle",
      "VideoGamer"
    ],
    "timeline": [
      {
        "date": "2021-11-11",
        "event": "Trilogy launches"
      },
      {
        "date": "2021-11-12",
        "event": "PC version pulled"
      },
      {
        "date": "2021-11-15",
        "event": "Returns to the launcher"
      }
    ],
    "tags": [
      "datamine",
      "PC",
      "remaster"
    ]
  },
  {
    "id": "trilogy-korea-rating-leak",
    "category": "gaming",
    "topic": "GTA Trilogy",
    "status": "confirmed",
    "credibility": 5,
    "heat": 18,
    "date": "2021-09-30",
    "headline": "Korean ratings board outs the GTA Trilogy remaster",
    "summary": "South Korea's ratings board listed 'Grand Theft Auto: The Trilogy - The Definitive Edition' before Rockstar announced it, and analyst Nibel spotted it. Kotaku had already reported in August 2021 that remasters of GTA III, Vice City and San Andreas were coming.",
    "details": [
      "Take-Two was the listed applicant, rated 18.",
      "Rockstar Launcher files in October hinted it ran on Unreal.",
      "Rockstar officially announced it days later."
    ],
    "sources": [
      "Kotaku",
      "Nibel on X",
      "TechRaptor",
      "Charlie Intel"
    ],
    "timeline": [
      {
        "date": "2021-09-30",
        "event": "Korean rating spotted"
      }
    ],
    "tags": [
      "ratings board",
      "remaster"
    ]
  },
  {
    "id": "ps-plus-september-2026-billbil-kun",
    "category": "gaming",
    "topic": "PlayStation",
    "status": "confirmed",
    "credibility": 5,
    "heat": 62,
    "date": "2026-08-25",
    "headline": "billbil-kun leaks the September 2026 PS Plus lineup a day early",
    "summary": "Dealabs leaker billbil-kun posted the full PS Plus Essential lineup for September 2026 the day before Sony announced it. Sony's announcement matched his list, as his monthly PS Plus leaks have done all year.",
    "details": [
      "The three games were Sniper Elite: Resistance, Chained Echoes and Wobbly Life.",
      "He said all three would be available to Essential, Extra and Premium members from September 1.",
      "He had already leaked parts of the January, February, March and April 2026 lineups."
    ],
    "sources": [
      "billbil-kun / Dealabs",
      "Notebookcheck",
      "GamingBible",
      "Forbes"
    ],
    "timeline": [
      {
        "date": "2026-01-28",
        "event": "Sony announces February lineup after billbil-kun had already named Undisputed"
      },
      {
        "date": "2026-08-25",
        "event": "billbil-kun posts the full September Essential lineup"
      },
      {
        "date": "2026-09-01",
        "event": "Games go live for subscribers"
      }
    ],
    "tags": [
      "PS Plus",
      "billbil-kun",
      "Dealabs"
    ]
  },
  {
    "id": "modern-warfare-4-key-art-korea",
    "category": "gaming",
    "topic": "Call of Duty",
    "status": "confirmed",
    "credibility": 5,
    "heat": 78,
    "date": "2026-05-27",
    "headline": "Blurry Modern Warfare 4 key art leaks and points to Korea",
    "summary": "billbil-kun posted a blurred, watermarked image of the Modern Warfare 4 cover art, and many fans read the logo's numeral as 사, the Korean word for four. Infinity Ward later confirmed the Korea setting and a Switch 2 version during an official Activision livestream.",
    "details": [
      "The post was reportedly taken down from X after a copyright strike.",
      "It came after a week of fake and AI-generated MW4 'leaks', including a reveal date claim that never happened.",
      "He shared similar blurred key art for Black Ops 6 in 2024, which turned out to be real."
    ],
    "sources": [
      "billbil-kun",
      "VGC",
      "TheGamer",
      "CharlieIntel"
    ],
    "timeline": [
      {
        "date": "2026-05-27",
        "event": "billbil-kun posts the blurred key art"
      },
      {
        "date": "2026-05-27",
        "event": "VGC reports it alongside the Korea setting and Switch 2 rumors"
      }
    ],
    "tags": [
      "Modern Warfare 4",
      "key art",
      "Switch 2"
    ]
  },
  {
    "id": "zelda-ocarina-remake-star-fox-natethehate",
    "category": "gaming",
    "topic": "Nintendo",
    "status": "confirmed",
    "credibility": 5,
    "heat": 74,
    "date": "2026-03-27",
    "headline": "NateTheHate called the Ocarina of Time remake and new Star Fox",
    "summary": "On his March 27 podcast, NateTheHate said Nintendo had an Ocarina of Time remake and a new Star Fox lined up for Switch 2 in 2026. Nintendo revealed Star Fox in a surprise Direct in May and closed its June Direct with the Ocarina of Time remake.",
    "details": [
      "He also said not to expect a new 3D Mario in 2026.",
      "His Star Fox timing was off: he said April, and the reveal came in May.",
      "Fans later found a YouTube commenter had posted the same two games a few days before Nate."
    ],
    "sources": [
      "NateTheHate",
      "My Nintendo News",
      "Vice",
      "CBR"
    ],
    "timeline": [
      {
        "date": "2026-03-27",
        "event": "NateTheHate names both games on his podcast"
      },
      {
        "date": "2026-05",
        "event": "Nintendo reveals Star Fox in a surprise Direct"
      },
      {
        "date": "2026-06-25",
        "event": "Star Fox launches on Switch 2"
      }
    ],
    "tags": [
      "Zelda",
      "Star Fox",
      "Switch 2",
      "NateTheHate"
    ]
  },
  {
    "id": "steam-frame-setup-videos-steam-client",
    "category": "gaming",
    "topic": "Valve",
    "status": "confirmed",
    "credibility": 5,
    "heat": 70,
    "date": "2026-08-19",
    "headline": "Valve's own Steam client leaks eight Steam Frame setup videos",
    "summary": "An update to the ARM version of the Steam client briefly shipped eight official Steam Frame videos covering unboxing, fit, IPD adjustment and accessories. Valve pulled them the same day, but copies had already spread and they looked like finished retail material.",
    "details": [
      "The Steam Hardware Updates account on X spotted the videos on Valve's CDN.",
      "One clip showed an Ergonomic Accessories Kit that Valve had not announced.",
      "Linus Media Group's ShortCircuit channel separately posted a Steam Frame first-look before the embargo and took it down."
    ],
    "sources": [
      "Steam Hardware Updates",
      "Road to VR",
      "PC Gamer",
      "VideoCardz"
    ],
    "timeline": [
      {
        "date": "2025-11-12",
        "event": "Valve announces Steam Frame, Steam Machine and Steam Controller"
      },
      {
        "date": "2026-08-19",
        "event": "Setup videos appear in a Steam client update and are pulled the same day"
      }
    ],
    "tags": [
      "Steam Frame",
      "VR",
      "datamine"
    ]
  },
  {
    "id": "komodo-store-valve-hardware-listings",
    "category": "gaming",
    "topic": "Valve",
    "status": "confirmed",
    "credibility": 5,
    "heat": 45,
    "date": "2025-11-12",
    "headline": "Valve's Asian distributor listed Steam Frame and Steam Machine early",
    "summary": "Komodo, Valve's official distributor in Asia, briefly put up pages for the Steam Frame, a new Steam Controller and the Steam Machine. Valve officially announced all three hours later.",
    "details": [
      "Steam Frame had only been seen before in Valve trademark filings.",
      "The listings were pulled quickly, but people saved screenshots.",
      "The Steam Machine page showed a compact cube-shaped box."
    ],
    "sources": [
      "GamingOnLinux",
      "SteamDeckHQ",
      "Notebookcheck"
    ],
    "timeline": [
      {
        "date": "2025-11-12",
        "event": "Komodo Station pages go up briefly"
      },
      {
        "date": "2025-11-12",
        "event": "Valve announces the three devices"
      }
    ],
    "tags": [
      "Steam Machine",
      "Steam Frame",
      "retailer listing"
    ]
  },
  {
    "id": "game-freak-teraleak",
    "category": "gaming",
    "topic": "Pokemon",
    "status": "confirmed",
    "credibility": 5,
    "heat": 55,
    "date": "2024-10-12",
    "headline": "The Game Freak 'Teraleak' spills decades of Pokemon development files",
    "summary": "After Game Freak said hackers had broken into its systems in August 2024, a huge amount of Pokemon development material spread online in mid-October. Press described old source code and betas plus codenames for unannounced projects, and later Gen 10 rumors were traced back to it.",
    "details": [
      "Game Freak confirmed staff names and emails were accessed in the breach.",
      "Reports mentioned codenames tied to Gen 10 ('Gaia'), Legends: Z-A and Nintendo's next console ('Ounce').",
      "The company did not publicly address the game data."
    ],
    "sources": [
      "Game Freak statement",
      "Nintendo Wire",
      "Dark Reading",
      "Game World Observer"
    ],
    "timeline": [
      {
        "date": "2024-08",
        "event": "Breach happens, per Game Freak"
      },
      {
        "date": "2024-10-10",
        "event": "Game Freak posts a notice confirming the breach"
      },
      {
        "date": "2024-10-12",
        "event": "Leaked files spread across Pokemon fan accounts"
      }
    ],
    "tags": [
      "Game Freak",
      "breach",
      "Teraleak"
    ]
  },
  {
    "id": "pokemon-winds-waves-majinization-text",
    "category": "gaming",
    "topic": "Pokemon",
    "status": "developing",
    "credibility": 3,
    "heat": 66,
    "date": "2026-10-02",
    "headline": "Leaked Winds and Waves text names the Gen 10 battle gimmick",
    "summary": "Centro Leaks posted what it said were text files from Pokemon Winds and Waves, naming the new battle mechanic Majinization, triggered with a Majinize Band. Nintendo and The Pokemon Company have not commented, and the text is said to come from an older beta build.",
    "details": [
      "Winds and Waves was officially revealed as Gen 10 at Pokemon Presents on February 27, 2026, targeting 2027.",
      "Earlier leaks of the title and a Southeast Asia style island region turned out to be right.",
      "Claims about a 100-island region and a November 2027 date are still unverified."
    ],
    "sources": [
      "Centro Leaks",
      "Screen Rant",
      "Vice",
      "TheGamer"
    ],
    "timeline": [
      {
        "date": "2024-10-12",
        "event": "Teraleak, which reports link to the earliest Gen 10 material"
      },
      {
        "date": "2026-02-27",
        "event": "Pokemon Winds and Waves officially announced"
      },
      {
        "date": "2026-10-02",
        "event": "Centro Leaks posts the Majinization text"
      }
    ],
    "tags": [
      "Gen 10",
      "Centro Leaks",
      "Switch 2"
    ]
  },
  {
    "id": "rog-xbox-ally-fcc-photos",
    "category": "gaming",
    "topic": "Xbox",
    "status": "confirmed",
    "credibility": 5,
    "heat": 35,
    "date": "2025-05-07",
    "headline": "FCC filing shows the Xbox-branded Asus handheld before reveal",
    "summary": "Photos of two Asus handhelds showed up in US FCC certification documents, one of them black with a dedicated Xbox button, known as Project Kennan. Microsoft revealed it as the ROG Xbox Ally at its June Xbox Games Showcase, and it launched October 16, 2025.",
    "details": [
      "VideoCardz spotted the photos on the FCC site.",
      "The leaked specs listed a Ryzen Z2 Extreme, though the 64GB memory figure did not match the final product.",
      "A white model in the same filing matched the standard ROG Ally."
    ],
    "sources": [
      "VideoCardz",
      "Neowin",
      "Insider Gaming",
      "TechRadar"
    ],
    "timeline": [
      {
        "date": "2025-05-07",
        "event": "FCC photos surface"
      },
      {
        "date": "2025-06",
        "event": "Revealed at the Xbox Games Showcase"
      },
      {
        "date": "2025-10-16",
        "event": "ROG Xbox Ally and Ally X go on sale"
      }
    ],
    "tags": [
      "handheld",
      "Asus",
      "FCC"
    ]
  },
  {
    "id": "ps6-handheld-spec-sheet-disowned",
    "category": "gaming",
    "topic": "PlayStation",
    "status": "debunked",
    "credibility": 2,
    "heat": 58,
    "date": "2026-10-14",
    "headline": "Leaker says the viral PS6 handheld spec sheet isn't his",
    "summary": "A spec sheet for Sony's rumored handheld, codenamed Canis, credited KeplerL2 with figures like 24GB of RAM, 16 RDNA 5 compute units and PSSR 3.0. KeplerL2 reportedly told Digital Foundry he had not posted new handheld specs in months, and another report tied the same numbers to GameGPU instead.",
    "details": [
      "The disputed sheet listed a six-core AMD CPU, 24GB LPDDR5X and a 15 to 25W power range.",
      "Moore's Law Is Dead's earlier handheld leak described a smaller chip with 4 Zen 6c cores.",
      "Sony has confirmed nothing about a PS6 or a handheld."
    ],
    "sources": [
      "Digital Foundry",
      "IBTimes UK",
      "Moore's Law Is Dead"
    ],
    "timeline": [
      {
        "date": "2026-09-17",
        "event": "Spec sheet spreads, credited to KeplerL2"
      },
      {
        "date": "2026-10-13",
        "event": "Report ties the numbers to GameGPU instead"
      },
      {
        "date": "2026-10-14",
        "event": "KeplerL2 reportedly disowns it via Digital Foundry"
      }
    ],
    "tags": [
      "PS6",
      "handheld",
      "specs"
    ]
  },
  {
    "id": "pokemon-ruby-sapphire-switch-oct-8",
    "category": "gaming",
    "topic": "Pokemon",
    "status": "debunked",
    "credibility": 2,
    "heat": 40,
    "date": "2026-09-30",
    "headline": "Pokemon Ruby and Sapphire Switch date comes and goes",
    "summary": "Leaker Light88, who has been right about Pokemon before, posted that Ruby and Sapphire would hit Switch on October 8. That day passed with no trailer, eShop listing or announcement, and Centro Leaks later said no October release was coming.",
    "details": [
      "Light88 gave no detail on where the information came from.",
      "The broader port rumor rests on datamines and a Pokemon HOME menu entry.",
      "Nintendo and The Pokemon Company have not announced anything."
    ],
    "sources": [
      "Light88",
      "Centro Leaks",
      "Nintendo Life",
      "Vice"
    ],
    "timeline": [
      {
        "date": "2026-09-30",
        "event": "Light88 posts the October 8 date"
      },
      {
        "date": "2026-10-08",
        "event": "Date passes with no release"
      }
    ],
    "tags": [
      "ports",
      "Switch",
      "missed date"
    ]
  },
  {
    "id": "nintendo-gigaleak-2020",
    "category": "gaming",
    "topic": "Nintendo",
    "status": "confirmed",
    "credibility": 5,
    "heat": 20,
    "date": "2020-07-24",
    "headline": "The Nintendo 'Gigaleak' dumps decades of prototypes and docs",
    "summary": "A run of anonymous 4chan drops in 2020, the biggest on July 24, put out internal Nintendo material from the SNES and N64 eras through Wii. It is still the leak every later Nintendo and Pokemon breach gets compared to.",
    "details": [
      "Press reported prototypes of games like Yoshi's Island and Ocarina of Time plus unreleased projects.",
      "A Luigi model in Super Mario 64 data became the most famous find.",
      "Nintendo later told shareholders it had tightened security."
    ],
    "sources": [
      "VGC",
      "TheGamer"
    ],
    "timeline": [
      {
        "date": "2018-03",
        "event": "First smaller drops begin"
      },
      {
        "date": "2020-07-24",
        "event": "The big drop that gave the leak its name"
      },
      {
        "date": "2020-09",
        "event": "Smaller follow-up drop"
      }
    ],
    "tags": [
      "4chan",
      "historic",
      "prototypes",
      "Gigaleak"
    ]
  },
  {
    "id": "anthropic-claude-mythos-cms-leak",
    "category": "ai",
    "topic": "Claude",
    "status": "confirmed",
    "credibility": 5,
    "heat": 85,
    "date": "2026-03-26",
    "headline": "Anthropic's CMS exposes a draft post about Claude Mythos",
    "summary": "Fortune found that nearly 3,000 unpublished Anthropic blog assets were publicly reachable, including a draft announcing Claude Mythos, a new tier above Opus. Anthropic blamed human error in its CMS settings and confirmed it was testing the model with a small group of early access customers.",
    "details": [
      "The draft said the model was far ahead of others in cyber capabilities and warned of security risks.",
      "Two security researchers found the open data store and Fortune contacted Anthropic.",
      "Anthropic officially launched Claude Mythos Preview with Project Glasswing on April 7."
    ],
    "sources": [
      "Fortune",
      "Anthropic",
      "Quartz",
      "Techzine"
    ],
    "timeline": [
      {
        "date": "2026-03-26",
        "event": "Fortune reports the exposed draft"
      },
      {
        "date": "2026-03-27",
        "event": "Cybersecurity stocks drop on the news"
      },
      {
        "date": "2026-04-07",
        "event": "Anthropic announces Project Glasswing and Claude Mythos Preview"
      }
    ],
    "tags": [
      "Anthropic",
      "Mythos",
      "CMS"
    ]
  },
  {
    "id": "claude-code-npm-source-map",
    "category": "ai",
    "topic": "Claude",
    "status": "confirmed",
    "credibility": 5,
    "heat": 80,
    "date": "2026-03-31",
    "headline": "Claude Code's source ships inside its own npm package",
    "summary": "Version 2.1.88 of the Claude Code npm package included a 59.8MB source map that exposed the tool's TypeScript code. Anthropic called it a release packaging mistake caused by human error, not a breach, and no model weights were involved.",
    "details": [
      "A security researcher spotted it and the post spread to millions of views.",
      "People found unreleased features in the code, including an always-on background agent called KAIROS.",
      "It came five days after the Mythos draft leak, which Fortune called a second lapse."
    ],
    "sources": [
      "Fortune",
      "InfoQ",
      "Engineer's Codex"
    ],
    "timeline": [
      {
        "date": "2026-03-31",
        "event": "Source map found in the published package"
      },
      {
        "date": "2026-03-31",
        "event": "Anthropic calls it a packaging error"
      }
    ],
    "tags": [
      "Anthropic",
      "Claude Code",
      "npm"
    ]
  },
  {
    "id": "gpt-6-1-terra-microsoft-configs",
    "category": "ai",
    "topic": "ChatGPT",
    "status": "developing",
    "credibility": 4,
    "heat": 88,
    "date": "2026-10-20",
    "headline": "GPT-6.1 Terra shows up in Microsoft code before any announcement",
    "summary": "TestingCatalog found gpt-6.1-terra named in Microsoft pull requests and eval configs, around the same time The Information reported a new, cheaper Terra model was coming. OpenAI has not announced it.",
    "details": [
      "A Microsoft EF Core test config reportedly named gpt-6.1-terra as the scoring model on October 16.",
      "18 eval configs were reportedly switched from GPT-5.6 Terra to GPT-6.1 Terra.",
      "The Information said the new Terra should beat GPT-6.1 Sol while costing less."
    ],
    "sources": [
      "TestingCatalog",
      "The Information",
      "Android Headlines"
    ],
    "timeline": [
      {
        "date": "2026-10-16",
        "event": "Microsoft test config names gpt-6.1-terra"
      },
      {
        "date": "2026-10-19",
        "event": "Eval configs updated to the new name"
      },
      {
        "date": "2026-10-20",
        "event": "TestingCatalog reports the sighting"
      }
    ],
    "tags": [
      "OpenAI",
      "GPT-6.1",
      "GitHub"
    ]
  },
  {
    "id": "openai-aurora-image-models-api",
    "category": "ai",
    "topic": "ChatGPT",
    "status": "rumor",
    "credibility": 3,
    "heat": 72,
    "date": "2026-10-18",
    "headline": "Three 'Aurora' image models flash up in OpenAI's API",
    "summary": "Model names aurora-red-alpha, aurora-green-alpha and aurora-blue-alpha briefly appeared in OpenAI's API over a weekend and were then pulled. The same names later turned up generating images in blind Arena tests, and some think it is GPT Image 3.",
    "details": [
      "The brief appearance looked like an accidental rollout.",
      "The GPT Image 3 link is speculation, not something OpenAI has said.",
      "Around the same time OpenAI's pricing page listed an unannounced life sciences model, gpt-rosalind-discovery."
    ],
    "sources": [
      "TestingCatalog",
      "Arena"
    ],
    "timeline": [
      {
        "date": "2026-10-10",
        "event": "gpt-rosalind-discovery appears on OpenAI's pricing page"
      },
      {
        "date": "2026-10-18",
        "event": "Aurora model names spotted in the API, then removed"
      }
    ],
    "tags": [
      "OpenAI",
      "image model",
      "API"
    ]
  },
  {
    "id": "gemini-4-argon-disguised-arena",
    "category": "ai",
    "topic": "Gemini",
    "status": "developing",
    "credibility": 3,
    "heat": 76,
    "date": "2026-09-17",
    "headline": "A suspiciously strong 'Gemini 3.8 Flash' shows up on Arena",
    "summary": "Testers noticed a model labeled gemini-3.8-flash in Arena's blind battles that performed far above a Flash model, and leak trackers linked it to a Gemini 4 Pro checkpoint codenamed Argon. Reports disagree on whether Argon has launched, and newer sightings point to another checkpoint called Carbon.",
    "details": [
      "TestingCatalog reported Argon checkpoints being tested since mid-September.",
      "Business Insider reported Google staff testing a checkpoint called Carbon internally.",
      "An anonymous Arena label does not prove which model actually answered."
    ],
    "sources": [
      "TestingCatalog",
      "Business Insider",
      "Arena"
    ],
    "timeline": [
      {
        "date": "2026-09-17",
        "event": "Users post about the disguised Flash model"
      },
      {
        "date": "2026-10-09",
        "event": "TestingCatalog posts Argon and Carbon updates"
      }
    ],
    "tags": [
      "Google",
      "Gemini 4",
      "stealth model"
    ]
  },
  {
    "id": "nano-banana-arena-reveal",
    "category": "ai",
    "topic": "Gemini",
    "status": "confirmed",
    "credibility": 5,
    "heat": 30,
    "date": "2025-08-26",
    "headline": "Mystery 'nano-banana' on LMArena turns out to be Google",
    "summary": "An anonymous image editing model called nano-banana topped LMArena's blind tests, and the clues pointed to Google. Google confirmed it was Gemini 2.5 Flash Image, then kept Nano Banana as the public name.",
    "details": [
      "LMArena said it drew over 5 million community votes.",
      "It had a 171-point Elo lead, the biggest in Arena history at the time.",
      "Google said the name was a late-night placeholder for the anonymous listing."
    ],
    "sources": [
      "Google blog",
      "LMArena"
    ],
    "timeline": [
      {
        "date": "2025-08-26",
        "event": "Google confirms nano-banana is Gemini 2.5 Flash Image"
      }
    ],
    "tags": [
      "Google",
      "LMArena",
      "stealth model"
    ]
  },
  {
    "id": "grok-persona-prompts-exposed",
    "category": "ai",
    "topic": "Grok",
    "status": "confirmed",
    "credibility": 5,
    "heat": 28,
    "date": "2025-08-18",
    "headline": "Grok's website exposes its hidden persona prompts",
    "summary": "404 Media found Grok's website was publishing the underlying system prompts for its AI personas, and TechCrunch confirmed it. One persona was told to convince users that conspiracy theories are true.",
    "details": [
      "Exposed personas included the companion character Ani, a therapist and a 'crazy conspiracist'.",
      "It came shortly after a planned xAI government partnership fell apart over Grok's 'MechaHitler' posts.",
      "Several other prompts were crude or sexually explicit."
    ],
    "sources": [
      "404 Media",
      "TechCrunch"
    ],
    "timeline": [
      {
        "date": "2025-08-18",
        "event": "404 Media reports the exposed prompts"
      },
      {
        "date": "2025-08-19",
        "event": "TechCrunch confirms"
      }
    ],
    "tags": [
      "xAI",
      "system prompts"
    ]
  },
  {
    "id": "meta-avocado-internal-memo",
    "category": "ai",
    "topic": "Meta",
    "status": "developing",
    "credibility": 4,
    "heat": 45,
    "date": "2026-02-04",
    "headline": "Internal memo calls Meta's Avocado its best base model yet",
    "summary": "An internal Meta Superintelligence Labs memo reported by The Information said pretraining on a model codenamed Avocado was done and called it Meta's most capable pretrained base model to date. In March, The New York Times reported the release was pushed to at least May after it fell short of rival models in internal tests.",
    "details": [
      "The memo said it could compete with leading finished models in some areas before post-training.",
      "Reports tied Avocado to a possible move away from Llama's open approach, which is unconfirmed.",
      "Meta had earlier been reported to be preparing Mango and Avocado for 2026."
    ],
    "sources": [
      "The Information",
      "The New York Times",
      "The Decoder"
    ],
    "timeline": [
      {
        "date": "2026-02-04",
        "event": "Memo details reported"
      },
      {
        "date": "2026-03",
        "event": "NYT reports the delay to at least May"
      }
    ],
    "tags": [
      "Meta",
      "Avocado",
      "internal memo"
    ]
  },
  {
    "id": "chatgpt-android-beta-ads-code",
    "category": "ai",
    "topic": "ChatGPT",
    "status": "confirmed",
    "credibility": 4,
    "heat": 35,
    "date": "2025-11-29",
    "headline": "ChatGPT Android beta code points to ads",
    "summary": "Engineer Tibor Blaho found strings like 'search ad', 'search ads carousel' and 'bazaar content' in version 1.2025.329 of the ChatGPT Android beta. It was the first hard sign that OpenAI was building ads into ChatGPT, focused on search and shopping.",
    "details": [
      "All the references sat under an ads feature label in the app code.",
      "OpenAI had not announced ads at the time.",
      "Sam Altman had earlier said ads were something OpenAI might try."
    ],
    "sources": [
      "Tibor Blaho",
      "BleepingComputer",
      "TechRadar"
    ],
    "timeline": [
      {
        "date": "2025-11-29",
        "event": "Ad strings found in the Android beta"
      },
      {
        "date": "2025-11-30",
        "event": "Wider press coverage"
      }
    ],
    "tags": [
      "OpenAI",
      "ads",
      "app teardown"
    ]
  },
  {
    "id": "iphone-duo-name-gurman",
    "category": "tech",
    "topic": "iPhone",
    "status": "confirmed",
    "credibility": 5,
    "heat": 82,
    "date": "2026-09-08",
    "headline": "Gurman names the foldable iPhone Duo the night before launch",
    "summary": "The evening before Apple's September 9 event, Bloomberg's Mark Gurman reported the foldable would be called iPhone Duo, start at about $2,000 and support Apple Pencil. Apple unveiled the iPhone Duo the next day at $1,999.",
    "details": [
      "He said storage would top out at 2TB for roughly $3,000.",
      "He reported two colors at launch, dark blue and white.",
      "Majin Bu had floated the Duo name earlier."
    ],
    "sources": [
      "Bloomberg",
      "9to5Mac",
      "Engadget",
      "CNBC"
    ],
    "timeline": [
      {
        "date": "2026-04-07",
        "event": "Gurman says the foldable is on track for September despite delay reports"
      },
      {
        "date": "2026-09-08",
        "event": "Gurman reports the iPhone Duo name and price"
      },
      {
        "date": "2026-09-09",
        "event": "Apple announces iPhone Duo"
      },
      {
        "date": "2026-10-23",
        "event": "iPhone Duo goes on sale"
      }
    ],
    "tags": [
      "Apple",
      "foldable",
      "Gurman"
    ]
  },
  {
    "id": "airpods-camera-macos-26-7-video",
    "category": "tech",
    "topic": "Apple",
    "status": "developing",
    "credibility": 4,
    "heat": 68,
    "date": "2026-08-17",
    "headline": "Hidden macOS video shows AirPods with cameras",
    "summary": "MacRumors found an internal training clip in the macOS Tahoe 26.7 release candidate showing camera-equipped AirPods, codename B790, recognizing a book through Visual Intelligence. Apple has not announced the product.",
    "details": [
      "Code includes a prompt telling users to keep the AirPods uncovered for accurate results.",
      "MacRumors found no mention of an infrared sensor despite earlier rumors.",
      "A second camera model, B798, is referenced for later."
    ],
    "sources": [
      "MacRumors",
      "TechSpot"
    ],
    "timeline": [
      {
        "date": "2026-08-17",
        "event": "MacRumors digs the clip out of the macOS 26.7 RC"
      }
    ],
    "tags": [
      "AirPods",
      "code leak",
      "Visual Intelligence"
    ]
  },
  {
    "id": "ios-26-prototype-roadmap-leak",
    "category": "tech",
    "topic": "Apple",
    "status": "confirmed",
    "credibility": 4,
    "heat": 50,
    "date": "2025-12-16",
    "headline": "Early iOS 26 build on a prototype iPhone maps Apple's roadmap",
    "summary": "MacRumors got hold of an early internal iOS 26 build, still labeled iOS 19, from a prototype iPhone that had been sold. It listed identifiers for dozens of unreleased devices, including the foldable iPhone, iPhone 17e, AirTag 2 and a home hub.",
    "details": [
      "The build number was 23A5234w.",
      "The foldable was listed as V68, and the iPhone 18 Pro and Pro Max as V63 and V64.",
      "Some codenames still haven't been matched to products."
    ],
    "sources": [
      "MacRumors",
      "AppleInsider",
      "Tom's Guide"
    ],
    "timeline": [
      {
        "date": "2025-12-16",
        "event": "MacRumors publishes the findings"
      },
      {
        "date": "2026-09-09",
        "event": "The foldable ships as iPhone Duo"
      }
    ],
    "tags": [
      "iOS 26",
      "prototype",
      "roadmap"
    ]
  },
  {
    "id": "galaxy-s26-evan-blass-renders",
    "category": "tech",
    "topic": "Samsung",
    "status": "confirmed",
    "credibility": 5,
    "heat": 48,
    "date": "2026-02-06",
    "headline": "Evan Blass leaks press renders for the whole Galaxy S26 lineup",
    "summary": "Evan Blass posted what looked like official press-kit renders of the Galaxy S26, S26+ and S26 Ultra in four core colors, plus a 360-degree look at the Ultra. He also posted the Unpacked invite before Samsung sent it out, and Samsung launched the phones on February 25.",
    "details": [
      "Core colors were Black, White, Sky Blue and Cobalt Violet.",
      "The renders suggested the Ultra moved from titanium to an aluminum frame.",
      "Samsung publicly confirmed the February 25 date on February 10."
    ],
    "sources": [
      "Evan Blass",
      "9to5Google",
      "SamMobile",
      "Android Authority"
    ],
    "timeline": [
      {
        "date": "2026-02-06",
        "event": "360-degree S26 Ultra leak"
      },
      {
        "date": "2026-02-10",
        "event": "Samsung confirms Unpacked date"
      },
      {
        "date": "2026-02-25",
        "event": "Galaxy S26 series announced"
      }
    ],
    "tags": [
      "Galaxy S26",
      "evleaks",
      "renders"
    ]
  },
  {
    "id": "pixel-11-amazon-listing-error",
    "category": "tech",
    "topic": "Pixel",
    "status": "confirmed",
    "credibility": 4,
    "heat": 52,
    "date": "2026-07-14",
    "headline": "Amazon accidentally posts Pixel 11 listings a month early",
    "summary": "Early Amazon US listings exposed Pixel 11 colors, storage and an $899 starting price weeks before Google's event. Google launched the Pixel 11 on August 12 at $899 with 256GB of base storage.",
    "details": [
      "The listings named colors including Obsidian, Hibiscus and Pistachio, which matched launch.",
      "They suggested 12GB of RAM on the base model, against earlier 8GB rumors.",
      "Roland Quandt later leaked marketing art naming the light feature 'HiLight'."
    ],
    "sources": [
      "9to5Google",
      "Android Police",
      "Tom's Guide",
      "Roland Quandt"
    ],
    "timeline": [
      {
        "date": "2026-07-14",
        "event": "Amazon listings surface and are pulled"
      },
      {
        "date": "2026-08-04",
        "event": "Quandt leak confirms the HiLight name"
      },
      {
        "date": "2026-08-12",
        "event": "Pixel 11 announced at Made by Google"
      }
    ],
    "tags": [
      "Google",
      "retailer listing",
      "pricing"
    ]
  },
  {
    "id": "rtx-50-super-memory-delay",
    "category": "tech",
    "topic": "Nvidia",
    "status": "rumor",
    "credibility": 3,
    "heat": 60,
    "date": "2026-06",
    "headline": "RTX 50 Super cards reportedly stuck behind the memory shortage",
    "summary": "Board partner reports say Nvidia's RTX 50 Super refresh is delayed with no firm date because 3GB GDDR7 chips are scarce and expensive. Some outlets go further and say it was cancelled, and Nvidia has confirmed nothing.",
    "details": [
      "The refresh was built around 3GB chips for 18GB and 24GB cards.",
      "Reports say Nvidia is steering that memory to more profitable AI products.",
      "Some reports also say RTX 60 could slip toward 2028."
    ],
    "sources": [
      "VideoCardz",
      "TweakTown",
      "KitGuru",
      "TechPowerUp"
    ],
    "timeline": [
      {
        "date": "2026-06",
        "event": "Reports of an indefinite delay spread"
      }
    ],
    "tags": [
      "RTX 50 Super",
      "GDDR7",
      "GPU"
    ]
  },
  {
    "id": "nvidia-lapsus-hack-2022",
    "category": "tech",
    "topic": "Nvidia",
    "status": "confirmed",
    "credibility": 5,
    "heat": 15,
    "date": "2022-03-01",
    "headline": "Lapsus$ hacks Nvidia and leaks DLSS source code",
    "summary": "Nvidia confirmed hackers stole employee credentials and company data after an intrusion it found on February 23, 2022. The Lapsus$ group claimed 1TB of data, and DLSS source code soon leaked online.",
    "details": [
      "The group demanded Nvidia remove crypto mining limits from RTX 30 cards.",
      "Analysts said the haul included GPU configuration files, which was never fully verified.",
      "Nvidia did not give in to the demands."
    ],
    "sources": [
      "TechCrunch",
      "TechPowerUp",
      "Windows Central"
    ],
    "timeline": [
      {
        "date": "2022-02-23",
        "event": "Nvidia detects the intrusion"
      },
      {
        "date": "2022-03-01",
        "event": "DLSS source code leak reported"
      }
    ],
    "tags": [
      "hack",
      "Lapsus$",
      "historic"
    ]
  },
  {
    "id": "iphone-4-prototype-bar",
    "category": "tech",
    "topic": "iPhone",
    "status": "confirmed",
    "credibility": 5,
    "heat": 18,
    "date": "2010-04-19",
    "headline": "The iPhone 4 prototype left in a bar",
    "summary": "Gizmodo published a full look at a prototype iPhone 4 that an Apple employee had left in a Bay Area beer garden, disguised in an iPhone 3GS case. Apple asked for it back in writing, which confirmed it was real, and it became the most famous Apple leak ever.",
    "details": [
      "Gizmodo reportedly paid $5,000 for the phone.",
      "It showed the flat back, front camera and squared-off design months early.",
      "Police later searched a Gizmodo editor's home as part of an investigation."
    ],
    "sources": [
      "Gizmodo",
      "Engadget",
      "Macworld"
    ],
    "timeline": [
      {
        "date": "2010-04-17",
        "event": "Engadget posts first images"
      },
      {
        "date": "2010-04-19",
        "event": "Gizmodo publishes its teardown, and Apple asks for the device back"
      },
      {
        "date": "2010-06-07",
        "event": "Apple announces iPhone 4"
      }
    ],
    "tags": [
      "prototype",
      "Gizmodo",
      "historic"
    ]
  },
  {
    "id": "hyperliquid-whale-tariff-short",
    "category": "crypto",
    "topic": "Bitcoin",
    "status": "developing",
    "credibility": 3,
    "heat": 72,
    "date": "2025-10-10",
    "headline": "Hyperliquid whale shorted Bitcoin right before the 100% China tariff post",
    "summary": "A Hyperliquid wallet opened a huge Bitcoin short less than an hour before President Trump announced a 100% tariff on China, then cashed in when the market crashed. On-chain sleuths called it an \"insider whale,\" but no wrongdoing has been proven.",
    "details": [
      "The short was reported at about $735 million, with profit estimates ranging from $150 million to $192 million.",
      "Sleuths linked the wallet to a former exchange CEO, who denied any ties to the Trump family and said the funds belonged to clients.",
      "The same account later lost about $250 million on an ETH long, according to Arkham data."
    ],
    "sources": [
      "CoinDesk",
      "The Block",
      "Cointelegraph",
      "Decrypt"
    ],
    "timeline": [
      {
        "date": "2025-10-10",
        "event": "Short opened, then tariff announced and crypto sells off"
      },
      {
        "date": "2025-10-13",
        "event": "Alleged owner denies insider trading; wallet opens a new large BTC short"
      }
    ],
    "tags": [
      "front-running",
      "on-chain",
      "Hyperliquid",
      "tariffs"
    ]
  },
  {
    "id": "polymarket-maduro-raid-bet",
    "category": "crypto",
    "topic": "Polymarket",
    "status": "developing",
    "credibility": 4,
    "heat": 80,
    "date": "2026-01-05",
    "headline": "Brand-new Polymarket account cashed in on Maduro's capture",
    "summary": "A fresh Polymarket account bet about $30,000 that Maduro would be out of power and turned it into roughly $400,000 once he was captured. Prosecutors later charged a U.S. soldier who they say helped plan the raid, and he has pleaded not guilty.",
    "details": [
      "The account joined Polymarket only weeks before the trade and placed 13 bets tied to the operation, prosecutors say.",
      "Charges include theft of nonpublic government information and commodities fraud.",
      "Polymarket then teamed up with Chainalysis to monitor for suspicious trades."
    ],
    "sources": [
      "Axios",
      "NPR",
      "ABC News",
      "PBS NewsHour"
    ],
    "timeline": [
      {
        "date": "2026-01-03",
        "event": "U.S. raid captures Maduro; the bet pays out"
      },
      {
        "date": "2026-01-05",
        "event": "Axios and NPR report on the suspicious bet"
      },
      {
        "date": "2026-04",
        "event": "Soldier indicted; Polymarket expands trade monitoring a week later"
      }
    ],
    "tags": [
      "prediction markets",
      "insider trading",
      "Venezuela"
    ]
  },
  {
    "id": "binance-wallet-employee-front-run",
    "category": "crypto",
    "topic": "Binance",
    "status": "confirmed",
    "credibility": 5,
    "heat": 45,
    "date": "2025-03-24",
    "headline": "Binance suspends staffer who bought a token before its launch",
    "summary": "Binance said a Binance Wallet employee used information from his old BNB Chain job to buy a token ahead of its launch and sold some for a big profit. He was suspended and four whistleblowers split a $100,000 reward.",
    "details": [
      "Binance's internal audit team got the complaint on March 23, 2025.",
      "Binance did not name the project; users on X pointed to the BNB Chain memecoin UUU, which was never confirmed.",
      "The employee had joined the Wallet team only about a month earlier."
    ],
    "sources": [
      "The Block",
      "Decrypt",
      "Cointelegraph"
    ],
    "timeline": [
      {
        "date": "2025-03-23",
        "event": "Whistleblower complaint reaches Binance internal audit"
      },
      {
        "date": "2025-03-24",
        "event": "Binance announces the suspension and whistleblower reward"
      }
    ],
    "tags": [
      "insider trading",
      "token launch",
      "BNB Chain"
    ]
  },
  {
    "id": "coinbase-support-agent-data-leak",
    "category": "crypto",
    "topic": "Coinbase",
    "status": "confirmed",
    "credibility": 5,
    "heat": 55,
    "date": "2025-05-15",
    "headline": "Bribed Coinbase support agents leaked data on about 70,000 users",
    "summary": "Coinbase disclosed that criminals paid a small group of overseas support staff to copy customer data, then demanded $20 million to keep quiet. Coinbase refused and put up a $20 million bounty instead.",
    "details": [
      "Coinbase said no passwords or private keys were taken.",
      "The stolen data was used to impersonate Coinbase and trick customers into sending crypto.",
      "Coinbase estimated remediation costs at $180 million to $400 million."
    ],
    "sources": [
      "Coinbase SEC filing",
      "Bloomberg",
      "The Register",
      "The Hacker News"
    ],
    "timeline": [
      {
        "date": "2024-12",
        "event": "Data theft begins, per Coinbase"
      },
      {
        "date": "2025-05-11",
        "event": "Extortion email arrives demanding $20 million"
      },
      {
        "date": "2025-05-15",
        "event": "Coinbase discloses the breach in an SEC filing"
      }
    ],
    "tags": [
      "data breach",
      "insider",
      "extortion"
    ]
  },
  {
    "id": "coinbase-listing-tips-wahi",
    "category": "crypto",
    "topic": "Coinbase",
    "status": "confirmed",
    "credibility": 5,
    "heat": 20,
    "date": "2023-05-09",
    "headline": "Ex-Coinbase manager got two years for leaking listing plans",
    "summary": "Former Coinbase product manager Ishan Wahi tipped his brother and a friend about which tokens Coinbase was about to list, and they traded ahead of the announcements. It was billed as the first ever crypto insider trading case.",
    "details": [
      "The group traded 55 assets ahead of listings between June 2021 and April 2022 and made about $1.5 million.",
      "Wahi pleaded guilty to two wire fraud conspiracy counts; his brother got 10 months.",
      "The third person charged remained at large at sentencing."
    ],
    "sources": [
      "U.S. DOJ (SDNY)",
      "Blockworks",
      "Decrypt"
    ],
    "timeline": [
      {
        "date": "2022-07",
        "event": "Charges filed by SDNY and the SEC"
      },
      {
        "date": "2023-02",
        "event": "Wahi pleads guilty"
      },
      {
        "date": "2023-05-09",
        "event": "Sentenced to two years in prison"
      }
    ],
    "tags": [
      "listing leak",
      "insider trading",
      "historic"
    ]
  },
  {
    "id": "opensea-featured-nft-conviction-overturned",
    "category": "crypto",
    "topic": "OpenSea",
    "status": "confirmed",
    "credibility": 5,
    "heat": 30,
    "date": "2025-07-31",
    "headline": "Appeals court tosses OpenSea 'featured NFT' insider conviction",
    "summary": "A former OpenSea product manager was convicted in 2023 for buying NFTs before the site featured them on its homepage. In July 2025 the Second Circuit vacated the conviction over the jury instructions and sent the case back.",
    "details": [
      "The court said the jury may have convicted over unethical conduct rather than taking property, which fraud law requires.",
      "He had been sentenced to three months in prison in August 2023.",
      "The ruling does not say the conduct was legal, only that the charge and instructions were wrong."
    ],
    "sources": [
      "The Block",
      "Decrypt",
      "The Defiant"
    ],
    "timeline": [
      {
        "date": "2023-05",
        "event": "Convicted of wire fraud and money laundering"
      },
      {
        "date": "2023-08",
        "event": "Sentenced to three months"
      },
      {
        "date": "2025-07-31",
        "event": "Second Circuit vacates the conviction"
      }
    ],
    "tags": [
      "NFTs",
      "insider trading",
      "court"
    ]
  },
  {
    "id": "beyond-the-spider-verse-footage-leak",
    "category": "entertainment",
    "topic": "Spider-Man",
    "status": "confirmed",
    "credibility": 4,
    "heat": 78,
    "date": "2026-08-14",
    "headline": "Beyond the Spider-Verse footage leaked, co-writer says it's unfinished",
    "summary": "About four and a half minutes of Spider-Man: Beyond the Spider-Verse footage spread on X in August. Co-writer and producer Chris Miller said he was not a fan of leaks of unfinished, not fully rendered footage.",
    "details": [
      "Reports say it matches the closed-door CinemaCon presentation from April.",
      "Sony reportedly issued takedowns as copies spread.",
      "The film is dated for June 18, 2027."
    ],
    "sources": [
      "Variety",
      "Deadline",
      "The Hollywood Reporter",
      "Gizmodo"
    ],
    "timeline": [
      {
        "date": "2026-04",
        "event": "Footage shown privately at CinemaCon"
      },
      {
        "date": "2026-08-14",
        "event": "Leak spreads on X; Miller responds"
      }
    ],
    "tags": [
      "Sony",
      "trailer leak",
      "animation"
    ]
  },
  {
    "id": "avatar-aang-movie-leak",
    "category": "entertainment",
    "topic": "Avatar",
    "status": "confirmed",
    "credibility": 4,
    "heat": 70,
    "date": "2026-04-17",
    "headline": "Paramount's Aang movie leaked in full months before streaming",
    "summary": "An X user posted clips of the unreleased Avatar: Aang, The Last Airbender film, claiming it was emailed to them by mistake, and a full copy spread days later. Paramount investigated and sources said the leak did not come from its systems.",
    "details": [
      "The poster later told THR a hacker friend sent the file.",
      "Animation studio Flying Bark also said the leak did not come from them.",
      "The film had lost its theatrical release and was moved to a Paramount+ streaming date, which fueled fan anger."
    ],
    "sources": [
      "Deadline",
      "Variety",
      "The Hollywood Reporter",
      "Time Out"
    ],
    "timeline": [
      {
        "date": "2025-12",
        "event": "Deadline reports the film will skip theaters"
      },
      {
        "date": "2026-04",
        "event": "Clips posted on X, then the full film leaks"
      },
      {
        "date": "2026-04",
        "event": "Paramount probe says leak not from studio systems"
      }
    ],
    "tags": [
      "Paramount",
      "Nickelodeon",
      "full film leak"
    ]
  },
  {
    "id": "avengers-doomsday-leaks-2026",
    "category": "entertainment",
    "topic": "Marvel",
    "status": "developing",
    "credibility": 3,
    "heat": 85,
    "date": "2026-09-20",
    "headline": "Avengers: Doomsday footage keeps leaking ahead of December release",
    "summary": "A blurry clip of the Avengers, X-Men and Fantastic Four facing Doctor Doom spread in June, and Disney pulled posts with copyright claims. A Doom shot that leaked in September later showed up in an official Marvel promo, but claims that the full movie leaked are unverified.",
    "details": [
      "Takedowns are not an official confirmation that the clips are real.",
      "Marvel has not issued a formal statement authenticating any leak.",
      "The film is scheduled for December 18, 2026."
    ],
    "sources": [
      "Gizmodo",
      "The Direct",
      "Cosmic Book News",
      "SlashFilm"
    ],
    "timeline": [
      {
        "date": "2026-06",
        "event": "Clip leaks; DMCA takedowns follow"
      },
      {
        "date": "2026-09-20",
        "event": "New Doom shot leaks along with unverified full-film claims"
      },
      {
        "date": "2026-10",
        "event": "Official promo uses a matching Doom shot"
      }
    ],
    "tags": [
      "MCU",
      "Doctor Doom",
      "takedowns"
    ]
  },
  {
    "id": "juice-wrld-songs-leak-2026",
    "category": "entertainment",
    "topic": "Juice WRLD",
    "status": "confirmed",
    "credibility": 4,
    "heat": 50,
    "date": "2026-01-24",
    "headline": "Dozens of unreleased Juice WRLD songs leaked before the deluxe album",
    "summary": "More than two dozen unreleased Juice WRLD tracks hit the internet in late January 2026. The dump landed ahead of a deluxe edition of The Party Never Ends, his third posthumous album.",
    "details": [
      "Leaked titles reportedly included Karma, Time and Air Guitar.",
      "Revolt counted over 30 songs in the leak.",
      "Juice WRLD died in 2019."
    ],
    "sources": [
      "XXL",
      "Revolt"
    ],
    "timeline": [
      {
        "date": "2026-01-24",
        "event": "Tracks leak online"
      }
    ],
    "tags": [
      "music",
      "hip-hop",
      "song leak"
    ]
  },
  {
    "id": "taylor-swift-showgirl-tracklist-leak",
    "category": "entertainment",
    "topic": "Taylor Swift",
    "status": "confirmed",
    "credibility": 3,
    "heat": 55,
    "date": "2025-08-12",
    "headline": "Alleged Showgirl tracklist leak turned out to match the real one",
    "summary": "Right after Taylor Swift teased The Life of a Showgirl, a post claiming the full cover and tracklist went viral. When Swift revealed the 12 songs, the titles and order lined up almost exactly.",
    "details": [
      "The leak included a Sabrina Carpenter feature on the title track, which was accurate.",
      "It is not known whether the leaker had inside access or guessed well.",
      "Separate reports said some tracks leaked shortly before the October 3 release, which was never verified."
    ],
    "sources": [
      "Billboard",
      "TheWrap",
      "Music Times",
      "Distractify"
    ],
    "timeline": [
      {
        "date": "2025-08-12",
        "event": "Alleged tracklist and cover circulate"
      },
      {
        "date": "2025-08-13",
        "event": "Swift posts the official tracklist"
      },
      {
        "date": "2025-10-03",
        "event": "Album releases"
      }
    ],
    "tags": [
      "music",
      "tracklist",
      "pop"
    ]
  },
  {
    "id": "grammy-winners-list-2019-fake",
    "category": "entertainment",
    "topic": "Grammys",
    "status": "debunked",
    "credibility": 1,
    "heat": 10,
    "date": "2019-02-08",
    "headline": "Viral 'leaked' Grammy winners list was fake",
    "summary": "A list of supposed Grammy winners spread on social media before the 2019 ceremony. The Recording Academy said it had no legitimacy and that results are not shared even with its own staff before the show.",
    "details": [
      "Grammy results stay sealed until the day of the ceremony, per the Academy.",
      "A similar scare hit the Golden Globes in 2015 when its site briefly showed wrong winners, blamed on a technical error."
    ],
    "sources": [
      "Recording Academy",
      "Fox News"
    ],
    "timeline": [
      {
        "date": "2019-02",
        "event": "Fake winners list circulates"
      },
      {
        "date": "2019-02-10",
        "event": "Ceremony held; real winners announced"
      }
    ],
    "tags": [
      "awards",
      "hoax",
      "historic"
    ]
  },
  {
    "id": "signalgate-yemen-chat",
    "category": "world",
    "topic": "Pentagon",
    "status": "confirmed",
    "credibility": 5,
    "heat": 75,
    "date": "2025-03-24",
    "headline": "Top officials planned Yemen strikes in a Signal chat with a journalist in it",
    "summary": "The Atlantic's editor Jeffrey Goldberg revealed he had been added to a Signal group where senior Trump officials, including Defense Secretary Pete Hegseth, discussed upcoming strikes in Yemen. A Pentagon inspector general review later found Hegseth broke rules on using a personal phone for official business.",
    "details": [
      "National security adviser Mike Waltz's chat was the one that added Goldberg.",
      "Per reports on the IG summary, the shared details could have endangered troops if intercepted.",
      "Hegseth's team called the IG review a total exoneration and said nothing classified was shared."
    ],
    "sources": [
      "The Atlantic",
      "NPR",
      "NBC News"
    ],
    "timeline": [
      {
        "date": "2025-03-24",
        "event": "The Atlantic publishes Goldberg's account"
      },
      {
        "date": "2025-03-26",
        "event": "The Atlantic publishes the attack-plan messages"
      },
      {
        "date": "2025-12-03",
        "event": "Inspector general findings reported"
      }
    ],
    "tags": [
      "Signal",
      "Hegseth",
      "Yemen",
      "national security"
    ]
  },
  {
    "id": "pentagon-discord-leaks-teixeira",
    "category": "world",
    "topic": "Pentagon",
    "status": "confirmed",
    "credibility": 5,
    "heat": 25,
    "date": "2023-04-13",
    "headline": "Air National Guardsman leaked Pentagon secrets to a Discord server",
    "summary": "Jack Teixeira, a Massachusetts Air National Guard member, posted hundreds of classified documents to a Discord gaming group over about a year. He pleaded guilty and was sentenced to 15 years in prison.",
    "details": [
      "The documents covered Russia's war in Ukraine, according to press reports.",
      "He pleaded guilty to six counts of willful retention and transmission of national defense information.",
      "Prosecutors wanted about 17 years; the defense asked for 11."
    ],
    "sources": [
      "Reuters",
      "AP",
      "The Washington Post",
      "The New York Times"
    ],
    "timeline": [
      {
        "date": "2023-04-13",
        "event": "Teixeira arrested"
      },
      {
        "date": "2024-03",
        "event": "Pleads guilty"
      },
      {
        "date": "2024-11-12",
        "event": "Sentenced to 15 years"
      }
    ],
    "tags": [
      "Discord",
      "Ukraine",
      "Espionage Act",
      "historic"
    ]
  },
  {
    "id": "israel-iran-strike-plans-leak",
    "category": "world",
    "topic": "CIA",
    "status": "confirmed",
    "credibility": 5,
    "heat": 40,
    "date": "2024-10-18",
    "headline": "CIA analyst leaked U.S. intel on Israel's Iran strike plans",
    "summary": "Two top secret documents on Israeli preparations to strike Iran showed up on Telegram in October 2024. Former CIA analyst Asif Rahman pleaded guilty and got 37 months in prison.",
    "details": [
      "The files spread via a Telegram account and did not name actual targets, per reports.",
      "Rahman photographed the documents and edited the images to hide their source, per court filings.",
      "He was arrested in Cambodia."
    ],
    "sources": [
      "Reuters",
      "Al-Monitor",
      "The Hill"
    ],
    "timeline": [
      {
        "date": "2024-10-17",
        "event": "Rahman prints the two documents"
      },
      {
        "date": "2024-10",
        "event": "Documents surface on Telegram"
      },
      {
        "date": "2025-01",
        "event": "Pleads guilty"
      },
      {
        "date": "2025-06-11",
        "event": "Sentenced to 37 months"
      }
    ],
    "tags": [
      "Israel",
      "Iran",
      "Telegram",
      "classified"
    ]
  },
  {
    "id": "dia-iran-strike-assessment-leak",
    "category": "world",
    "topic": "White House",
    "status": "confirmed",
    "credibility": 4,
    "heat": 60,
    "date": "2025-06-24",
    "headline": "Leaked early intel said Iran strikes only set nuclear program back months",
    "summary": "CNN reported a preliminary Defense Intelligence Agency assessment that the U.S. strikes on Iran's nuclear sites did not destroy key parts of the program. The White House called it flat-out wrong and blamed a low-level leaker.",
    "details": [
      "The DIA said the assessment was low confidence and more intelligence was being gathered.",
      "CNN's report relied on anonymous people briefed on the findings.",
      "The CIA director later said fresh evidence showed severe damage."
    ],
    "sources": [
      "CNN",
      "Defense One",
      "White House"
    ],
    "timeline": [
      {
        "date": "2025-06-21",
        "event": "U.S. strikes Iranian nuclear sites"
      },
      {
        "date": "2025-06-24",
        "event": "CNN reports the leaked DIA assessment"
      }
    ],
    "tags": [
      "Iran",
      "intelligence",
      "DIA"
    ]
  },
  {
    "id": "uk-obr-budget-early-publish",
    "category": "world",
    "topic": "UK Budget",
    "status": "confirmed",
    "credibility": 5,
    "heat": 50,
    "date": "2025-11-26",
    "headline": "UK budget watchdog accidentally published the Budget early",
    "summary": "The Office for Budget Responsibility put its forecast online before Rachel Reeves gave her Budget speech, revealing the measures early. Its chair Richard Hughes resigned days later.",
    "details": [
      "An inquiry called it the worst failure in the OBR's 15-year history.",
      "It was not deliberate; the inquiry blamed two errors linked to its website and predictable file addresses.",
      "Hughes had been reappointed for a second term in July 2025."
    ],
    "sources": [
      "PA Media",
      "Channel 4 News",
      "PoliticsHome",
      "STV"
    ],
    "timeline": [
      {
        "date": "2025-11-26",
        "event": "Forecast published ahead of the Budget speech"
      },
      {
        "date": "2025-12-01",
        "event": "Hughes resigns after the inquiry report"
      }
    ],
    "tags": [
      "UK",
      "budget",
      "accidental leak"
    ]
  },
  {
    "id": "contractor-substack-leak-charges",
    "category": "world",
    "topic": "Justice Department",
    "status": "developing",
    "credibility": 4,
    "heat": 88,
    "date": "2026-10-23",
    "headline": "Contractor charged with feeding classified reports to a Substack writer",
    "summary": "The Justice Department charged a government contractor with passing national defense information to his girlfriend, who runs a Substack newsletter. Prosecutors say at least five 2026 posts mirrored classified reports.",
    "details": [
      "He held a top secret clearance at a U.S. agency and later at a contractor for the same agency.",
      "The FBI cited phone records, database logs, badge swipes and emails.",
      "He faces an Espionage Act charge carrying up to 10 years; the charges are allegations."
    ],
    "sources": [
      "Reuters",
      "The Hill",
      "U.S. News"
    ],
    "timeline": [
      {
        "date": "2026",
        "event": "Substack posts allegedly mirror classified reports on at least five occasions"
      },
      {
        "date": "2026-10-23",
        "event": "Charges announced after FBI arrest"
      }
    ],
    "tags": [
      "Espionage Act",
      "Substack",
      "classified"
    ]
  },
  {
    "id": "pentagon-stockpile-leak-polygraphs",
    "category": "world",
    "topic": "Pentagon",
    "status": "developing",
    "credibility": 3,
    "heat": 65,
    "date": "2026-09-04",
    "headline": "Pentagon polygraphs Joint Staff after weapons stockpile leak",
    "summary": "The New York Times and CBS reported that dozens of military officials were given lie detector tests after sensitive details about U.S. weapons stockpiles reached reporters. No charges or findings have been reported.",
    "details": [
      "The Times said about 50 Joint Staff members were examined.",
      "CBS reported President Trump was furious about the leaks, citing anonymous sources.",
      "In 2025 the White House had stopped an earlier Hegseth polygraph push."
    ],
    "sources": [
      "The New York Times",
      "CBS News"
    ],
    "timeline": [
      {
        "date": "2026-09-04",
        "event": "Polygraph probe reported"
      }
    ],
    "tags": [
      "leak investigation",
      "munitions",
      "polygraph"
    ]
  },
  {
    "id": "gta-vi-review-embargo-time-leak",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "rumor",
    "credibility": 3,
    "heat": 93,
    "date": "2026-10-23",
    "headline": "Leaked GTA VI review embargo points to November 18",
    "summary": "A ResetEra poster known as BlackBate says GTA VI reviews can go live on November 18, the day before launch. Some sites and YouTube channels are reportedly held back until launch day itself.",
    "details": [
      "The reported window is about 6 to 7 AM Eastern on November 18.",
      "Some outlets may have to wait until 12:01 AM Eastern on November 19.",
      "Rockstar has not announced an embargo date or time."
    ],
    "sources": [
      "Notebookcheck",
      "Insider Gaming",
      "ResetEra"
    ],
    "timeline": [
      {
        "date": "2026-10-14",
        "event": "Insider Gaming says it knows the embargo date but won't publish it yet."
      },
      {
        "date": "2026-10-23",
        "event": "BlackBate posts the November 18 date and time window."
      }
    ],
    "tags": [
      "reviews",
      "embargo",
      "rockstar"
    ]
  },
  {
    "id": "shirrako-gta-vi-review-copy-rumor",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "rumor",
    "credibility": 2,
    "heat": 87,
    "date": "2026-10-25",
    "headline": "Spoiler-heavy YouTuber Shirrako posts a palm tree, fans fear a GTA VI code",
    "summary": "Shirrako, known for posting full game endings around launch, posted a controller and palm tree emoji on X. Fans read it as a hint he has a GTA VI review copy, but nothing confirms that.",
    "details": [
      "The post does not mention GTA VI by name.",
      "Neither Shirrako nor Rockstar has said he received a copy.",
      "The worry is that the ending could show up online before launch."
    ],
    "sources": [
      "Notebookcheck",
      "GTA BOOM"
    ],
    "timeline": [
      {
        "date": "2026-10-25",
        "event": "Shirrako posts the two emoji message on X."
      },
      {
        "date": "2026-10-26",
        "event": "GTA BOOM says the post does not prove he has the game."
      }
    ],
    "tags": [
      "review copies",
      "spoilers",
      "youtube"
    ]
  },
  {
    "id": "natethehate-gta-vi-review-copies-october",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "developing",
    "credibility": 4,
    "heat": 86,
    "date": "2026-10-14",
    "headline": "NateTheHate says GTA VI review copies go out before October ends",
    "summary": "Asked on ResetEra whether critics had GTA VI yet, NateTheHate replied not yet but they will before the end of the month. That would give reviewers more than two weeks with the game.",
    "details": [
      "Insider Gaming separately said reviews will land before the November 19 launch.",
      "Rockstar has not confirmed any review copy plan.",
      "Earlier speculation had Rockstar using supervised review events instead of codes."
    ],
    "sources": [
      "Notebookcheck",
      "Insider Gaming",
      "ResetEra"
    ],
    "timeline": [
      {
        "date": "2026-10-14",
        "event": "NateTheHate posts the end of October timing."
      },
      {
        "date": "2026-10-23",
        "event": "A separate leak puts the embargo on November 18."
      }
    ],
    "tags": [
      "review copies",
      "natethehate",
      "rockstar"
    ]
  },
  {
    "id": "cyberleek-gta-vi-build-200gb",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "rumor",
    "credibility": 2,
    "heat": 82,
    "date": "2026-10-12",
    "headline": "Cyberleek says its GTA VI dev build is over 200GB",
    "summary": "The GTA VI leaker Cyberleek claimed the development build behind its clips is more than 200GB. Outlets warned a dev build usually carries extra tools and assets, so the retail download could be smaller.",
    "details": [
      "Rockstar, PlayStation and Xbox store pages still list no download size.",
      "Pre-loading is set to start November 12.",
      "Fake 113GB to 145GB 'builds' on torrent sites have been tied to malware."
    ],
    "sources": [
      "Notebookcheck",
      "TweakTown",
      "The Game Haus"
    ],
    "timeline": [
      {
        "date": "2026-10-12",
        "event": "Cyberleek posts the build size claim."
      },
      {
        "date": "2026-10-14",
        "event": "Cyberleek says the build will not be released."
      }
    ],
    "tags": [
      "cyberleek",
      "file size",
      "dev build"
    ]
  },
  {
    "id": "cyberleek-lucia-clip-gta-vi",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "developing",
    "credibility": 3,
    "heat": 80,
    "date": "2026-10-11",
    "headline": "Cyberleek follows up with a second GTA VI clip focused on Lucia",
    "summary": "Three days after its 25 minute leak, Cyberleek posted a shorter GTA VI clip centered on co-lead Lucia with some adult content. It came as the leaker's crypto token was climbing toward its stated target.",
    "details": [
      "Insider Gaming covered the clip as the next step in the leak campaign.",
      "The linked token reportedly hit about $8.4 million in market value on October 11.",
      "Rockstar has not verified any of the footage."
    ],
    "sources": [
      "Insider Gaming",
      "IGN",
      "Tech Insider"
    ],
    "timeline": [
      {
        "date": "2026-10-08",
        "event": "Cyberleek posts about 25 minutes of footage."
      },
      {
        "date": "2026-10-11",
        "event": "A second, Lucia-focused clip appears."
      },
      {
        "date": "2026-10-14",
        "event": "Cyberleek says it is stopping."
      }
    ],
    "tags": [
      "cyberleek",
      "lucia",
      "footage"
    ]
  },
  {
    "id": "gta-vi-deleted-pegi-listing",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "developing",
    "credibility": 3,
    "heat": 78,
    "date": "2026-10-03",
    "headline": "A since-deleted PEGI listing describes GTA VI's content",
    "summary": "A PEGI 18 page for GTA VI briefly went up and came down, and screenshots describe detailed decapitation and frequent drug use. PEGI and Rockstar haven't said whether the wording was real.",
    "details": [
      "The listing was spotted by GamesRadar+ and reported by IGN.",
      "No archived copy of the original page has been verified.",
      "UK PlayStation and Xbox store pages do show PEGI 18 and similar content labels."
    ],
    "sources": [
      "IBTimes UK",
      "IGN",
      "GamesRadar+",
      "gHacks"
    ],
    "timeline": [
      {
        "date": "2026-10-01",
        "event": "GTA VI gets its ESRB M rating."
      },
      {
        "date": "2026-10-03",
        "event": "Reports on the removed PEGI listing spread."
      }
    ],
    "tags": [
      "ratings board",
      "pegi",
      "rockstar"
    ]
  },
  {
    "id": "gta-v-200gb-leak-liberty-city-dlc",
    "category": "gaming",
    "topic": "Rockstar",
    "status": "developing",
    "credibility": 3,
    "heat": 72,
    "date": "2026-09-23",
    "headline": "200GB GTA V leak shows cut Liberty City DLC and very early GTA VI files",
    "summary": "A roughly 200GB batch of GTA V development files surfaced online, pointing to a scrapped Liberty City expansion and a cut 'Agent Trevor' DLC. It also reportedly includes very old GTA VI work.",
    "details": [
      "At least one outlet says the files trace back to the 2022 Rockstar breach, not a new hack.",
      "The GTA VI assets are described as badly outdated.",
      "Rockstar has not commented on the files."
    ],
    "sources": [
      "Eurogamer",
      "GamesRadar+",
      "TheGamer",
      "Hitmarker"
    ],
    "timeline": [
      {
        "date": "2022-09-18",
        "event": "Rockstar is hacked and GTA VI dev videos leak."
      },
      {
        "date": "2026-09-23",
        "event": "The 200GB GTA V archive starts making the rounds."
      }
    ],
    "tags": [
      "gta v",
      "cut content",
      "source files"
    ]
  },
  {
    "id": "old-gameroll-gta-vi-leaks-proved-true",
    "category": "gaming",
    "topic": "GTA VI",
    "status": "confirmed",
    "credibility": 4,
    "heat": 66,
    "date": "2026-09-02",
    "headline": "Old GameRoll GTA VI leaks mostly held up",
    "summary": "Kotaku went back over a June 2025 list from GameRoll, who cited a friend of a Rockstar developer, and found many of the claims matched what Rockstar later showed. Some bigger claims still look off.",
    "details": [
      "Matches include a six star wanted level, Red Dead style NPC greetings and the GPS design.",
      "Body damage, Jason slowing time and a limited inventory also lined up.",
      "Claims like 1,000 interiors and three large islands look unlikely."
    ],
    "sources": [
      "Kotaku",
      "Screen Rant",
      "Aroged"
    ],
    "timeline": [
      {
        "date": "2025-06",
        "event": "GameRoll posts the list of GTA VI details."
      },
      {
        "date": "2026-08-27",
        "event": "Rockstar shows long gameplay on Netflix."
      },
      {
        "date": "2026-09-02",
        "event": "Kotaku compares the old list to what was shown."
      }
    ],
    "tags": [
      "gameroll",
      "insider",
      "gameplay"
    ]
  },
  {
    "id": "switch-2-games-dumped-after-jailbreak",
    "category": "gaming",
    "topic": "Nintendo",
    "status": "developing",
    "credibility": 4,
    "heat": 84,
    "date": "2026-10-25",
    "headline": "Switch 2 jailbreak lets hackers pull files from Mario Kart World",
    "summary": "A tethered Switch 2 exploit called ns2jb is being used to extract game data, starting with Mario Kart World, Deltarune and a beta build of The Duskbloods. Leak account CentroLeaks then claimed Nintendo is sending DMCA takedowns over the datamines.",
    "details": [
      "The exploit needs a PC and stops working after a reboot.",
      "So far the dumps are asset level, and no way to play them on PC exists.",
      "The DMCA claim rests on one post and Nintendo hasn't commented."
    ],
    "sources": [
      "Kotaku",
      "VideoCardz",
      "TweakTown",
      "GoNintendo"
    ],
    "timeline": [
      {
        "date": "2026-10",
        "event": "Kotaku reports the first Switch 2 jailbreak."
      },
      {
        "date": "2026-10-25",
        "event": "Reports say game files are being dumped."
      },
      {
        "date": "2026-10-26",
        "event": "CentroLeaks claims Nintendo is issuing DMCA notices."
      }
    ],
    "tags": [
      "switch 2",
      "jailbreak",
      "datamine"
    ]
  },
  {
    "id": "pokopia-datamine-dlc-2-lineup",
    "category": "gaming",
    "topic": "Pokemon",
    "status": "rumor",
    "credibility": 3,
    "heat": 74,
    "date": "2026-10-26",
    "headline": "Pokopia datamine appears to list the DLC 2 Pokemon",
    "summary": "Using the new Switch 2 dumping tools, dataminers pulled an icon sheet from Pokemon Pokopia with about two dozen Pokemon that aren't in the game yet. The leak also hints at events before the second DLC wave.",
    "details": [
      "Reports count 24 to 27 names, including the Applin family and Fennekin.",
      "One claim points to a Thanksgiving-themed Applin event.",
      "Nintendo and The Pokemon Company haven't commented."
    ],
    "sources": [
      "Nintendo Everything",
      "GameDaily",
      "CentroLeaks"
    ],
    "timeline": [
      {
        "date": "2026-10-25",
        "event": "Switch 2 file dumps start circulating."
      },
      {
        "date": "2026-10-26",
        "event": "The Pokopia icon sheet leak spreads."
      }
    ],
    "tags": [
      "pokopia",
      "datamine",
      "dlc"
    ]
  },
  {
    "id": "valve-composer-says-hlx-on-stage",
    "category": "gaming",
    "topic": "Valve",
    "status": "confirmed",
    "credibility": 4,
    "heat": 83,
    "date": "2026-10-21",
    "headline": "Valve composer says 'HLX' out loud at GameSoundCon",
    "summary": "During a Q&A about Valve's audio engine, composer Mike Morasky mentioned that HLX has its own version of HDR audio, next to Deadlock. HLX is the rumored codename for the next Half-Life, and it's the first public mention from a Valve staffer.",
    "details": [
      "The panel was at GameSoundCon 2026 in Burbank.",
      "Viewers say a colleague next to him reacted to the slip.",
      "Valve has still not said what HLX is."
    ],
    "sources": [
      "Video Games Chronicle",
      "VideoCardz",
      "God is a Geek"
    ],
    "timeline": [
      {
        "date": "2026-02",
        "event": "Dataminers find new HLX strings in a Deadlock update."
      },
      {
        "date": "2026-10-21",
        "event": "Morasky names HLX during the panel Q&A."
      }
    ],
    "tags": [
      "half-life",
      "hlx",
      "valve"
    ]
  },
  {
    "id": "ea-closes-bioware-bloomberg",
    "category": "gaming",
    "topic": "EA",
    "status": "confirmed",
    "credibility": 5,
    "heat": 88,
    "date": "2026-10-21",
    "headline": "Bloomberg reports EA is closing BioWare, and the studio confirms it",
    "summary": "Bloomberg reported a new round of EA layoffs that includes shutting down BioWare, and BioWare confirmed it on X shortly after. The next Mass Effect, which a small team had in early development, is cancelled.",
    "details": [
      "The cuts are about 3 percent of EA staff, roughly 400 people.",
      "BioWare's Edmonton office is closing.",
      "It follows EA's $55 billion sale to a group led by Saudi Arabia's PIF."
    ],
    "sources": [
      "Bloomberg",
      "Game Informer",
      "Washington Post",
      "Variety",
      "CBC"
    ],
    "timeline": [
      {
        "date": "2026-10-21",
        "event": "Bloomberg reports the closure, BioWare confirms it."
      }
    ],
    "tags": [
      "bioware",
      "mass effect",
      "layoffs"
    ]
  },
  {
    "id": "capcom-id-breach-11-million-records",
    "category": "gaming",
    "topic": "Capcom",
    "status": "confirmed",
    "credibility": 5,
    "heat": 79,
    "date": "2026-10-23",
    "headline": "Capcom says 11.7 million CAPCOM ID records were exposed",
    "summary": "Capcom disclosed unauthorized access to about 11.7 million records tied to its CAPCOM ID accounts, including email addresses and recent IP addresses. It says card data was not exposed and is warning about phishing.",
    "details": [
      "Capcom found the intrusion on October 19.",
      "Passwords on 196 accounts were changed without permission and have been reset.",
      "Record count may not equal the number of people affected."
    ],
    "sources": [
      "Capcom",
      "Malwarebytes",
      "Cybernews",
      "GamingBible"
    ],
    "timeline": [
      {
        "date": "2026-10-19",
        "event": "Capcom detects the unauthorized access."
      },
      {
        "date": "2026-10-23",
        "event": "Capcom discloses the breach."
      }
    ],
    "tags": [
      "data breach",
      "capcom",
      "phishing"
    ]
  },
  {
    "id": "fortnitemares-2026-shop-dates-leak",
    "category": "gaming",
    "topic": "Fortnite",
    "status": "rumor",
    "credibility": 4,
    "heat": 62,
    "date": "2026-10-19",
    "headline": "Dataminers leak the rest of the Fortnitemares 2026 shop schedule",
    "summary": "Fortnite dataminers posted dates for the remaining Fortnitemares collabs, from Obsession and Slenderman to Beetlejuice and Predator: Badlands. Epic hasn't confirmed the schedule.",
    "details": [
      "Obsession was listed for October 21, Slenderman for October 22, Beetlejuice for October 23.",
      "Predator: Badlands was listed for October 28.",
      "Chapter 7 Season 4 is set to end October 31."
    ],
    "sources": [
      "VICE",
      "fndb.gg"
    ],
    "timeline": [
      {
        "date": "2026-10-01",
        "event": "Fortnitemares 2026 starts."
      },
      {
        "date": "2026-10-19",
        "event": "Remaining shop dates leak."
      }
    ],
    "tags": [
      "fortnite",
      "datamine",
      "collabs"
    ]
  },
  {
    "id": "battlefield-6-goty-edition-leak",
    "category": "gaming",
    "topic": "Battlefield",
    "status": "confirmed",
    "credibility": 4,
    "heat": 55,
    "date": "2026-10-13",
    "headline": "Battlefield 6 Game of the Year Edition leaked, then got announced the same day",
    "summary": "Dataminers spotted a Battlefield 6 GOTY Edition in the GameTools API, and leaker Daniluk4000 said it would arrive October 13. EA announced it that day, though the leaked 100 euro price didn't match.",
    "details": [
      "The edition's main extra is a kit that unlocks gear for all four classes.",
      "Existing players get a cheaper upgrade path.",
      "Battlefield 6 also came to Game Pass alongside it."
    ],
    "sources": [
      "Push Square",
      "GameSpot",
      "Battlefield-Inside.de"
    ],
    "timeline": [
      {
        "date": "2026-10",
        "event": "Store catalog data shows the GOTY Edition."
      },
      {
        "date": "2026-10-13",
        "event": "EA officially announces it."
      }
    ],
    "tags": [
      "battlefield 6",
      "datamine",
      "ea"
    ]
  },
  {
    "id": "re-requiem-online-origins-confirmed",
    "category": "gaming",
    "topic": "Resident Evil",
    "status": "confirmed",
    "credibility": 4,
    "heat": 50,
    "date": "2026-10-09",
    "headline": "Capcom confirms Resident Evil Requiem started as an online game",
    "summary": "Producer Masachika Kawata said Requiem was first developed as an online game before poor research results pushed it back to horror. That matches an early 2025 claim from leaker Dusk Golem.",
    "details": [
      "The quote comes from a Biohazard 30th anniversary book interview.",
      "The original leak said the online version starred Leon and Jill.",
      "Capcom did not address the Jill part."
    ],
    "sources": [
      "VICE",
      "Biohazard 30th Special Mook"
    ],
    "timeline": [
      {
        "date": "2025",
        "event": "Dusk Golem says RE9 was first planned as multiplayer."
      },
      {
        "date": "2026-10-09",
        "event": "Capcom's Kawata confirms the online origins."
      }
    ],
    "tags": [
      "resident evil",
      "capcom",
      "dusk golem"
    ]
  },
  {
    "id": "ac-hexe-casting-call-leak",
    "category": "gaming",
    "topic": "Assassin's Creed",
    "status": "rumor",
    "credibility": 3,
    "heat": 52,
    "date": "2026-10-05",
    "headline": "Casting call leak gives Assassin's Creed Hexe's lead the name Petra",
    "summary": "Leaked casting details describe Hexe's protagonist as a woman in her mid-20s called Petra, hunted by a group called the Order of the Lamb. Earlier leaks named her Anika, so Petra may be a placeholder.",
    "details": [
      "A modern day character named Anna is also listed.",
      "Her family reportedly includes a midwife mother and a father who may be an executioner.",
      "Ubisoft has confirmed none of it."
    ],
    "sources": [
      "GamingBible",
      "MP1st"
    ],
    "timeline": [
      {
        "date": "2026-05",
        "event": "Leakers name the protagonist Anika."
      },
      {
        "date": "2026-10-05",
        "event": "Casting details naming Petra are reported."
      }
    ],
    "tags": [
      "assassin's creed",
      "ubisoft",
      "casting"
    ]
  },
  {
    "id": "winds-waves-starter-evolutions-4chan",
    "category": "gaming",
    "topic": "Pokemon",
    "status": "rumor",
    "credibility": 1,
    "heat": 48,
    "date": "2026-10-05",
    "headline": "4chan post claims to show Winds and Waves starter evolutions",
    "summary": "An anonymous 4chan post claimed to reveal the evolution lines for the Gen 10 starters. It came days after a bigger Winds and Waves text leak, but the source is weak.",
    "details": [
      "The post is anonymous and unverified.",
      "Game Freak and The Pokemon Company haven't commented.",
      "Winds and Waves is due on Switch 2 in 2027."
    ],
    "sources": [
      "VICE",
      "Game Rant"
    ],
    "timeline": [
      {
        "date": "2026-10-02",
        "event": "Leaked beta text reveals the Gen 10 battle gimmick."
      },
      {
        "date": "2026-10-05",
        "event": "The starter evolution post appears."
      }
    ],
    "tags": [
      "pokemon",
      "gen 10",
      "4chan"
    ]
  },
  {
    "id": "keplerl2-ps6-memory-cost",
    "category": "gaming",
    "topic": "PlayStation",
    "status": "rumor",
    "credibility": 2,
    "heat": 58,
    "date": "2026-10",
    "headline": "Leaker says PS6 memory and storage alone cost over $680",
    "summary": "KeplerL2 posted on NeoGAF that the PS6's RAM and NAND cost more than $680 combined, which set off fears of a $1,000 console. It's a single forum line, not a spec sheet.",
    "details": [
      "The memory shortage has already pushed up other hardware prices.",
      "Moore's Law is Dead separately said PS6 production starts in early 2027.",
      "Sony has announced nothing about the PS6."
    ],
    "sources": [
      "NeoGAF",
      "Tech Insider",
      "Moore's Law is Dead"
    ],
    "timeline": [
      {
        "date": "2026-10-14",
        "event": "KeplerL2 disowns a viral PS6 handheld spec sheet."
      },
      {
        "date": "2026-10",
        "event": "KeplerL2 posts the memory cost claim."
      },
      {
        "date": "2026-10-20",
        "event": "MLID reports an early 2027 production start."
      }
    ],
    "tags": [
      "ps6",
      "keplerl2",
      "hardware"
    ]
  },
  {
    "id": "xbox-helix-vs-ps6-tflops-leak",
    "category": "gaming",
    "topic": "Xbox",
    "status": "rumor",
    "credibility": 3,
    "heat": 60,
    "date": "2026-09-23",
    "headline": "Leak puts next Xbox at 56 TFLOPS and PS6 at 40",
    "summary": "KeplerL2 claimed on NeoGAF that Xbox Project Helix hits 56 TFLOPS against 40 for the PS6, and that both chips have taped out. Microsoft, Sony and AMD haven't confirmed any of it.",
    "details": [
      "Helix is said to have 68 compute units versus 52 to 54 for PS6.",
      "Both are reportedly built on AMD's RDNA 5.",
      "TFLOPS is a theoretical figure, not real game performance."
    ],
    "sources": [
      "TweakTown",
      "OC3D",
      "PC Guide"
    ],
    "timeline": [
      {
        "date": "2026-09-23",
        "event": "KeplerL2 posts the TFLOPS and tape-out claims."
      }
    ],
    "tags": [
      "xbox",
      "ps6",
      "hardware"
    ]
  },
  {
    "id": "ps-plus-brazil-second-price-hike-leak",
    "category": "gaming",
    "topic": "PlayStation",
    "status": "rumor",
    "credibility": 2,
    "heat": 45,
    "date": "2026-09-17",
    "headline": "Alleged Sony message points to another PS Plus price hike in Brazil",
    "summary": "Russian outlet ixbt.games published what it said was an internal Sony Brazil message planning a second PS Plus price rise before year end. The leaked numbers mean increases of 16 to 36 percent depending on tier.",
    "details": [
      "Essential would go from 49.90 to 67.90 reais.",
      "It would follow a PS Plus price increase in May 2026.",
      "Sony has not confirmed anything."
    ],
    "sources": [
      "ixbt.games",
      "Olhar Digital",
      "PPE.pl"
    ],
    "timeline": [
      {
        "date": "2026-05-18",
        "event": "Sony announces a PS Plus price increase."
      },
      {
        "date": "2026-09-17",
        "event": "The alleged internal message is published."
      }
    ],
    "tags": [
      "ps plus",
      "pricing",
      "sony"
    ]
  },
  {
    "id": "game-pass-six-tier-leak",
    "category": "gaming",
    "topic": "Xbox",
    "status": "rumor",
    "credibility": 2,
    "heat": 44,
    "date": "2026-09-15",
    "headline": "Forum leak says Game Pass could split into six tiers",
    "summary": "A forum member known as Slayven claimed Microsoft is planning to break Game Pass into as many as six paid pieces. Xbox has announced no new tiers or prices.",
    "details": [
      "Later reports talked about an a la carte plan.",
      "October's lineup still uses the four plan setup.",
      "Microsoft has not commented."
    ],
    "sources": [
      "Tech Insider",
      "Shattered"
    ],
    "timeline": [
      {
        "date": "2026-09-15",
        "event": "The six tier claim appears."
      }
    ],
    "tags": [
      "game pass",
      "pricing",
      "xbox"
    ]
  },
  {
    "id": "malo932-smash-nintendogs-claim",
    "category": "gaming",
    "topic": "Nintendo",
    "status": "rumor",
    "credibility": 2,
    "heat": 50,
    "date": "2026-09-05",
    "headline": "Anonymous leaker claims a new Smash Bros and Nintendogs for Switch 2",
    "summary": "YouTube commenter malo932, who called the two September Nintendo Directs a week early, also claimed a brand new Smash Bros and a Nintendogs revival are in the works. Neither showed up in the Directs.",
    "details": [
      "Nintendo held a Zelda 40th Direct on September 8 and a general Direct on September 9.",
      "The account later deleted its comments and renamed itself 'stop'.",
      "Nintendo has not commented on either game."
    ],
    "sources": [
      "Kotaku",
      "EventHubs",
      "My Nintendo News"
    ],
    "timeline": [
      {
        "date": "2026-09-04",
        "event": "Nintendo confirms the two Directs."
      },
      {
        "date": "2026-09-05",
        "event": "The Smash and Nintendogs claims spread."
      },
      {
        "date": "2026-09-09",
        "event": "The main Direct airs without either game."
      }
    ],
    "tags": [
      "smash bros",
      "nintendogs",
      "switch 2"
    ]
  },
  {
    "id": "wolverine-ending-leaks-before-launch",
    "category": "gaming",
    "topic": "Marvel",
    "status": "confirmed",
    "credibility": 4,
    "heat": 58,
    "date": "2026-09-06",
    "headline": "Marvel's Wolverine ending leaks a week before launch",
    "summary": "Clips from Marvel's Wolverine, including boss fights and the full ending and credits, spread online before its September 15 release. Kotaku said it couldn't tell if they came from early retail copies, promo copies or theft.",
    "details": [
      "At least one streamer broadcast the game early before Sony's DMCA notices took it down.",
      "Kotaku said it did not look tied to a blackmail scheme like the 2023 Insomniac hack.",
      "The game still had Sony's biggest launch month since Helldivers 2."
    ],
    "sources": [
      "Kotaku",
      "Push Square",
      "ixbt.games"
    ],
    "timeline": [
      {
        "date": "2023-12",
        "event": "Insomniac ransomware leak exposes early Wolverine material."
      },
      {
        "date": "2026-09-05",
        "event": "Early gameplay and streams start circulating."
      },
      {
        "date": "2026-09-06",
        "event": "Kotaku confirms the ending has leaked."
      },
      {
        "date": "2026-09-15",
        "event": "Wolverine launches on PS5."
      }
    ],
    "tags": [
      "wolverine",
      "insomniac",
      "spoilers"
    ]
  },
  {
    "id": "anthropic-ipo-draft-prospectus-leak",
    "category": "ai",
    "topic": "Anthropic",
    "status": "confirmed",
    "credibility": 5,
    "heat": 92,
    "date": "2026-09-28",
    "headline": "Anthropic's confidential IPO draft leaks to Reuters",
    "summary": "A confidential draft of Anthropic's S-1 prospectus, filed privately with the SEC in June, reached Reuters and then other outlets. It showed fast revenue growth, very large losses and a long list of risk factors.",
    "details": [
      "The draft reportedly showed about $4.6 billion in 2025 revenue and a net loss of about $42 billion, mostly non-cash.",
      "The document runs about 261 pages, roughly 80 of them risk factors.",
      "Confidential drafts are not posted on EDGAR, so its contents only came out through the leak."
    ],
    "sources": [
      "Reuters",
      "CNN",
      "Fortune",
      "The Rundown AI"
    ],
    "timeline": [
      {
        "date": "2026-06-01",
        "event": "Anthropic confidentially submits a draft S-1 to the SEC."
      },
      {
        "date": "2026-09-28",
        "event": "Reuters reports on the leaked draft."
      },
      {
        "date": "2026-09-29",
        "event": "CNN, Fortune and others pick up the figures."
      }
    ],
    "tags": [
      "ipo",
      "filing",
      "finance"
    ]
  },
  {
    "id": "openai-fires-safety-researchers-leak-probe",
    "category": "ai",
    "topic": "OpenAI",
    "status": "developing",
    "credibility": 4,
    "heat": 88,
    "date": "2026-10-22",
    "headline": "OpenAI fired three safety researchers it suspected of leaking",
    "summary": "The Wall Street Journal reported that OpenAI fired three safety researchers on October 1 after suspecting them of sharing internal model information with an outside AI safety researcher, partly over disappearing Signal chats. The researchers deny wrongdoing.",
    "details": [
      "OpenAI called it a significant breach of trust and said information was handled outside company procedures.",
      "Reports say the probe focused on details about the reasoning process of an internal model.",
      "OpenAI has not publicly detailed what was shared."
    ],
    "sources": [
      "The Wall Street Journal",
      "AI Weekly",
      "Free Press Journal"
    ],
    "timeline": [
      {
        "date": "2026-10-01",
        "event": "Three safety researchers are fired."
      },
      {
        "date": "2026-10-22",
        "event": "WSJ reports the leak suspicion and the Signal chats."
      }
    ],
    "tags": [
      "safety",
      "internal-probe",
      "signal"
    ]
  },
  {
    "id": "gemini-4-carbon-internal-testing",
    "category": "ai",
    "topic": "Gemini",
    "status": "developing",
    "credibility": 4,
    "heat": 78,
    "date": "2026-10-09",
    "headline": "Google staff are testing a Gemini 4 checkpoint called Carbon",
    "summary": "Business Insider saw internal documents and screenshots showing Google employees trying a Gemini 4 checkpoint codenamed Carbon on an internal coding tool. One employee said its coding felt close to Claude Opus 5.5, though that was an early impression.",
    "details": [
      "Carbon is separate from Argon, the Gemini 4 checkpoint already seen in A/B tests.",
      "Internal documents also mentioned a third codename, Barium.",
      "TestingCatalog later reported Carbon showing up on LMArena and with partners."
    ],
    "sources": [
      "Business Insider",
      "TestingCatalog"
    ],
    "timeline": [
      {
        "date": "2026-10-09",
        "event": "Business Insider reports on Carbon."
      },
      {
        "date": "2026-10-23",
        "event": "TestingCatalog says Carbon is appearing on LMArena."
      }
    ],
    "tags": [
      "gemini-4",
      "codename",
      "arena"
    ]
  },
  {
    "id": "claude-next-claude-code-rumor",
    "category": "ai",
    "topic": "Claude",
    "status": "rumor",
    "credibility": 2,
    "heat": 55,
    "date": "2026-10-11",
    "headline": "X post claims an unreleased 'Claude Next' is live in Claude Code",
    "summary": "An X account claimed Anthropic was testing a model called Claude Next inside Claude Code. Nothing backs it up so far, with no model ID, docs or Anthropic comment.",
    "details": [
      "The claim came from a single social media post.",
      "No model card, pricing or Arena listing has appeared.",
      "Anthropic has not commented."
    ],
    "sources": [
      "OrcaRouter blog",
      "X posts"
    ],
    "timeline": [
      {
        "date": "2026-10-11",
        "event": "Claude Next claim posted on X."
      }
    ],
    "tags": [
      "claude-code",
      "unverified",
      "model"
    ]
  },
  {
    "id": "qwen-4-code-traces-and-test-leaks",
    "category": "ai",
    "topic": "Qwen",
    "status": "rumor",
    "credibility": 2,
    "heat": 50,
    "date": "2026-10",
    "headline": "Qwen 4 traces show up in open-source code, test outputs claimed",
    "summary": "A draft pull request in the SGLang repo references a Qwen4 model, and a Chinese roundup says early Qwen 4 test outputs have leaked. Alibaba named Qwen 4 in September but has not released it or given a date.",
    "details": [
      "The SGLang pull request was still a draft with no merge.",
      "The claimed test outputs trace back to a single Bilibili creator.",
      "An earlier leak pointing to a September launch did not pan out."
    ],
    "sources": [
      "KongchangAI",
      "Geeky Gadgets",
      "OrcaRouter blog"
    ],
    "timeline": [
      {
        "date": "2026-09-22",
        "event": "Alibaba names Qwen 4 at its Apsara conference."
      },
      {
        "date": "2026-10",
        "event": "Code traces and claimed test outputs circulate."
      }
    ],
    "tags": [
      "alibaba",
      "open-source",
      "code-traces"
    ]
  },
  {
    "id": "302-ai-aggregator-data-exposure",
    "category": "ai",
    "topic": "AI apps",
    "status": "confirmed",
    "credibility": 4,
    "heat": 60,
    "date": "2026-10-22",
    "headline": "AI aggregator 302.ai left 22TB of chats and files exposed",
    "summary": "Cybernews researchers found an open storage bucket at AI aggregator 302.ai holding about 17.6 million files, including user chat logs. The data was taken offline after the researchers reached out.",
    "details": [
      "More than 144,000 chat logs held prompts, replies and metadata.",
      "Some logs included contact details and home addresses.",
      "Researchers found no sign that attackers had downloaded the files."
    ],
    "sources": [
      "Cybernews",
      "TechRadar"
    ],
    "timeline": [
      {
        "date": "2026-10-22",
        "event": "TechRadar and Cybernews report the exposure."
      }
    ],
    "tags": [
      "data-exposure",
      "chat-logs",
      "cloud"
    ]
  },
  {
    "id": "gurman-homeview-apple-tv-homepod-leak",
    "category": "tech",
    "topic": "Apple",
    "status": "confirmed",
    "credibility": 5,
    "heat": 62,
    "date": "2026-10-11",
    "headline": "Gurman spells out Apple's home event two days early",
    "summary": "Ahead of Apple's October 13 home event, Bloomberg's Mark Gurman reported details of a new smart home hub, a HomePod mini 2 and a new Apple TV 4K. MacRumors rounded up 16 details from the reporting.",
    "details": [
      "The tabletop HomeView hub was reported in four finishes.",
      "Gurman also described a later model with a larger screen on a robotic arm, expected in 2027 or 2028.",
      "He had called the October 13 date before Apple confirmed it."
    ],
    "sources": [
      "Bloomberg",
      "MacRumors"
    ],
    "timeline": [
      {
        "date": "2026-09-30",
        "event": "Reports point to an October 13 launch."
      },
      {
        "date": "2026-10-11",
        "event": "MacRumors rounds up the leaked details."
      },
      {
        "date": "2026-10-13",
        "event": "Apple holds the event."
      }
    ],
    "tags": [
      "gurman",
      "smart-home",
      "event"
    ]
  },
  {
    "id": "oled-touch-macbook-pro-late-october",
    "category": "tech",
    "topic": "Mac",
    "status": "developing",
    "credibility": 4,
    "heat": 80,
    "date": "2026-10",
    "headline": "Gurman points to an OLED touchscreen MacBook Pro this month",
    "summary": "Gurman reportedly says Apple plans a late October launch with M6 Macs, an OLED iPad mini and a redesigned MacBook Pro with an OLED touchscreen. Apple has not confirmed a date.",
    "details": [
      "It would be the first touchscreen Mac.",
      "Reports put the announcement around October 27 or 28 with stores following in early November.",
      "Gurman said the redesign is lighter but not much thinner."
    ],
    "sources": [
      "Bloomberg",
      "9to5Mac",
      "BGR"
    ],
    "timeline": [
      {
        "date": "2026-10-08",
        "event": "9to5Mac reports on the new MacBook Pro leak."
      },
      {
        "date": "2026-10",
        "event": "Late October launch window reported."
      }
    ],
    "tags": [
      "macbook-pro",
      "oled",
      "m6"
    ]
  },
  {
    "id": "galaxy-s27-screen-protector-leak",
    "category": "tech",
    "topic": "Samsung",
    "status": "rumor",
    "credibility": 3,
    "heat": 58,
    "date": "2026-10-20",
    "headline": "Galaxy S27 screen protectors show three models, no Pro",
    "summary": "SammyGuru got images of alleged screen protectors for the Galaxy S27, S27 Plus and S27 Ultra. There is no protector for the rumored S27 Pro, so Samsung may skip it again.",
    "details": [
      "The front design looks close to the S26, with slightly thinner bezels on the Ultra.",
      "An earlier screen protector leak on October 3 included a Pro model.",
      "A tipster says Samsung is aiming for a January 2027 launch."
    ],
    "sources": [
      "Android Authority",
      "SammyGuru",
      "Sammy Fans"
    ],
    "timeline": [
      {
        "date": "2026-10-03",
        "event": "First screen protector leak shows four sizes."
      },
      {
        "date": "2026-10-20",
        "event": "New images show three models only."
      }
    ],
    "tags": [
      "galaxy-s27",
      "accessories",
      "lineup"
    ]
  },
  {
    "id": "kopite-rtx-60-rubin-2028",
    "category": "tech",
    "topic": "Nvidia",
    "status": "rumor",
    "credibility": 4,
    "heat": 57,
    "date": "2026-09-21",
    "headline": "Kopite7kimi says RTX 60 cards won't ship until 2028",
    "summary": "Well known GPU leaker kopite7kimi posted that the consumer Rubin chips, GR20x, won't ship until 2028. That is later than his own earlier call for the second half of 2027.",
    "details": [
      "The RTX 60 series is expected to use Rubin based GR20x dies.",
      "Memory supply has already delayed the RTX 50 Super cards.",
      "Nvidia has not announced any RTX 60 products."
    ],
    "sources": [
      "Tom's Hardware",
      "TechPowerUp",
      "Tom's Guide"
    ],
    "timeline": [
      {
        "date": "2026-01",
        "event": "Kopite7kimi points to the second half of 2027."
      },
      {
        "date": "2026-09-21",
        "event": "He moves the call to 2028."
      }
    ],
    "tags": [
      "gpu",
      "rubin",
      "kopite7kimi"
    ]
  },
  {
    "id": "tesla-app-leaks-optimus-gen-3",
    "category": "tech",
    "topic": "Tesla",
    "status": "rumor",
    "credibility": 3,
    "heat": 64,
    "date": "2026-09-23",
    "headline": "Tesla's own Android app leaks the Optimus Gen 3 design",
    "summary": "Image files named for Optimus Gen 3 were found inside Tesla's Android app, showing a cleaner robot with enclosed joints and new hands. Tesla has not confirmed the design.",
    "details": [
      "The assets were spotted in app version 4.60.5 and later reportedly removed.",
      "The renders show Gen 2.5 and Gen 3 side by side.",
      "They are app renders, not photos of real hardware."
    ],
    "sources": [
      "Teslarati",
      "Drive Tesla Canada",
      "Tesla North"
    ],
    "timeline": [
      {
        "date": "2026-08-27",
        "event": "Files reportedly first appear in the app."
      },
      {
        "date": "2026-09-23",
        "event": "Coverage of the find spreads."
      }
    ],
    "tags": [
      "optimus",
      "app-teardown",
      "robot"
    ]
  },
  {
    "id": "keystone-wallet-customer-data-breach",
    "category": "crypto",
    "topic": "Hardware wallets",
    "status": "confirmed",
    "credibility": 5,
    "heat": 74,
    "date": "2026-10-24",
    "headline": "Keystone wallet buyers' home addresses leak in store breach",
    "summary": "Hardware wallet maker Keystone said attackers got into its online store and took customer shipping addresses, contact details and order histories. It says keys, seed phrases and payment details were not exposed.",
    "details": [
      "Keystone detected the access on October 20 and confirmed the theft on October 23.",
      "Some exposed records were older than the 180 days Keystone said it keeps shipping data.",
      "The company warned customers about scammers posing as support."
    ],
    "sources": [
      "Crypto.news",
      "Cointribune",
      "FinanceFeeds"
    ],
    "timeline": [
      {
        "date": "2026-10-20",
        "event": "Unauthorized access to the store."
      },
      {
        "date": "2026-10-24",
        "event": "Keystone discloses the breach on X."
      }
    ],
    "tags": [
      "data-breach",
      "wallet",
      "phishing-risk"
    ]
  },
  {
    "id": "railway-env-var-leak-crypto-drains",
    "category": "crypto",
    "topic": "Wallet security",
    "status": "developing",
    "credibility": 4,
    "heat": 76,
    "date": "2026-10-21",
    "headline": "Railway credential leak tied to $371K in wallet drains",
    "summary": "Cloud host Railway said an attacker may have read decrypted customer environment variables and told everyone to rotate secrets. Investigator Taylor Monahan linked about $371,000 in crypto thefts across 19 chains to private keys stored there.",
    "details": [
      "Railway's preliminary report says the attacker was inside from October 20 to October 22.",
      "The attacker appeared to be hunting for AI provider API keys.",
      "Railway has not confirmed the crypto loss figure."
    ],
    "sources": [
      "CryptoSlate",
      "Crypto.news",
      "Railway"
    ],
    "timeline": [
      {
        "date": "2026-10-20",
        "event": "Attacker gets into build systems."
      },
      {
        "date": "2026-10-21",
        "event": "Railway discloses the incident."
      },
      {
        "date": "2026-10-22",
        "event": "Theft estimate published and credentials reset."
      }
    ],
    "tags": [
      "cloud-breach",
      "private-keys",
      "rotation"
    ]
  },
  {
    "id": "hegseth-bans-insider-bets-polymarket-kalshi",
    "category": "crypto",
    "topic": "Polymarket",
    "status": "confirmed",
    "credibility": 5,
    "heat": 70,
    "date": "2026-10-20",
    "headline": "Pentagon bans troops from betting on leaked operation info",
    "summary": "A memo from Defense Secretary Pete Hegseth bars military and Pentagon staff from trading on nonpublic information about operations, naming Polymarket and Kalshi. It follows a case where a soldier allegedly made about $410,000 betting on the Maduro raid.",
    "details": [
      "The ban covers classified and unclassified nonpublic information.",
      "Polymarket earlier referred dozens of possible military insider cases to the Justice Department.",
      "Researchers warn that public on-chain bets can tip off adversaries."
    ],
    "sources": [
      "CNN",
      "TheStreet",
      "Bitcoin.com News"
    ],
    "timeline": [
      {
        "date": "2026-08-21",
        "event": "CNN reports Polymarket referrals to DOJ."
      },
      {
        "date": "2026-10-20",
        "event": "Hegseth memo issues the ban."
      }
    ],
    "tags": [
      "prediction-markets",
      "insider-trading",
      "pentagon"
    ]
  },
  {
    "id": "house-oversight-crypto-com-insider-letter",
    "category": "crypto",
    "topic": "Crypto.com",
    "status": "confirmed",
    "credibility": 5,
    "heat": 52,
    "date": "2026-09-29",
    "headline": "House Oversight asks Crypto.com for records on insider bets",
    "summary": "The House Oversight Committee wrote to Crypto.com's CEO asking for records as part of its probe into prediction market bets made with nonpublic or classified government information. The letter cites a case of more than $409,000 in alleged insider wagers.",
    "details": [
      "The probe started with Polymarket and Kalshi earlier in the year.",
      "The committee is also seeking records from Hyperliquid.",
      "Crypto.com itself is not accused of wrongdoing."
    ],
    "sources": [
      "House Oversight Committee",
      "Yahoo Finance"
    ],
    "timeline": [
      {
        "date": "2026-05",
        "event": "Committee probe begins with Polymarket and Kalshi."
      },
      {
        "date": "2026-09-29",
        "event": "Letter sent to Crypto.com."
      }
    ],
    "tags": [
      "congress",
      "prediction-markets",
      "insider-trading"
    ]
  },
  {
    "id": "mass-effect-universe-trailer-leak",
    "category": "gaming",
    "topic": "Mass Effect",
    "status": "confirmed",
    "credibility": 5,
    "heat": 86,
    "date": "2026-10-22",
    "headline": "Canceled Mass Effect trailer leaks a day after BioWare closes",
    "summary": "A roughly two minute trailer for the canceled Mass Effect Universe appeared on Reddit the day after EA announced BioWare's closure. Jason Schreier and IGN both confirmed it is real.",
    "details": [
      "It was posted from a burner account claiming to be an EA employee.",
      "The in-engine footage shows a new lead and the return of Liara.",
      "Reports say it was a pitch video for EA leadership, not meant for the public."
    ],
    "sources": [
      "Bloomberg",
      "IGN",
      "Kotaku",
      "VGC"
    ],
    "timeline": [
      {
        "date": "2026-10-21",
        "event": "EA announces BioWare's shutdown."
      },
      {
        "date": "2026-10-22",
        "event": "Trailer leaks and is confirmed real."
      }
    ],
    "tags": [
      "bioware",
      "ea",
      "canceled-game"
    ]
  },
  {
    "id": "eminem-ex-staffer-pleads-guilty-leaks",
    "category": "entertainment",
    "topic": "Eminem",
    "status": "confirmed",
    "credibility": 5,
    "heat": 66,
    "date": "2026-10-22",
    "headline": "Former Eminem staffer pleads guilty to selling unreleased songs",
    "summary": "A former employee of Eminem's studio pleaded guilty to criminal copyright infringement for copying and selling unreleased tracks that later leaked online. The Justice Department valued the leaked songs at about $750,000.",
    "details": [
      "The plea covers at least 10 audio files taken from a password protected drive.",
      "The leaked tracks were accessed more than eight million times.",
      "Sentencing is set for January 27, 2027."
    ],
    "sources": [
      "U.S. Justice Department",
      "Rolling Stone",
      "Billboard"
    ],
    "timeline": [
      {
        "date": "2025-01",
        "event": "Eminem's team finds the songs for sale and alerts the FBI."
      },
      {
        "date": "2026-10-22",
        "event": "Guilty plea announced."
      }
    ],
    "tags": [
      "music",
      "copyright",
      "court"
    ]
  },
  {
    "id": "my-chemical-romance-2027-album-tour-leak",
    "category": "entertainment",
    "topic": "My Chemical Romance",
    "status": "rumor",
    "credibility": 2,
    "heat": 48,
    "date": "2026-09-26",
    "headline": "Leak account says My Chemical Romance has a 2027 album and tour",
    "summary": "A tour leak account on X claimed My Chemical Romance will release a new album and tour in 2027. The band has not confirmed it, though Gerard Way said on stage they would love to make another record.",
    "details": [
      "Way's September 12 comments gave no title or date.",
      "It would be the band's first album in more than 15 years.",
      "A 20th anniversary Black Parade reissue came out October 23."
    ],
    "sources": [
      "Vice",
      "Billboard"
    ],
    "timeline": [
      {
        "date": "2026-09-12",
        "event": "Way hints at a new album on stage."
      },
      {
        "date": "2026-09-26",
        "event": "Leak account posts the 2027 claim."
      }
    ],
    "tags": [
      "music",
      "tour",
      "unconfirmed"
    ]
  },
  {
    "id": "dni-memo-iran-plots-us-officials",
    "category": "world",
    "topic": "Iran",
    "status": "confirmed",
    "credibility": 5,
    "heat": 90,
    "date": "2026-10-24",
    "headline": "Leaked intel memo warns Iran plots against US officials are advanced",
    "summary": "Axios obtained a one page unclassified memo from intelligence chief Jay Clayton to Secretary of State Marco Rubio saying Iran has sharply stepped up efforts to target US personnel. US officials confirmed it was real.",
    "details": [
      "The memo is dated October 23 and says some plots are in advanced stages.",
      "It does not name targets or countries outside the Middle East.",
      "The AP later got the memo independently."
    ],
    "sources": [
      "Axios",
      "Associated Press",
      "Fox News"
    ],
    "timeline": [
      {
        "date": "2026-10-23",
        "event": "Memo sent to Rubio."
      },
      {
        "date": "2026-10-24",
        "event": "Axios publishes the scoop."
      }
    ],
    "tags": [
      "intelligence",
      "state-department",
      "memo"
    ]
  },
  {
    "id": "white-house-ballroom-donor-spreadsheet",
    "category": "world",
    "topic": "White House",
    "status": "confirmed",
    "credibility": 5,
    "heat": 82,
    "date": "2026-10-15",
    "headline": "Leaked spreadsheet names donors behind Trump's $333M ballroom",
    "summary": "The Washington Post obtained an internal spreadsheet listing 67 donations over $10,000 to the White House ballroom project, totaling $333 million. The White House said it will relentlessly pursue the leaker.",
    "details": [
      "Nvidia, Apple, the Adelson family and Charles Ergen gave $25 million each, per the report.",
      "At least $77 million came from donors who asked to stay anonymous.",
      "The Post did not find proof that donations influenced government decisions."
    ],
    "sources": [
      "The Washington Post",
      "Mediaite",
      "Spokesman-Review"
    ],
    "timeline": [
      {
        "date": "2026-10-15",
        "event": "Post publishes the donor list."
      },
      {
        "date": "2026-10-15",
        "event": "White House vows to hunt the leaker."
      }
    ],
    "tags": [
      "donors",
      "spreadsheet",
      "white-house"
    ]
  },
  {
    "id": "pentagon-deep-cover-china-program-leak",
    "category": "world",
    "topic": "Pentagon",
    "status": "developing",
    "credibility": 4,
    "heat": 72,
    "date": "2026-10-21",
    "headline": "Post reports a Pentagon plan for deep-cover spies in business",
    "summary": "Citing six people familiar with it, The Washington Post reported the Pentagon is building a program to place undercover officers in private-sector jobs to gather economic intelligence on China. The Pentagon says the reporting is not true.",
    "details": [
      "The officers would work without diplomatic cover.",
      "Congressional committees reportedly had not been briefed.",
      "Critics of the story called it a damaging leak."
    ],
    "sources": [
      "The Washington Post",
      "Political Wire",
      "Daily Caller"
    ],
    "timeline": [
      {
        "date": "2026-10-21",
        "event": "Post publishes the report."
      },
      {
        "date": "2026-10-22",
        "event": "Pentagon denial and backlash over the leak."
      }
    ],
    "tags": [
      "pentagon",
      "espionage",
      "china"
    ]
  },
  {
    "id": "mlb-confidential-lockout-memo",
    "category": "world",
    "topic": "MLB",
    "status": "confirmed",
    "credibility": 5,
    "heat": 55,
    "date": "2026-10",
    "headline": "MLB's confidential 34-page lockout playbook gets out",
    "summary": "The Athletic obtained a confidential memo MLB sent to owners and top executives on October 1 laying out rules for a possible lockout when the labor deal expires December 1. It covers trades, player contact and even holiday cards.",
    "details": [
      "No trades or signings with 40-man roster players during a lockout.",
      "Player images and videos would come off team and league sites.",
      "The memo says MLB still wants to reach a deal."
    ],
    "sources": [
      "The Athletic",
      "theScore",
      "Bleacher Report"
    ],
    "timeline": [
      {
        "date": "2026-10-01",
        "event": "Memo sent to clubs."
      },
      {
        "date": "2026-10",
        "event": "The Athletic reports its contents."
      }
    ],
    "tags": [
      "sports",
      "labor",
      "memo"
    ]
  },
  {
    "id": "paxton-campaign-fundraising-memo",
    "category": "world",
    "topic": "US politics",
    "status": "confirmed",
    "credibility": 4,
    "heat": 45,
    "date": "2026-10-08",
    "headline": "Leaked Paxton memo admits his Senate campaign is behind on money",
    "summary": "Punchbowl News obtained a fundraising memo from Ken Paxton's Texas Senate campaign saying opponent James Talarico has spent or reserved $65 million in ads at better rates. The memo told donors the campaign is playing catch up.",
    "details": [
      "The memo was written by Paxton's fundraisers.",
      "It was one of several leaks from the campaign within two weeks, including audio of a closed event.",
      "The race is seen as a must win for Republicans."
    ],
    "sources": [
      "Punchbowl News",
      "The Daily Beast"
    ],
    "timeline": [
      {
        "date": "2026-10-07",
        "event": "Recording of a closed campaign event surfaces."
      },
      {
        "date": "2026-10-08",
        "event": "Fundraising memo reported."
      }
    ],
    "tags": [
      "election",
      "texas",
      "memo"
    ]
  }
];
