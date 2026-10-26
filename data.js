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
    "heat": 98,
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
  }
];
