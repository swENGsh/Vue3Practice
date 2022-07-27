<template>
	<div class="card">
		<div class="card-body">
			<!-- {{ $style }}
			{{ classes }} -->
			<h5 class="card-title red">Card title</h5>
			<!-- <p class="card-text" :class="$style.red"> -->
			<!-- <p class="card-text" :class="classes.red"> -->
			<p class="card-text">
				Some quick example text to build on the card title and make up the bulk
				of the card's content.
			</p>
			<a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
// import { useCssModule } from 'vue';
console.log('AppCard module');
export default {
	setup() {
		// 함수의 객체를 setup 함수로 가져오고 싶을 때.
		// const style = useCssModule();
		// console.log('style: ', style);
		console.log('AppCard setup()');

		const color = ref('red');
		// css의 v-bind 기능을 이용하여 동적으로 값 변경 가능
		color.value = 'yellow';
		return { color };
	},
};
</script>

<!-- scoped 속성의 여부에 따라서 전역/지역 나뉨 -->
<!-- red 속성을 전역에서 사용하고 싶으면 <style>만-->
<style>
/* 동적바인드 */
.red {
	color: v-bind(color);
}
</style>

<!-- red 속성을 AppCard.vue 내부에서만 사용하고 싶으면 <style scoped> 써주면 된다. -->
<!-- <style scoped>
.red {
	color: red !important;
}
</style> -->

<!-- <style module> 속성은 내장객체 형식으로 표현된다. -->
<!-- <style module>
.red {
	color: red !important;
}
</style> -->

<!-- module 명을 지정해줄 수 있음. -->
<!-- <style module="classes">
.red {
	color: red !important;
}
</style> -->
