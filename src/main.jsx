import { StrictMode, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { roasts } from "./roasts";
import "./styles.css";

const chartData = [
  { name: "Aim", score: 42 },
  { name: "Weapons", score: 56 },
  { name: "Agents", score: 68 },
  { name: "Maps", score: 31 },
  { name: "Clutch", score: 27 },
  { name: "Consistency", score: 54 },
];

function App() {
  const [index, setIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [showStats, setShowStats] = useState(false);

  const filtered = useMemo(
    () =>
      roasts.filter((r) =>
        `${r.category} ${r.title} ${r.stat} ${r.roast}`.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  const current = filtered[index % Math.max(filtered.length, 1)] ?? roasts[0];

  function next() {
    setIndex((v) => (v + 1) % Math.max(filtered.length, 1));
  }

  function previous() {
    setIndex((v) => (v - 1 + Math.max(filtered.length, 1)) % Math.max(filtered.length, 1));
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">SD</span>
          <div>
            <div className="brand-name">SKILLDIFF</div>
            <div className="brand-tag">ANALYZE. ROAST. IMPROVE.</div>
          </div>
        </div>
        <nav>
          <a href="#roasts">Roasts</a>
          <a href="#stats">Analytics</a>
          <button className="ghost-button" onClick={() => setShowStats((v) => !v)}>
            {showStats ? "Hide stats" : "View stats"}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">VALORANT PERFORMANCE ANALYZER</p>
            <h1>Find your biggest <span>diff.</span></h1>
            <p className="hero-text">
              SkillDiff turns match history into data-driven roast cards. No generic insults —
              every roast is tied to an actual gameplay pattern.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#roasts">Start the roast →</a>
              <a className="secondary-button" href="#stats">See the damage</a>
            </div>
          </div>

          <div className="score-panel">
            <div className="score-label">YOUR SKILLDIFF</div>
            <div className="score">44</div>
            <div className="score-caption">/ 100 · entertainment metric</div>
            <div className="score-divider" />
            <div className="mini-row"><span>Aim</span><b>42</b></div>
            <div className="mini-row"><span>Weapons</span><b>56</b></div>
            <div className="mini-row"><span>Agents</span><b>68</b></div>
            <div className="mini-row"><span>Maps</span><b>31</b></div>
            <div className="mini-row"><span>Clutch</span><b>27</b></div>
          </div>
        </section>

        <section id="roasts" className="roast-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE DAMAGE REPORT</p>
              <h2>Roast cards</h2>
            </div>
            <div className="controls">
              <input
                aria-label="Search roast cards"
                placeholder="Search cards..."
                value={query}
                onChange={(e) => { setQuery(e.target.value); setIndex(0); }}
              />
              <span className="count">{filtered.length} cards</span>
            </div>
          </div>

          <div className="card-stage">
            <div className="stack-shadow shadow-one" />
            <div className="stack-shadow shadow-two" />
            <AnimatePresence mode="wait">
              <motion.article
                key={`${current.id}-${query}`}
                className="roast-card"
                initial={{ opacity: 0, x: 80, rotate: 3 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: -80, rotate: -3 }}
                transition={{ duration: 0.25 }}
              >
                <div className="card-top">
                  <span className="card-number">{String(current.id).padStart(2, "0")} / 25</span>
                  <span className={`severity ${current.severity.toLowerCase()}`}>{current.severity}</span>
                </div>
                <div className="card-category">{current.category}</div>
                <h3>{current.title}</h3>
                <div className="stat">{current.stat}</div>
                <div className="roast-line">“{current.roast}”</div>
                <div className="card-footer">
                  <span>SKILLDIFF</span>
                  <span>DATA → ROAST</span>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="card-controls">
            <button onClick={previous} aria-label="Previous roast">←</button>
            <span>{filtered.length ? (index % filtered.length) + 1 : 0} / {filtered.length}</span>
            <button onClick={next} aria-label="Next roast">→</button>
          </div>
        </section>

        {showStats && (
          <section id="stats" className="stats-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">PLAYER ANALYTICS</p>
                <h2>Where the pain comes from</h2>
              </div>
            </div>
            <div className="chart-card">
              <ResponsiveContainer width="100%" height={310}>
                <BarChart data={chartData} margin={{ top: 10, right: 10, bottom: 10, left: -15 }}>
                  <XAxis dataKey="name" tick={{ fill: "#9c9ca8", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis domain={[0, 100]} tick={{ fill: "#6d6d78", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: "#17171f", border: "1px solid #30303a", borderRadius: 10 }}
                    labelStyle={{ color: "#fff" }}
                  />
                  <Bar dataKey="score" radius={[5, 5, 0, 0]} fill="#ff4655" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
        )}

        <section className="how-section">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>Numbers in. Damage out.</h2>
          <div className="pipeline">
            <div><b>01</b><span>Match history</span></div>
            <i>→</i>
            <div><b>02</b><span>Analytics</span></div>
            <i>→</i>
            <div><b>03</b><span>Pattern detection</span></div>
            <i>→</i>
            <div><b>04</b><span>Roast engine</span></div>
            <i>→</i>
            <div><b>05</b><span>Roast card</span></div>
          </div>
        </section>
      </main>

      <footer>
        <span>SKILLDIFF</span>
        <span>Prototype UI · Mock data · Not affiliated with Riot Games</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode><App /></StrictMode>
);
