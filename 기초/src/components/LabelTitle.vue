<template>
	<label>
		{{ label }}
		<input v-model="value" type="text" />
	</label>
</template>

<script>
import { computed } from 'vue';
export default {
	props: ['title', 'label'], // vue2에서는 value
	emits: ['update:title'], // vue2에서는 @input
	setup(props, { emit }) {
		// computed를 사용해서 v-model 구현
		const value = computed({
			get() {
				return props.title;
			},
			set(value) {
				emit('update:title', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
