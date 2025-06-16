// Segédfüggvény az arbitrázs-lista kirajzolásához
function renderArbs(arbs) {
  const tbody = document.getElementById('arb-body');
  const template = document.getElementById('row-template').textContent.trim();
  tbody.innerHTML = '';

  arbs.forEach(arb => {
    // 1) templating (nagyon egyszerű helyettesítés)
    let html = template
      .replace('{{eventId}}',  arb.eventId)
      .replace('{{marketId}}', arb.marketId)
      .replace('{{league}}',   arb.league)
      .replace('{{home}}',     arb.home)
      .replace('{{away}}',     arb.away)
      .replace('{{marketName}}', arb.marketName)
      .replace('{{profit}}',   arb.profit.toFixed(2));

    // 2) DOM-ra rakjuk
    const tmp = document.createElement('tbody');
    tmp.innerHTML = html;
    const row = tmp.firstElementChild;

    // 3) Profit cella színezése
    const profitCell = row.querySelector('.profit');
    profitCell.classList.add(arb.profit > 0 ? 'positive' : 'negative');

    // 4) Sor-kiválasztás a Tét gomboknál
    row.querySelector('.stake-1').addEventListener('click', () => highlightRow(row));
    row.querySelector('.stake-2').addEventListener('click', () => highlightRow(row));

    // 5) Teljes sor kattintható → odagörgetés a piac-mezőre
    row.addEventListener('click', e => {
      if (e.target.closest('button')) return;   // gomb-kattnál ne scrollozzunk
      scrollToMarket(arb.marketId);
    });

    tbody.appendChild(row);
  });
}

// "Aktív sor" logika
function highlightRow(targetRow) {
  document.querySelectorAll('.arb-row.active').forEach(r => r.classList.remove('active'));
  targetRow.classList.add('active');
}

// Piac-mezőre ugorjunk (pl. Real Madrid Over 2.5 lapok)
function scrollToMarket(marketId) {
  const el = document.querySelector(`[data-market-id="${marketId}"]`);
  if (!el) return;

  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  el.classList.add('flash');
  setTimeout(() => el.classList.remove('flash'), 1600);
} 
