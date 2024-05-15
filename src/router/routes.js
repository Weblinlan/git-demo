import Home from "../views/home.vue"; //首页

import mine from "../views/mine.vue";
import found from "../views/found.vue";
import stat from "../views/stat.vue";
import Singing from "../views/SingingListDetails.vue";
import search from "@/views/search.vue";
import foo from "@/views/foo.vue";
import mv from "@/views/mv.vue";
import PlayerHome from "@/views/PlayerHome.vue";
import playmv from "@/views/playmv.vue";
import login from "../views/login.vue";
import me from "@/views/me.vue";
export default [
  { path: "/Home", component: Home },
  { path: "/search", component: search },
  { path: "/mv", name: "mv", component: mv },
  { path: `/playmv/:id`, name: "playmv", component: playmv },
  // { path: "/", component: foo },
  { path: "/Singing/:id", component: Singing },
  { path: "/PlayerHome/:id/:singid", component: PlayerHome },
  { path: "/login", component: login },
  { path: "/me", component: me },
  // { path: "/login", component: login },
  // { path: "/", component: stat },
];
