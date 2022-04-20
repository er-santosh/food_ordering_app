<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { mdiMinus, mdiPlus } from "@mdi/js";

import { Link } from "@inertiajs/inertia-vue3";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isSubmenuList: Boolean,
});

const emit = defineEmits(["menu-click"]);

const store = useStore();

const asideMenuItemStyle = computed(() => store.state.asideMenuItemStyle);

const asideMenuItemActiveStyle = computed(
  () => store.state.asideMenuItemActiveStyle
);

const asideMenuItemInactiveStyle = computed(
  () => store.state.asideMenuItemInactiveStyle
);

const asideSubmenuListStyle = computed(() => store.state.asideSubmenuListStyle);

const isDropdownActive = ref(false);

const componentIs = computed(() => (props.item.route ? Link : "a"));
const hasDropdown = computed(() => !!props.item.menu);

const dropdownIcon = computed(() =>
  isDropdownActive.value ? mdiMinus : mdiPlus
);
const activeInactiveStyle = computed(() =>
  props.item.route && route().current(props.item.route)
    ? asideMenuItemActiveStyle.value
    : asideMenuItemInactiveStyle.value
);
const itemHref = computed(() =>
  props.item.route ? route(props.item.route) : props.item.href
);
const itemTarget = computed(() =>
  props.item.target ? props.item.target : null
);
const menuClick = (event) => {
  emit("menu-click", event, props.item);

  if (hasDropdown.value) {
    isDropdownActive.value = !isDropdownActive.value;
  }
};
</script>

<template>
  <li>
    <component
      :is="componentIs"
      :href="itemHref"
      :target="itemTarget"
      class="flex cursor-pointer dark:hover:bg-gray-700/50"
      :class="[asideMenuItemStyle, isSubmenuList ? 'p-3 text-sm' : 'py-2']"
      @click="menuClick"
    >
      <icon
        v-if="item.icon"
        :path="item.icon"
        class="flex-none"
        :class="activeInactiveStyle"
        w="w-12"
      />
      <span class="grow" :class="activeInactiveStyle">{{ item.label }}</span>
      <icon
        v-if="hasDropdown"
        :path="dropdownIcon"
        class="flex-none"
        :class="activeInactiveStyle"
        w="w-12"
      />
    </component>
    <aside-menu-list
      v-if="hasDropdown"
      :menu="item.menu"
      :class="[
        asideSubmenuListStyle,
        isDropdownActive ? 'block dark:bg-gray-800/50' : 'hidden',
      ]"
      is-submenu-list
    />
  </li>
</template>
