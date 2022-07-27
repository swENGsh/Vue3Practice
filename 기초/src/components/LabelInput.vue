<template>
	<label>
		{{ label }}
		<!-- <input v-model="username" type="text" /> -->
		<!-- v-model 만들기 -->
		<!-- :value="modelValue"
			@input="event => $emit('update:modelValue', event.target.value)" -->
		<input v-model="value" type="text" />
	</label>
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
