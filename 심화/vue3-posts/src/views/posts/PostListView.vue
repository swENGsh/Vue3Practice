<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :create-at="post.createAt"
          @click="goPage(post.id)"
        ></PostItem>
      </div>
    </div>
    <hr class="my-4" />
    <AppCard>
      <!-- 형식만 맞춰놓은 것임 -->
      <PostDetailView :id="1"></PostDetailView>
    </AppCard>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { getPosts } from '@/api/posts.js';
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from './PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';

const router = useRouter();
const posts = ref([]);

const fetchPosts = () => {
  posts.value = getPosts();
};
fetchPosts();
const goPage = id => {
  // router.push(`/posts/${id}`);
  // query / hash 들어가면
  // https://localhost:5173/posts/2?searchText=hello#world!
  router.push({
    name: 'PostDetail',
    params: {
      id,
    },
    // query: {
    //   searchText: 'hello',
    // },
    // hash: '#world!',
  });
};
</script>

<style lang="scss" scoped></style>
