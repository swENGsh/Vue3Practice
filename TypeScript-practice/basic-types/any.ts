function returnAny(message: any): any {
  console.log(message)
}

const any1 = returnAny('리턴은 아무거나')
// return이 any로 지정되는 순간 어떤 일을 하든 제약을 주지 않음.
any1.toString()
// any는 개체를 통해서 전파됨. 
let looselyTyped: any = {}

const d = looselyTyped.a.b.c.d
// any로 인한 누수를 막을 수 있어야함. 
function leakingAny(obj: any) {
  const a: number = obj.num
  const b = a+ 1
  return b
}

const c = leakingAny({num:0})
c.indexOf('0')