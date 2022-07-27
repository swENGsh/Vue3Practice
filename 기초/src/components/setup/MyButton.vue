<template>
	<div class="p-3 bg-danger">
		<button class="btn btn-primary" type="button" @click="sayHello">
			My Button {{ message }}
		</button>
	</div>
</template>

<script>
export default {
	// 상속 피할 수 있다.
	inheritAttrs: false,
};
</script>

<script setup>
import { ref } from 'vue';
const message = ref('message');
</script>
<style lang="scss" scoped></style>
