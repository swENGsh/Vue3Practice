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
		<hr />
		<!-- slot을 선언하게 되면, 부모 컴포넌트에서 컨텐츠를 사용할 때, slot 컨텐츠가 교체됨. -->
		<FancyButton>Click!!<span style="color: red">@@@</span></FancyButton>
		<FancyButton v-slot="{ fancyMessage }">{{ fancyMessage }}</FancyButton>
		<FancyButton>
			<!-- <template v-slot="{ fancyMessage }">{{ fancyMessage }}</template> -->
			<template #default="{ fancyMessage }">{{ fancyMessage }}</template>
		</FancyButton>
		<hr />
		<AppCard>
			<!-- v-slot: => 단축표현식 : '#' -->
			<!-- #[]로 동적으로 변경 가능 (v-bind와 v-on도 가능) -->
			<!-- <template #[slotArgs]>제목입니다.</template> -->
			<!-- <template v-slot:default>내용입니다.</template> -->
			<!-- 암시적으로 Default 슬롯입니다.
			<template #footer>푸터입니다.</template> -->
			<!-- <template #default>디폴트입니다. {{ message }}</template> -->
			<!-- Vue warn: Property "childMessage" was accessed during render but is not defined on instance.
			=> 자식 컴포넌트에 있는 데이터는 접근 바로 못함.-->
			<!-- <template #default
				>디폴트입니다. {{ message }}{{ childMessage }}</template
			> -->
			<!-- ==> props 전달하듯이 속성을 슬롯 콘텐츠에 전달하면 됨. -->
			<!-- <template #default="slotProps"> -->
			<template #default="{ childMessage, helloMessage }">
				<!-- {{ obj }} -->
				디폴트입니다. {{ message }}
				<!-- {{ childMessage }} -->
				<!-- {{ slotProps.childMessage }} -->
				<br />
				{{ childMessage }}
				<br />
				{{ helloMessage }}
			</template>
			<template #header="{ headerMessage }">
				{{ headerMessage }}
			</template>
			<template #footer="{ footerMessage }">
				{{ footerMessage }}
			</template>
		</AppCard>
		<hr />
		<AppCard> 게시글입니다. </AppCard>
	</div>
</template>

<script>
import MyButton from '@/components/MyButton.vue';
import LabelInput from '@/components/LabelInput.vue';
import FancyButton from '@/components/FancyButton.vue';
import AppCard from '@/components/AppCard.vue';
import { ref } from 'vue';
export default {
	components: {
		MyButton,
		LabelInput,
		FancyButton,
		AppCard,
	},
	setup() {
		const sayHello = () => {
			alert('안녕하세요!');
		};

		const slotArgs = ref('header');

		const message = ref('안녕하세요!!!');
		return { sayHello, slotArgs, message };
	},
};
</script>

<style lang="scss" scoped></style>
