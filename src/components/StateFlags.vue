<script setup>
import { computed } from "vue";

const props = defineProps({
  verbose: Boolean,
  flags: {
    type: Array,
    default: () => [],
  },
});

const visibleFlags = computed(() => {
  return props.verbose
    ? props.flags
    : props.flags.filter((flag) => flag.active);
});
</script>

<template>
  <div class="box">
    <div class="box-header">State flags:</div>
    <div class="box-body">
      <ul class="flags">
        <li v-for="flag in visibleFlags" :key="flag.name">
          <Icon
            :icon="flag.active ? 'mdi:check-circle' : 'mdi:close-circle'"
            :class="['flag-icon', flag.active ? 'green' : 'red']"
            min-width="18"
            min-height="18"
          />
          {{ flag.description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.flags {
  list-style: none;
  padding-left: 0;
  font-size: 14px;
  margin: 0;
  column-count: 1;
  column-gap: 20px;
}

/* More than 3 children */
.flags:has(li:nth-child(4)) {
  column-count: 3;
}

li {
  break-inside: avoid;
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.dot {
  font-size: 14px;
  margin-right: 8px;
}



.flag-icon {
  font-size: 18px;
  flex-shrink: 0;
  line-height: 1.5;
}
</style>
