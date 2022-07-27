<template>
	<div>
		<div id="modifiers">
			<!-- .capture => 이벤트를 먼저 실행시켜야할 때, 사용하면 됨. -->
			<div @click="clickDiv">
				DIV 영역
				<!-- .self => 클릭한 게 나 자신일 때만 동작. -->
				<p @click.self="clickP">
					P 영역
					<!-- <span @click.stop="clickSpan"> SPAN 영역 </span> -->
					<span @click="clickSpan"> SPAN 영역 </span>
				</p>
			</div>
		</div>
		<a href="https://naver.com" @click.prevent="clickA">a 영역</a>
	</div>
</template>

<script>
export default {
	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
			// location.href = 'https://naver.com';
		};
		const clickP = () => {
			console.log('clickP');
		};
		const clickSpan = () => {
			console.log('clickSpan');
			// alert('좋아요');
		};
		const clickA = () => {
			alert('어떤 기능~');
		};
		return {
			clickDiv,
			clickP,
			clickSpan,
			clickA,
		};
	},
};
</script>

<style>
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}
#modifiers div {
	background-color: #ccc;
}
#modifiers p {
	background-color: #999;
}
#modifiers span {
	background-color: #666;
	display: block;
}
</style>
