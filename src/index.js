// /** @format */

// // store는 나의 데이터 즉 state를 담는 곳
// import { createStore } from "redux";

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// //리듀서는 무조건 함수여야함
// //reducer이 return하는 건 전부 data가 된다.
// // action은 redux에서 함수를 부를때 쓰는 두번째 parameter or argument이다
// const countModifier = (count = 0, action) => {
//   switch (action.type) {
//     case "ADD":
//       return count + 1;
//     case "MINUS":
//       return count - 1;
//     default:
//       return count;
//   }
// };
// //스토어를 만들면 리듀서를 달라고 요청함
// const countStore = createStore(countModifier);

// number.innerText = 0;

// const ADD = "ADD";
// const MINUS = "MINUS";

// const onchange = () => {
//   number.innerText = countStore.getState();
// };

// countStore.subscribe(onchange);
// const handleAdd = () => {
//   countStore.dispatch({ type: ADD });
// };

// const handleMinus = () => {
//   countStore.dispatch({ type: MINUS });
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);

// //스토어를 통해 메시지를 보내려면 dispatch를 사용하면 된다. 그리고
// //전송한 값을 action에 넣고 action을 체크해보면 된다.

import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = text => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== parseInt(action.id));
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = text => {
  store.dispatch(addToDo(text));
};

const dispatchdispatchDeleteToDo = e => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchdispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};
store.subscribe(paintToDos);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
