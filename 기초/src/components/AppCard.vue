<template>
	<div class="card">
		<div v-if="$slots.header" class="card-header">
			<slot name="header" header-message="헤더 메시지">
				<!-- #Header -->
			</slot>
		</div>
		<!-- {{$slots}}을 이용하여 내가 원하는 부분만 출력할 수 있다. -->
		<div v-if="$slots.default" class="card-body">
			<!-- slot 이름을 부여하지 않으면 default로 적용됨. -->
			<!-- 자식에 있는 데이터 사용하고자 하면 props 넘겨주듯 바인딩 -->
			<slot :child-message="childMessage" hello-message="안녕하세요!">
				<!-- #body -->
			</slot>
		</div>
		<div v-if="hasFooter" class="card-footer text-muted">
			<slot name="footer" footer-message="푸터 메시지">
				<!-- #Footer -->
			</slot>
		</div>
	</div>
</template>

<script>
import { computed, ref } from 'vue';
export default {
	setup(props, { slots }) {
		const childMessage = ref('자식 컴포넌트 메시지');

		// context.slots
		const hasFooter = computed(() => !!slots.footer);
		return { childMessage, hasFooter };
	},
};
</script>

<style lang="scss" scoped></style>
