const clockContainer = document.querySelector('.js-clock');
// js-clock 이라는 div 안에 있는 h1에 대해서 영향을 주기 위해서 변수로 설정
const clockTitle = clockContainer.querySelector('h1');

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    // 조건문을 사용해서 10 이라는 숫자 아래로 가면 0을 붙여서 시계와 비슷한 형태로 조정
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`
}

function init() {
    getTime();
    setInterval(getTime,1000); // function, 
}

init(); 