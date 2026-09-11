import { StrictMode, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, LineChart, Line } from "recharts";
import { roasts } from "./roasts";
import "./styles.css";

const recentMatches = [
  { map: "Ascent", result: "W", score: "13–9", kd: "1.31", acs: 241, hs: "19%" },
  { map: "Icebox", result: "L", score: "10–13", kd: "0.72", acs: 156, hs: "12%" },
  { map: "Lotus", result: "L", score: "8–13", kd: "0.64", acs: 139, hs: "14%" },
  { map: "Bind", result: "W", score: "13–11", kd: "1.08", acs: 218, hs: "17%" },
  { map: "Sunset", result: "W", score: "13–7", kd: "1.42", acs: 267, hs: "21%" },
];

const skillData = [
  { name: "Aim", score: 42 },
  { name: "Combat", score: 56 },
  { name: "Clutch", score: 27 },
  { name: "Economy", score: 61 },
  { name: "Consistency", score: 54 },
];

const trendData = [
  { game: "G1", score: 39 }, { game: "G2", score: 46 }, { game: "G3", score: 41 },
  { game: "G4", score: 57 }, { game: "G5", score: 63 }, { game: "G6", score: 52 },
  { game: "G7", score: 68 }, { game: "G8", score: 61 },
];

const agents = [
  { name: "Jett", role: "DUELIST", games: 87, kd: "0.92", win: "51%", score: 68 },
  { name: "Raze", role: "DUELIST", games: 31, kd: "1.14", win: "58%", score: 76 },
  { name: "Sage", role: "SENTINEL", games: 18, kd: "0.83", win: "44%", score: 49 },
];

const weapons = [
  { name: "Vandal", type: "RIFLE", kills: 382, kd: "0.94", hs: "18%" },
  { name: "Phantom", type: "RIFLE", kills: 241, kd: "1.03", hs: "21%" },
  { name: "Sheriff", type: "SIDEARM", kills: 74, kd: "0.41", hs: "34%" },
];

