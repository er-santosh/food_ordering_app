<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";

const props = defineProps({
  username: {
    type: String,
    default: null,
  },
  api: {
    type: String,
    default: "api/avataaars",
  },
});

const store = useStore();

const lightBgStyle = computed(() => store.state.lightBgStyle);

const avatar = computed(() =>
  props.username
    ? `https://avatars.dicebear.com/${props.api}/${props.username.replace(
        /[^a-z0-9]+/i,
        "-"
      )}.svg`
    : usePage().props.value.user?.profile_photo_url
);

const name = computed(() =>
  props.username ? props.username : usePage().props.value.user?.name
);
</script>

<template>
  <div>
    <img
      :src="avatar"
      :alt="name"
      class="rounded-full block h-auto w-full max-w-full dark:bg-gray-800"
      :class="lightBgStyle"
    />
  </div>
</template>
