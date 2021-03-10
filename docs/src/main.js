import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import LitepieDatepicker from 'litepie-datepicker';
import VPrims from './prims';

import 'tailwindcss/tailwind.css';
import './styles.css';

const app = createApp(App);

app.use(LitepieDatepicker);
app.component('v-prims', VPrims);
app.use(
  createRouter({
    history: createWebHistory(),
    routes: [{ path: '/', component: App }],
    scrollBehavior(to, from, savedPosition) {
      if (to.hash && document.getElementById(to.hash.replace('#', ''))) {
        return document
          .getElementById(to.hash.replace('#', ''))
          .scrollIntoView();
      } else if (savedPosition) {
        return savedPosition;
      } else {
        return document.getElementById('app').scrollIntoView();
      }
    }
  })
);
app.mount('#app');
