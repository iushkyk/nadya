const birth = '2021-08-30';

function getTime(birth) {
    const t = Date.parse(new Date()) - Date.parse(birth),
        years = Math.floor(t / (1000 * 60 * 60 * 24 * 30 * 12)),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor((t / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);
    return {
        'total': t,
        'years': years,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    }
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}


function setClock(selector, birthTime) {
    const timer = document.querySelector(selector),
        years = timer.querySelector('#years'),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTime(birthTime);

        years.innerHTML = getZero(t.years)
        days.innerHTML = getZero(t.days) 
        hours.innerHTML = getZero(t.hours)
        minutes.innerHTML = getZero(t.minutes)
        seconds.innerHTML = getZero(t.seconds)
    }
}


setClock('.timer', birth);