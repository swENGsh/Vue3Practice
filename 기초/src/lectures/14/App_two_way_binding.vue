<template>
	<div>
		<h2>input Value</h2>
		<input type="text" v-model="inputValue" />
		<!-- input에서 focus가 떨어졌을 때 동기화
		<input type="text" v-model.lazy="inputValue" /> -->
		<!-- input 내 숫자 입력 시 자동 형변환
		<input type="text" v-model.number="inputValue" /> -->
		<!-- 양 옆 공백 자동으로 지워주고 동기화
		<input type="text" v-model.trim="inputValue" /> -->
		<!-- :value="inputValue"
			@input="event => (inputValue = event.target.value)" -->
		<div>{{ inputValue }}</div>
		<div>{{ typeof inputValue }}</div>

		<h2>textarea value</h2>
		<!-- v-model === :value + @input -->
		<textarea v-model="textareaValue"></textarea>
		<!-- :value="textareaValue" @input="event => (textareaValue = event.target.value)" -->
		<div>{{ textareaValue }}</div>

		<h2>checkbox value</h2>
		<label for="checkbox">{{ checkboxValue }}</label>
		<!-- true / false value 값 지정 가능 -->
		<input
			type="checkbox"
			id="checkbox"
			v-model="checkboxValue"
			true-value="Yes"
			false-value="No"
		/>
		<!-- :checked="checkboxValue"
			@change="event => (checkboxValue = event.target.checked)" -->

		<h2>checkbox values</h2>
		<label>
			<input type="checkbox" value="html" v-model="checkboxValues" />
			HTML
		</label>
		<label>
			<input type="checkbox" value="css" v-model="checkboxValues" />
			CSS
		</label>
		<label>
			<input type="checkbox" value="javascript" v-model="checkboxValues" />
			JavaScript
		</label>
		<div>{{ checkboxValues }}</div>

		<h2>radio value</h2>
		<label>
			<input type="radio" name="type" value="O" v-model="radioValue" />
			<!-- :checked="radioValue === 'O'"
				@change="event => (radioValue = event.target.value)" -->
			O형
		</label>
		<label>
			<input type="radio" name="type" value="A" v-model="radioValue" />
			A형
		</label>
		<label>
			<input type="radio" name="type" value="B" v-model="radioValue" />
			B형
		</label>
		<label>
			<input type="radio" name="type" value="AB" v-model="radioValue" />
			AB형
		</label>
		<div>{{ radioValue }}</div>

		<h2>select value</h2>
		<select v-model="selectValue">
			<option value="html">HTML 수업</option>
			<option value="css">CSS 수업</option>
			<option value="javascript">JavaScript 수업</option>
		</select>
		<div>{{ selectValue }}</div>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const inputValue = ref(null);
		const textareaValue = ref(null);
		const checkboxValue = ref('Yes');
		const checkboxValues = ref([]);
		const radioValue = ref('O');
		const selectValue = ref('html');
		return {
			inputValue,
			textareaValue,
			checkboxValue,
			checkboxValues,
			radioValue,
			selectValue,
		};
	},
};
</script>

<style lang="scss" scoped></style>
