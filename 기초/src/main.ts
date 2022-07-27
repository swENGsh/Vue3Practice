import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from '@/App.vue';
// import AppCard from '@/components/AppCard.vue';

// import './assets/main.css';

// 컴포넌트 전역 등록
const app = createApp(App);
// 전역 등록 시 문제점 : 종속관계 파악에 어렵고 빌드 시 무거워짐.

// app.component('AppCard', AppCard);
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
