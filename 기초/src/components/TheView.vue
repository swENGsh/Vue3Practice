<template>
	<div class="container py-4">
		<!-- MyButton 안에 아무런 이벤트도 정의하지 않았기 떄문에 non-prop로 적용 가능 -->
		<!-- => non-prop 속성은 component의 root element에 상속되기 때문 -->
		<!-- ==> non-prop 속성은 props와 event에 명시적으로 선언되지 않은 속성 또는 이벤트를 말함. -->
		<!-- @click="sayHello" -->
		<MyButton class="my-button" id="my-button" @say-hello="sayHello"></MyButton>
		<!-- hello라는 이벤트가 달려있지만, 아무런 동작도 하지 않는다. (기능이 없으니까) -->
		<!-- <MyButton @hello="sayHello"></MyButton> -->
		<!-- Fragments 사용 시 의문 : 정의되지 않은 data-id 속성을 넣어주면 
		Vue warn: Extraneous non-props attributes (data-id) were passed to component but could not be 
		automatically inherited because component renders fragment or text root nodes.
		발생. => non-prop 속성을 어디다가 넣어줘야할 지 못 찾음.
		==> 이 경우는 상속해야 하는 위치를 명시적으로 정의해야 함. -->
		<LabelInput label="이름" data-id="id입니다."></LabelInput>
	</div>
</template>

<script>
import MyButton from '@/components/MyButton.vue';
import LabelInput from '@/components/LabelInput.vue';
export default {
	components: {
		MyButton,
		LabelInput,
	},
	setup() {
		const sayHello = () => {
			alert('안녕하세요!');
		};
		return { sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
