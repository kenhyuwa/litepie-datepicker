<template>
  <div
    v-if="asRange && !asSingle"
    class="relative order-last w-full border-t border-b-0 border-black sm:border-t-0 sm:border-b lg:border-b-0 lg:border-e border-opacity-10 sm:order-none dark:border-litepie-secondary-700 dark:border-opacity-100 sm:mt-1 lg:me-1 sm:mb-1 lg:mb-0 sm:mx-1 lg:mx-0"
  >
    <ol
      v-if="withShortcut()"
      class="grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pe-0 sm:pe-1 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
    >
      <li v-for="(item, i) in withShortcut()" :key="i">
        <a
          href="#"
          class="block px-2 py-2 text-sm font-medium transition-colors rounded litepie-shortcuts lg:text-xs sm:leading-4 whitespace-nowrap text-litepie-primary-600 hover:text-litepie-primary-700 hover:bg-litepie-secondary-100 focus:bg-litepie-secondary-100 focus:text-litepie-primary-600 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-primary-300 dark:text-litepie-primary-400 dark:focus:bg-litepie-secondary-700 dark:focus:text-litepie-primary-300"
          @click.prevent="setToCustomShortcut(item)"
          v-text="item.label"
        >
        </a>
      </li>
    </ol>
    <ol
      v-else
      class="grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pe-0 sm:pe-1 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
    >
      <li>
        <a
          href="#"
          class="block px-2 py-2 text-sm font-medium transition-colors rounded litepie-shortcuts lg:text-xs sm:leading-4 whitespace-nowrap text-litepie-primary-600 hover:text-litepie-primary-700 hover:bg-litepie-secondary-100 focus:bg-litepie-secondary-100 focus:text-litepie-primary-600 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-primary-300 dark:text-litepie-primary-400 dark:focus:bg-litepie-secondary-700 dark:focus:text-litepie-primary-300"
          @click.prevent="setToToday"
        >
          {{ i18n.today }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="block px-2 py-2 text-sm font-medium transition-colors rounded litepie-shortcuts lg:text-xs sm:leading-4 whitespace-nowrap text-litepie-primary-600 hover:text-litepie-primary-700 hover:bg-litepie-secondary-100 focus:bg-litepie-secondary-100 focus:text-litepie-primary-600 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-primary-300 dark:text-litepie-primary-400 dark:focus:bg-litepie-secondary-700 dark:focus:text-litepie-primary-300"
          @click.prevent="setToYesterday"
        >
          {{ i18n.yesterday }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="block px-2 py-2 text-sm font-medium transition-colors rounded litepie-shortcuts lg:text-xs sm:leading-4 whitespace-nowrap text-litepie-primary-600 hover:text-litepie-primary-700 hover:bg-litepie-secondary-100 focus:bg-litepie-secondary-100 focus:text-litepie-primary-600 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-primary-300 dark:text-litepie-primary-400 dark:focus:bg-litepie-secondary-700 dark:focus:text-litepie-primary-300"
          @click.prevent="setToLastDay(7)"
        >
          {{ i18n.past(7) }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="block px-2 py-2 text-sm font-medium transition-colors rounded litepie-shortcuts lg:text-xs sm:leading-4 whitespace-nowrap text-litepie-primary-600 hover:text-litepie-primary-700 hover:bg-litepie-secondary-100 focus:bg-litepie-secondary-100 focus:text-litepie-primary-600 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-primary-300 dark:text-litepie-primary-400 dark:focus:bg-litepie-secondary-700 dark:focus:text-litepie-primary-300"
          @click.prevent="setToLastDay(30)"
        >
          {{ i18n.past(30) }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="block px-2 py-2 text-sm font-medium transition-colors rounded litepie-shortcuts lg:text-xs sm:leading-4 whitespace-nowrap text-litepie-primary-600 hover:text-litepie-primary-700 hover:bg-litepie-secondary-100 focus:bg-litepie-secondary-100 focus:text-litepie-primary-600 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-primary-300 dark:text-litepie-primary-400 dark:focus:bg-litepie-secondary-700 dark:focus:text-litepie-primary-300"
          @click.prevent="setToThisMonth"
        >
          {{ i18n.currentMonth }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="block px-2 py-2 text-sm font-medium transition-colors rounded litepie-shortcuts lg:text-xs sm:leading-4 whitespace-nowrap text-litepie-primary-600 hover:text-litepie-primary-700 hover:bg-litepie-secondary-100 focus:bg-litepie-secondary-100 focus:text-litepie-primary-600 dark:hover:bg-litepie-secondary-700 dark:hover:text-litepie-primary-300 dark:text-litepie-primary-400 dark:focus:bg-litepie-secondary-700 dark:focus:text-litepie-primary-300"
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
