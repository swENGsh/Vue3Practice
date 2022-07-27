<template>
	<div>
		<button @click="increment">Click {{ state.count }}</button>
		<button @click="increment">DeepClick {{ state.deep.count }}</button>
	</div>
</template>

<script>
import { reactive } from 'vue';
export default {
	setup() {
		// reactive 함수는 객체나 배열같은
		// reference 타입을 반응형 객체로 만들 수 있음.
		const state = reactive({
			count: 0,
			deep: {
				count: 0,
			},
		});
		const increment = () => {
			state.count++;
			state.deep.count++;
		};
		return {
			state,
			increment,
		};
	},
};
</script>

<style lang="scss" scoped></style>
