const weekdays = ["রবি", "সোম", "মঙগল", "বুধ", "বৃহসপতি", "শুক্র", "শনি"];

setInterval(() => {
    const hour = document.querySelector("#hour");
    const minute = document.querySelector("#minute");
    const second = document.querySelector("#second");
    const day = document.querySelector("#day");
    const date = document.querySelector("#date");

    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const d1 = d.getDay();
    const d2 = d.getDate();

    hour.style.transform = `rotate(${(h*30)+(m/2)}deg)`;
    minute.style.transform = `rotate(${(m*6)+(s/10)}deg)`;
    second.style.transform = `rotate(${s*6}deg)`;
    day.innerHTML = weekdays[d1];
    date.innerHTML = d2;
    
}, 1000);