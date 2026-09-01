# SkillDiff

### Analyze. Roast. Improve.

SkillDiff is a VALORANT game-history analysis app that turns your match data into **funny, personalized roast cards**.

Instead of staring at a boring statistics dashboard, SkillDiff digs through your gameplay history, finds your biggest weaknesses, and exposes them one card at a time.

Your worst weapon?
Your worst agent?
Your cursed map?
The weapon you somehow never use?
Your most embarrassing stat?

**SkillDiff finds it.**

---

## The Concept

```text
                 RIOT ACCOUNT
                      ↓
                 MATCH HISTORY
                      ↓
              DATA PROCESSING
                      ↓
             PLAYER ANALYTICS
                      ↓
              PATTERN DETECTION
                      ↓
              FIND YOUR DIFFS
                      ↓
              ROAST GENERATOR
                      ↓
               ROAST CARDS
```

The goal is to combine **game analytics, behavioral analysis, and humor** into an experience players actually want to share.

---

# Roast Cards

The main interface isn't a traditional statistics dashboard.

Instead, SkillDiff generates a stack of roast cards.

Each card focuses on one specific aspect of the player's gameplay.

### Weapon Diff

```text
┌─────────────────────────────┐
│                             │
│       WEAPON DIFF           │
│                             │
│          SHERIFF            │
│                             │
│       K/D     0.41         │
│       Kills   18           │
│       Deaths  44           │
│                             │
│ "Bro picked the Sheriff    │
│  44 times just to make     │
│  the enemy's highlight     │
│  reel longer."              │
│                             │
│          03 / 10            │
└─────────────────────────────┘
```

### Map Diff

```text
┌─────────────────────────────┐
│                             │
│         MAP DIFF            │
│                             │
│          ICEBOX             │
│                             │
│       Win Rate: 29%         │
│       Games: 31             │
│                             │
│ "At this point, Icebox     │
│  isn't a map. It's a       │
│  personal attack."          │
│                             │
│          04 / 10            │
└─────────────────────────────┘
```

### Agent Diff

```text
┌─────────────────────────────┐
│                             │
│        AGENT DIFF           │
│                             │
│           JETT              │
│                             │
│          K/D: 0.62          │
│          87 Games           │
│                             │
│ "You picked Jett for the   │
│  mobility and still        │
│  couldn't escape the       │
│  scoreboard."              │
│                             │
│          05 / 10            │
└─────────────────────────────┘
```

---

# What SkillDiff Analyzes

SkillDiff can analyze multiple dimensions of a player's history.

## Weapons

Find:

* Worst weapon
* Best weapon
* Most-used weapon
* Least-used weapon
* Weapons never used
* Lowest K/D weapon
* Lowest headshot weapon
* Most deaths with a weapon
* Most successful weapon

Example:

> **Most Avoided Weapon**
> Odin — 0 kills in 143 games
> *"You'd rather 1v5 with a Classic than touch an Odin."*

---

## Agents

Analyze:

* Most played agent
* Best agent
* Worst agent
* Agent K/D
* Agent win rate
* Agent consistency
* Agents the player avoids
* Agents where the player overperforms

Example:

> **Agent Diff: Jett**
> *"You picked Jett for the movement. Unfortunately, the movement was mostly toward the enemy."*

---

## Maps

Analyze:

* Best map
* Worst map
* Map win rate
* K/D by map
* Games played
* Performance consistency
* Maps where the player consistently underperforms

Example:

> **Map Diff: Icebox**
> *"Icebox has seen enough of you."*

---

## Aim

Analyze:

* Headshot percentage
* K/D
* Average kills
* Average deaths
* Damage
* Combat score
* First kills
* First deaths

Example:

> **Aim Diff**
> *"Your crosshair placement isn't bad. It just appears to be taking a different route."*

---

## Consistency

A player might have a great average K/D while having wildly inconsistent games.

SkillDiff can analyze performance variance to identify:

* Best game
* Worst game
* Performance swings
* Recent improvement
* Recent decline
* Consistency

Example:

> **Consistency Diff**
> *"One game you're TenZ. Next game you're still trying to remember your abilities."*

---

# The Roast Engine

The roast engine is what turns raw statistics into personalized cards.

Rather than blindly sending match history to an AI model, SkillDiff first performs structured analysis.

```text
Raw Match Data
      ↓
Feature Extraction
      ↓
Statistics
      ↓
Pattern Detection
      ↓
Rank Weaknesses
      ↓
Select Roast Category
      ↓
Generate Roast
      ↓
Roast Card
```

