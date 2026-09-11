# SkillDiff Frontend

Frontend prototype for **SkillDiff — Analyze. Roast. Improve.**

## Included

- Dark, VALORANT-inspired dashboard UI
- SkillDiff score panel
- Animated roast-card stack
- Search/filter across 25 roast cards
- Mock analytics chart
- Analytics pipeline section
- Responsive mobile layout
- Mock data clearly separated from future backend/API integration

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Important

The 25 cards in `src/roasts.ts` are **mock/demo cards**. They are not claimed to come from a real player's match history. The production backend should replace them with data-driven roast results from the analytics + roast engine.

The UI does not implement Riot authentication or Riot API access yet.

## Valorant-inspired roast visuals

Each roast card now includes a subject panel showing the relevant **agent, weapon, or map**.
The artwork is built with original CSS shapes rather than copied game artwork, so the GitHub
prototype does not depend on external image URLs or asset licensing.

The data model includes `subjectType` and `subject`, making it straightforward to replace the
CSS artwork later with approved/local assets if desired.

## Dashboard v1

The frontend now includes a multi-view gaming dashboard with Overview, Performance,
Agents, Weapons, and Roasts sections. Current analytics are mock data and are intended
to be replaced by the backend data layer in a later milestone.
