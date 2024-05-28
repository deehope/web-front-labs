function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;

    let currentSeconds = today.getSeconds();
    document.getElementById('seconds').innerHTML = currentSeconds;
}

// Обновляем время каждую секунду
setInterval(showTime, 1000);