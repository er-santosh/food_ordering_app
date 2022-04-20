<script setup>
import { computed, useSlots } from "vue";

defineProps({
  label: {
    type: String,
    default: null,
  },
  hasInlineLabel: {
    type: Boolean,
    default: false,
  },
  help: {
    type: String,
    default: null,
  },
  error: {
    type: Boolean,
    default: false,
  },
});

const slots = useSlots();

const wrapperClass = computed(() => {
  const base = [];
  const slotsLength = slots.default().length;

  if (slotsLength > 1) {
    base.push("grid grid-cols-1 gap-3");
  }

  if (slotsLength === 2) {
    base.push("md:grid-cols-2");
  }

  return base;
});
</script>

<template>
  <div class="mb-6 last:mb-0">
    <label
      v-if="label"
      class="font-bold mb-2"
      :class="hasInlineLabel ? 'flex items-center justify-between' : 'block'"
      >{{ label }} <slot name="inlineLabel"></slot
    ></label>
    <div :class="wrapperClass">
      <slot />
    </div>
    <div
      v-if="help"
      class="text-xs mt-1"
      :class="
        error
          ? 'text-red-500 dark:text-red-400'
          : 'text-gray-500 dark:text-gray-400'
      "
    >
      {{ help }}
    </div>
  </div>
</template>
