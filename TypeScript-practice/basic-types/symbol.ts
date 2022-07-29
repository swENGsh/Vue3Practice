console.log(Symbol('foo') === Symbol('foo'))

const sym = Symbol()

const obj = {
  [sym]: 'value'
}

obj[sym] // 접근을 제한할 때 사용.