interface IPerson2 {
  name: string
  age?: number
}
// IKorean이 IPerson2로부터 상속 받음.
interface IKorean extends IPerson2 {
  city: string
}

const k: IKorean = {
  name: '이웅재',
  city: '서울',
}

// HTMLDivElement