This means the joke is based on something the player **actually did**.

---

# Data-Driven Roasting

For example:

```text
Player Data

Sheriff K/D:       0.41
Sheriff Deaths:    44
Sheriff Kills:     18
Games Played:      143
```

The analytics engine detects:

```text
LOW WEAPON PERFORMANCE
```

The roast engine then generates something based on that pattern.

This is much more interesting than simply asking an LLM:

```text
"Roast this VALORANT player."
```

---

# Roast Categories

SkillDiff can generate cards such as:

```text
WEAPON DIFF
AGENT DIFF
MAP DIFF
AIM DIFF
K/D DIFF
HS% DIFF
CLUTCH DIFF
CONSISTENCY DIFF
DEATH DIFF
ECONOMY DIFF
```

The system can rank these and reveal the player's **biggest Diff first**.

---

# The SkillDiff Score

The application can eventually generate an overall SkillDiff score.

```text
┌─────────────────────────────┐
│                             │
│       YOUR SKILLDIFF        │
│                             │
│             44              │
│                             │
│ Aim          42             │
│ Weapons      56             │
│ Agents       68             │
│ Maps         31             │
│ Clutch       27             │
│ Consistency  54             │
│                             │
│  BIGGEST DIFF               │
│       CLUTCHING             │
│                             │
└─────────────────────────────┘
```

The score should be presented primarily as an **entertainment/analysis metric**, rather than pretending it is an official measurement of player skill.

---

# Roast Card Feed

The entire experience can be built around a card stack.

```text
                 ┌───────────────┐
                 │               │
                 │   MAP DIFF    │
                 │               │
                 │    ICEBOX     │
                 │               │
                 │   29% WR      │
                 │               │
                 │   ROAST...    │
                 │               │
                 └───────────────┘
                         ↓
                    SWIPE / NEXT
                         ↓
                 ┌───────────────┐
                 │               │
                 │ WEAPON DIFF   │
                 │               │
                 │   SHERIFF     │
                 │               │
                 │   ROAST...    │
                 │               │
                 └───────────────┘
```

This keeps the experience quick and entertaining.

---

# Shareable Cards

Every roast card can be turned into a shareable image.

Example:

```text
┌───────────────────────────────┐
│          SKILLDIFF            │
│                               │
│       WEAPON DIFF             │
│                               │
│          SHERIFF              │
│                               │
│         K/D: 0.41             │
│                               │
│ "Your enemies have more      │
│  confidence in your Sheriff  │
│  than you do."                │
│                               │
│          SKILLDIFF            │
└───────────────────────────────┘
```

Players can share their funniest cards with friends or on social platforms.

---

# Riot API Integration

SkillDiff is designed around Riot's official VALORANT APIs.

The documented VALORANT Match API provides endpoints for retrieving match lists and individual match information, including:

```text
/val/match/v1/matchlists/by-puuid/{puuid}

/val/match/v1/matches/{matchId}
```

Riot's current VALORANT developer documentation also describes the use of **Riot Sign On (RSO)** for applications that access personal player data.

The application should use Riot's supported authentication and data-access mechanisms rather than asking users for their Riot credentials.

---

# Data Pipeline

```text
Riot Sign On
     ↓
Player PUUID
     ↓
Match List
     ↓
Match Details
     ↓
Raw Match Data
     ↓
Data Cleaning
     ↓
Feature Extraction
     ↓
Player Statistics
     ↓
Pattern Detection
     ↓
Roast Selection
     ↓
Roast Generation
     ↓
Roast Card
```

---

# Technical Architecture

```text
                    ┌───────────────┐
                    │   Frontend    │
                    │ React / TS    │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │    Backend    │
                    │ Node.js / API │
                    └───────┬───────┘
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
        ┌──────────┐  ┌──────────┐  ┌────────────┐
        │ Riot API │  │ Database │  │ Roast      │
        │ / RSO    │  │          │  │ Engine     │
        └──────────┘  └──────────┘  └─────┬──────┘
                                          │
                                          ▼
                                    Roast Cards
```

---

# Tech Stack

## Frontend

* React
* TypeScript
* Tailwind CSS
* Framer Motion
* Recharts

## Backend

* Node.js
* Express.js
* REST API

## Database

* PostgreSQL

Potential data:

```text
Users
Matches
Players
Agents
Weapons
Maps
Player Statistics
Roast History
```

## Analytics

