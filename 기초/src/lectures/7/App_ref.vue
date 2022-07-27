<template>
	<div>
		<p>{{ message.value }}</p>
		<button @click="addMessage">add click</button>
	</div>
</template>

<script>
import { reactive } from 'vue';
export default {
	setup() {
		// string, number, boolean 등의 타입을 반응형으로 만들려면
		const message = reactive({
			value: 'Hello Vue!',
		}); // => const message = ref('Hello Vue!') 와 같다.
		const addMessage = () => {
			message.value = message.value + '!';
		};
		// let message = reactive('Hello Vue!');
		// const addMessage = () => {
		// 	message = message + '!'; // 값 자체를 새로 바꿔버림.
		//   // 동기화를 하려면 메모리 주소를 message가 갖고 있고,
		//   // 그 값을 공유를 해야 됨.
		// };
		console.log('message: ', message.value);
		console.log('message typeof: ', typeof message.value);
		return {
			message,
			addMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
