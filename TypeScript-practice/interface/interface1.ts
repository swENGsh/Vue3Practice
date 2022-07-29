// javascript에는 없는 문법임.. 컴파일 시 사라짐 => 컴파일을 위한 용도임. 에러 여부를 찾는것임.
interface Person1 {
  name: string
  age: number
}
// 함수
// function hello1(person: {name: string; age: number}): void {
function hello1(person: Person1): void {
  console.log(`안녕하세요! ${person.name}입니다.`)
}
// 사용하는 쪽
// const p1: { name: string, age:number} = {
const p1: Person1 = {
  name: 'Mark',
  age: 39
}
// p1은 hello1과 같은 구조이기 때문에 쓸 수 있다.
hello1(p1)
// => Person이라는 데이터구조로 만들어서 사용하면 편할것 같넹? => 맨 위로 올라가서 interface 만들기!