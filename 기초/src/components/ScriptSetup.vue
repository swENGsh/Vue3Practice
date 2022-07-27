<template>
	<div class="container py-4">
		<!-- return이 없어도 바로 템플릿에서 사용할 수 있다!! -->
		{{ msg }}
		<br />
		{{ message }}
		<input v-model="message" type="text" />
		<button @click="sayHello">click</button>
		<PostItem type="news" title="제목" contents="내용" isLike="true"></PostItem>
		<PostItem type="news" title="제목" contents="내용" isLike="true"></PostItem>
		<PostItem type="news" title="제목" contents="내용" isLike="true"></PostItem>
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
		<template v-if="child">{{ child.message }}</template>
		<hr />
		<MyButton class="parent-class"></MyButton>
	</div>
</template>

<!-- setup 명시만 해주면 지금까지 아래 주석처럼 setup()에 작성되었던 것과 동일. -->
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import PostItem from '@/components/setup/PostItem.vue';
import TemplateRefsChild from '@/components/setup/TemplateRefsChild.vue';
import MyButton from '@/components/setup/MyButton.vue';

// console.log('Hello World');
const msg = 'Hello World';
const message = ref('');
const sayHello = () => {
	alert('Hellog World!');
};
const child = ref(null);

// script setup은 기본적으로 Template Refs나 $parent와 같은 컴포넌트간 통신이 닫혀 있음.
// => 내부 데이터나 메서드를 명시적으로 노출하려면 defineExpose() 컴파일러 매크로 사용해야함.
// cf. expose는 <script>에서도 context.expose로 사용할 수 있다.
defineExpose({
	msg,
});
// context.attrs / context.slots => useAttrs / useSlots

// 🐳vue3: <script setup>에서는 async를 지정해주지 않아도 await 사용 가능.
const response = await axios(
	'https://dummy.restapiexample.com/api/v1/employees',
);
console.log('response: ', response);
</script>
<!-- <script>
export default {
	setup() {
		console.log('Hello World');
	},
};
</script> -->

<style lang="scss" scoped></style>
