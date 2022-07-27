<template>
	<main>
		<!-- <ProvideInject></ProvideInject> -->
		<LifecycleHooks></LifecycleHooks>
	</main>
</template>

<script>
import LifecycleHooks from '@/components/LifecycleHooks.vue';
// import ProvideInject from '@/components/ProvideInject.vue';
export default {
	components: {
		// ProvideInject,
		LifecycleHooks,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
