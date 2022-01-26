<template>
  <div
    v-if="asRange && !asSingle"
    class="relative w-full border-t border-b-0 sm:border-t-0 sm:border-b lg:border-b-0 lg:border-r border-black/[.1] order-last sm:order-none dark:border-litepie-secondary-700/[1] sm:mt-1 lg:mr-1 sm:mb-1 lg:mb-0 sm:mx-1 lg:mx-0"
  >
    <ol
      v-if="withShortcut()"
      class="grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-0 sm:pr-1 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
    >
      <li v-for="(item, i) in withShortcut()" :key="i">
        <a
          href="#"
          class="litepie-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-litepie-primary-600 hover:text-litepie-primary-700 transition-colors hover:bg-litepie-secondary-100 focus:bg-litepie-secondary-100 focus:text-litepie-primary-600 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-primary-300 dark:text-litepie-primary-400 dark:focus:bg-litepie-secondary-700 dark:focus:text-litepie-primary-300"
          @click.prevent="setToCustomShortcut(item)"
          v-text="item.label"
        >
        </a>
      </li>
    </ol>
    <ol
      v-else
      class="grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-0 sm:pr-1 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
    >
      <li>
        <a
          href="#"
          class="litepie-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-litepie-primary-600 hover:text-litepie-primary-700 transition-colors hover:bg-litepie-secondary-100 focus:bg-litepie-secondary-100 focus:text-litepie-primary-600 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-primary-300 dark:text-litepie-primary-400 dark:focus:bg-litepie-secondary-700 dark:focus:text-litepie-primary-300"
          @click.prevent="setToToday"
        >
          {{ i18n.today }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="litepie-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-litepie-primary-600 hover:text-litepie-primary-700 transition-colors hover:bg-litepie-secondary-100 focus:bg-litepie-secondary-100 focus:text-litepie-primary-600 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-primary-300 dark:text-litepie-primary-400 dark:focus:bg-litepie-secondary-700 dark:focus:text-litepie-primary-300"
          @click.prevent="setToYesterday"
        >
          {{ i18n.yesterday }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="litepie-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-litepie-primary-600 hover:text-litepie-primary-700 transition-colors hover:bg-litepie-secondary-100 focus:bg-litepie-secondary-100 focus:text-litepie-primary-600 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-primary-300 dark:text-litepie-primary-400 dark:focus:bg-litepie-secondary-700 dark:focus:text-litepie-primary-300"
          @click.prevent="setToLastDay(7)"
        >
          {{ i18n.past(7) }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="litepie-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-litepie-primary-600 hover:text-litepie-primary-700 transition-colors hover:bg-litepie-secondary-100 focus:bg-litepie-secondary-100 focus:text-litepie-primary-600 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-primary-300 dark:text-litepie-primary-400 dark:focus:bg-litepie-secondary-700 dark:focus:text-litepie-primary-300"
          @click.prevent="setToLastDay(30)"
        >
          {{ i18n.past(30) }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="litepie-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-litepie-primary-600 hover:text-litepie-primary-700 transition-colors hover:bg-litepie-secondary-100 focus:bg-litepie-secondary-100 focus:text-litepie-primary-600 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-primary-300 dark:text-litepie-primary-400 dark:focus:bg-litepie-secondary-700 dark:focus:text-litepie-primary-300"
          @click.prevent="setToThisMonth"
        >
          {{ i18n.currentMonth }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="litepie-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-litepie-primary-600 hover:text-litepie-primary-700 transition-colors hover:bg-litepie-secondary-100 focus:bg-litepie-secondary-100 focus:text-litepie-primary-600 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-primary-300 dark:text-litepie-primary-400 dark:focus:bg-litepie-secondary-700 dark:focus:text-litepie-primary-300"
          @click.prevent="setToLastMonth"
        >
          {{ i18n.pastMonth }}
        </a>
      </li>
    </ol>
  </div>
</template>

<script>
import { defineComponent, inject } from 'vue';

export default defineComponent({
  name: 'LitepieShortcut',
  props: {
    shortcuts: [Boolean, Function],
    asRange: Boolean,
    asSingle: Boolean,
    i18n: Object
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
});
</script>
