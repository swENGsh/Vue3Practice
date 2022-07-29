// 아무것도 리턴되지 않는다 => 바디부분이 끝나지 않아야 한다.
function error(message: string): never {
  throw new Error(message) // throw 하면서 끝나버리기 때문에 never 쓸 수 있음.
}
// 위의 error 사용되는 경우도 never 추론 가능.
function fail() {
  return error('failed')
}
// 무한루프 돌리면 never 가능
function infiniteLoop(): never {
  while(true){}
}

// never는 서브타입으로 never에는 할당 불가.

// let a: string = 'hello'
declare const a: string | number

if (typeof a !== 'string'){
  a // never로 감지 되므로 잘못된 타입을 넣는 실수를 막을 수 있음. 
}

type Indexable<T> = T extends string ? T & { [index: string]: any} : never

type ObjectIndexable = Indexable<{}>
// const b: Indexable<{}> = ''