<template>
	<div>
		<!-- class는 html 속성과 바인딩을 동시에 가질 수 있다. -->
		<!-- <div class="text" :class="{ active: isActive, 'text-danger': hasError }">
			텍스트 입니다.
		</div> -->
		<!-- 배열에는 삼항연산자, 일반 텍스트 뿐 아니라 객체도 올 수 있음. -->
		<div
			class="text"
			:class="[isActive ? 'active-class' : 'class', errorClass, classObject]"
		>
			텍스트 입니다.
		</div>
		<button @click="toggle">toggle</button>
		<button @click="hasError = !hasError">toggleError</button>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
export default {
	setup() {
		const isActive = ref(true);
		const hasError = ref(false);

		// const classObject = reactive({
		// 	active: true,
		// 	'text-danger': true,
		// });

		const classObject = computed(() => {
			return {
				active: true && true,
				'text-danger': true && true,
				'text-blue': true,
			};
		});

		const activeClass = ref('active');
		const errorClass = ref('error');

		const toggle = () => {
			isActive.value = !isActive.value;
		};
		return { isActive, toggle, hasError, classObject, activeClass, errorClass };
	},
};
</script>

<style scoped>
.active {
	font-weight: 900;
}
.text-danger {
	color: red;
}
.text-blue {
	color: blue;
}
</style>
