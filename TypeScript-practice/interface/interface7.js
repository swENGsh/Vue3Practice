"use strict";
// age? => age로 넣어줬기 때문에 에러가 난다.
// => 매개변수가 없어도 상관이 없어야 하는데 할당되면서 무조건 있어야하는 것처럼 바뀌니까 에러가 남.
// const helloPerson: HelloPerson = function(name: string, age: number) {
//   console.log(`안녕하세요! ${name}입니다.`)
// }
const helloPerson = function (name) {
    console.log(`안녕하세요! ${name}입니다.`);
};
// 함수는 구현체와의 관계가 아닌 interface와의 관계가 더 중요하게 작용.
helloPerson('Mark', 39);
