<template>
	<button class="fancy-btn">
		<!-- 외부에서 컨텐츠를 전달했을 때 삽입할 위치에 <slot> 넣어주면 끝임. -->
		<!-- Fallback Content: 부모에서 슬롯 콘텐츠를 제공하지 않을 때 기본값으로 보여줄 것을 지정.
    => 문자열 뿐 아니라 HTML element도 올 수 있고, 또 다른 컴포넌트가 올 수도 있음. -->
		<slot :fancy-message="fancyMessage">Default Click!!</slot>
	</button>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const fancyMessage = ref('Fancy Message');
		return { fancyMessage };
	},
};
</script>

<style scoped>
.fancy-btn {
	color: #fff;
	background: linear-gradient(315deg, #42d392 25%, #647eff);
	border: none;
	padding: 5px 12px;
	margin: 5px;
	border-radius: 8px;
	cursor: pointer;
}
</style>
