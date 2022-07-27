<template>
	<div>
		<TheNav></TheNav>
		<TheView></TheView>
		<AppCard></AppCard>
	</div>
</template>

<script>
import TheNav from './components/TheNav.vue';
import TheView from './components/TheView.vue';

export default {
	// 컴포넌트지역등록
	// TheNav: TheNav => TheNav로 표현 가능.
	components: {
		TheNav,
		TheView,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
