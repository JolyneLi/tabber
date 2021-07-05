import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("../views/Home");
const Cate = () => import("../views/Cate");
const Profile = () => import("../views/Profile");
const Category = () => import("../views/Category");

const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/cate",
    component: Cate,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/category",
    component: Category,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
