<template>
  <slot />
</template>
<script setup>
import { useStore } from "vuex";

const store = useStore();
store.dispatch("fullScreenToggle", true);
store.dispatch("darkMode", true);
</script>
