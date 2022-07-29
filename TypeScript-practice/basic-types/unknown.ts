// 응용 프로그램을 작성 시 모르는 변수의 타입을 묘사해야함. => any
// 동적 컨텐츠(API)의 값
declare const maybe: unknown
// unknown은 number에 바로 할당할 수 없다.
const aNumber: number = maybe
// 
if(maybe === true) {
  const aBoolean: boolean = maybe

  // const aString: string = maybe
}

if (typeof maybe === 'string') {
  const aString: string = maybe

  // const aBoolean: boolean = maybe
}

// any보다 Type-safe한 타입
// any와 같이 아무거나 할당할 수 있다
// 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나 
// 타입을 호가정해주지 않으면 다른 곳에 할당할 수 없고 사용할 수 없다.
// runtime error를 줄일 수 있음.