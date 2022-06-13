<template>
  <div
    id="litepie"
    ref="LitepieDatepickerRef"
    class="relative w-full"
    :class="[
      { 'litepie-datepicker-overlay': overlay },
      { open: isShow && overlay }
    ]"
    v-litepie:away="trigger"
  >
    <slot
      :value="pickerValue"
      :placeholder="givenPlaceholder"
      :clear="clearPicker"
    >
      <label class="relative block">
        <input
          ref="LitepieInputRef"
          type="text"
          class="relative block w-full pl-3 pr-12 py-2.5 rounded-lg overflow-hidden text-sm text-litepie-secondary-700 placeholder-litepie-secondary-400 transition-colors bg-white border border-litepie-secondary-300 focus:border-litepie-primary-300 focus:ring focus:ring-litepie-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-litepie-secondary-800 dark:border-litepie-secondary-700 dark:text-litepie-secondary-100 dark:placeholder-litepie-secondary-500 dark:focus:border-litepie-primary-500 dark:focus:ring-opacity-20"
          v-bind="$attrs"
          v-model="pickerValue"
          :placeholder="givenPlaceholder"
          @keyup="keyUp"
        />
        <span
          class="absolute inset-y-0 right-0 inline-flex items-center rounded-md overflow-hidden"
        >
          <button
            type="button"
            class="px-2 py-1 mr-1 focus:outline-none text-litepie-secondary-400 dark:text-opacity-70 rounded-md"
            @click="pickerValue ? clearPicker() : $refs.LitepieInputRef.focus()"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                v-if="pickerValue"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M6 18L18 6M6 6l12 12"
              ></path>
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </button>
        </span>
      </label>
    </slot>
    <transition
      enter-from-class="opacity-0 translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      enter-active-class="transform transition ease-out duration-200"
      leave-active-class="transform transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-3"
    >
      <div
        v-show="isShow"
        ref="LitepieRef"
        class="absolute z-50 top-full sm:mt-2.5"
        :class="placement ? 'left-0 right-auto' : 'left-auto right-0'"
      >
        <div
          class="fixed inset-0 z-50 overflow-y-auto sm:overflow-visible sm:static sm:z-auto bg-white dark:bg-litepie-secondary-800 sm:rounded-lg shadow-sm"
        >
          <div
            class="litepie-datepicker static sm:relative w-full bg-white sm:rounded-lg sm:shadow-sm border-0 sm:border border-black/[.1] px-3 py-3 sm:px-1 sm:py-1.5 dark:bg-litepie-secondary-800 dark:border-litepie-secondary-700/[1]"
            :class="placement ? 'place-left' : 'place-right'"
          >
            <div class="flex flex-wrap lg:flex-nowrap">
              <!--          Shortcut-->
              <litepie-shortcut
                v-if="shortcuts"
                :shortcuts="shortcuts"
                :as-range="asRange()"
                :as-single="asSingle"
                :i18n="options.shortcuts"
              />
              <!--          Calendar-->
              <div class="relative flex flex-wrap sm:flex-nowrap p-1">
                <div
                  v-if="asRange() && !asSingle"
                  class="hidden absolute inset-0 sm:flex justify-center items-center"
                >
                  <div
                    class="w-8 sm:w-1 h-1 sm:h-8 bg-litepie-primary-500 rounded-xl shadow-inner"
                  ></div>
                </div>
                <div
                  class="relative w-full sm:w-80"
                  :class="{
                    'mb-3 sm:mb-0 sm:mr-2': asRange() && !asSingle
                  }"
                >
                  <!--            Header-->
                  <litepie-header
                    :panel="panel.previous"
                    :calendar="calendar.previous"
                  />
                  <div class="px-0.5 sm:px-2">
                    <!--              Month of years-->
                    <litepie-month
                      v-show="panel.previous.month"
                      :months="months"
                      @update:month="calendar.previous.setMount"
                    />
                    <!--                Years-->
                    <litepie-year
                      v-show="panel.previous.year"
                      :years="calendar.previous.years()"
                      @update:year="calendar.previous.setYear"
                    />
                    <!--                Calendar-->
                    <div v-show="panel.previous.calendar">
                      <!--          Days of weeks-->
                      <litepie-week :weeks="weeks" />
                      <!--          Date of months-->
                      <litepie-calendar
                        :calendar="calendar.previous"
                        :weeks="weeks"
                        :as-range="asRange()"
                        @update:date="setDate"
                      />
                    </div>
                  </div>
                </div>

                <!--          If use range-->
                <div
                  v-if="asRange() && !asSingle"
                  class="relative w-full sm:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
                >
                  <!--            Header-->
                  <litepie-header
                    as-prev-or-next
                    :panel="panel.next"
                    :calendar="calendar.next"
                  />
                  <div class="px-0.5 sm:px-2">
                    <!--              Month of years-->
                    <litepie-month
                      v-show="panel.next.month"
                      :months="months"
                      @update:month="calendar.next.setMount"
                    />
                    <!--                Years-->
                    <litepie-year
                      as-prev-or-next
                      v-show="panel.next.year"
                      :years="calendar.next.years()"
                      @update:year="calendar.next.setYear"
                    />
                    <!--                Calendar-->
                    <div v-show="panel.next.calendar">
                      <!--          Days of weeks-->
                      <litepie-week :weeks="weeks" />
                      <!--          Date of months-->
                      <litepie-calendar
                        as-prev-or-next
                        :calendar="calendar.next"
                        :weeks="weeks"
                        :as-range="asRange()"
                        @update:date="setDate"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--          Footer-->
            <div v-if="!autoApply">
              <div
                class="mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-litepie-secondary-700/[1]"
              >
                <div class="mt-1.5 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    class="away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-litepie-primary-600 text-base font-medium text-white hover:bg-litepie-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-litepie-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-litepie-secondary-800 disabled:cursor-not-allowed"
                    :disabled="
                      asSingle ? applyValue.length < 1 : applyValue.length < 2
                    "
                    @click="applyDate"
                    v-text="options.footer.apply"
                  ></button>
                  <button
                    type="button"
                    class="mt-3 away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-litepie-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-litepie-secondary-700 hover:bg-litepie-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-litepie-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-litepie-secondary-800"
                    v-text="options.footer.cancel"
                  ></button>
                </div>
              </div>
            </div>
            <div v-else class="sm:hidden">
              <div
                class="mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-litepie-secondary-700/[1]"
              >
                <div class="mt-1.5 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    class="away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-litepie-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-litepie-secondary-700 hover:bg-litepie-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-litepie-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-litepie-secondary-800"
                    v-text="options.footer.cancel"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isToday from 'dayjs/plugin/isToday';
