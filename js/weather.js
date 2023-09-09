const API_KEY = "98144fb9c280ab0319558655cb412bc3";

function onGeoOk(position) {
    const lat = position.coords.latitude; // 위도
    const lon = position.coords.longitude; // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    // javascript가 url 호출
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");

            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = data.name;
        });
}

function onGeoError() {
    alert("Can't find you! No weather for you...");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 위치 좌표 조회