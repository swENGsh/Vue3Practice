<template>
	<main>
		<div class="container py-4">
			<div class="row g-3">
				<div class="col col-4">
					<!-- AppCard를 6개 사용했기 때문에 AppCard instance가 6개생성됨을 콘솔창에서 확인 -->
					<!-- 파스칼케이스 -->
					<AppCard></AppCard>
					<!-- 카멜케이스 -->
					<!-- <app-card></app-card> -->
				</div>
				<div class="col col-4">
					<AppCard></AppCard>
				</div>
				<div class="col col-4">
					<AppCard></AppCard>
				</div>
				<div class="col col-4">
					<AppCard></AppCard>
				</div>
				<div class="col col-4">
					<AppCard></AppCard>
				</div>
				<div class="col col-4">
					<AppCard></AppCard>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
// 한 번 스크립트 모델을 읽어옴. => 콘솔창에 'AppCard module' 한 번 뜨는 것을 확인.
import AppCard from '@/components/AppCard.vue';
export default {
	components: {
		AppCard,
	},
	// 컴포넌트가 사용될 때마다 setup() 함수가 실행됨.
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
