const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); // 1초마다 getClock 실행

// interval: 정해진 시간마다 정해진 함수 반복 호출
// timeout: 새로고침하고 정해진 시간 후 함수 1회 호출