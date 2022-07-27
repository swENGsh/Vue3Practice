import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from '@/App.vue';
// import AppCard from '@/components/AppCard.vue';

// import './assets/main.css';

// 컴포넌트 전역 등록
const app = createApp(App);
// 전역 등록 시 문제점 : 종속관계 파악에 어렵고 빌드 시 무거워짐.

// app.component('AppCard', AppCard);
// inject를 이용하여 전역에서 사용할 수 있음.
app.provide('app-message', 'app message 입니다.');
// vue2: globalProperties => 모든 컴포넌트에서 접근하고 싶은 라이브러리와 같은 객체를 추가하고 싶을 때 사용.
app.config.globalProperties.msg = 'hello';
// vue3에서는 setup함수가 component instance 생성 이전이기 때문에 provide를 이용해야함.
// => 모든 컴포넌트에서 사용하는 라이브러리가 있다면 provide / inject 이용하면 좋다.
app.provide('msg', 'hello msg');
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
