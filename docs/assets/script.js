document.addEventListener('DOMContentLoaded', () => {
const logoText = document.querySelector('.unlock-text');
let i=0;
const text = "🔓 Universal Modem Unlocker";
setInterval(()=>{
logoText.textContent = text.substring(0,i+1);
i = (i+1)%text.length;
},80);
});

// Swiper Slider
var swiper = new Swiper(".mySwiper", {
loop:true,
pagination: { el: ".swiper-pagination", clickable:true },
navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
autoplay: { delay: 4000 },
});

// Fake Stats JSON
const fakeData = { models: ["E5577","B612","TF-i60"], counts: [12482,7560,4321] };
new Chart(document.getElementById('unlockChart'), {
type: 'bar',
data: { labels: fakeData.models, datasets: [{ label: 'Unlocks', data: fakeData.counts, backgroundColor:['#0ff','#f0f','#ff0']}]},
options: { responsive:true }
});

// Particles Background
tsParticles.load("tsparticles", {
fullScreen: { enable:true, zIndex:-1 },
particles: { number:{ value:80 }, color:{ value:"#0ff" }, shape:{ type:"circle" }, opacity:{ value:0.3 }, size:{ value:{min:1,max:3} }, move:{ enable:true, speed:1.5, direction:"none", outMode:"bounce" } },
interactivity:{ events:{ onHover:{ enable:true, mode:"repulse" } } }
});

// Code Rain Effect
const canvas = document.getElementById("codeRain");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(0);
function drawCodeRain(){
ctx.fillStyle = "rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fillStyle = "#0ff";
ctx.font = fontSize+"px monospace";
for(let i=0;i<drops.length;i++){
const text = letters.charAt(Math.floor(Math.random()*letters.length));
ctx.fillText(text,i*fontSize,drops[i]*fontSize);
if(drops[i]*fontSize > canvas.height && Math.random()>0.975) drops[i]=0;
drops[i]++;
}
requestAnimationFrame(drawCodeRain);
}
drawCodeRain();
window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});


fetch('../data/stats.json')
.then(res => res.json())
.then(data => {

  // --- جدول مودم‌ها ---
  const tableBody = document.querySelector("#modemTable tbody");
  data.modems.forEach(modem => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="color:${modem.color}">${modem.brand}</td>
      <td>${modem.model}</td>
      <td>${modem.method}</td>
      <td>${modem.time}</td>
      <td>${modem.active ? '✅':'❌'}</td>
    `;
    tableBody.appendChild(tr);
  });

  // --- نمودار ---
  const labels = Object.keys(data.stats);
  const values = Object.values(data.stats);

  // رنگ برای هر ستون از modems (اگر کمتر از ستون‌ها بود، تکرار کن)
  const backgroundColors = data.modems.map(m => m.color);
  while(backgroundColors.length < labels.length){
    backgroundColors.push('#0ff'); // رنگ پیشفرض برای ستون اضافی
  }

  const ctx = document.getElementById('unlockChart').getContext('2d');
  new Chart(ctx,{
    type:'bar',
    data:{
      labels: labels,
      datasets:[{
        label:'Unlocks',
        data: values,
        backgroundColor: backgroundColors.slice(0, labels.length),
        borderColor:'#0ff',
        borderWidth:1
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      plugins:{
        legend:{ labels:{ color:'#0ff', font:{size:14} } }
      },
      scales:{
        x:{ ticks:{ color:'#0ff', font:{size:14} } },
        y:{ beginAtZero:true, ticks:{ color:'#0ff', font:{size:14} } }
      }
    }
  });

})
.catch(err => console.error('Error loading stats.json:', err));

