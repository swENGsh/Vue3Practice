<template>
	<div></div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
	setup() {
		// ref => Object
		const count = ref(0);
		const state = reactive({
			count, // count = count
		});
		count.value++;
		count.value++;
		console.log(count.value);
		// ref로 선언한 데이터를 반응형 객체의 속성으로 주입하게 되면
		// 자동으로 state.count.value의 .value가 unmatching 됨.
		console.log('state.count: ', state.count);

		// ref -> Array
		const message = ref('Hello');
		const arr = reactive([message]);
		console.log('arr[0]: ', arr[0].value);
		// ref로 선언한 데이터를 반응형 객체의 배열로 주입하면
		// .value를 적어줘야 함.
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
