<template>
	<div>
		<h2>보간법</h2>
		<p>{{ message }}</p>
		<p v-once>{{ message }}</p>
		<button @click="message = message + '!'">Click!</button>
		<hr />
		<h2>v-html</h2>
		<p>{{ rawHtml }}</p>
		<p v-html="rawHtml"></p>
		<hr />
		<h2>속성 바인딩</h2>
		<div title="안녕하세요">마우스를 올려보세요</div>
		<div v-bind:title="dynamicTitle">마우스를 올려보세요</div>
		<input type="text" value="홍길동" />
		<input type="text" value="홍길동" v-bind:disabled="isInputDisabled" />
		<!-- v-bind는 : 으로 대체 가능 -->
		<input v-bind="attrs" />
		<h2>JavaScript</h2>
		{{ message.split('').reverse().join('') }}
		<br />
		{{ isInputDisabled ? '예' : '아니오' }}
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const message = ref('안녕하세요!');
		const rawHtml = ref('<strong>안녕하세요</strong>');

		const dynamicTitle = ref('안녕하세요!@@@@@!!!');
		const isInputDisabled = ref(true);

		return {
			message,
			rawHtml,
			dynamicTitle,
			isInputDisabled,
		};
	},
};
</script>

<style lang="scss" scoped></style>
