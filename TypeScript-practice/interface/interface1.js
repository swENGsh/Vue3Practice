"use strict";
// 함수
// function hello1(person: {name: string; age: number}): void {
function hello1(person) {
    console.log(`안녕하세요! ${person.name}입니다.`);
}
// 사용하는 쪽
// const p1: { name: string, age:number} = {
const p1 = {
    name: 'Mark',
    age: 39
};
// p1은 hello1과 같은 구조이기 때문에 쓸 수 있다.
hello1(p1);
// => Person이라는 데이터구조로 만들어서 사용하면 편할것 같넹? => 맨 위로 올라가서 interface 만들기!
