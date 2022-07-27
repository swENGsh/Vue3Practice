<template>
	<div>
		<!-- memo와 once의 차이를 잘 구분할 것. -->
		<div v-memo="[subscribers]">
			<!-- v-memo 안에는 여러가지 들어가도 됨. -->
			<p>subscribers: {{ subscribers }}</p>
			<p>views: {{ views }}</p>
			<p>likes: {{ likes }}</p>
		</div>
		<button @click="subscribers++">Subs++</button>
		<button @click="views++">Views++</button>
		<button @click="likes++">Likes++</button>
		<div>
			<p>subscribers: {{ subscribers }}</p>
			<p>views: {{ views }}</p>
			<p>likes: {{ likes }}</p>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const subscribers = ref(4000);
		const views = ref(400);
		const likes = ref(20);
		return { subscribers, views, likes };
	},
};
</script>

<style lang="scss" scoped></style>
