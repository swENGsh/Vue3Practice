<template>
	<div>
		<!-- form을 변경할 때마다 자동으로 저장되게 만들기 -->
		<form action="" @submit.prevent="save(title, contents)">
			<input v-model.lazy="title" type="text" placeholder="Title" />
			<textarea v-model.lazy="contents" placeholder="Contents"></textarea>
			<hr />
			<button>저장</button>
		</form>
		<!-- 위에랑 같은거임 코드 변경 -->
		<!-- <form action="" @submit.prevent>
			<input v-model.lazy="title" type="text" placeholder="Title" />
			<textarea v-model.lazy="contents" placeholder="Contents"></textarea>
			<hr />
			<button @click="save(title, contents)">저장</button>
		</form> -->
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';
export default {
	setup() {
		const title = ref('');
		const contents = ref('');

		// 저장하는 로직
		const save = (title, contents) => {
			console.log(`저장되었습니다. title: ${title}, contents: ${contents}`);
		};
		// 자동으로 저장하기 위해
		watchEffect(() => {
			console.log('watchEffect');
			// console.log(title.value);
			// console.log(contents.value);
			save(title.value, contents.value);
		});
		// => title, contents 의 변경이 일어날 때마다 콜백함수가 호출됨.
		return { title, contents, save };
	},
};
</script>

<style lang="scss" scoped></style>
