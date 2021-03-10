// js-form 에 js를 주기 위해서 form 이라는 변수에 담는다.
const form = document.querySelector(".js-form"),
// form 안에 있는 input만을 가져옴
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault(); // form으로 데이터를 보내면, 새로고침과 같이 특정 페이지로 이동하는 현상을 막기 위함.
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  // 이전에 적혀있던 내용이 있다면 그 것을 지우고
  form.classList.remove(SHOWING_CN);
  // Class 뒤에 Showing을 추가 시켜 줌으로써, none -> block으로 전환
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  // localStorage를 통해 값을 얻어 올 수 없다면
  if (currentUser === null) {
    askForName();
    // localStorage를 통해 값을 얻어 올 수 있다면
  } else {
    // 저장된 이름을 통해서 Hello + 이름을 출력한다.
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();