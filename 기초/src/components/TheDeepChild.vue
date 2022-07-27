<template>
	<div class="card">
		<div class="card-header">Deep Child Component</div>
		<div class="card-footer">
			<p>staticMessage: {{ staticMessage }}</p>
			<p>message: {{ message }}</p>
			<p>count: {{ count }}</p>
		</div>
	</div>
</template>

<script>
import { inject } from 'vue';
export default {
	setup() {
		// 값이 넘어오지 않을 걸 대비하여 두 번째 매개변수로 기본값을 지정할 수 있다.
		const staticMessage = inject('static-message', 'default message');
		const { message, updateMessage } = inject('message');
		updateMessage('!');
		// Vue warn: Set operation on key "value" failed: target is readonly.
		// readonly 속성때문에 발생하는 오류.
		// message.value = message.value + '!';
		const count = inject('count');
		return { staticMessage, message, count };
	},
};
</script>

<style lang="scss" scoped></style>
