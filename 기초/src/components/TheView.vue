<template>
	<main>
		<!-- <ProvideInject></ProvideInject> -->
		<!-- <LifecycleHooks></LifecycleHooks> -->
		<!-- <TemplateRefs></TemplateRefs> -->
		<!-- <ScriptSetup></ScriptSetup> -->
		<DynamicComponent />
	</main>
</template>

<!-- <script>
import ScriptSetup from '@/components/ScriptSetup.vue';
// import TemplateRefs from '@/components/TemplateRefs.vue';
// import LifecycleHooks from '@/components/LifecycleHooks.vue';
// import ProvideInject from '@/components/ProvideInject.vue';
export default {
	components: {
		// ProvideInject,
		// LifecycleHooks,
		// TemplateRefs,
		ScriptSetup,
	},
	setup() {
		return {};
	},
};
</script> -->
<script setup>
import DynamicComponent from '@/components/DynamicComponent.vue';
// import ScriptSetup from '@/components/ScriptSetup.vue';
</script>

<style lang="scss" scoped></style>
