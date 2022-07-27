<!-- 자식컴포넌트 -->
<!-- props : 부모 => 자식(AppCard.vue) 데이터 전달 -->
<template>
	<div class="card">
		<div class="card-body">
			<!-- cf. {{$props}}로도 접근 가능 -->
			<!-- {{ $props }} -->
			<!-- type: news, notice -->
			<span class="badge bg-secondary">{{ typeName }}</span>
			<!-- {{ $style }}
			{{ classes }} -->
			<h5 class="card-title red mt-2">{{ title }}</h5>
			<!-- <p class="card-text" :class="$style.red"> -->
			<!-- <p class="card-text" :class="classes.red"> -->
			<p class="card-text">
				{{ contents }}
			</p>
			<!-- <a v-if="isLike" href="#" class="btn btn-danger">좋아요</a>
			<a v-else href="#" class="btn btn-outline-danger">좋아요</a> -->
			<a href="#" class="btn" :class="isLikeClass" @click="$emit('toggleLike')"
				>좋아요</a
			>
			<!-- <a href="#" class="btn" :class="isLikeClass" @click="toggleLike"
				>좋아요</a
			> -->
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';
// import { ref } from 'vue';
// import { useCssModule } from 'vue';
// console.log('AppCard module');
export default {
	// 간단하게 선언할 수 있지만 객체타입으로 선언하는걸 권장.
	// props: ['title', 'contents'],
	// props 객체타입으로 선언
	props: {
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
			required: true,
		},
		// Boolean Casting
		// Boolean 타입은 <mycomponent disabled> === <:disabled="true">
		// <mycomponent /> === <:disabled="false">
		isLike: {
			type: Boolean,
			required: false,
		},
		// 객체나 배열같은 레퍼런스 타입의 defalut 값을 선언할때는 팩토리함수 형식으로 선언해준다.
		obj: {
			type: Object,
			// default: function () {
			// 	return {};
			// },
			// arrow function
			default: () => ({}),
		},
	},
	emits: ['toggleLike'],
	// setup 함수 내에서 props 사용하고 싶으면 첫 번째 매개변수로 props 지정.
	setup(props, context) {
		console.log('props.title: ', props.title);

		const isLikeClass = computed(() =>
			props.isLike ? 'btn-danger' : 'btn-outline-danger',
		);
		const typeName = computed(() =>
			props.type === 'news' ? '뉴스' : '공지사항',
		);

		// console창에 Set operation on key "isLike" failed: target is readonly. 오류 뜸.
		// => 하위 속성 변경 실수로 상위 속성 변경하여 앱의 데이터 흐름을 이해하기 어렵게 만드는 것을 방지.
		// const toggleLike = () => {
		// 	props.isLike = !props.isLike;
		// };
		// emit 활용
		const toggleLike = () => {
			// props.isLike = !props.isLike;
			context.emit('toggleLike');
			// props.obj.title = '김길동' 과 같이 자바스크립트 특성상 객체/배열의 중첩 속성은 변경 가능하므로
			// 단방향 데이터 흐름을 깰 우려가 있음. 이경우는
			// context.emit('changeTitle') 을 통해 부모에서 변경할 수 있도록 해줘야 함.
		};

		// 함수의 객체를 setup 함수로 가져오고 싶을 때.
		// const style = useCssModule();
		// console.log('style: ', style);
		// console.log('AppCard setup()');

		// const color = ref('red');
		// // css의 v-bind 기능을 이용하여 동적으로 값 변경 가능
		// color.value = 'yellow';
		// return { color };
		return { isLikeClass, typeName, toggleLike };
		// return { isLikeClass, typeName };
	},
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
