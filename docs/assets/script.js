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
 
const toggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
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
