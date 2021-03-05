<template>
  <div
    class="flex flex-wrap"
  >
    <div v-for="(year, key) in years" :key="key" class="w-1/2 px-0.5">
      <span class="flex rounded-md mt-1.5">
        <button
          type="button"
          class="px-3 py-1.5 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-litepie-secondary-600 font-medium transition-colors border border-transparent hover:bg-litepie-secondary-100 hover:text-litepie-secondary-900 focus:bg-litepie-primary-50 focus:text-litepie-secondary-900 focus:border-litepie-primary-300 focus:ring focus:ring-litepie-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-litepie-secondary-700 dark:text-litepie-secondary-300 dark:hover:bg-litepie-secondary-600 dark:hover:text-litepie-secondary-300 dark:focus:bg-litepie-secondary-600 dark:focus:text-litepie-secondary-100 dark:focus:border-litepie-primary-500 dark:focus:ring-opacity-25"
          v-text="year"
          @click="$emit('update:year', year, asPrevOrNext)"
        ></button>
      </span>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'LitepieYear',
  props: {
    asPrevOrNext: Boolean,
    years: Array
  },
  inheritAttrs: false,
  emits: ['update:year']
};
</script>
