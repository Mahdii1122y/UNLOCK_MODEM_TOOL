// Unlock animation
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo-container h1');
    let i=0;
    const text = "🔓 Universal Modem Unlocker";
    setInterval(()=>{
        logo.textContent = text.substring(0,i+1);
        i = (i+1)%text.length;
    },80);
});
