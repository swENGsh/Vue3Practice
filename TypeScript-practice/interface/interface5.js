"use strict";
class Person {
    // 생성자함수 이용해서 this.name에 name 할당.
    constructor(name) {
        this.name = name;
    }
    hello() {
        // throw new Error("Method not implemented.")
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
}
// const person: Interface name = newPerson('name')
const person = new Person('Mark');
person.hello();
