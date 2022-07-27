<template>
	<div class="container py-4">
		<button
			class="btn btn-primary me-2"
			@click="changeCurrentComp(DynamicApple)"
		>
			사과
		</button>
		<button class="btn btn-danger" @click="changeCurrentComp(DynamicBanana)">
			바나나
		</button>
		<hr />
		<component :is="currentComp" />
		<p>{{ obj1 }}</p>
		<p>{{ obj2 }}</p>
	</div>
</template>

<script setup>
import DynamicApple from '@/components/DynamicApple.vue';
import DynamicBanana from '@/components/DynamicBanana.vue';
import { ref, shallowRef } from 'vue';

// is속성으로 컴포넌트를 넘길때는 ref 함수로 정의하는 것보다 shallowRef 함수로 정의하는게 퍼포먼스적에서 유리함.
// const currentComp = ref(DynamicApple);
const currentComp = shallowRef(DynamicApple);

// ref / shallowRef 모두 반응형임.
// shallowRef => 속성에 대해서는 반응하지 않고, 값 자체가 바꼈을 때만 반응함.
// (obj2.value값이 바뀔때만 반응하고, obj2.value.name에는 반응x)
const obj1 = ref({ name: '홍길동' });
const obj2 = shallowRef({ name: '김길동' });
const changeCurrentComp = comp => (currentComp.value = comp);
</script>

<style lang="scss" scoped></style>
