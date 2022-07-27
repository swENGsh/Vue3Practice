<template>
	<div>
		<!-- form을 변경할 때마다 자동으로 저장되게 만들기 -->
		<!-- .prevent => submit의 기본 동작을 막음. => 내용 유지시킴. -->
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

		// 부가설명
		// watch vs watchEffect
		// 공통점 : 어떠한 반응이 일어날 때 감지해서 다른 비즈니스 로직이라던지 API 호출 등의 작업을 수행할 수 있는 반응형api.
		// watch : 즉시실행하려면 immediate 옵션 넣어주면 됨. 명시적(어떠한 데이터를 감시하겠다.)
		// watchEffect : 콜백함수 안에서 사용한 반응형 API 상태를 감시함. watch에 비해 덜 명시적.
		// => 상황에 맞게 잘 사용해줘야 함.
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
