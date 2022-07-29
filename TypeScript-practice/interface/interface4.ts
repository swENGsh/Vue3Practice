interface Person4 {
  name: string
  age: number
  // 함수. return type : void
  hello(): void
}

const p41: Person4 = {
  name: 'Mark',
  age: 39,
  hello: function():void{
    console.log(`안녕하세요! ${this.name} 입니다.`)
  }
}

const p42: Person4 = {
  name: 'Mark',
  age: 39,
  hello():void {
  // hello(this: Person4):void {
      console.log(`안녕하세요! ${this.name} 입니다.`)
  },
}

// const p43: Person4 = {
//   name: 'Mark',
//   age: 39,
//   hello: (): void => {
//       console.log(`안녕하세요! ${this.name} 입니다.`)
//   },
// }

p41.hello()
p42.hello()