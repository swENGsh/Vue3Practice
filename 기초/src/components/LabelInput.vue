<template>
	<!-- <label class="child-class" style="border: 1px solid black" id="child-id"> -->
	<label class="form-label" id="child-id">
		{{ label }}
		<!-- <input v-model="username" type="text" /> -->
		<!-- v-model 만들기 -->
		<!-- :value="modelValue"
			@input="event => $emit('update:modelValue', event.target.value)" -->
	</label>
	<!-- 다중 루트 노드를 가질 수 있다. -->
	<!-- v-bind를 이용하여 상속받을 위치 명시. -->
	<input class="form-control" v-bind="$attrs" v-model="value" type="text" />
</template>

<script>
import { computed } from 'vue';
export default {
	props: ['modelValue', 'label'], // vue2에서는 value
	emits: ['update:modelValue'], // vue2에서는 @input
	setup(props, { emit }) {
		// computed를 사용해서 v-model 구현
		const value = computed({
			get() {
				return props.modelValue;
			},
			set(value) {
				emit('update:modelValue', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
