const toDoform = document.querySelector('.js-toDoForm'),
    toDoInput = toDoform.querySelector('input');
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li =btn.parentNode;
    toDoList.removeChild(li);
    // filter는 toDos에 있는 모든 데이터가 특정 함수를 거쳐
    // 원하는 조건에 충족 되면 (true) 로 충족 하지 못하면 false로
    // 변경하여 true에 해당하는 값만 출력하는 함수이다.
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos()
;}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    //localStorage에는 js 데이터를 저장 할 수 없다.
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn =document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text,
        id: newId,
    }
    toDos.push(toDoObj);
    saveToDos();
}
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
      const parsedToDos = JSON.parse(loadedToDos);
      parsedToDos.forEach(function(toDo) {
        paintToDo(toDo.text);
      });
    }
  }
  

function init () {
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit);
}

init();