function App() {
  const [page, setPage] = useState("dashboard");
  const [roastIndex, setRoastIndex] = useState(0);
  const [query, setQuery] = useState("");

  const filteredRoasts = useMemo(() =>
    roasts.filter((r) => `${r.category} ${r.title} ${r.subject} ${r.roast}`.toLowerCase().includes(query.toLowerCase())),
    [query]
  );
  const currentRoast = filteredRoasts[roastIndex % Math.max(filteredRoasts.length, 1)] || roasts[0];

  const nav = [
    ["dashboard", "OVERVIEW"],
    ["performance", "PERFORMANCE"],
    ["agents", "AGENTS"],
    ["weapons", "WEAPONS"],
    ["roasts", "ROASTS"],
  ];

  function changePage(next) {
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => changePage("dashboard")}>
          <span className="brand-mark">SD</span>
          <div><div className="brand-name">SKILLDIFF</div><div className="brand-tag">ANALYZE. ROAST. IMPROVE.</div></div>
        </button>
        <nav>
          {nav.map(([id, label]) => <button key={id} className={page === id ? "active" : ""} onClick={() => changePage(id)}>{label}</button>)}
        </nav>
        <div className="profile-chip"><span className="online-dot" /> PRIYANSHU <b>DIAMOND 2</b></div>
      </header>

      <main>
        <div className="page-title">
          <div><p className="eyebrow">PLAYER ANALYTICS / ACT 04</p><h1>{page === "dashboard" ? <>YOUR BIGGEST <span>DIFF.</span></> : page.toUpperCase()}</h1></div>
          <div className="season">LAST 30 MATCHES <strong>● LIVE DATA</strong></div>
        </div>

        {page === "dashboard" && (
          <>
            <section className="hero-grid">
              <div className="score-card">
                <div className="card-kicker">SKILLDIFF SCORE</div>
                <div className="big-score">44<span>/100</span></div>
                <div className="score-status">NEEDS WORK <span>↓ 6 THIS WEEK</span></div>
                <div className="score-bars">
                  {skillData.slice(0, 4).map((s) => <div className="score-bar" key={s.name}><span>{s.name}</span><div><i style={{width: `${s.score}%`}} /></div><b>{s.score}</b></div>)}
                </div>
              </div>
              <div className="player-card">
                <div className="player-top"><span className="rank-badge">D2</span><div><small>COMPETITIVE</small><strong>DIAMOND 2</strong></div><span className="level">LVL 142</span></div>
                <div className="player-name">PRIYANSHU</div>
                <div className="player-meta"><span>Peak <b>Diamond 3</b></span><span>Win rate <b>53.8%</b></span><span>Matches <b>136</b></span></div>
              </div>
            </section>

            <section className="stat-grid">
              {[
                ["K/D RATIO", "0.92", "-8.4%", "down"],
                ["ACS", "198", "+12", "up"],
                ["HEADSHOT %", "17.4%", "-2.1%", "down"],
                ["WIN RATE", "53.8%", "+4.7%", "up"],
              ].map(([label, value, delta, dir]) => <div className="stat-box" key={label}><span>{label}</span><strong>{value}</strong><em className={dir}>{delta}</em></div>)}
            </section>

            <section className="dashboard-grid">
              <div className="panel">
                <div className="panel-heading"><div><p className="eyebrow">RECENT PERFORMANCE</p><h2>FORM CHECK</h2></div><button onClick={() => changePage("performance")}>VIEW ALL →</button></div>
                <div className="trend-chart"><ResponsiveContainer width="100%" height={190}><LineChart data={trendData}><XAxis dataKey="game" hide /><YAxis domain={[0,100]} hide /><Tooltip contentStyle={{background:"#14141b",border:"1px solid #30303a"}} /><Line type="monotone" dataKey="score" stroke="#ff4655" strokeWidth={3} dot={{r:3,fill:"#ff4655"}} /></LineChart></ResponsiveContainer></div>
                <div className="chart-labels"><span>8 games ago</span><b>SKILLDIFF TREND</b><span>NOW</span></div>
              </div>
              <div className="panel">
                <div className="panel-heading"><div><p className="eyebrow">BIGGEST WEAKNESS</p><h2>AIM</h2></div><span className="danger-score">42</span></div>
                <p className="panel-copy">Your headshot rate is below your rank average. Crosshair placement and first-shot accuracy are the biggest contributors.</p>
                <div className="recommendation"><span>01</span><div><b>TRAIN FIRST SHOT ACCURACY</b><small>10 min · Range / Deathmatch</small></div></div>
                <div className="recommendation"><span>02</span><div><b>RAISE CROSSHAIR HEIGHT</b><small>Focus: common head level</small></div></div>
              </div>
            </section>

            <section className="panel matches">
              <div className="panel-heading"><div><p className="eyebrow">MATCH HISTORY</p><h2>RECENT GAMES</h2></div><button onClick={() => changePage("performance")}>ANALYTICS →</button></div>
              <div className="match-table">
                <div className="table-head"><span>MAP</span><span>RESULT</span><span>SCORE</span><span>K/D</span><span>ACS</span><span>HS%</span></div>
                {recentMatches.map((m, i) => <div className="match-row" key={i}><b>{m.map}</b><span className={m.result === "W" ? "win" : "loss"}>{m.result}</span><span>{m.score}</span><span>{m.kd}</span><span>{m.acs}</span><span>{m.hs}</span></div>)}
              </div>
            </section>
          </>
        )}

        {page === "performance" && <Performance />}
        {page === "agents" && <Agents />}
        {page === "weapons" && <Weapons />}

        {page === "roasts" && (
          <section className="roast-section">
            <div className="section-heading"><div><p className="eyebrow">THE DAMAGE REPORT</p><h2>ROAST CARDS</h2></div><div className="controls"><input placeholder="Search cards..." value={query} onChange={(e) => {setQuery(e.target.value);setRoastIndex(0)}}/><span>{filteredRoasts.length} CARDS</span></div></div>
            <div className="card-stage">
              <div className="stack-shadow shadow-one" /><div className="stack-shadow shadow-two" />
              <AnimatePresence mode="wait"><motion.article key={currentRoast.id} className="roast-card" initial={{opacity:0,x:70,rotate:3}} animate={{opacity:1,x:0,rotate:0}} exit={{opacity:0,x:-70,rotate:-3}}>
                <div className="card-top"><span>{String(currentRoast.id).padStart(2,"0")} / 25</span><span className={`severity ${currentRoast.severity.toLowerCase()}`}>{currentRoast.severity}</span></div>
                <div className="card-category">{currentRoast.category}</div>
                <div className={`subject-visual ${currentRoast.subjectType.toLowerCase()}`}><div className="subject-art"><span className="art-shape one"/><span className="art-shape two"/><span className="art-shape three"/></div><div className="subject-info"><span>{currentRoast.subjectType}</span><strong>{currentRoast.subject}</strong></div><div className="subject-grid"/></div>
                <h3>{currentRoast.title}</h3><div className="stat">{currentRoast.stat}</div><div className="roast-line">“{currentRoast.roast}”</div><div className="card-footer"><span>SKILLDIFF</span><span>DATA → ROAST</span></div>
              </motion.article></AnimatePresence>
            </div>
            <div className="card-controls"><button onClick={() => setRoastIndex(v => (v-1+Math.max(filteredRoasts.length,1))%Math.max(filteredRoasts.length,1))}>←</button><span>{filteredRoasts.length ? roastIndex%filteredRoasts.length+1 : 0} / {filteredRoasts.length}</span><button onClick={() => setRoastIndex(v => (v+1)%Math.max(filteredRoasts.length,1))}>→</button></div>
          </section>
        )}
      </main>

      <footer><span>SKILLDIFF</span><span>Gaming analytics prototype · Mock data · Not affiliated with Riot Games</span></footer>
    </div>
  );
}

