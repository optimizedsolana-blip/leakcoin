/* leakcoin app */
(function () {
  const LEAKS = window.LEAKS || [];
  const CATS = window.CATEGORIES || {};
  const STATUS = { confirmed: "Confirmed", developing: "Developing", rumor: "Rumor", debunked: "Debunked" };

  const state = { cat: "all", status: "all", topic: null, q: "", sort: "newest" };
  const $ = (s) => document.querySelector(s);

  // --- helpers
  const fmtDate = (d) => {
    const dt = new Date(d + "T00:00:00");
    return dt.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const cred = (n) => `<span class="cred" title="Credibility ${n} of 5">${[1,2,3,4,5].map(i => `<i class="${i <= n ? "on" : ""}"></i>`).join("")}<span>${n}/5</span></span>`;
  const pill = (s) => `<span class="pill" data-s="${s}">${STATUS[s] || s}</span>`;

  const fileNo = (l) => "LK-" + String(LEAKS.indexOf(l) + 1).padStart(4, "0");
  function card(l, hot) {
    return `<button class="card ${hot ? "hot-card" : ""}" data-id="${esc(l.id)}" data-s="${l.status}" aria-haspopup="dialog">
      <span class="file">FILE ${fileNo(l)}</span>
      <div class="card-top"><span class="cat">${esc(CATS[l.category] || l.category)} · ${esc(l.topic)}</span>${pill(l.status)}</div>
      <h3>${esc(l.headline)}</h3>
      <p>${esc(l.summary)}</p>
      <div class="card-foot"><span class="src"><b>${esc(l.sources[0] || "")}</b> · ${fmtDate(l.date)}</span>${cred(l.credibility)}</div>
    </button>`;
  }

  // --- filtering
  function filtered() {
    const q = state.q.trim().toLowerCase();
    let list = LEAKS.filter(l =>
      (state.cat === "all" || l.category === state.cat) &&
      (state.status === "all" || l.status === state.status) &&
      (!state.topic || l.topic === state.topic) &&
      (!q || [l.headline, l.summary, l.topic, ...(l.tags || []), ...(l.sources || [])].join(" ").toLowerCase().includes(q))
    );
    if (state.sort === "newest") list.sort((a, b) => b.date.localeCompare(a.date));
    if (state.sort === "hottest") list.sort((a, b) => b.heat - a.heat);
    if (state.sort === "credible") list.sort((a, b) => b.credibility - a.credibility || b.heat - a.heat);
    return list;
  }

  // --- render
  function renderNav() {
    const nav = $("#nav-cats");
    const items = [["all", "All"], ...Object.entries(CATS)];
    nav.innerHTML = items.map(([k, v]) => `<button data-cat="${k}" aria-current="${state.cat === k}">${v}</button>`).join("");
  }
  function renderTopics() {
    const pool = LEAKS.filter(l => state.cat === "all" || l.category === state.cat);
    const counts = {};
    pool.forEach(l => counts[l.topic] = (counts[l.topic] || 0) + 1);
    const topics = Object.keys(counts).sort((a, b) => counts[b] - counts[a] || a.localeCompare(b));
    if (state.topic && !counts[state.topic]) state.topic = null;
    $("#topics").innerHTML = topics.map(t =>
      `<button class="chip topic" data-topic="${esc(t)}" aria-pressed="${state.topic === t}">${esc(t)} <span class="mono">${counts[t]}</span></button>`
    ).join("");
  }
  function renderHot() {
    const hot = [...LEAKS].sort((a, b) => b.heat - a.heat).slice(0, 3);
    $("#hot").innerHTML = hot.map(l => card(l, true)).join("");
  }
  function renderFeed() {
    const list = filtered();
    $("#cards").innerHTML = list.map(l => card(l, false)).join("");
    $("#empty").hidden = list.length > 0;
    $("#feed-count").textContent = `${list.length} of ${LEAKS.length}`;
    document.querySelectorAll(".chip.status").forEach(c => c.setAttribute("aria-pressed", c.dataset.status === state.status));
  }
  function renderStats() {
    const confirmed = LEAKS.filter(l => l.status === "confirmed").length;
    const latest = LEAKS.map(l => l.date).sort().pop();
    $("#stat-total").textContent = LEAKS.length;
    $("#stat-confirmed").innerHTML = `${confirmed}<small>${Math.round(confirmed / Math.max(LEAKS.length, 1) * 100)}%</small>`;
    $("#stat-cats").textContent = Object.keys(CATS).length;
    $("#stat-updated").textContent = latest ? fmtDate(latest) : "—";
  }
  function renderTicker() {
    const items = [...LEAKS].sort((a, b) => b.date.localeCompare(a.date))
      .map(l => `<span><b>${esc(STATUS[l.status] || l.status)}</b> ${esc(l.headline)}</span>`).join("");
    $("#ticker").innerHTML = items + items;
  }
  function renderAll() { renderNav(); renderTopics(); renderFeed(); }

  // --- detail dialog
  const dlg = $("#detail");
  function openDetail(id) {
    const l = LEAKS.find(x => x.id === id);
    if (!l) return;
    $("#detail-body").innerHTML = `
      <div class="card-top"><span class="cat">${esc(CATS[l.category] || l.category)} · ${esc(l.topic)}</span>${pill(l.status)}</div>
      <h2>${esc(l.headline)}</h2>
      <p class="summary">${esc(l.summary)}</p>
      ${l.details && l.details.length ? `<div><h4>What we know</h4><ul>${l.details.map(d => `<li>${esc(d)}</li>`).join("")}</ul></div>` : ""}
      ${l.timeline && l.timeline.length ? `<div><h4>Timeline</h4><ol class="timeline">${l.timeline.map(t => `<li><time datetime="${esc(t.date)}">${fmtDate(t.date)}</time><span>${esc(t.event)}</span></li>`).join("")}</ol></div>` : ""}
      <div><h4>Sources</h4><div class="sources">${(l.sources || []).map(s => `<span>${esc(s)}</span>`).join("")}</div></div>
      ${l.tags && l.tags.length ? `<div><h4>Tags</h4><div class="tags">${l.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div></div>` : ""}
      <div class="detail-foot"><span class="src">Leaked ${fmtDate(l.date)}</span>${cred(l.credibility)}</div>`;
    if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
  }
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  $("#detail-close").addEventListener("click", () => dlg.close());

  // --- events
  $("#nav-cats").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-cat]"); if (!b) return;
    state.cat = b.dataset.cat; state.topic = null;
    try { history.replaceState(null, "", state.cat === "all" ? "#top" : "#" + state.cat); } catch (_) {}
    renderAll();
  });
  $("#topics").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-topic]"); if (!b) return;
    state.topic = state.topic === b.dataset.topic ? null : b.dataset.topic;
    renderTopics(); renderFeed();
  });
  $("#status-chips").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-status]"); if (!b) return;
    state.status = b.dataset.status; renderFeed();
  });
  $("#sort").addEventListener("change", (e) => { state.sort = e.target.value; renderFeed(); });
  $("#q").addEventListener("input", (e) => { state.q = e.target.value; renderFeed(); });
  document.addEventListener("click", (e) => {
    const c = e.target.closest(".card[data-id]"); if (c) openDetail(c.dataset.id);
  });

  // tip form: UI only until a backend exists
  $("#tip-form").addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.reset();
    const n = $("#tip-note"); n.hidden = false;
    setTimeout(() => { n.hidden = true; }, 6000);
  });

  // --- boot
  const hash = (location.hash || "").replace("#", "");
  if (CATS[hash]) state.cat = hash;
  renderStats(); renderTicker(); renderHot(); renderAll();
})();
