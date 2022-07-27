<template>
	<div>
		<div :style="styleObject">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, unde, sit
			numquam similique quas, debitis odio nisi deleniti nobis ipsum ea autem
			odit? Odio, quis explicabo aut harum consectetur deserunt?
		</div>
		<button @click="fontSize--">-</button>
		<button @click="fontSize++">+</button>
	</div>
</template>

<script>
import { reactive, computed, ref } from 'vue';
export default {
	setup() {
		// const styleObject = reactive({
		// 	color: 'red',
		// 	fontSize: '13px',
		// });
		const fontSize = ref(13);
		const styleObject = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});

		return { styleObject, fontSize };
	},
};
</script>

<style lang="scss" scoped></style>
