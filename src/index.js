// store는 나의 데이터 즉 state를 담는 곳
import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//리듀서는 무조건 함수여야함
//reducer이 return하는 건 전부 data가 된다.
const countModifier = (state = 0) => {
  return state;
};
//스토어를 만들면 리듀서를 달라고 요청함
const countStore = createStore(countModifier);
console.log(countStore.getState());
