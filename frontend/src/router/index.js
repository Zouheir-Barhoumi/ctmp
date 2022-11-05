import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/SignupView.vue";
import ListsView from "../views/ListsView.vue";
import TeamsView from "../views/TeamsView";
import ProjectsView from "../views/ProjectsView";
import ProfileView from "../views/ProfileView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/lists",
    name: "lists",
    component: ListsView,
  },
  {
    path: "/teams",
    name: "teams",
    component: TeamsView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
