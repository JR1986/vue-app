import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import About from "../views/AboutView.vue";
import EventDetails from "../views/event/Details.vue";
import EventRegister from "../views/event/Register.vue";
import EventEdit from "../views/event/Edit.vue";
import EventLayout from "../views/event/Layout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "EventList",
      component: EventList,
      props: route => ({page: parseInt(route.query.page) || 1})
    },
    {
      path: "/event/:id",
      name: "EventLayout",
      props: true,
      component: EventLayout,
      children: [
        {
          path: "",
          name: "EventDetails",
          component: EventDetails,
        },
        {
          path: "register",
          name: "EventRegister",
          component: EventRegister,
        },
        {
          path: "edit",
          name: "EventEdit",
          component: EventEdit,
        },
      ]
    },
    {
      path: "/about",
      name: "about",
      component: About,
      props: {showExtra: false}
    },
  ],
});

export default router;
