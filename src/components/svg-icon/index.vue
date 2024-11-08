<script setup>
import { computed } from "vue";
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  prefix: {
    type: String,
    default: "icon",
  },
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<template>
  <svg aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>