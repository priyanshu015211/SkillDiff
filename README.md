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
