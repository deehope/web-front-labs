function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = today.toLocaleString('ru-RU');

    let locales = [
        { locale: 'en-US', name: 'США', timeZone: 'America/New_York' },
        { locale: 'en-GB', name: 'Великобритания', timeZone: 'Europe/London' },
        { locale: 'fr-FR', name: 'Франция', timeZone: 'Europe/Paris' },
        { locale: 'de-DE', name: 'Германия', timeZone: 'Europe/Berlin' },
        { locale: 'ja-JP', name: 'Япония', timeZone: 'Asia/Tokyo' }
    ];

    let localDates = document.getElementById('local-dates');
    localDates.innerHTML = '';

    locales.forEach(({ locale, name, timeZone }) => {
        let options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', year: 'numeric', month: 'long', day: 'numeric' };
        let localeDate = document.createElement('div');
        localeDate.innerHTML = `${name}: ${new Intl.DateTimeFormat(locale, options).format(today)}`;
        localDates.appendChild(localeDate);
    });
     // Вывод текущего года
     let year = document.getElementById('year');
     year.innerHTML = `Текущий год: ${today.getFullYear()}`;
 
     // Вывод текущего месяца
     let monthNames = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
     let month = document.getElementById('month');
     month.innerHTML = `Текущий месяц: ${monthNames[today.getMonth()]}`;
 
     // Вывод текущей даты
     let date = document.getElementById('date');
     date.innerHTML = `Текущая дата: ${today.getDate()}`;
 
     // Вывод дня недели
     let dayNames = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
     let day = document.getElementById('day');
     day.innerHTML = `День недели: ${dayNames[today.getDay()]}`;
}

document.addEventListener('DOMContentLoaded', showDate);



