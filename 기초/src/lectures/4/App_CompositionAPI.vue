<template>
	<div>
		<h2>반응형 메시지</h2>
		<p>{{ reactiveMessage }}</p>
		<button v-on:click="addReactiveMessage">Add Message</button>
		<h2>일반 메시지</h2>
		<p>{{ normalMessage }}</p>
		<button v-on:click="addnormalMessage">Add Message</button>
	</div>
</template>

<script>
import { isRef, ref } from 'vue';
export default {
	setup() {
		const reactiveMessage = ref('Hello Reactive Message');
		const addReactiveMessage = () => {
			reactiveMessage.value = reactiveMessage.value + '!';
		};
		console.log('isRef(reactiveMessage): ', isRef(reactiveMessage));

		let normalMessage = 'Hello Normal Message';
		const addnormalMessage = () => {
			normalMessage = normalMessage + '!';
		};
		console.log('isRef(normalMessage): ', isRef(normalMessage));

		return {
			reactiveMessage,
			normalMessage,
			addReactiveMessage,
			addnormalMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
