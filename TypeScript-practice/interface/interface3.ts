interface Person3 {
  name: string
  age?: number
  // indexable type, string으로 지정시 optionable하게 가능.
  [index: string]: any // a['index']와 의미가 같음
}

function hello3(person: Person3):void {
  console.log(`안녕하세요! ${person.name} 입니다.`)
}

const p31: Person3 = {
  name: 'Mark',
  age: 39,
}

const p32: Person3 = {
  name: "Anna",
  systers: ['Sung', 'Chan']
}

const p33: Person3 = {
  name: 'Bokdaengi',
  father: p31,
  mother: p32,
}

hello3(p31)
hello3(p32)
hello3(p33)