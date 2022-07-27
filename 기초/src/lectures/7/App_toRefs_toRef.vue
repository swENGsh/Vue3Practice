<template>
	<div>
		<p>author: {{ author }}</p>
		<p>year: {{ year }}</p>
		<p>title: {{ title }}</p>
	</div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue';
export default {
	setup() {
		const book = reactive({
			author: 'Vue Team',
			year: '2020',
			title: 'Vue 3 Guide',
			description: '당신은 이 책을 지금 바로 읽습니다 ;)',
			price: '무료',
		});

		// const { author, title } = book;
		// => 반응형 유지가 안됨.
		const { author, year } = toRefs(book);
		// or
		const title = toRef(book, 'title');
		// => 반응형을 유지하면서 구조분해할당 가능.

		return { author, title, year, book };
	},
};
</script>

<style lang="scss" scoped></style>
