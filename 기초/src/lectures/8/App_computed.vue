<template>
	<div>
		<h2>{{ teacher.name }}</h2>
		<h3>강의가 있습니까?</h3>
		<!-- {{ teacher.lectures.length > 0 ? '있음😊' : '없음😂' }} -->
		{{ hasLecture }}
		{{ hasLecture }}
		{{ existLecture() }}
		{{ existLecture() }}
		<button @click="counter++">Counter: {{ counter }}</button>
		<h2>이름</h2>
		<p>{{ fullName }}</p>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
export default {
	setup() {
		const teacher = reactive({
			name: '짐코딩',
			lectures: ['HTML/CSS', 'JavaScript', 'Vue3'],
		});

		// computed 속성 이용. => 한 번 실행되면 결과를 캐시로 저장하고 이후로는 캐시값을 보여줌.
		// 반응형이 변경되는 시점에만 갱신
		const hasLecture = computed(() => {
			console.log('computed');
			return teacher.lectures.length > 0 ? '있음😊' : '없음😂';
		});

		// 함수 호출 시마다 실행시킴.
		const existLecture = () => {
			console.log('method');
			return teacher.lectures.length > 0 ? '있음😊' : '없음😂';
		};

		const counter = ref(0);

		const firstName = ref('홍');
		const lastName = ref('길동');

		// const fullName = computed(() => firstName.value + ' ' + lastName.value);
		const fullName = computed({
			get() {
				return firstName.value + ' ' + lastName.value;
			},
			set(value) {
				// console.log('value: ', value);
				// console.log(value.setup(' '));
				// const [first, last] = value.split(' ');
				// console.log('first: ', first);
				// console.log('last: ', last);
				// => 한 줄로 변경하면
				[firstName.value, lastName.value] = value.split(' ');
			},
		});
		console.log('Console 출력: ', fullName.value);
		fullName.value = '짐 코딩'; // reactivity.esm-bundler.js:1160 Write operation failed: computed value is readonly
		return {
			teacher,
			hasLecture,
			existLecture,
			counter,
			fullName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
