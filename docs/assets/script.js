// Neon "Unlock" animation
document.addEventListener('DOMContentLoaded', () => {
    const logoText = document.querySelector('.unlock-text');
    let i=0;
    const text = "🔓 Universal Modem Unlocker";
    setInterval(()=>{
        logoText.textContent = text.substring(0,i+1);
        i = (i+1)%text.length;
    },80);
});
