import {
  createRouter,
  // createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/posts',
    name: 'PostList',
    component: PostListView,
  },
  {
    path: '/posts/create',
    name: 'PostCreate',
    component: PostCreateView,
  },
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: PostDetailView,
    // props: true,
    // props: route => {
    // return {
    //   id: parseInt(route.params.id),
    // };
    // },
    props: route => ({
      id: parseInt(route.params.id),
    }),
  },
  {
    path: '/posts/:id/edit',
    name: 'PostEdit',
    component: PostEditView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },
  {
    path: '/nested',
    name: 'Nested',
    component: NestedView,
    children: [
      {
        path: '',
        name: 'NestedHome',
        component: NestedHomeView,
      },
      {
        path: 'one',
        name: 'NestedOne',
        component: NestedOneView,
      },
      {
        path: 'two',
        name: 'NestedTwo',
        component: NestedTwoView,
      },
    ],
  },
];

const router = createRouter({
  /**
   * vue3는 SPA 기반의 프레임워크 => 자바스크립트로 UI 실행 => 페이지 로딩 없이 빠르게 UI 보여줌(리로딩x)
   * SSR(Server Side Rendering) vs CSR(Client Side Rendering)
   * SSR : 리로딩 일어남 => 페이지 요청 시 서버에서 리소스 제공(UI 보여줄 HTML 태그를 서버에서 만들어서 내려줌)
   * CSR : 자바스크립트 코드를 이용하여 HTML 생성해서 사용자에게 보여줌.
   *
   * History Mode vs Hash Mode
   * => 둘의 차이 : URI에 #이 붙냐 안붙냐의 차이
   * History Mode: 전체 경로를 포함해서 리소스 요청.
   * 대부분의 서버는 루트로만 요청 시 index.html 파일을 돌려줌. => 경로에 index.html 파일이 없으면 404.
   * => 서버에 따라 추가 설정 필요.
   * Hash Mode: 해쉬 뒤의 URI는 보내지 않는다. 도메인만 가지고 요청.
   * 서버의 요청을 루트로만 보내므로 서버 추가 설정 없이 바로 배포 후 사용 가능.
   * => 대부분 해쉬는 홈페이지를 찾는것이 아니라 홈페이지 내에서 스크롤하기 힘든 부분을 찾아가기 위해 사용.
   *    따라서 검색 엔진은 해쉬를 하나의 페이지로 인식하지 못하는 경우가 많음. 결국 최적화(SEO)에 나쁜 영향.
   */
  history: createWebHistory('/'), // 히스토리 모드로 동작
  // history: createWebHashHistory(), // 해쉬 모드로 동작
  routes,
});

export default router;