import isBetween from 'dayjs/plugin/isBetween';
import duration from 'dayjs/plugin/duration';
import {
  defineComponent,
  ref,
  reactive,
  computed,
  provide,
  nextTick,
  isProxy,
  watchEffect,
  watch,
  unref
} from 'vue';
import {
  useCurrentDate,
  useDisableDate,
  useBetweenRange,
  useNextDate,
  usePreviousDate,
  useToValueFromArray,
  useToValueFromString,
  useDirective,
  useVisibleViewport
} from '@/lib/fn';

dayjs.extend(localeData);
dayjs.extend(localizedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(isToday);
dayjs.extend(isBetween);
dayjs.extend(duration);

import LitepieHeader from '@/components/Header.vue';
import LitepieMonth from '@/components/Month.vue';
import LitepieWeek from '@/components/Week.vue';
import LitepieYear from '@/components/Year.vue';
import LitepieCalendar from '@/components/Calendar.vue';
import LitepieShortcut from '@/components/Shortcut.vue';

export default /*#__PURE__*/ defineComponent({
  name: 'LitepieDatepicker', // vue component name
  components: {
    LitepieHeader,
    LitepieMonth,
    LitepieWeek,
    LitepieYear,
    LitepieCalendar,
    LitepieShortcut
  },
  directives: {
    litepie: {
      mounted: (el, binding) => {
        useDirective(binding);
      },
      updated: (el, binding) => {
        useDirective(binding);
      }
    }
  },
  props: {
    overlay: Boolean,
    asSingle: Boolean,
    useRange: Boolean,
    placeholder: {
      type: [Boolean, String],
      default: false
    },
    i18n: {
      type: String,
      default: 'en'
    },
    disableDate: {
      type: [Boolean, Array, Function],
      default: false
    },
    disableInRange: {
      type: Boolean,
      default: true
    },
    trigger: {
      type: String,
      default: null
    },
    autoApply: {
      type: Boolean,
      default: true
    },
    shortcuts: {
      type: [Boolean, Function],
      default: true
    },
    separator: {
      type: String,
      default: ' ~ '
    },
    formatter: {
      type: Object,
      default: () => ({
        date: 'YYYY-MM-DD HH:mm:ss',
        month: 'MMM'
      })
    },
    modelValue: {
      type: [Array, Object, String],
      default: []
    },
    startFrom: {
      type: [Object, String],
      default: () => new Date()
    },
    options: {
      type: Object,
      default: () => ({
        shortcuts: {
          today: 'Today',
          yesterday: 'Yesterday',
          past: period => `Last ${period} Days`,
          currentMonth: 'This Month',
          pastMonth: 'Last Month'
        },
        footer: {
          apply: 'Apply',
          cancel: 'Cancel'
        }
      })
    }
  },
  inheritAttrs: false,
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const LitepieRef = ref(null);
    const LitepieDatepickerRef = ref(null);
    const LitepieInputRef = ref(null);
    const isShow = ref(false);
    const placement = ref(true);
    const givenPlaceholder = ref('');
    const selection = ref(null);
    const pickerValue = ref('');
    const hoverValue = ref([]);
    const applyValue = ref([]);
    const previous = ref(null);
    const next = ref(null);
    const panel = reactive({
      previous: {
        calendar: true,
        month: false,
        year: false
      },
      next: {
        calendar: true,
        month: false,
        year: false
      }
    });
    const datepicker = ref({
      previous: dayjs(),
      next: dayjs().add(1, 'month'),
      year: {
        previous: dayjs().year(),
        next: dayjs().year()
      },
      weeks: dayjs.weekdaysShort(),
      months:
        props.formatter.month === 'MMM' ? dayjs.monthsShort() : dayjs.months()
    });
    const weeks = computed(() => datepicker.value.weeks);
    const months = computed(() => datepicker.value.months);
    const calendar = computed(() => {
      const { previous, next, year } = unref(datepicker);
      return {
        previous: {
          date: () => {
            return usePreviousDate(previous)
              .concat(useCurrentDate(previous))
              .concat(useNextDate(previous))
              .map(v => {
                v.today = v.isToday();
                v.active = previous.month() === v.month();
                v.off = previous.month() !== v.month();
                v.sunday = v.day() === 0;
                v.disabled =
                  useDisableDate(v, props) && !inRangeDate(v);
                v.inRange = () => {
                  if (props.asSingle && !props.useRange) {
                    return previous.month() !== v.month();
                  }
                };
                v.hovered = () => {
                  if (!asRange()) return false;
                  if (hoverValue.value.length > 1) {
                    return (
                      (v.isBetween(
                        hoverValue.value[0],
                        hoverValue.value[1],
                        'date',
                        '()'
                      ) ||
                        v.isBetween(
                          hoverValue.value[1],
                          hoverValue.value[0],
                          'date',
                          '()'
                        )) &&
                      previous.month() === v.month()
                    );
                  }
                  return false;
                };
                v.duration = () => {
                  return false;
                };
                return v;
              });
          },
          month: previous && previous.format(props.formatter.month),
          year: previous && previous.year(),
          years: () => {
            return Array.from(
              {
                length: 12
              },
              (v, k) => year.previous + k
            );
          },
          onPrevious: () => {
            datepicker.value.previous = previous.subtract(1, 'month');
          },
          onNext: () => {
            datepicker.value.previous = previous.add(1, 'month');
            if (previous.diff(next, 'month') === -1) {
              datepicker.value.next = next.add(1, 'month');
            }
          },
          onPreviousYear: () => {
            datepicker.value.year.previous =
              datepicker.value.year.previous - 12;
          },
          onNextYear: () => {
            datepicker.value.year.previous =
              datepicker.value.year.previous + 12;
          },
          openMonth: () => {
            panel.previous.month = !panel.previous.month;
            panel.previous.year = false;
            panel.previous.calendar = !panel.previous.month;
          },
          setMount: $event => {
            datepicker.value.previous = previous.month($event);
            panel.previous.month = !panel.previous.month;
            panel.previous.year = false;
            panel.previous.calendar = !panel.previous.month;
            nextTick(() => {
              if (
                datepicker.value.next.isSame(
                  datepicker.value.previous,
                  'month'
                ) ||
                datepicker.value.next.isBefore(datepicker.value.previous)
              ) {
                datepicker.value.next = datepicker.value.previous.add(
                  1,
                  'month'
                );
              }
              datepicker.value.year.next = datepicker.value.next.year();
            });
          },
          openYear: () => {
            panel.previous.year = !panel.previous.year;
            panel.previous.month = false;
            panel.previous.calendar = !panel.previous.year;
          },
          setYear: ($event, asNext) => {
            if (!asNext) {
              datepicker.value.previous = previous.year($event);
              panel.previous.year = !panel.previous.year;
              panel.previous.calendar = !panel.previous.year;
              nextTick(() => {
                if (
                  datepicker.value.next.isSame(
                    datepicker.value.previous,
                    'month'
                  ) ||
                  datepicker.value.next.isBefore(datepicker.value.previous)
                ) {
                  datepicker.value.next = datepicker.value.previous.add(
                    1,
                    'month'
                  );
                }
                datepicker.value.year.previous = datepicker.value.previous.year();
                datepicker.value.year.next = datepicker.value.next.year();
              });
            }
          }
        },
        next: {
          date: () => {
            return usePreviousDate(next)
              .concat(useCurrentDate(next))
              .concat(useNextDate(next))
              .map(v => {
                v.today = v.isToday();
                v.active = next.month() === v.month();
                v.off = next.month() !== v.month();
                v.sunday = v.day() === 0;
                v.disabled =
                  useDisableDate(v, props) && !inRangeDate(v);
                v.inRange = () => {
                  if (props.asSingle && !props.useRange) {
                    return next.month() !== v.month();
                  }
                };
                v.hovered = () => {
                  if (hoverValue.value.length > 1) {
                    return (
                      (v.isBetween(
                        hoverValue.value[0],
                        hoverValue.value[1],
                        'date',
                        '()'
                      ) ||
                        v.isBetween(
                          hoverValue.value[1],
                          hoverValue.value[0],
                          'date',
                          '()'
                        )) &&
                      next.month() === v.month()
                    );
                  }
                  return false;
                };
                v.duration = () => {
                  return false;
                };
                return v;
              });
          },
          month: next && next.format(props.formatter.month),
          year: next && next.year(),
          years: () => {
            return Array.from(
              {
                length: 12
              },
              (v, k) => year.next + k
            );
          },
          onPrevious: () => {
            datepicker.value.next = next.subtract(1, 'month');
            if (next.diff(previous, 'month') === 1) {
              datepicker.value.previous = previous.subtract(1, 'month');
            }
          },
          onNext: () => {
            datepicker.value.next = next.add(1, 'month');
          },
          onPreviousYear: () => {
            datepicker.value.year.next = datepicker.value.year.next - 12;
          },
          onNextYear: () => {
            datepicker.value.year.next = datepicker.value.year.next + 12;
          },
          openMonth: () => {
            panel.next.month = !panel.next.month;
            panel.next.year = false;
            panel.next.calendar = !panel.next.month;
          },
          setMount: $event => {
            datepicker.value.next = next.month($event);
            panel.next.month = !panel.next.month;
            panel.next.year = false;
            panel.next.calendar = !panel.next.month;
            nextTick(() => {
              if (
                datepicker.value.previous.isSame(
                  datepicker.value.next,
                  'month'
                ) ||
                datepicker.value.previous.isAfter(datepicker.value.next)
              ) {
                datepicker.value.previous = datepicker.value.next.subtract(
                  1,
                  'month'
                );
              }
              datepicker.value.year.previous = datepicker.value.previous.year();
            });
          },
          openYear: () => {
            panel.next.year = !panel.next.year;
            panel.next.month = false;
            panel.next.calendar = !panel.next.year;
          },
          setYear: ($event, asNext) => {
            if (asNext) {
              datepicker.value.next = next.year($event);
              panel.next.year = !panel.next.year;
              panel.next.month = false;
              panel.next.calendar = !panel.next.year;
              nextTick(() => {
                if (
                  datepicker.value.previous.isSame(
                    datepicker.value.next,
                    'month'
                  ) ||
                  datepicker.value.previous.isAfter(datepicker.value.next)
                ) {
                  datepicker.value.previous = datepicker.value.next.subtract(
                    1,
                    'month'
                  );
                }
                datepicker.value.year.previous = datepicker.value.previous.year();
                datepicker.value.year.next = datepicker.value.next.year();
              });
            }
          }
        }
      };
    });

    const useArray = () => Array.isArray(props.modelValue);

    const useObject = () => typeof props.modelValue === 'object';

    const asRange = () => {
      if (!props.useRange && !props.asSingle) {
        return true;
      } else if (!props.useRange && props.asSingle) {
        return false;
      } else if (props.useRange && !props.asSingle) {
        return true;
      } else return !!(props.useRange && props.asSingle);
    };

    const inRangeDate = date => {
      if (props.disableInRange) return false;
      if (pickerValue.value === '') return false;
      let s, e;
      if (useArray()) {
        const [start, end] = props.modelValue;
        s = start;
        e = end;
      } else if (useObject()) {
        if (props.modelValue) {
          const [start, end] = Object.values(props.modelValue);
          s = start;
          e = end;
        }
      } else {
        const [start, end] = props.modelValue.split(props.separator);
        s = start;
        e = end;
      }

      return date.isBetween(
        dayjs(s, props.formatter.date, true),
        dayjs(e, props.formatter.date, true),
        'date',
        '[]'
      );
    };

    const show = () => {
      isShow.value = true;
    };

    const hide = () => {
      isShow.value = false;
    };

    const force = () => {
      previous.value = null;
      next.value = null;
      hoverValue.value = [];
      selection.value = null;
    };

    const clearPicker = () => {
      pickerValue.value = '';
      if (useArray()) {
        emit('update:modelValue', []);
      } else if (useObject()) {
        const obj = {};
        const [start, end] = Object.keys(props.modelValue);
        obj[start] = '';
        obj[end] = '';
        emit('update:modelValue', obj);
      } else {
        emit('update:modelValue', '');
      }
      applyValue.value = [];
      LitepieInputRef.value && LitepieInputRef.value.focus();
    };

    /**
     * keyUp event
     * @since v1.0.5
     */
    const keyUp = () => {
      if (asRange()) {
        const [s, e] = pickerValue.value.split(props.separator);
        const [sd, ed] = [
          dayjs(s, props.formatter.date, true),
          dayjs(e, props.formatter.date, true)
        ];
        if (sd.isValid() && ed.isValid()) {
          setDate(sd);
          setDate(ed);
          if (useArray()) {
            emit('update:modelValue', [s, e]);
          } else if (useObject()) {
            const obj = {};
            const [start, end] = Object.keys(props.modelValue);
            obj[start] = s;
            obj[end] = e;
            emit('update:modelValue', obj);
          } else {
            emit(
              'update:modelValue',
              useToValueFromArray(
                {
                  previous: sd,
                  next: ed
                },
                props
              )
            );
          }
        }
      } else {
        const d = dayjs(pickerValue.value, props.formatter.date, true);
        if (d.isValid()) {
          setDate(d);
          if (useArray()) {
            emit('update:modelValue', [pickerValue.value]);
          } else if (useObject()) {
            const obj = {};
            const [start] = Object.keys(props.modelValue);
            obj[start] = pickerValue.value;
            emit('update:modelValue', obj);
          } else {
            emit('update:modelValue', pickerValue.value);
          }
        }
      }
    };

    const setDate = (date, asNext) => {
      if (asRange()) {
        if (previous.value) {
          next.value = date;
          if (props.autoApply) {
            if (date.isBefore(previous.value)) {
              pickerValue.value = useToValueFromArray(
                {
                  previous: date,
                  next: previous.value
                },
                props
              );
            } else {
              pickerValue.value = useToValueFromArray(
                {
                  previous: previous.value,
                  next: date
                },
                props
              );
            }
            const [s, e] = pickerValue.value.split(props.separator);

            if (useArray()) {
              emit('update:modelValue', [
                dayjs(s, props.formatter.date, true).format(
                  props.formatter.date
                ),
                dayjs(e, props.formatter.date, true).format(
                  props.formatter.date
                )
              ]);
            } else if (useObject()) {
              const obj = {};
              const [start, end] = Object.keys(props.modelValue);
              obj[start] = s;
              obj[end] = e;
              emit('update:modelValue', obj);
            } else {
              emit(
                'update:modelValue',
                useToValueFromArray(
                  {
                    previous: dayjs(s, props.formatter.date, true),
                    next: dayjs(e, props.formatter.date, true)
                  },
                  props
                )
              );
            }
            isShow.value = false;
            applyValue.value = [];
            if (
              !dayjs(s, props.formatter.date, true).isSame(
                dayjs(e, props.formatter.date, true),
                'month'
              )
            ) {
              datepicker.value.previous = dayjs(s, props.formatter.date, true);
              datepicker.value.next = dayjs(e, props.formatter.date, true);
            }
            force();
          } else {
            if (previous.value.isAfter(date, 'month')) {
              applyValue.value = [date, previous.value];
            } else {
              applyValue.value = [previous.value, date];
            }
            const [s, e] = applyValue.value;

            if (!s.isSame(e, 'month')) {
              datepicker.value.previous = s;
              datepicker.value.next = e;
            }
            force();
          }
        } else {
          applyValue.value = [];
          previous.value = date;
          selection.value = date;
          hoverValue.value.push(date);
          applyValue.value.push(date);

          if (asNext) {
            datepicker.value.next = date;
            if (datepicker.value.previous.isSame(date, 'month')) {
              datepicker.value.next = date.add(1, 'month');
            }
          } else {
            datepicker.value.previous = date;
            if (datepicker.value.next.isSame(date, 'month')) {
              datepicker.value.previous = datepicker.value.next;
              datepicker.value.next = date.add(1, 'month');
            }
          }
        }
      } else {
        if (props.autoApply) {
          pickerValue.value = useToValueFromString(date, props);
          if (useArray()) {
            emit('update:modelValue', [pickerValue.value]);
          } else if (useObject()) {
            const obj = {};
            const [start] = Object.keys(props.modelValue);
            obj[start] = pickerValue.value;
            emit('update:modelValue', obj);
          } else {
            emit('update:modelValue', pickerValue.value);
          }
          isShow.value = false;
          applyValue.value = [];
          force();
        } else {
          applyValue.value = [date];
          force();
        }
      }
    };

    // TODO: Working with date time
    const setHours = (asNext = false) => {};

    const setMinutes = (asNext = false) => {};

    const setSeconds = (asNext = false) => {};

    const applyDate = () => {
      if (applyValue.value.length < 1) return false;
      let date;
      if (asRange()) {
        const [s, e] = applyValue.value;
        if (e.isBefore(s)) {
          date = useToValueFromArray(
            {
              previous: e,
              next: s
            },
            props
          );
        } else {
          date = useToValueFromArray(
            {
              previous: s,
              next: e
            },
            props
          );
        }
      } else {
        const [s] = applyValue.value;
        date = s;
      }
      if (asRange()) {
        const [s, e] = date.split(props.separator);

        if (useArray()) {
          emit('update:modelValue', [
            dayjs(s, props.formatter.date, true).format(props.formatter.date),
            dayjs(e, props.formatter.date, true).format(props.formatter.date)
          ]);
        } else if (useObject()) {
          const obj = {};
          const [start, end] = Object.keys(props.modelValue);
          obj[start] = s;
          obj[end] = e;
          emit('update:modelValue', obj);
        } else {
          emit(
            'update:modelValue',
            useToValueFromArray(
              {
                previous: dayjs(s, props.formatter.date, true),
                next: dayjs(e, props.formatter.date, true)
              },
              props
            )
          );
        }
        pickerValue.value = date;
      } else {
        pickerValue.value = date.format(props.formatter.date);
        if (useArray()) {
          emit('update:modelValue', [pickerValue.value]);
        } else if (useObject()) {
          const obj = {};
          const [start] = Object.keys(props.modelValue);
          obj[start] = pickerValue.value;
          emit('update:modelValue', obj);
        } else {
          emit('update:modelValue', pickerValue.value);
        }
      }
    };

    const atMouseOver = date => {
      if (!asRange()) return false;
      if (previous.value) {
        hoverValue.value = [previous.value, date];
      } else {
        hoverValue.value = [];
        return false;
      }
    };

    const isBetweenRange = date => {
      if (previous.value && props.autoApply) return false;
      let s, e;
      if (hoverValue.value.length > 1) {
        const [start, end] = hoverValue.value;
        s = dayjs(start, props.formatter.date, true);
        e = dayjs(end, props.formatter.date, true);
      } else {
        if (useArray()) {
          if (props.autoApply) {
            const [start, end] = props.modelValue;
            s = start && dayjs(start, props.formatter.date, true);
            e = end && dayjs(end, props.formatter.date, true);
          } else {
            const [start, end] = applyValue.value;
            s = dayjs(start, props.formatter.date, true);
            e = dayjs(end, props.formatter.date, true);
          }
        } else if (useObject()) {
          if (props.autoApply) {
            if (props.modelValue) {
              const [start, end] = Object.values(props.modelValue);
              s = start && dayjs(start, props.formatter.date, true);
              e = end && dayjs(end, props.formatter.date, true);
            }
          } else {
            const [start, end] = applyValue.value;
            s = dayjs(start, props.formatter.date, true);
            e = dayjs(end, props.formatter.date, true);
          }
        } else {
          if (props.autoApply) {
            const [start, end] = props.modelValue
              ? props.modelValue.split(props.separator)
              : [false, false];
            s = start && dayjs(start, props.formatter.date, true);
            e = end && dayjs(end, props.formatter.date, true);
          } else {
            const [start, end] = applyValue.value;
            s = dayjs(start, props.formatter.date, true);
            e = dayjs(end, props.formatter.date, true);
          }
        }
      }
      if (s && e) {
        return useBetweenRange(date, {
          previous: s,
          next: e
        });
      }
      return false;
    };

    const datepickerClasses = date => {
      const { today, active, off, disabled } = date;
      let classes, s, e;
      if (asRange()) {
        if (useArray()) {
          if (selection.value) {
            const [start, end] = hoverValue.value;
            s = start && dayjs(start, props.formatter.date, true);
            e = end && dayjs(end, props.formatter.date, true);
          } else {
            if (props.autoApply) {
              const [start, end] = props.modelValue;
              s = start && dayjs(start, props.formatter.date, true);
              e = end && dayjs(end, props.formatter.date, true);
            } else {
              const [start, end] = applyValue.value;
              s = start && dayjs(start, props.formatter.date, true);
              e = end && dayjs(end, props.formatter.date, true);
            }
          }
        } else if (useObject()) {
          if (selection.value) {
            const [start, end] = hoverValue.value;
            s = start && dayjs(start, props.formatter.date, true);
            e = end && dayjs(end, props.formatter.date, true);
          } else {
            if (props.autoApply) {
              const [start, end] = props.modelValue
                ? Object.values(props.modelValue)
                : [false, false];
              s = start && dayjs(start, props.formatter.date, true);
              e = end && dayjs(end, props.formatter.date, true);
            } else {
              const [start, end] = applyValue.value;
              s = start && dayjs(start, props.formatter.date, true);
              e = end && dayjs(end, props.formatter.date, true);
            }
          }
        } else {
          if (selection.value) {
            const [start, end] = hoverValue.value;
            s = start && dayjs(start, props.formatter.date, true);
            e = end && dayjs(end, props.formatter.date, true);
          } else {
            if (props.autoApply) {
              const [start, end] = props.modelValue
                ? props.modelValue.split(props.separator)
                : [false, false];
              s = start && dayjs(start, props.formatter.date, true);
              e = end && dayjs(end, props.formatter.date, true);
            } else {
              const [start, end] = applyValue.value;
              s = start && dayjs(start, props.formatter.date, true);
              e = end && dayjs(end, props.formatter.date, true);
            }
          }
        }
      } else {
        if (useArray()) {
          if (props.autoApply) {
            if (props.modelValue.length > 0) {
              const [start] = props.modelValue;
              s = dayjs(start, props.formatter.date, true);
            }
          } else {
            const [start] = applyValue.value;
            s = start && dayjs(start, props.formatter.date, true);
          }
        } else if (useObject()) {
          if (props.autoApply) {
            if (props.modelValue) {
              const [start] = Object.values(props.modelValue);
              s = dayjs(start, props.formatter.date, true);
            }
          } else {
            const [start] = applyValue.value;
            s = start && dayjs(start, props.formatter.date, true);
          }
        } else {
          if (props.autoApply) {
            if (props.modelValue) {
              const [start] = props.modelValue.split(props.separator);
              s = dayjs(start, props.formatter.date, true);
            }
          } else {
            const [start] = applyValue.value;
            s = start && dayjs(start, props.formatter.date, true);
          }
        }
      }
      if (active) {
        classes = today
          ? `text-litepie-primary-500 font-semibold dark:text-litepie-primary-400 rounded-full`
          : disabled
          ? `text-litepie-secondary-600 font-normal disabled:text-litepie-secondary-500 disabled:cursor-not-allowed rounded-full`
          : date.isBetween(s, e, 'date', '()')
          ? `text-litepie-secondary-700 font-medium dark:text-litepie-secondary-100 rounded-full`
          : `text-litepie-secondary-600 font-medium dark:text-litepie-secondary-200 rounded-full`;
      }
      if (off) {
        classes = `text-litepie-secondary-400 font-light disabled:cursor-not-allowed`;
      }
      if (s && e && !off) {
        if (date.isSame(s, 'date')) {
          classes = e.isAfter(s, 'date')
            ? 'bg-litepie-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed'
            : 'bg-litepie-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed';
          if (s.isSame(e, 'date')) {
            classes = `bg-litepie-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed`;
          }
        }
        if (date.isSame(e, 'date')) {
          classes = e.isAfter(s, 'date')
            ? 'bg-litepie-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed'
            : 'bg-litepie-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed';
          if (s.isSame(e, 'date')) {
            classes = `bg-litepie-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed`;
          }
        }
      } else if (s) {
        if (date.isSame(s, 'date') && !off) {
          classes = `bg-litepie-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed`;
        }
      }

      return classes;
    };

    const betweenRangeClasses = date => {
      let classes, s, e;
      classes = '';
      if (!asRange()) return classes;
      if (useArray()) {
        if (hoverValue.value.length > 1) {
          const [start, end] = hoverValue.value;
          s = start && dayjs(start, props.formatter.date, true);
          e = end && dayjs(end, props.formatter.date, true);
        } else {
          if (props.autoApply) {
            const [start, end] = props.modelValue;
            s = start && dayjs(start, props.formatter.date, true);
            e = end && dayjs(end, props.formatter.date, true);
          } else {
            const [start, end] = applyValue.value;
            s = start && dayjs(start, props.formatter.date, true);
            e = end && dayjs(end, props.formatter.date, true);
          }
        }
      } else if (useObject()) {
        if (hoverValue.value.length > 1) {
          const [start, end] = hoverValue.value;
          s = start && dayjs(start, props.formatter.date, true);
          e = end && dayjs(end, props.formatter.date, true);
        } else {
          if (props.autoApply) {
            if (props.modelValue) {
              const [start, end] = Object.values(props.modelValue);
              s = start && dayjs(start, props.formatter.date, true);
              e = end && dayjs(end, props.formatter.date, true);
            }
          } else {
            const [start, end] = applyValue.value;
            s = start && dayjs(start, props.formatter.date, true);
            e = end && dayjs(end, props.formatter.date, true);
          }
        }
      } else {
        if (hoverValue.value.length > 1) {
          const [start, end] = hoverValue.value;
          s = start && dayjs(start, props.formatter.date, true);
          e = end && dayjs(end, props.formatter.date, true);
        } else {
          if (props.autoApply) {
            const [start, end] = props.modelValue
              ? props.modelValue.split(props.separator)
              : [false, false];
            s = start && dayjs(start, props.formatter.date, true);
            e = end && dayjs(end, props.formatter.date, true);
          } else {
            const [start, end] = applyValue.value;
            s = start && dayjs(start, props.formatter.date, true);
            e = end && dayjs(end, props.formatter.date, true);
          }
        }
      }

      if (s && e) {
        if (date.isSame(s, 'date')) {
          if (e.isBefore(s)) {
            classes += ` rounded-r-full inset-0`;
          }
          if (s.isBefore(e)) {
            classes += ` rounded-l-full inset-0`;
          }
        } else if (date.isSame(e, 'date')) {
          if (e.isBefore(s)) {
            classes += ` rounded-l-full inset-0`;
          }
          if (s.isBefore(e)) {
            classes += ` rounded-r-full inset-0`;
          }
        } else {
          classes += ` inset-0`;
        }
      }
      return classes;
    };

    const forceEmit = (s, e) => {
      datepicker.value.previous = dayjs(s, props.formatter.date, true);
      datepicker.value.next = dayjs(e, props.formatter.date, true);
      if (
        dayjs.duration(datepicker.value.next.diff(datepicker.value.previous)).$d
          .months === 2 ||
        (dayjs.duration(datepicker.value.next.diff(datepicker.value.previous))
          .$d.months === 1 &&
          dayjs.duration(datepicker.value.next.diff(datepicker.value.previous))
            .$d.days === 7)
      ) {
        datepicker.value.next = datepicker.value.next.subtract(1, 'month');
      }
      if (
        datepicker.value.next.isSame(datepicker.value.previous, 'month') ||
        datepicker.value.next.isBefore(datepicker.value.previous)
      ) {
        datepicker.value.next = datepicker.value.previous.add(1, 'month');
      }
    };

    const emitShortcut = (s, e) => {
      if (asRange()) {
        if (props.autoApply) {
          if (useArray()) {
            emit('update:modelValue', [s, e]);
          } else if (useObject()) {
            const obj = {};
            const [start, end] = Object.keys(props.modelValue);
            obj[start] = s;
            obj[end] = e;
            emit('update:modelValue', obj);
          } else {
            emit(
              'update:modelValue',
              useToValueFromArray(
                {
                  previous: dayjs(s, props.formatter.date, true),
                  next: dayjs(e, props.formatter.date, true)
                },
                props
              )
            );
          }
          pickerValue.value = `${s}${props.separator}${e}`;
        } else {
          applyValue.value = [
            dayjs(s, props.formatter.date, true),
            dayjs(e, props.formatter.date, true)
          ];
        }
      } else {
        if (props.autoApply) {
          if (useArray()) {
            emit('update:modelValue', [s]);
          } else if (useObject()) {
            const obj = {};
            const [start] = Object.keys(props.modelValue);
            obj[start] = s;
            emit('update:modelValue', obj);
          } else {
            emit('update:modelValue', s);
          }
          pickerValue.value = s;
        } else {
          applyValue.value = [
            dayjs(s, props.formatter.date, true),
            dayjs(e, props.formatter.date, true)
          ];
        }
      }
      forceEmit(s, e);
    };

    const setToToday = () => {
      const s = dayjs().format(props.formatter.date);
      const e = dayjs().format(props.formatter.date);

      emitShortcut(s, e);
    };

    const setToYesterday = () => {
      const s = dayjs()
        .subtract(1, 'day')
        .format(props.formatter.date);
      const e = dayjs()
        .subtract(1, 'day')
        .format(props.formatter.date);

      emitShortcut(s, e);
    };

    const setToLastDay = day => {
      const s = dayjs()
        .subtract(day - 1, 'day')
        .format(props.formatter.date);
      const e = dayjs().format(props.formatter.date);

      emitShortcut(s, e);
    };

    const setToThisMonth = () => {
      const s = dayjs()
        .date(1)
        .format(props.formatter.date);
      const e = dayjs()
        .date(dayjs().daysInMonth())
        .format(props.formatter.date);

      emitShortcut(s, e);
    };

    const setToLastMonth = () => {
      const s = dayjs()
        .date(1)
        .subtract(1, 'month')
        .format(props.formatter.date);
      const e = dayjs()
        .date(0)
        .format(props.formatter.date);

      emitShortcut(s, e);
    };

    const setToCustomShortcut = item => {
      let s, e;
      const [d, dd] = item.atClick();
      s = dayjs(d).format(props.formatter.date);
      e = dayjs(dd).format(props.formatter.date);

      emitShortcut(s, e);
    };

    watch(
      () => isShow.value,
      () => {
        nextTick(() => {
          placement.value = useVisibleViewport(LitepieRef.value);
        });
      }
    );

    watch(
      () => applyValue.value,
      newValue => {
        if (newValue.length > 0) {
          panel.previous.calendar = true;
          panel.previous.month = false;
          panel.previous.year = false;

          panel.next.calendar = true;
          panel.next.month = false;
          panel.next.year = false;
        }
      }
    );

    watchEffect(() => {
      if (!props.placeholder) {
        if (asRange()) {
          givenPlaceholder.value = `${props.formatter.date}${props.separator}${props.formatter.date}`;
        } else {
          givenPlaceholder.value = props.formatter.date;
        }
      } else {
        givenPlaceholder.value = props.placeholder;
      }
    });

    watchEffect(() => {
      const locale = props.i18n;
      nextTick(() => {
        import(`./locale/${locale}.js`)
          .then(() => {
            dayjs.locale(locale);
            let s, e;
            if (asRange()) {
              if (useArray()) {
                if (props.modelValue.length > 0) {
                  const [start, end] = props.modelValue;
                  s = dayjs(start, props.formatter.date, true);
                  e = dayjs(end, props.formatter.date, true);
                }
              } else if (useObject()) {
                if (!isProxy(props.modelValue)) {
                  try {
                    console.log(Object.keys(props.modelValue));
                  } catch (e) {
                    console.warn(
                      '[Litepie Datepicker]: It looks like you want to use Object as the argument %cv-model',
                      'font-style: italic; color: #42b883;',
                      ', but you pass it undefined or null.'
                    );
                    console.warn(
                      `[Litepie Datepicker]: We has replace with %c{ startDate: '', endDate: '' }`,
                      'font-style: italic; color: #42b883;',
                      ', but you can replace manually.'
                    );
                    emit('update:modelValue', {
                      startDate: '',
                      endDate: ''
                    });
                  }
                }
                if (props.modelValue) {
                  const [start, end] = Object.values(props.modelValue);
                  s = start && dayjs(start, props.formatter.date, true);
                  e = end && dayjs(end, props.formatter.date, true);
                }
              } else {
                if (props.modelValue) {
                  const [start, end] = props.modelValue.split(props.separator);
                  s = dayjs(start, props.formatter.date, true);
                  e = dayjs(end, props.formatter.date, true);
                }
              }

              if (s && e) {
                pickerValue.value = useToValueFromArray(
                  {
                    previous: s,
                    next: e
                  },
                  props
                );
                if (e.isBefore(s, 'month')) {
                  datepicker.value.previous = e;
                  datepicker.value.next = s;
                  datepicker.value.year.previous = e.year();
                  datepicker.value.year.next = s.year();
                } else if (e.isSame(s, 'month')) {
                  datepicker.value.previous = s;
                  datepicker.value.next = e.add(1, 'month');
                  datepicker.value.year.previous = s.year();
                  datepicker.value.year.next = s.add(1, 'year').year();
                } else {
                  datepicker.value.previous = s;
                  datepicker.value.next = e;
                  datepicker.value.year.previous = s.year();
                  datepicker.value.year.next = e.year();
                }
                if (!props.autoApply) {
                  applyValue.value = [s, e];
                }
              } else {
                datepicker.value.previous = dayjs(props.startFrom);
                datepicker.value.next = dayjs(props.startFrom).add(1, 'month');
                datepicker.value.year.previous = datepicker.value.previous.year();
                datepicker.value.year.next = datepicker.value.next.year();
              }
            } else {
              if (useArray()) {
                if (props.modelValue.length > 0) {
                  const [start] = props.modelValue;
                  s = dayjs(start, props.formatter.date, true);
                }
              } else if (useObject()) {
                if (props.modelValue) {
                  const [start] = Object.values(props.modelValue);
                  s = dayjs(start, props.formatter.date, true);
                }
              } else {
                if (props.modelValue.length) {
                  const [start] = props.modelValue.split(props.separator);
                  s = dayjs(start, props.formatter.date, true);
                }
              }

              if (s && s.isValid()) {
                pickerValue.value = useToValueFromString(s, props);
                datepicker.value.previous = s;
                datepicker.value.next = s.add(1, 'month');
                datepicker.value.year.previous = s.year();
                datepicker.value.year.next = s.add(1, 'year').year();
                if (!props.autoApply) {
                  applyValue.value = [s];
                }
              } else {
                datepicker.value.previous = dayjs(props.startFrom);
                datepicker.value.next = dayjs(props.startFrom).add(1, 'month');
                datepicker.value.year.previous = datepicker.value.previous.year();
                datepicker.value.year.next = datepicker.value.next.year();
              }
            }
            datepicker.value.weeks = dayjs.weekdaysShort();
            datepicker.value.months =
              props.formatter.month === 'MMM'
                ? dayjs.monthsShort()
                : dayjs.months();
          })
          .catch(() => {
            console.warn(
              `[Litepie Datepicker]: List of supported locales https://github.com/iamkun/dayjs/tree/dev/src/locale`
            );
          });
      });
    });

    provide('isBetweenRange', isBetweenRange);
    provide('betweenRangeClasses', betweenRangeClasses);
    provide('datepickerClasses', datepickerClasses);
    provide('atMouseOver', atMouseOver);
    provide('setToToday', setToToday);
    provide('setToYesterday', setToYesterday);
    provide('setToLastDay', setToLastDay);
    provide('setToThisMonth', setToThisMonth);
    provide('setToLastMonth', setToLastMonth);
    provide('setToCustomShortcut', setToCustomShortcut);

    return {
      LitepieRef,
      LitepieDatepickerRef,
      LitepieInputRef,
      isShow,
      placement,
      givenPlaceholder,
      previous,
      next,
      panel,
      pickerValue,
      hoverValue,
      applyValue,
      datepicker,
      calendar,
      weeks,
      months,
      asRange,
      show,
      hide,
      keyUp,
      setDate,
      setHours,
      setMinutes,
      setSeconds,
      applyDate,
      clearPicker
    };
  }
});
</script>

<style>
.litepie-datepicker-overlay::before {
  content: '';
  @apply fixed inset-0 bg-black hidden opacity-0 transition-opacity ease-out duration-200;
}
.litepie-datepicker-overlay.open::before {
  @apply block opacity-50;
}
.litepie-datepicker::before {
  --litepie-datepicker: 0px;
  content: '';
  @apply absolute top-0 w-4 h-4 bg-white shadow border border-black/[.1] dark:bg-litepie-secondary-800 dark:border-litepie-secondary-700;
  transform: translate(50%, -50%) rotate(-45deg);
  clip-path: polygon(
    calc(var(--litepie-datepicker) * -1) calc(var(--litepie-datepicker) * -1),
    calc(100% + var(--litepie-datepicker)) calc(var(--litepie-datepicker) * -1),
    calc(100% + var(--litepie-datepicker))
      calc(100% + var(--litepie-datepicker))
  );
  
}
.litepie-datepicker.place-left::before {
  @apply left-1;
}
.litepie-datepicker.place-right::before {
  @apply right-5;
}
</style>
