<template>
  <div class="grid grid-cols-7 gap-y-0.5 my-1">
    <transition-group
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      enter-active-class="transition-opacity ease-out duration-300"
      leave-active-class="transition-opacity ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-for="(date, keyDate) in calendar.date()"
        :key="keyDate"
        class="relative"
        :class="{ 'litepie-tooltip': asRange && date.duration() }"
        :data-tooltip="`${date.duration()}`"
      >
        <transition
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          enter-active-class="transition-opacity ease-out duration-200"
          leave-active-class="transition-opacity ease-in duration-150"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <span
            v-if="isBetweenRange(date) || date.hovered()"
            class="absolute bg-litepie-primary-100 bg-opacity-60 dark:bg-litepie-secondary-700 dark:bg-opacity-50"
            :class="betweenRangeClasses(date)"
          ></span>
        </transition>
        <button
          type="button"
          class="litepie-datepicker-date relative w-12 h-12 lg:w-10 lg:h-10 flex justify-center items-center text-xs 2xl:text-sm focus:outline-none"
          :class="[
            datepickerClasses(date),
            asRange ? 'transition-all' : 'transition-colors'
          ]"
          :disabled="date.disabled || date.inRange()"
          @click="$emit('update:date', date, asPrevOrNext)"
          @mouseenter="atMouseOver(date)"
          @focusin="atMouseOver(date)"
          v-text="date.date()"
          :data-date="date.toDate()"
        ></button>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { defineComponent, inject } from 'vue';

export default defineComponent({
  name: 'LitepieCalendar',
  props: {
    asPrevOrNext: Boolean,
    calendar: Object,
    weeks: Array,
    asRange: Boolean
  },
  inheritAttrs: false,
  emits: ['update:date'],
  setup() {
    const isBetweenRange = inject('isBetweenRange');
    const betweenRangeClasses = inject('betweenRangeClasses');
    const datepickerClasses = inject('datepickerClasses');
    const atMouseOver = inject('atMouseOver');

    return {
      isBetweenRange,
      betweenRangeClasses,
      datepickerClasses,
      atMouseOver
    };
  }
});
</script>

<!-- TODO: Tooltip implementasion-->
<!--<style lang="scss">-->
<!--.litepie-tooltip {-->
<!--  &#45;&#45;litepie-datepicker: 0px;-->
<!--  &:hover::before,-->
<!--  &:hover::after {-->
<!--    @apply block;-->
<!--  }-->
<!--  &::before {-->
<!--    content: attr(data-tooltip); /* here's the magic */-->
<!--    @apply absolute tracking-tight bottom-full text-xs hidden whitespace-nowrap px-1.5 py-1 rounded bg-litepie-secondary-700 text-white dark:bg-white dark:text-litepie-secondary-700;-->
<!--  }-->
<!--  &::after {-->
<!--    content: '';-->
<!--    @apply absolute left-2 top-0 w-3 h-3  shadow border border-black border-opacity-5 hidden bg-litepie-secondary-700 dark:bg-white;-->
<!--    transform: translate(50%, -50%) rotate(135deg);-->
<!--    clip-path: polygon(-->
<!--      calc(var(&#45;&#45;litepie-datepicker) * -1) calc(var(&#45;&#45;litepie-datepicker) * -1),-->
<!--      calc(100% + var(&#45;&#45;litepie-datepicker))-->
<!--        calc(var(&#45;&#45;litepie-datepicker) * -1),-->
<!--      calc(100% + var(&#45;&#45;litepie-datepicker))-->
<!--        calc(100% + var(&#45;&#45;litepie-datepicker))-->
<!--    );-->
<!--  }-->
<!--}-->
<!--</style>-->
