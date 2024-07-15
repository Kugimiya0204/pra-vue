import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeVue.vue';
import PraVue1 from '../views/PraVue1.vue';
import PraVue2 from '../views/PraVue2.vue';
import PraVue3 from '../views/PraVue3.vue';
import PraVue4 from '../views/PraVue4.vue';
import PraVue5 from '../views/PraVue5.vue';
import PraVue6 from '../views/PraVue6.vue';
import PraVue7 from '../views/PraVue7.vue';
import PraVue8 from '../views/PraVue8.vue';
import PraVue9 from '../views/PraVue9.vue';
import PraVue10 from '../views/PraVue10.vue';
import PraVue11 from '../views/PraVue11.vue';
import PraVue12 from '../views/PraVue12.vue';
import PraVue13 from '../views/PraVue13.vue';
import PraVue14 from '../views/PraVue14.vue';
import PraVue15 from '../views/PraVue15.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/PraVue1',
      name: 'PraVue1',
      component: PraVue1
    },
    {
      path: '/PraVue2',
      name: 'PraVue2',
      component: PraVue2
    },
    {
      path: '/PraVue3',
      name: 'PraVue3',
      component: PraVue3
    },
    {
      path: '/PraVue4',
      name: 'PraVue4',
      component: PraVue4
    },
    {
      path: '/PraVue5',
      name: 'PraVue5',
      component: PraVue5
    },
    {
      path: '/PraVue6',
      name: 'PraVue6',
      component: PraVue6
    },
    {
      path: '/PraVue7',
      name: 'PraVue7',
      component: PraVue7
    },
    {
      path: '/PraVue8',
      name: 'PraVue8',
      component: PraVue8
    },
    {
      path: '/PraVue9',
      name: 'PraVue9',
      component: PraVue9
    },
    {
      path: '/PraVue10',
      name: 'PraVue10',
      component: PraVue10
    },
    {
      path: '/PraVue11',
      name: 'PraVue11',
      component: PraVue11
    },
    {
      path: '/PraVue12',
      name: 'PraVue12',
      component: PraVue12
    },
    {
      path: '/PraVue13',
      name: 'PraVue13',
      component: PraVue13
    },
    {
      path: '/PraVue14',
      name: 'PraVue14',
      component: PraVue14
    },
    {
      path: '/PraVue15',
      name: 'PraVue15',
      component: PraVue15
    }
  ]
});

export default router;
