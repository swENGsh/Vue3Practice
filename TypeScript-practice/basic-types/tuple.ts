let x: [string, number]

x = ['hello', 39] // 항상 순서도 맞아야하고, type, 길이도 맞아야 함.

// x = [10, 'Mark']

// x[3] = 'world' // 없는 배열 위치는 잘못됨.(length 잘못)

const person: [string, number] = ['Mark', 39]

// const [first, second, third] = person