function Performance() {
  return <section className="page-section"><div className="section-heading"><div><p className="eyebrow">PERFORMANCE BREAKDOWN</p><h2>WHERE YOU WIN</h2></div></div><div className="performance-grid">{skillData.map((s,i)=><div className="metric-card" key={s.name}><span>0{i+1}</span><h3>{s.name}</h3><strong>{s.score}</strong><div className="meter"><i style={{width:`${s.score}%`}}/></div><p>{s.score >= 60 ? "Above your current baseline." : "This is costing you rounds."}</p></div>)}</div><div className="panel"><div className="panel-heading"><div><p className="eyebrow">MATCH TREND</p><h2>SKILLDIFF OVER TIME</h2></div></div><ResponsiveContainer width="100%" height={300}><BarChart data={skillData}><XAxis dataKey="name" tick={{fill:"#888894",fontSize:12}} axisLine={false} tickLine={false}/><YAxis domain={[0,100]} tick={{fill:"#666670",fontSize:11}} axisLine={false} tickLine={false}/><Tooltip contentStyle={{background:"#14141b",border:"1px solid #30303a"}}/><Bar dataKey="score" fill="#ff4655" radius={[5,5,0,0]}/></BarChart></ResponsiveContainer></div></section>;
}

function Agents() {
  return <section className="page-section"><div className="section-heading"><div><p className="eyebrow">AGENT PERFORMANCE</p><h2>YOUR POOL</h2></div></div><div className="entity-grid">{agents.map(a=><div className="entity-card" key={a.name}><div className="entity-art agent-art"><span>{a.name.slice(0,1)}</span></div><div className="entity-header"><div><h3>{a.name}</h3><small>{a.role}</small></div><strong>{a.score}</strong></div><div className="entity-stats"><span><b>{a.games}</b> games</span><span><b>{a.kd}</b> K/D</span><span><b>{a.win}</b> win</span></div></div>)}</div></section>;
}

function Weapons() {
  return <section className="page-section"><div className="section-heading"><div><p className="eyebrow">WEAPON PERFORMANCE</p><h2>YOUR ARSENAL</h2></div></div><div className="entity-grid">{weapons.map(w=><div className="entity-card weapon-card" key={w.name}><div className="weapon-art"><span>◢</span></div><div className="entity-header"><div><h3>{w.name}</h3><small>{w.type}</small></div><strong>{w.kd}</strong></div><div className="entity-stats"><span><b>{w.kills}</b> kills</span><span><b>{w.hs}</b> HS</span><span><b>{w.kd}</b> K/D</span></div></div>)}</div></section>;
}

createRoot(document.getElementById("root")).render(<StrictMode><App /></StrictMode>);
