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
    // หน้าโปรแกรม 
  },
  {
    path: "/acti",
    name: "Acti",
    component: Acti,
    // หน้ากิจกรรม 
  },
  {
    path: "/tel",
    name: "Tel",
    component: Tel,
    // หน้าติดต่อ
  },
  {
    path: "/run",
    name: "Run",
    component: Run,
    // หน้าตารางวิ่ง
  },
  {
    path: "/funrun",
    name: "funrun",
    component: funrun,
    // หน้าวิ่งฟันรัน
  },
  {
    path: "/minirun",
    name: "minirun",
    component: minirun,
    // หน้าวิ่งมินิรัน
  },
  {
    path: "/halfrun",
    name: "halfrun",
    component: halfrun,
    // หน้าฮาฟรัน
  },
  {
    path: "/fullrun",
    name: "fullrun",
    component: fullrun,
    // หน้ามาราธอน
  },
  {
    path: "/bmi",
    name: "bmi",
    component: bmi,
    // หน้าวัด bmi
  },
  {
    path: "/cadio",
    name: "Cadio",
    component: Cadio,
    // หน้าคาดิโอ
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