* Python
* Pandas
* NumPy
* Scikit-learn

## AI

* LLM API
* Structured prompts
* Rule-based roast categories
* Output validation

---

# Project Structure

```text
skilldiff/
│
├── frontend/
│   ├── components/
│   │   ├── RoastCard/
│   │   ├── CardStack/
│   │   ├── PlayerProfile/
│   │   ├── MatchHistory/
│   │   └── PerformanceChart/
│   │
│   ├── pages/
│   └── services/
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   │   ├── riot-api/
│   │   ├── analytics/
│   │   └── roast-engine/
│   │
│   └── models/
│
├── analytics/
│   ├── preprocessing/
│   ├── feature-engineering/
│   ├── pattern-detection/
│   └── evaluation/
│
├── database/
│
├── README.md
└── LICENSE
```

---

# Development Roadmap

## Phase 1 — MVP

* [ ] Riot account authentication
* [ ] RSO integration
* [ ] Player profile
* [ ] Match history retrieval
* [ ] Basic statistics
* [ ] Match history dashboard

## Phase 2 — Roast Cards

* [ ] Roast card UI
* [ ] Card stack
* [ ] Weapon analysis
* [ ] Agent analysis
* [ ] Map analysis
* [ ] Aim analysis
* [ ] Basic roast generator

## Phase 3 — Advanced Analytics

* [ ] Performance trends
* [ ] Consistency analysis
* [ ] Weapon efficiency
* [ ] Agent performance
* [ ] Map performance
* [ ] Performance anomaly detection
* [ ] Biggest-Diff ranking

## Phase 4 — AI Roast Engine

* [ ] Context-aware roast generation
* [ ] Multiple roast styles
* [ ] Roast severity
* [ ] Personalized jokes
* [ ] Duplicate-roast prevention
* [ ] Output validation

## Phase 5 — Social Features

* [ ] Shareable roast cards
* [ ] Weekly roast
* [ ] Monthly recap
* [ ] Friend comparisons with appropriate opt-in/privacy controls
* [ ] Leaderboards
* [ ] Community challenges

---

# Future: Coaching Mode

Although roasting is the main experience, the same analytics engine can eventually provide useful feedback.

Example:

```text
BIGGEST DIFF
      ↓
High deaths + low first kills
      ↓
Pattern detected
      ↓
Possible over-aggression
      ↓
Suggested improvement
```

The app could therefore have two modes:

```text
┌──────────────────┐
│   ROAST MODE     │
│                  │
│  "You're cooked" │
└──────────────────┘

          +

┌──────────────────┐
│   COACH MODE     │
│                  │
│ "Here's why"     │
└──────────────────┘
```

---

# Research Potential

SkillDiff can also become a serious data-analysis/recommendation project underneath the humorous interface.

Potential research directions include:

### Player Behavior Analysis

Identify recurring patterns in historical gameplay.

### Performance Classification

Classify players based on measurable gameplay characteristics.

```text
Aggressive
Passive
Inconsistent
Aim-dependent
High-risk
Support-oriented
```

### Anomaly Detection

Identify unusual matches compared with a player's historical baseline.

For example:

```text
Normal K/D: 0.85

Match K/D: 2.74

→ Unusually strong performance
```

or:

```text
Normal K/D: 1.05

Match K/D: 0.21

→ Catastrophic performance detected
```

### Explainable Analytics

Rather than producing a meaningless score, SkillDiff can explain exactly why a player received a particular analysis.

---

# Privacy & Security

SkillDiff should:

* Use Riot's supported authentication mechanisms
* Never request or store Riot passwords
* Keep API credentials server-side
* Protect player-specific data
* Use HTTPS
* Respect Riot API rate limits
* Only display data the user has authorized the application to access
* Avoid real-time gameplay assistance
* Avoid exposing private player information

The application should comply with Riot Games' applicable developer policies and API requirements.

---

# Vision

SkillDiff isn't trying to be another boring VALORANT stat tracker.

The goal is to make players **want to check their statistics**.

Instead of:

```text
K/D: 0.82
HS%: 17%
Win Rate: 44%
```

SkillDiff says:

```text
YOU HAVE BEEN DIFFED

Your biggest problem:
CLUTCHING

Your worst weapon:
SHERIFF

Your cursed map:
ICEBOX

Your most avoided weapon:
ODIN

Your final verdict:

"Maybe the aim trainer
wasn't the problem."
```

### SkillDiff

**Analyze. Roast. Improve.**
