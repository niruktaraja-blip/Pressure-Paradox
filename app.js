// Basic interactive logic and chart rendering
const data = {
  pair1: { aligned: 6, misaligned: 44 },
  pair2: { aligned: 21, misaligned: 29 },
  written: { summary: "Students balance passion and finance; education cost and family expectations influence choices." }
};

function pct(v,total){ return Math.round((v/total)*100); }

function makePie(ctx, labels, values, colors){
  return new Chart(ctx, {
    type: 'pie',
    data: { labels, datasets:[{ data: values, backgroundColor: colors }]},
    options: { maintainAspectRatio: false, plugins:{legend:{position:'bottom'}}, responsive:true }
  });
}

function init(){
  const pairsEl = document.getElementById('pairs');
  document.getElementById('toggle-pairs').addEventListener('click', ()=> pairsEl.classList.toggle('hidden'));

  // Pair 1 chart
  const total1 = data.pair1.aligned + data.pair1.misaligned;
  const ctx1 = document.getElementById('chart-pair1').getContext('2d');
  makePie(ctx1, ['Aligned','Misaligned'], [data.pair1.aligned, data.pair1.misaligned], ['#16a34a','#ef4444']);

  // Pair 2 chart
  const total2 = data.pair2.aligned + data.pair2.misaligned;
  const ctx2 = document.getElementById('chart-pair2').getContext('2d');
  makePie(ctx2, ['Aligned','Misaligned'], [data.pair2.aligned, data.pair2.misaligned], ['#0ea5e9','#f97316']);

  // Download JSON
  document.getElementById('download-json').addEventListener('click', ()=>{
    const blob = new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'survey-results.json'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
  });
}

window.addEventListener('DOMContentLoaded', init);
