<template>
  <div>
    <h2>{{ form.title }}</h2>
    <p>{{ form.content }}</p>
    <p class="text-muted">{{ form.createAt }}</p>
    <hr class="my-4" />
    <div class="row">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger">삭제</button>
      </div>
    </div>
    <!-- {{ $route.params }} -->
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';
import { ref } from 'vue';

const props = defineProps({
  // id: String,
  id: Number,
});

const route = useRoute();
const router = useRouter();
const id = route.params.id;
/**
 * markus.oberlehner.net/blog/vue-3-composition-api-ref-vs-reactive/
 * ref
 * 장) 객체 할당 가능 / 일관성 유지
 * 단) form.value.title, form.value.content
 *
 * reactive
 * 장) form.title, form.content
 * 단) 객체 할당 불가능
 */

// string으로 받아오기 때문에 undifined로 나옴. posts.js에서 작업해줘야함.
console.log('post: ', getPostById(id));
// 데이터 뿌리기
// 개념 배울 때 : ref <= string/number ... reactive <= 객체/배열
// 왜 ref로 배열 했지? => reactive 쓰면 object가 되어 반응성을 잃게 됨.
const form = ref({});
// let form = reactive({})

const fetchPost = () => {
  const data = getPostById(props.id);
  // 객체 복사를 하지 않으면 같이 바뀌기 때문에 객체 복사 해줘야함.
  form.value = { ...data };
  // form = { ...data };
  // => reactive 쓰면 object가 되어 반응성을 잃게 됨.
  // form.title = data.title
  // form.content = data.content
  // => 따로 따로 할당해줘야 반응성이 유지 됨.
  // ref 함수 쓰면 한번에 객체로 보낼 수 있다.
};
fetchPost();
const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
  router.push({ name: 'PostEdit', params: { id: props.id } });
</script>

<style lang="scss" scoped></style>
