function returnVoid(message: string) {
  console.log(message)

  return
} // 추론되는 타입은 void임

const r = returnVoid('리턴이 없다.')

// void로 지정된 함수는 return을 가지고 표현하지 않겠다.
// return undefined만 void에 할당 가능
// return 된 void를 가지고는 어딘가에서 무언가를 할 수 없는 상태.