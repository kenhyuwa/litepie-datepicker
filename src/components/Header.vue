<template>
  <div
    class="flex justify-between items-center px-2 py-1.5 rounded-md border border-black/[.1] dark:border-litepie-secondary-700/[1]"
  >
    <div class="flex-shrink-0">
      <span
        v-show="panel.calendar || panel.year"
        class="inline-flex rounded-full"
      >
        <button
          type="button"
          class="p-1.5 rounded-full bg-white text-litepie-secondary-600 transition-colors border border-transparent hover:bg-litepie-secondary-100 hover:text-litepie-secondary-900 focus:bg-litepie-primary-50 focus:text-litepie-secondary-900 focus:border-litepie-primary-300 focus:ring focus:ring-litepie-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-litepie-secondary-800 dark:text-litepie-secondary-300 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-secondary-300 dark:focus:bg-litepie-secondary-600 dark:focus:text-litepie-secondary-100 dark:focus:border-litepie-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50"
          @click="
            panel.calendar ? calendar.onPrevious() : calendar.onPreviousYear()
          "
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              :d="
                panel.calendar
                  ? `M15 19l-7-7 7-7`
                  : `M11 19l-7-7 7-7m8 14l-7-7 7-7`
              "
            ></path>
          </svg>
        </button>
      </span>
    </div>
    <div class="px-1.5 space-x-1.5 flex flex-1">
      <span class="flex-1 flex rounded-md">
        <button
          type="button"
          class="px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-litepie-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-litepie-secondary-100 hover:text-litepie-secondary-900 focus:bg-litepie-primary-50 focus:text-litepie-secondary-900 focus:border-litepie-primary-300 focus:ring focus:ring-litepie-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-litepie-secondary-800 dark:text-litepie-secondary-300 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-secondary-300 dark:focus:bg-litepie-secondary-600 dark:focus:text-litepie-secondary-100 dark:focus:border-litepie-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50"
          v-text="calendar.month"
          @click="calendar.openMonth()"
        ></button>
      </span>
      <span class="flex-1 flex rounded-md">
        <button
          type="button"
          class="px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-litepie-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-litepie-secondary-100 hover:text-litepie-secondary-900 focus:bg-litepie-primary-50 focus:text-litepie-secondary-900 focus:border-litepie-primary-300 focus:ring focus:ring-litepie-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-litepie-secondary-800 dark:text-litepie-secondary-300 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-secondary-300 dark:focus:bg-litepie-secondary-600 dark:focus:text-litepie-secondary-100 dark:focus:border-litepie-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50"
          v-text="calendar.year"
          @click="calendar.openYear()"
        ></button>
      </span>
    </div>
    <div class="flex-shrink-0">
      <span
        v-show="panel.calendar || panel.year"
        class="inline-flex rounded-full"
      >
        <button
          type="button"
          class="p-1.5 rounded-full bg-white text-litepie-secondary-600 transition-colors border border-transparent hover:bg-litepie-secondary-100 hover:text-litepie-secondary-900 focus:bg-litepie-primary-50 focus:text-litepie-secondary-900 focus:border-litepie-primary-300 focus:ring focus:ring-litepie-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-litepie-secondary-800 dark:text-litepie-secondary-300 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-secondary-300 dark:focus:bg-litepie-secondary-600 dark:focus:text-litepie-secondary-100 dark:focus:border-litepie-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50"
          @click="panel.calendar ? calendar.onNext() : calendar.onNextYear()"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              :d="panel.calendar ? `M9 5l7 7-7 7` : `M13 5l7 7-7 7M5 5l7 7-7 7`"
            ></path>
          </svg>
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LitepieHeader',
  props: {
    asPrevOrNext: Boolean,
    panel: Object,
    calendar: Object
  },
  inheritAttrs: false
});
</script>
