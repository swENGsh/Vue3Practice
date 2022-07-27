<template>
	<div class="p-3 bg-danger">
		<!-- $attrs 바인딩하면 non-prop 속성이 버튼에 바인딩 됨. -->
		<!-- v-bind="$attrs" -->
		<button class="btn btn-primary" type="button" @click="sayHello">
			My Button
		</button>
		<!-- {{$attrs}} <= $listeners 제거되고, 모든 리스너(속성, 이벤트 등)는 $attrs의 일부가 됨.  -->
	</div>
</template>

<script>
export default {
	// event를 발생시킬 때는 꼭 emits 옵션으로 이벤트를 선언해서 non-prop 옵션에서 제외를 시켜줘야함.
	// emits에 넣어주지 않으면 root인 div에 상속됨.
	emits: ['sayHello'],
	// inheritAttrs: false,
	setup(props, { emit }) {
		// console.log('context.attrs: ', context.attrs);
		// console.log('class: ', context.attrs.class);
		// console.log('id: ', context.attrs.id);
		// console.log('onClick: ', context.attrs.onClick);
		// 새로고침하면 바로 실행되는 것을 볼 수 있음.
		// context.attrs.onClick();

		const sayHello = () => {
			emit('sayHello');
		};
		return { sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
