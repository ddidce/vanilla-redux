/** @format */

// store는 나의 데이터 즉 state를 담는 곳
import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//리듀서는 무조건 함수여야함
//reducer이 return하는 건 전부 data가 된다.
// action은 redux에서 함수를 부를때 쓰는 두번째 parameter or argument이다
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  }
  return count;
};
//스토어를 만들면 리듀서를 달라고 요청함
const countStore = createStore(countModifier);

number.innerText = 0;

const onchange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onchange);
const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

//스토어를 통해 메시지를 보내려면 dispatch를 사용하면 된다. 그리고
//전송한 값을 action에 넣고 action을 체크해보면 된다.
