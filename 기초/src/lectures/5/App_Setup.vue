<template>
	<div>
		<p>{{ counter }}</p>
		<p>{{ message }}</p>
		<button @click="increment">click!</button>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	// setup(props, context)
	// context는 함수 내에서 유용하게 사용할 수 있음.
	// - atters : 속성, $attrs와 동일한 비반응형 객체
	// - slots : 슬롯, $slots에 해당하는 비반응성 개체
	// - emit : 이벤트 발생, $emit에 해당하는 함수
	// - expose : Public한 속성, 함수를 외부에 노출시에 사용.
	setup() {
		const counter = ref(0);
		const message = ref('Hello Vue3');
		const increment = () => {
			counter.value++;
		};
		// templates 및 기타 Options API hook에 노출
		return {
			counter,
			message,
			increment,
		};
	},
	// mounted() {
	// 	console.log(this.count); // 0
	// },
};
</script>

<style lang="scss" scoped></style>
