<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import sidebar_menu from "@/sidebar_menu.js";
import { usePage } from "@inertiajs/inertia-vue3";

const menuType = usePage().props.value.user?.user_type;
const menu = sidebar_menu[menuType];

const store = useStore();
store.dispatch("fullScreenToggle", false);
store.dispatch("darkMode", true);
store.commit("user", {
  name: "John Doe",
  email: "john@example.com",
  avatar:
    "https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93",
});

const isAsideLgActive = computed(() => store.state.isAsideLgActive);

const overlayClick = () => {
  store.dispatch("asideLgToggle", false);
};
</script>

<template>
  <nav-bar />
  <aside-menu :menu="menu" />
  <slot />
  <footer-bar />
  <overlay
    v-show="isAsideLgActive"
    z-index="z-30"
    @overlay-click="overlayClick"
  />
</template>
