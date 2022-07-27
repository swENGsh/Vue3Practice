<template>
	<div class="container py-4">
		<input ref="inputRef" type="text" value="hello vue3!" />
		<hr />
		<button @click="visible = !visible">Toggle Child</button>
		<LifecycleChild v-if="visible"></LifecycleChild>
		<!-- 반응형상태의 변경으로 인해 devtools에서의 변경을 DOM에 적용시켜야 할 때 호출되는 hooks: onBeforeUpdate,onUpdated -->
		<p id="message">{{ message }}</p>
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import LifecycleChild from '@/components/LifecycleChild.vue';
export default {
	components: {
		LifecycleChild,
	},
	setup() {
		console.log('setup');
		const inputRef = ref(null);
		const message = ref('');
		const visible = ref(false);
		// 🐳vue3: composition API에서 onBeforeMount와 onMounted 사용 시
		// // component가 DOM에 추가 되기 직전이기 때문에 DOM에 접근 불가능.
		// onBeforeMount(() => {
		// 	console.log('onBeforeMount', inputRef.value);
		// });
		// // component가 DOM에 추가가 되었기 때문에 DOM에 접근 가능.
		// onMounted(() => {
		// 	console.log('onMounted', inputRef.value.value);
		// });

		// 🐳vue3: composition API에서 onBeforeUpdate와 onUpdated 사용 시
		// // DOM update 이전이기 때문에 반응형 데이터는 변경이 되지만, DOM content를 불러올 수 없음.
		// onBeforeUpdate(() => {
		// 	console.log('onBeforeUpdate', message.value);
		// 	console.log(
		// 		'DOM Content: ',
		// 		document.querySelector('#message').textContent,
		// 	);
		// });
		// // DOM update 이후이기 때문에 DOM content를 불러옴.
		// // cf. 디버깅 시 재 렌더링 시점을 알고 싶을 떄 사용할 수 있다.
		// onUpdated(() => {
		// 	console.log('onUpdated', message.value);
		// 	console.log(
		// 		'DOM Content: ',
		// 		document.querySelector('#message').textContent,
		// 	);
		// });

		// 🐳vue3: composition API에서 onBeforeUpdate와 onUpdated 사용 시

		return { inputRef, message, visible };
	},
	// 🐳vue3에서 beforCreate와 created는 setup함수에서 선언하고 처리하면 됨.
	// // vue2: 반응형 데이터 선언 시 data 옵션으로 선언했음.
	// data: () => ({
	// 	dataMessage: 'date message',
	// }),
	// // component가 초기화 될 때 실행되는 훅
	// beforeCreate() {
	// 	console.log('beforeCreate');
	// 	// component instance에는 접근 가능.
	// 	console.log(this);
	// 	// but, beforeCreate에서는 아직 dataMessage 옵션이 처리되기 전이기 때문에 읽어올 수 없음.
	// 	console.log(this.dataMessage);
	// },
	// created() {
	// 	console.log('secreatedtup');
	// 	// Create에서는 dataMessage 옵션이 처리된 후이기 때문에 읽어올 수 있음.
	// 	console.log(this.dataMessage);
	// },
};
</script>

<style lang="scss" scoped></style>
