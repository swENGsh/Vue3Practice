<template>
	<div class="card">
		<div class="card-body">
			<span class="badge bg-secondary">{{ typeName }}</span>
			<h5 class="card-title red mt-2">{{ title }}</h5>
			<p class="card-text">
				{{ contents }}
			</p>
			<a href="#" class="btn" :class="isLikeClass" @click="$emit('toggleLike')"
				>좋아요</a
			>
		</div>
	</div>
</template>

<script>
console.log('Normal Script');
</script>

<script setup>
import { computed } from 'vue';
// 한 번만 호출시켜야하는데 인스턴스 생성시마다 setup함수 호출되기 때문에 인스턴스 개수만큼 호출됨.
// 이런 경우 <script setup>과 <script>를 함께 사용해야함.
console.log('Script Setup');

// defineProps와 defineEmits는 script setup 내부에서만 사용할 수 있는 컴파일러 매크로임.
const props = defineProps({
	type: {
		type: String,
		default: 'news',
		validator: value => {
			return ['news', 'notice'].includes(value);
		},
	},
	title: {
		type: String,
		required: true,
	},
	contents: {
		type: String,
		// required: true,
	},
	isLike: {
		type: Boolean,
		required: false,
	},
	obj: {
		type: Object,
		default: () => ({}),
	},
});
const emit = defineEmits(['toggleLike']);
const isLikeClass = computed(() =>
	props.isLike ? 'btn-danger' : 'btn-outline-danger',
);
const typeName = computed(() => (props.type === 'news' ? '뉴스' : '공지사항'));
const toggleLike = () => {
	// props.isLike = !props.isLike;
	emit('toggleLike');
};
</script>

<style></style>

<!-- scoped 속성의 여부에 따라서 전역/지역 나뉨 -->
<!-- red 속성을 전역에서 사용하고 싶으면 <style>만-->
<!-- <style>
/* 동적바인드 */
.red {
	color: v-bind(color);
}
</style> -->

<!-- red 속성을 AppCard.vue 내부에서만 사용하고 싶으면 <style scoped> 써주면 된다. -->
<!-- <style scoped>
.red {
	color: red !important;
}
</style> -->

<!-- <style module> 속성은 내장객체 형식으로 표현된다. -->
<!-- <style module>
.red {
	color: red !important;
}
</style> -->

<!-- module 명을 지정해줄 수 있음. -->
<!-- <style module="classes">
.red {
	color: red !important;
}
</style> -->
