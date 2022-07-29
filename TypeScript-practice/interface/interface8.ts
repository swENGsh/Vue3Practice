interface Person8 {
  name: string
  age?: number
  readonly gender: string
}

const p81: Person8 = {
  name: 'Mark',
  gender: 'male'
}
// readonly이므로 gender 변경이 불가능함.
// p81.gender = 'female'