import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import PostsIndex from "../views/PostsIndex.vue";
import PostsNew from "../views/PostsNew.vue";
import PostsShow from "../views/PostsShow.vue";
import PostsEdit from "../views/PostsEdit.vue";
Vue.use(VueRouter);
const routes = [
  { path: "/", name: "home", component: Home },
  { path: '/posts', name: 'posts-index', component: PostsIndex},
  { path: '/posts/new', name: 'posts-new', component: PostsShow},
  { path: '/posts/:id', name: 'posts-show', component: PostsShow},
  { path: '/posts/:id/edit', name: 'posts-edit', component: PostsEdit},
  { path: "/about", name: "about", component: About },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },



];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

});
export default router;