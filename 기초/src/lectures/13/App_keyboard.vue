<template>
	<div>
		<!-- enter를 눌렀을 때만 입력되도록. -->
		<input type="text" @keyup.enter="addTodo" />
		<!-- ctrl + enter 눌렀을 때 입력 -->
		<!-- <input type="text" @keyup.ctrl.enter="addTodo" /> -->
		<ul>
			<li v-for="(todo, index) in todos" :key="index">
				{{ todo }}
			</li>
		</ul>
	</div>
</template>

<script>
import { reactive } from 'vue';
export default {
	setup() {
		const todos = reactive([]);

		const addTodo = event => {
			todos.push(event.target.value);
			// enter 치면 초기화
			event.target.value = '';
			event.target.focus();
		};
		return { todos, addTodo };
	},
};
</script>

<style lang="scss" scoped></style>
