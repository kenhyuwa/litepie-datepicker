<template>
  <div
    class="grid grid-cols-7 py-2 mt-0.5 border-b border-black/[.1] dark:border-litepie-secondary-700/[1]"
  >
    <div
      v-for="(day, keyDay) in weekReorder(weeks, startWeek)"
      :key="keyDay"
      class="text-litepie-secondary-500 text-xs 2xl:text-sm tracking-wide font-medium text-center cursor-default dark:text-litepie-secondary-400"
    >
      <span v-text="day"> </span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LitepieWeek',
  props: {
    weeks: Array,
    startWeek: {
      type: Number,
      default: 0,
    },
  },
  inheritAttrs: false,
  methods: {
    weekReorder(weeks, startWeek) {
      return weeks.slice(startWeek).concat(weeks.slice(0, startWeek));
    },
  },
});
</script>
