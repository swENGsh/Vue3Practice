<template>
	<div class="card">
		<div class="card-header">Child Component</div>
		<div class="card-body">
			<p>appMessage: {{ appMessage }}</p>
			<TheDeepChild></TheDeepChild>
		</div>
	</div>
</template>

<script>
import TheDeepChild from '@/components/TheDeepChild.vue';
import { inject } from 'vue';
export default {
	components: {
		TheDeepChild,
	},
	setup() {
		const appMessage = inject('app-message');

		return { appMessage };
	},
};
</script>

<style lang="scss" scoped></style>
