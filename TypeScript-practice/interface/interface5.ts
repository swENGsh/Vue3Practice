interface IPerson1 {
  name: string
  age?: number
  hello(): void
}

class Person implements IPerson1 {
  // IPerson1 인터페이스 구현체들
  name: string
  age?: number | undefined
  // 생성자함수 이용해서 this.name에 name 할당.
  constructor(name: string) {
    this.name = name
  }
  
  hello(): void {
    // throw new Error("Method not implemented.")
    console.log(`안녕하세요! ${this.name} 입니다.`)
  }
}
// const person: Interface name = newPerson('name')
const person: IPerson1 = new Person('Mark')
person.hello()