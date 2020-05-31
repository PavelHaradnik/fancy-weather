var textQ = city.textContent;
var textCountry = country.textContent;
var description = descriptionTemp.textContent;

var language = {
    eng: {
        search: "search",
        lattitude: "Latitude: ",
        longitude: "Longitute: ",
        wind: "WIND: ",
        apparent: "FEELS LIKE: ",
        humidity: "HUMIDITY: "
    },
    ru: {
        search: "поиск",
        lattitude: "Широта: ",
        longitude: "Долгота: ",
        wind: "ВЕТЕР: ",
        apparent: "ЧУВСТВУЕТСЯ КАК: ",
        humidity: "ВЛАЖНОСТЬ: "
    },
    be: {
        search: "пошук",
        lattitude: "Шыраты: ",
        longitude: "Даўгата: ",
        wind: "ВЕЦЕР: ",
        apparent: "АДЧУВАЕ, ЯК: ",
        humidity: "СВЕТА: "

    }
};
navigator.geolocation.getCurrentPosition(position => {
    var long = position.coords.longitude;
    var lat = position.coords.latitude;
    
    document.getElementById('language-ru').addEventListener('click', () => {
        searchButton.textContent = language.ru.search;
        lattitude.textContent = language.ru.lattitude + latitudeLang;
        longitude.textContent = language.ru.longitude + longitudeLang;
        apparentTemp.textContent = language.ru.apparent + apparent;
        speedWind.textContent = language.ru.wind + wind + " м/с";
        humidity.textContent = language.ru.humidity + hum + " %";
        dateO.textContent = date1Ru;
        dateT.textContent = date2Ru;
        dateF.textContent = date3Ru;
        dateName.textContent = monthR;
        fetch(`https://api.darksky.net/forecast/5d8e47a0af37f840684d8c0e0564a77c/${lat},${long}?units=si&lang=ru`)
        .then(responce => {
            return responce.clone().json();
        })
        .then(data => {
            descriptionTemp.textContent  = data.currently.summary;
        });
})

document.getElementById('language').addEventListener('click', () => {
    searchButton.textContent = language.eng.search;
    lattitude.textContent = language.eng.lattitude + latitudeLang;
    longitude.textContent = language.eng.longitude + longitudeLang;
    apparentTemp.textContent = language.eng.apparent + apparent;
    speedWind.textContent = language.eng.wind + wind +  " m/s";
    humidity.textContent = language.eng.humidity + hum + " %";
    dateO.textContent = date1Eng;
    dateT.textContent = date2Eng;
    dateF.textContent = date3Eng;
    dateName.textContent = monthE;
    fetch(`https://api.darksky.net/forecast/5d8e47a0af37f840684d8c0e0564a77c/${lat},${long}?units=si&lang=en`)
    .then(responce => {
        return responce.clone().json();
    })
    .then(data => {
        descriptionTemp.textContent  = data.currently.summary;
    });
})

document.getElementById('language-be').addEventListener('click', () => {
    searchButton.textContent = language.be.search;
    lattitude.textContent = language.be.lattitude + latitudeLang;
    longitude.textContent = language.be.longitude + longitudeLang;
    apparentTemp.textContent = language.be.apparent + apparent;
    speedWind.textContent = language.be.wind + wind + " м/с";
    humidity.textContent = language.be.humidity + hum + " %";
    dateO.textContent = date1Be;
    dateT.textContent = date2Be;
    dateF.textContent = date3Be;
    dateName.textContent = monthB;
    fetch(`https://api.darksky.net/forecast/5d8e47a0af37f840684d8c0e0564a77c/${lat},${long}?units=si&lang=be`)
    .then(responce => {
        return responce.clone().json();
    })
    .then(data => {
        descriptionTemp.textContent  = data.currently.summary;
    });
})
})




