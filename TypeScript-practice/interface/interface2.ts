interface Person2 {
  name: string
  // 변수명 옆에 ?를 붙이면 있어도 되고 없어도 된다는 뜻.
  age?: number
}

function hello2(person: Person2):void {
  console.log(`안녕하세요! ${person.name} 입니다.`)
}

hello2({name: 'Mark', age:39})
hello2({name: 'Anna'})