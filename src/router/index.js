import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import About from "../views/AboutView.vue";
import EventDetails from "../views/EventDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "EventList",
      component: EventList,
    },
    {
      path: "/event/:id",
      name: "EventDetails",
      props: true,
      component: EventDetails,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});

export default router;
