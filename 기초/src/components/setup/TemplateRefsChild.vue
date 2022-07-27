<template>
	<div>
		<!-- 자식에서 부모속성 접근할 수 있음. -->
		{{ $parent }}
		<ul>
			<li v-for="fruit in $parent.fruits" :key="fruit">{{ fruit }}</li>
		</ul>
	</div>
</template>

<script setup>
import { ref } from 'vue';
const message = ref('Hello ~!');
const sayHello = () => {
	alert(message.value);
};
// script setup은 기본적으로 Template Refs나 $parent와 같은 컴포넌트간 통신이 닫혀 있음.
// => 내부 데이터나 메서드를 명시적으로 노출하려면 defineExpose() 컴파일러 매크로 사용해야함.
defineExpose({
	message,
	sayHello,
});
</script>

<style lang="scss" scoped></style>
