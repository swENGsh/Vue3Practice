<template>
	<div class="container py-4">
		<div class="card">
			<div class="card-header">ProvideInject Component</div>
			<div class="card-body">
				<button @click="count++">Click</button>
				<p>appMessage: {{ appMessage }}</p>
				<TheChild></TheChild>
			</div>
		</div>
	</div>
</template>

<script>
import TheChild from '@/components/TheChild.vue';
import { inject, provide, readonly, ref } from 'vue';
export default {
	components: {
		TheChild,
	},
	setup() {
		const staticMessage = 'static message';
		// 자식 컴포넌트에 보낼 데이터의 변경이 필요할 때는 injector에서 변경하기보다
		// provider에서 데이터 변경을 제공하는 함수를 객체 형식으로 함께 제공하는 것이 더 좋다.
		const message = ref('message');
		const updateMessage = appendMessage => {
			message.value = message.value + appendMessage;
		};
		const count = ref(10);
		// 깊이가 깊은 자손에게 데이터를 보내고 싶을 때 부모에 provide, 자손에 inject를 이용하면 바로 보낼 수 있음.
		// provide('static-message', staticMessage);
		// 주입된 컴포넌트에서 제공된 값을 변경할 수 없도록 하려면 readonly() 함수를 함께 보내주면 됨.
		provide('message', { message: readonly(message), updateMessage });
		provide('count', count);

		// vue3에서 setup함수는 component instance가 생성되기 전이므로 this로 접근 불가능함.
		const msg = inject('msg');
		console.log('msg: ', msg);

		const appMessage = inject('app-message');
		return { count, appMessage, msg };
	},
	// vue2에서 사용할 때 예시
	mounted() {
		// 이 때, Lifecycle Hooks을 참고해보면 mounted는 component instance가 생성된 후이므로 this로 접근 가능.
		console.log('this.msg: ', this.msg);
	},
};
</script>

<style lang="scss" scoped></style>
