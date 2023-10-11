import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import Program from '../components/Program.vue'
import Acti from '../components/Acti.vue'
import Tel from '../components/Tel.vue'
import Run from '../components/Run.vue'
import Cadio from '../components/Cadio.vue'
import funrun from '../components/funrun.vue'
import minirun from '../components/minirun.vue'
import halfrun from '../components/halfrun.vue'
import fullrun from '../components/fullrun.vue'
import bmi from '../components/bmi.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    // หน้าหลัก เวลาเปิดเว็บ ขึ้นมา
  },
  
  {
    path: "/Program",
    name: "Program",
    component: Program,
    // หน้าหลัก เวลาเปิดเว็บ ขึ้นมา
  },
  {
    path: "/acti",
    name: "Acti",
    component: Acti,
    // หน้าหลัก เวลาเปิดเว็บ ขึ้นมา
  },
  {
    path: "/tel",
    name: "Tel",
    component: Tel,
    // หน้าหลัก เวลาเปิดเว็บ ขึ้นมา
  },
  {
    path: "/run",
    name: "Run",
    component: Run,
    // หน้าหลัก เวลาเปิดเว็บ ขึ้นมา
  },
  {
    path: "/funrun",
    name: "funrun",
    component: funrun,
    // หน้าหลัก เวลาเปิดเว็บ ขึ้นมา
  },
  {
    path: "/minirun",
    name: "minirun",
    component: minirun,
    // หน้าหลัก เวลาเปิดเว็บ ขึ้นมา
  },
  {
    path: "/halfrun",
    name: "halfrun",
    component: halfrun,
    // หน้าหลัก เวลาเปิดเว็บ ขึ้นมา
  },
  {
    path: "/fullrun",
    name: "fullrun",
    component: fullrun,
    // หน้าหลัก เวลาเปิดเว็บ ขึ้นมา
  },
  {
    path: "/bmi",
    name: "bmi",
    component: bmi,
    // หน้าหลัก เวลาเปิดเว็บ ขึ้นมา
  },
  {
    path: "/cadio",
    name: "Cadio",
    component: Cadio,
    // หน้าหลัก เวลาเปิดเว็บ ขึ้นมา
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
