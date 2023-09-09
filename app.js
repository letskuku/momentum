const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // 일반적으로 string만 포함된 변수는 이름을 대문자로 표기

// 모든 EventListener function의 첫번째 argument는 항상 지금 막 벌어진 일들에 대한 정보가 됨
function onLoginSubmit(event) {

    // preventDefault: 어떤 event의 기본 행동이든 발생되지 않도록 막음, EventListener 함수의 첫번째 argument 안에 있는 함수임
    // ex) form의 경우 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있음
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME); // 폼 제출 후 폼 숨김 처리

    const username = loginInput.value;
    // greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);