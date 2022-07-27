<template>
	<div>
		<!-- 자식에서 부모속성 접근할 수 있음. -->
		{{ $parent }}
		<ul>
			<li v-for="fruit in $parent.fruits" :key="fruit">{{ fruit }}</li>
		</ul>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const message = ref('Hello ~!');
		const sayHello = () => {
			alert(message.value);
		};
		return { message, sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
