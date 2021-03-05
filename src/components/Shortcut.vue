<template>
  <div
    v-if="asRange && !asSingle"
    class="relative w-full border-t sm:border-t-0 sm:border-r border-black border-opacity-10 order-last sm:order-none dark:border-litepie-secondary-700 dark:border-opacity-100 sm:mt-1 sm:mr-1"
  >
    <ol
      v-if="withShortcut()"
      class="grid grid-cols-2 gap-1 sm:block w-full pr-0 sm:pr-1 mt-1.5 sm:mt-0"
    >
      <li v-for="(item, i) in withShortcut()" :key="i">
        <a
          href="#"
          class="block text-xs 2xl:text-sm px-2 py-1.5 whitespace-nowrap font-medium rounded text-litepie-primary-600 hover:text-litepie-primary-700 transition-colors hover:bg-litepie-secondary-100 focus:bg-litepie-secondary-100 focus:text-litepie-primary-600 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-primary-300 dark:text-litepie-primary-400 dark:focus:bg-litepie-secondary-700 dark:focus:text-litepie-primary-300"
          @click.prevent="setToCustomShortcut(item)"
          v-text="item.label"
        >
        </a>
      </li>
    </ol>
    <ol
      v-else
      class="grid grid-cols-2 gap-1 sm:block w-full pr-0 sm:pr-1 mt-1.5 sm:mt-0"
    >
      <li>
        <a
          href="#"
          class="block text-xs 2xl:text-sm px-2 py-1.5 whitespace-nowrap font-medium rounded text-litepie-primary-600 hover:text-litepie-primary-700 transition-colors hover:bg-litepie-secondary-100 focus:bg-litepie-secondary-100 focus:text-litepie-primary-600 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-primary-300 dark:text-litepie-primary-400 dark:focus:bg-litepie-secondary-700 dark:focus:text-litepie-primary-300"
          @click.prevent="setToToday"
        >
          Today
        </a>
      </li>
      <li>
        <a
          href="#"
          class="block text-xs 2xl:text-sm px-2 py-1.5 whitespace-nowrap font-medium rounded text-litepie-primary-600 hover:text-litepie-primary-700 transition-colors hover:bg-litepie-secondary-100 focus:bg-litepie-secondary-100 focus:text-litepie-primary-600 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-primary-300 dark:text-litepie-primary-400 dark:focus:bg-litepie-secondary-700 dark:focus:text-litepie-primary-300"
          @click.prevent="setToYesterday"
        >
          Yesterday
        </a>
      </li>
      <li>
        <a
          href="#"
          class="block text-xs 2xl:text-sm px-2 py-1.5 whitespace-nowrap font-medium rounded text-litepie-primary-600 hover:text-litepie-primary-700 transition-colors hover:bg-litepie-secondary-100 focus:bg-litepie-secondary-100 focus:text-litepie-primary-600 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-primary-300 dark:text-litepie-primary-400 dark:focus:bg-litepie-secondary-700 dark:focus:text-litepie-primary-300"
          @click.prevent="setToLastDay(7)"
        >
          Last 7 Days
        </a>
      </li>
      <li>
        <a
          href="#"
          class="block text-xs 2xl:text-sm px-2 py-1.5 whitespace-nowrap font-medium rounded text-litepie-primary-600 hover:text-litepie-primary-700 transition-colors hover:bg-litepie-secondary-100 focus:bg-litepie-secondary-100 focus:text-litepie-primary-600 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-primary-300 dark:text-litepie-primary-400 dark:focus:bg-litepie-secondary-700 dark:focus:text-litepie-primary-300"
          @click.prevent="setToLastDay(30)"
        >
          Last 30 Days
        </a>
      </li>
      <li>
        <a
          href="#"
          class="block text-xs 2xl:text-sm px-2 py-1.5 whitespace-nowrap font-medium rounded text-litepie-primary-600 hover:text-litepie-primary-700 transition-colors hover:bg-litepie-secondary-100 focus:bg-litepie-secondary-100 focus:text-litepie-primary-600 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-primary-300 dark:text-litepie-primary-400 dark:focus:bg-litepie-secondary-700 dark:focus:text-litepie-primary-300"
          @click.prevent="setToThisMonth"
        >
          This Month
        </a>
      </li>
      <li>
        <a
          href="#"
          class="block text-xs 2xl:text-sm px-2 py-1.5 whitespace-nowrap font-medium rounded text-litepie-primary-600 hover:text-litepie-primary-700 transition-colors hover:bg-litepie-secondary-100 focus:bg-litepie-secondary-100 focus:text-litepie-primary-600 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-primary-300 dark:text-litepie-primary-400 dark:focus:bg-litepie-secondary-700 dark:focus:text-litepie-primary-300"
          @click.prevent="setToLastMonth"
        >
          Last Month
        </a>
      </li>
    </ol>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'LitepieShortcut',
  props: {
    shortcuts: [Boolean, Function],
    asRange: Boolean,
    asSingle: Boolean
  },
  inheritAttrs: false,
  setup(props) {
    const setToToday = inject('setToToday');
    const setToYesterday = inject('setToYesterday');
    const setToLastDay = inject('setToLastDay');
    const setToThisMonth = inject('setToThisMonth');
    const setToLastMonth = inject('setToLastMonth');
    const setToCustomShortcut = inject('setToCustomShortcut');
    const withShortcut = () => {
      if (typeof props.shortcuts === 'function') {
        return props.shortcuts();
      } else {
        return false;
      }
    };

    return {
      setToToday,
      setToYesterday,
      setToLastDay,
      setToThisMonth,
      setToLastMonth,
      setToCustomShortcut,
      withShortcut
    };
  }
};
</script>
