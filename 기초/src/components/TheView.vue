<!-- 부모 컴포넌트 -->
<template>
	<main>
		<div class="container py-4">
			<PostCreate @create-post="createPost"></PostCreate>
			<hr class="my-4" />
			<div class="row g-3">
				<div class="col col-4">
					<!-- AppCard를 6개 사용했기 때문에 AppCard instance가 6개생성됨을 콘솔창에서 확인 -->
					<!-- 파스칼케이스 -->
					<!-- 동적으로 값을 입력 해줘도 되고, -->
					<AppCard title="제목1" contents="내용1"></AppCard>
					<!-- 카멜케이스 -->
					<!-- <app-card></app-card> -->
				</div>
				<div class="col col-4">
					<!-- 바인딩도 가능. -->
					<AppCard :title="post.title" :contents="post.contents"></AppCard>
				</div>
				<!-- for문 이용 -->
				<div v-for="post in posts" :key="post.id" class="col col-4">
					<AppCard
						:title="post.title"
						:contents="post.contents"
						:type="post.type"
						:is-like="post.isLike"
						@toggle-like="post.isLike = !post.isLike"
					></AppCard>
					<!-- :isLike="post.isLike"로도 선언 가능. -->
					<!-- 부모가 변경되면 자식도 변경되는 것을 확인할 수 있음. -->
					<!-- <button @click="post.isLike = !post.isLike">Toggle</button> -->
				</div>
				<!-- <div class="col col-4">
					<AppCard></AppCard>
				</div>
				<div class="col col-4">
					<AppCard></AppCard>
				</div>
				<div class="col col-4">
					<AppCard></AppCard>
				</div> -->
			</div>
			<hr class="my-4" />
			<!-- vue3에서는 사용자 정의 컴포넌트에서는 
				props로는 modelValue로 값을 넘겨주고
				event로는 update:modelValue
				을 이용하여 v-model을 구현할 수 있음.
			 -->
			<!-- :modeL-value="username"
				@update:model-value="value => (username = value)" -->
			<LabelInput v-model="username" label="이름"></LabelInput>
			<LabelTitle v-model:title="username" label="제목"></LabelTitle>
			<Username
				v-model:firstname="firstname"
				v-model:lastname="lastname"
			></Username>
		</div>
	</main>
</template>

<script>
// 한 번 스크립트 모델을 읽어옴. => 콘솔창에 'AppCard module' 한 번 뜨는 것을 확인.
import AppCard from '@/components/AppCard.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelInput from '@/components/LabelInput.vue';
import LabelTitle from '@/components/LabelTitle.vue';
import Username from '@/components/TheUsername.vue';
import { reactive, ref } from 'vue';
export default {
	components: {
		AppCard,
		PostCreate,
		LabelInput,
		LabelTitle,
		Username,
	},
	// 컴포넌트가 사용될 때마다 setup() 함수가 실행됨.
	setup() {
		const post = reactive({
			title: '제목2',
			contents: '내용2',
		});

		const posts = reactive([
			{
				id: 3,
				title: '제목3',
				contents: '내용3',
				isLike: true,
				// type이 validator 에서 없는 값이면 콘솔창에서 오류 확인됨.
				// type: 'newssdfa',
				type: 'news',
			},
			{
				id: 4,
				title: '제목4',
				contents: '내용4',
				isLike: false,
				type: 'notice',
			},
			{ id: 5, title: '제목5', contents: '내용5', isLike: true, type: 'news' },
			{
				id: 6,
				title: '제목6',
				contents: '내용6',
				isLike: true,
				type: 'notice',
			},
		]);

		const createPost = newPost => {
			// console.log('createPost');
			console.log('newTitle: ', newPost);
			posts.push(newPost);
		};

		const username = ref('');
		const firstname = ref('');
		const lastname = ref('');
		return { post, posts, createPost, username, firstname, lastname };
	},
};
</script>

<style lang="scss" scoped></style>
