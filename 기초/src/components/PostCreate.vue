<!-- 자식컴포넌트 -->
<template>
	<div class="row g-3">
		<div class="col col-2">
			<select
				v-model="type"
				class="form-select"
				aria-label="Default select example"
			>
				<option value="news">뉴스</option>
				<option value="notice">공지사항</option>
			</select>
		</div>
		<div class="col col-8">
			<input v-model="title" type="text" class="form-control" />
		</div>
		<div class="col col-2 d-grid">
			<button class="btn btn-primary" @click="createPost">추가</button>
		</div>
		<!-- @click="$emit('createPost', 1, 2, 3, '김길동')" -->
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	// emits: ['createPost'],
	emits: {
		createPost: newPost => {
			// console.log('validator: ', newTitle);
			// vue warn: Invalid event arguments: event validation failed for event "createPost".
			if (!newPost.type) {
				return false;
			} else if (!newPost.title) {
				return false;
			}
			return true;
		},
		// 유효성 체크가 없을 경우는 null로 지정해주면 됨.
		// createPost: null
	},
	// setup(props, context) {
	setup(props, { emit }) {
		const type = ref('news');
		// title이라는 반응형 속성 선언
		const title = ref('');
		// context.emit
		const createPost = () => {
			const newPost = {
				type: type.value,
				title: title.value,
			};
			emit('createPost', newPost);
			type.value = 'news';
			title.value = '';
		};
		return { createPost, title, type };
	},
};
</script>

<style lang="scss" scoped></style>
