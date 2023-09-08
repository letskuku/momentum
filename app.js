const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

// 모든 EventListener function의 첫번째 argument는 항상 지금 막 벌어진 일들에 대한 정보가 됨
function onLoginSubmit(event) {
    // preventDefault: 어떤 event의 기본 행동이든 발생되지 않도록 막음, EventListener 함수의 첫번째 argument 안에 있는 함수임
    // ex) form의 경우 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있음
    event.preventDefault();
    console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);