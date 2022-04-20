import store from "./store";

import { darkModeKey, styleKey } from "@/config.js";

import { createApp, h } from "vue";
import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";

const appName =
  window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

/* App style */
store.dispatch("setStyle", localStorage[styleKey] ?? "basic");

/* Dark mode */
if (
  (!localStorage[darkModeKey] &&
    window.matchMedia("(prefers-color-scheme: dark)").matches) ||
  localStorage[darkModeKey] === "1"
) {
  store.dispatch("darkMode", true);
}

//guest layout
import GuestLayout from "./Layouts/Guest";
//frontend layout
import AppLayout from "./Layouts/App";
//admn layout
import AdminLayout from "./Layouts/Admin";

//GLOBAL COMPONENTS
const components = { Head, Link };

const files = require.context("./Components", true, /[A-Z]\w+\.(vue)$/);

files.keys().map((key) => {
  //const name = _.last(key.split("/")).split(".")[0]; //without sub-folder name appended to the initial of component name e.g Test/Form.vue ----> Form
  const name = key.split("/").slice(1).join("").split(".")[0]; // with folder name appended e.g Test/Form.vue ----> TestForm
  Object.assign(components, { [name]: files(key).default });
});

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => {
    const page = require(`./Pages/${name}`).default;
    if (page.layout === undefined) {
      const startingWith = (folderStartsWith) =>
        name.startsWith(folderStartsWith);

      page.layout = startingWith("Auth/")
        ? GuestLayout
        : startingWith("Admin/")
        ? AdminLayout
        : AppLayout;
    }
    return page;
  },
  setup({ el, app, props, plugin }) {
    return createApp({ render: () => h(app, props) })
      .use(plugin)
      .use(store)
      .mixin({
        methods: { route },
        components: { ...components },
      })
      .mount(el);
  },
});

InertiaProgress.init({ color: "#4B5563" });
