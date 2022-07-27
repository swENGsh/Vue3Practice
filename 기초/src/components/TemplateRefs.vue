<template>
	<div class="container py-4">
		<input ref="input" type="text" />
		<p>{{ input }}</p>
		<!-- 새로고침하면 error가 남: input은 mount가 되기 전까지 null값임.
    => null값일 때 접근해서 생기는 오류이므로 v-if로 null이 아닐 때만 접근하도록 함. -->
		<p v-if="input">
			{{ input.value }}, {{ $refs.input.value }}, {{ $refs.input === input }}
		</p>
		<hr />
		<!-- <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li> -->
		<!-- <ul>
			<li
				v-for="fruit in fruits"
				:key="fruit"
				:ref="el => itemRefs.push(el.textContent)"
			>
				{{ fruit }}
			</li>
		</ul> -->
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
	</div>
</template>

<script>
import TemplateRefsChild from '@/components/TemplateRefsChild.vue';
import { onMounted, ref } from 'vue';
export default {
	components: {
		TemplateRefsChild,
	},
	setup() {
		// ref 속성과 동일한 이름의 반응형 이름을 선언해줌.
		const input = ref(null);
		console.log('setup: ', input.value);
		// mount된 이후에 DOM에 접근 가능.
		onMounted(() => {
			input.value.value = 'Hello Vue3!';
			console.log('onMounted: ', input.value);

			// forEach: li요소를 하나씩 가지고 옴.
			// ref 문자열로
			// itemRefs.value.forEach(item => console.log('item: ', item.textContent));
			// ref를 함수로 참조할 때, 바로 접근 가능.
			itemRefs.value.forEach(item => console.log('item: ', item));
			console.log('child: ', child.value.message);
			child.value.sayHello();
		});

		const fruits = ref(['사과', '딸기', '포도']);
		// v-for에서 ref가 사용될 때 마운트 후 DOM요소는 ref배열 안에 채워짐.
		const itemRefs = ref([]);

		const child = ref(null);
		return { input, fruits, itemRefs, child };
	},
};
</script>

<style lang="scss" scoped></style>
