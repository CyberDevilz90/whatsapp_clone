import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const router = createRouter({
   // eslint-disable-next-line no-unused-vars
   scrollBehavior(__to, __from, __savedPosition) {
      return { top: 0 };
   },
   history: createWebHistory(process.env.BASE_URL),
   routes,
});
// eslint-disable-next-line
router.beforeEach(async (to, from, next) => {});

export default router;