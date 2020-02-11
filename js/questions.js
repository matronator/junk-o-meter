const QUESTIONS = [
  {
    "id": 0,
    "question": "How often do you use drugs?",
    "answers": [
      {
        "id": 0,
        "answer": "Daily",
        "junkiePoints": 5,
        "denialPoints": 0
      },
      {
        "id": 1,
        "answer": "Once or twice a week",
        "junkiePoints": 4,
        "denialPoints": 0
      },
      {
        "id": 2,
        "answer": "Few times a month",
        "junkiePoints": 2,
        "denialPoints": 0
      },
      {
        "id": 3,
        "answer": "Less often",
        "junkiePoints": 1,
        "denialPoints": 0
      }
    ]
  },
  {
    "id": 1,
    "question": "How many different drugs have you had at least once? (Excluding only nicotine; alcohol still counts!)",
    "answers": [
      {
        "id": 0,
        "answer": "2 or less",
        "junkiePoints": 1,
        "denialPoints": 0
      },
      {
        "id": 1,
        "answer": "3-4",
        "junkiePoints": 2,
        "denialPoints": 0
      },
      {
        "id": 2,
        "answer": "5-7",
        "junkiePoints": 3,
        "denialPoints": 0
      },
      {
        "id": 3,
        "answer": "Too many to count",
        "junkiePoints": 5,
        "denialPoints": 0
      }
    ]
  },
  {
    "id": 2,
    "question": "Do you combine multiple drugs together?",
    "answers": [
      {
        "id": 0,
        "answer": "That's the only way!",
        "junkiePoints": 4,
        "denialPoints": 0
      },
      {
        "id": 1,
        "answer": "Sometimes, with the right combo",
        "junkiePoints": 2,
        "denialPoints": 0
      },
      {
        "id": 2,
        "answer": "Only when coming down or very rarely",
        "junkiePoints": 1,
        "denialPoints": 0
      },
      {
        "id": 3,
        "answer": "Nope",
        "junkiePoints": 0,
        "denialPoints": 0
      }
    ]
  },
  {
    "id": 3,
    "question": "What's the highest number of different drugs you ever used together?",
    "answers": [
      {
        "id": 0,
        "answer": "I don't mix drugs, one at a time is enough",
        "junkiePoints": 0,
        "denialPoints": 0
      },
      {
        "id": 1,
        "answer": "Only two",
        "junkiePoints": 1,
        "denialPoints": 0
      },
      {
        "id": 2,
        "answer": "3-4",
        "junkiePoints": 3,
        "denialPoints": 0
      },
      {
        "id": 3,
        "answer": "More than four",
        "junkiePoints": 5,
        "denialPoints": 0
      }
    ]
  },
  {
    "id": 4,
    "question": "Have you (if ever) used heroin, methamphetamine or crack more than two times in your life?",
    "answers": [
      {
        "id": 0,
        "answer": "Shit, these are my favorite!",
        "junkiePoints": 6,
        "denialPoints": 0
      },
      {
        "id": 1,
        "answer": "I still do",
        "junkiePoints": 5,
        "denialPoints": 0
      },
      {
        "id": 2,
        "answer": "Only occasionally",
        "junkiePoints": 3,
        "denialPoints": 0
      },
      {
        "id": 3,
        "answer": "Yes, but that was a long time ago",
        "junkiePoints": 2,
        "denialPoints": 0
      },
      {
        "id": 4,
        "answer": "No",
        "junkiePoints": 0,
        "denialPoints": 0
      }
    ]
  },
  {
    "id": 5,
    "question": "Have you ever IV'd a drug (injected into the vein)?",
    "answers": [
      {
        "id": 0,
        "answer": "Hell no",
        "junkiePoints": 0,
        "denialPoints": 0
      },
      {
        "id": 1,
        "answer": "I tried it maybe once or twice",
        "junkiePoints": 2,
        "denialPoints": 1
      },
      {
        "id": 2,
        "answer": "I sometimes do",
        "junkiePoints": 4,
        "denialPoints": 0
      },
      {
        "id": 3,
        "answer": "I used to some time ago, but no longer",
        "junkiePoints": 3,
        "denialPoints": 0
      },
      {
        "id": 4,
        "answer": "There are other ways to take drugs?",
        "junkiePoints": 6,
        "denialPoints": 0
      }
    ]
  },
  {
    "id": 6,
    "question": "Is your primary source of income from dealing drugs, stealing, begging or illegal prostitution?",
    "answers": [
      {
        "id": 0,
        "answer": "Yeah, so what?",
        "junkiePoints": 5,
        "denialPoints": 0
      },
      {
        "id": 1,
        "answer": "Only some extra cash on the side, not a primary income",
        "junkiePoints": 3,
        "denialPoints": 1
      },
      {
        "id": 2,
        "answer": "Nope",
        "junkiePoints": 1,
        "denialPoints": 0
      }
    ]
  },
  {
    "id": 7,
    "question": "Do you spend most of your money on drugs?",
    "answers": [
      {
        "id": 0,
        "answer": "Who needs food when you have drugs?",
        "junkiePoints": 7,
        "denialPoints": 0
      },
      {
        "id": 1,
        "answer": "Only after I cover basic cost of living (food, rent, etc.)",
        "junkiePoints": 5,
        "denialPoints": 1
      },
      {
        "id": 2,
        "answer": "No, not usually",
        "junkiePoints": 2,
        "denialPoints": 0
      },
      {
        "id": 3,
        "answer": "No, I don't spend much on drugs",
        "junkiePoints": 1,
        "denialPoints": 0
      }
    ]
  },
  {
    "id": 8,
    "question": "Did you ever steal something so you could get your drug/s?",
    "answers": [
      {
        "id": 0,
        "answer": "I steal shit all the time",
        "junkiePoints": 6,
        "denialPoints": 0
      },
      {
        "id": 1,
        "answer": "Yes, but only as a last resort",
        "junkiePoints": 4,
        "denialPoints": 0
      },
      {
        "id": 2,
        "answer": "I only borrowed it, just forgot to give it back",
        "junkiePoints": 4,
        "denialPoints": 1
      },
      {
        "id": 3,
        "answer": "No",
        "junkiePoints": 0,
        "denialPoints": 0
      }
    ]
  },
  {
    "id": 9,
    "question": "Do you ask to \"borrow\" money from friends/family a lot?",
    "answers": [
      {
        "id": 0,
        "answer": "No",
        "junkiePoints": 0,
        "denialPoints": 0
      },
      {
        "id": 1,
        "answer": "I wouldn't say a lot, but sometimes it's necessary",
        "junkiePoints": 2,
        "denialPoints": 0
      },
      {
        "id": 2,
        "answer": "Yes",
        "junkiePoints": 4,
        "denialPoints": 0
      },
      {
        "id": 3,
        "answer": "I owe money to so many people that nobody wants to lend me anymore",
        "junkiePoints": 5,
        "denialPoints": 0
      }
    ]
  },
  {
    "id": 10,
    "question": "Do you often say \"I can stop using any time, I just don't want to right now\"?",
    "answers": [
      {
        "id": 0,
        "answer": "Yeah, because it's true!",
        "junkiePoints": 5,
        "denialPoints": 5
      },
      {
        "id": 1,
        "answer": "No, I know I can't stop",
        "junkiePoints": 4,
        "denialPoints": 0
      },
      {
        "id": 2,
        "answer": "No",
        "junkiePoints": 1,
        "denialPoints": 0
      },
      {
        "id": 3,
        "answer": "Is that a trick question?",
        "junkiePoints": 0,
        "denialPoints": 0
      }
    ]
  },
  {
    "id": 11,
    "question": "Have you ever spend hours trying to buy drugs somewhere when your usual source wasn't available?",
    "answers": [
      {
        "id": 0,
        "answer": "What else do you want me to do? Not get high?",
        "junkiePoints": 5,
        "denialPoints": 0
      },
      {
        "id": 1,
        "answer": "Yes",
        "junkiePoints": 4,
        "denialPoints": 0
      },
      {
        "id": 2,
        "answer": "No",
        "junkiePoints": 1,
        "denialPoints": 0
      }
    ]
  },
  {
    "id": 12,
    "question": "Have you ever just wandered around your city/town for hours without any specific reason?",
    "answers": [
      {
        "id": 0,
        "answer": "No",
        "junkiePoints": 1,
        "denialPoints": 0
      },
      {
        "id": 1,
        "answer": "Couple of times, when I didn't have anything else to do",
        "junkiePoints": 3,
        "denialPoints": 1
      },
      {
        "id": 2,
        "answer": "I always have a reason!",
        "junkiePoints": 4,
        "denialPoints": 2
      },
      {
        "id": 3,
        "answer": "That's my favorite activity",
        "junkiePoints": 5,
        "denialPoints": 0
      }
    ]
  },
  {
    "id": 13,
    "question": "Do you often get greeted by people you can't remember ever meeting before?",
    "answers": [
      {
        "id": 0,
        "answer": "Yes and it creeps me the hell out. How does everyone know me?",
        "junkiePoints": 5,
        "denialPoints": 1
      },
      {
        "id": 1,
        "answer": "I know a lot of people, so it's impossible to remember everyone",
        "junkiePoints": 2,
        "denialPoints": 0
      },
      {
        "id": 2,
        "answer": "Happens sometimes, but not that often",
        "junkiePoints": 3,
        "denialPoints": 0
      },
      {
        "id": 3,
        "answer": "No, not really",
        "junkiePoints": 1,
        "denialPoints": 0
      },
      {
        "id": 4,
        "answer": "No, I don't really know anyone except my source",
        "junkiePoints": 6,
        "denialPoints": 0
      }
    ]
  },
  {
    "id": 14,
    "question": "If you do way too much of something, do you take some other drug to try and even it out? (ie. take Xanax for stimulant overdose)",
    "answers": [
      {
        "id": 0,
        "answer": "No",
        "junkiePoints": 1,
        "denialPoints": 0
      },
      {
        "id": 1,
        "answer": "Sometimes, when it's really bad and I have the drug handy",
        "junkiePoints": 2,
        "denialPoints": 0
      },
      {
        "id": 2,
        "answer": "Yeah. What you want me to do, call an ambulance? Nigga please...", // TODO: Consider changing or removing the last sentece? Awaiting feedback...
        "junkiePoints": 3,
        "denialPoints": 0
      },
      {
        "id": 3,
        "answer": "I do so many drugs, I wouldn't even know which one I was OD'ing on",
        "junkiePoints": 6,
        "denialPoints": 0
      }
    ]
  },
  {
    "id": 15,
    "question": "Are most of the people around you also drug users?",
    "answers": [
      {
        "id": 0,
        "answer": "I don't know anyone who doesn't use",
        "junkiePoints": 5,
        "denialPoints": 0
      },
      {
        "id": 1,
        "answer": "Yeah, normies are boring",
        "junkiePoints": 4,
        "denialPoints": 1
      },
      {
        "id": 2,
        "answer": "It's more like 50/50",
        "junkiePoints": 3,
        "denialPoints": 0
      },
      {
        "id": 3,
        "answer": "Most of my friends don't use drugs",
        "junkiePoints": 1,
        "denialPoints": 0
      },
      {
        "id": 4,
        "answer": "I'm the only one who uses",
        "junkiePoints": 2,
        "denialPoints": 0
      }
    ]
  },
  {
    "id": 16,
    "question": "Have you ever had problems with the law because of drugs?",
    "answers": [
      {
        "id": 0,
        "answer": "No",
        "junkiePoints": 1,
        "denialPoints": 0
      },
      {
        "id": 1,
        "answer": "Only minor isolated incident",
        "junkiePoints": 2,
        "denialPoints": 0
      },
      {
        "id": 2,
        "answer": "Couple of times",
        "junkiePoints": 3,
        "denialPoints": 0
      },
      {
        "id": 3,
        "answer": "It's not my fault drugs are illegal",
        "junkiePoints": 4,
        "denialPoints": 0
      },
      {
        "id": 4,
        "answer": "I don't have a problem with law, the law has a problem with me",
        "junkiePoints": 5,
        "denialPoints": 1
      }
    ]
  },
  {
    "id": 17,
    "question": "Have you ever spent hours collecting crumbles of leftovers when you were out?",
    "answers": [
      {
        "id": 0,
        "answer": "Every time I run out",
        "junkiePoints": 5,
        "denialPoints": 0
      },
      {
        "id": 1,
        "answer": "Sometimes - every tiny bit counts",
        "junkiePoints": 4,
        "denialPoints": 0
      },
      {
        "id": 2,
        "answer": "Only when really desperate",
        "junkiePoints": 3,
        "denialPoints": 0
      },
      {
        "id": 3,
        "answer": "No, that's dumb",
        "junkiePoints": 1,
        "denialPoints": 0
      }
    ]
  },
  {
    "id": 18,
    "question": "Is the majority of your conversation topics related to drugs?",
    "answers": [
      {
        "id": 0,
        "answer": "The first rule of doing drugs is: you do not talk about drugs!",
        "junkiePoints": 1,
        "denialPoints": 0
      },
      {
        "id": 1,
        "answer": "I don't usually talk about drugs",
        "junkiePoints": 1,
        "denialPoints": 0
      },
      {
        "id": 2,
        "answer": "Not majority, more like 50/50",
        "junkiePoints": 3,
        "denialPoints": 0
      },
      {
        "id": 3,
        "answer": "Yes",
        "junkiePoints": 4,
        "denialPoints": 0
      },
      {
        "id": 4,
        "answer": "There are other topics to talk about?",
        "junkiePoints": 6,
        "denialPoints": 0
      }
    ]
  },
  {
    "id": 19,
    "question": "Have you used any drugs while you were doing this quiz?",
    "answers": [
      {
        "id": 0,
        "answer": "Yeah, how did you know, lol",
        "junkiePoints": 6,
        "denialPoints": 0
      },
      {
        "id": 1,
        "answer": "No",
        "junkiePoints": 1,
        "denialPoints": 1
      }
    ]
  },
  {
    "id": 20,
    "question": "Do you want to use any drug/s right now?",
    "answers": [
      {
        "id": 0,
        "answer": "Right again, are you a psychic?",
        "junkiePoints": 4,
        "denialPoints": 0
      },
      {
        "id": 1,
        "answer": "Not necessarily, but if someone offered me some I wouldn't say no",
        "junkiePoints": 3,
        "denialPoints": 1
      },
      {
        "id": 2,
        "answer": "No",
        "junkiePoints": 1,
        "denialPoints": 0
      }
    ]
  }
];