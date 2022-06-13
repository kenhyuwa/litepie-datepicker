<template>
  <div class="relative min-h-screen overflow-hidden bg-light-blue-500">
    <div class="absolute inset-0 bg-black bg-opacity-85"></div>
    <div
      class="absolute right-1.5 top-1/3 mt-40 sm:mt-0 sm:top-0 bottom-0 w-full xl:w-1/2 bg-light-blue-500 shadow-2xl rounded-tl-3xl transform translate-x-10 sm:translate-x-24 translate-y-32 sm:translate-y-1/2 lg:translate-y-1/2 xl:translate-y-36 -rotate-6"
    ></div>
    <div
      class="absolute right-0 top-1/3 mt-40 sm:mt-0 sm:top-0 bottom-0 w-full xl:w-1/2 bg-white shadow-lg rounded-tl-3xl overflow-hidden transform translate-x-10 sm:translate-x-24 translate-y-32 sm:translate-y-1/2 lg:translate-y-1/2 xl:translate-y-36 -rotate-2 border border-black/[.05]"
    >
      <div class="relative">
        <div
          class="absolute inset-x-0 px-4 py-4 space-x-3 lg:space-x-4 bg-gradient-to-r from-gray-100 to-white flex items-center border-b border-black/[.05]"
        >
          <div class="inline-flex space-x-1.5">
            <div class="w-3 h-3 border-2 rounded-full border-red-500"></div>
            <div class="w-3 h-3 border-2 rounded-full border-yellow-400"></div>
            <div class="w-3 h-3 border-2 rounded-full border-green-400"></div>
          </div>
          <div
            class="flex flex-grow items-center rounded-md px-3 py-2 space-x-1.5 bg-white border border-black/[.05] shadow-sm"
          >
            <svg
              class="w-5 h-5 text-green-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <div
              class="text-sm text-gray-400 text-opacity-75 tracking-tight -space-x-0.5"
            >
              <span class="text-gray-300">
                https://
              </span>
              <span>litepie.com/{{ $route.hash }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-20">
        <img
          src="https://raw.githubusercontent.com/kenhyuwa/litepie-datepicker/main/assets/light-mode.png"
          alt="Litepie Datepicker"
        />
      </div>
    </div>
    <div
      class="absolute inset-x-0 bottom-0 border-t border-black/[.05]"
    ></div>
  </div>
  <div class="absolute inset-0">
    <div class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
      <header class="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div class="relative px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
          <div
            class="border-b border-gray-700 border-black/[.7] py-4 flex items-center justify-between mb-20 -mx-4 px-4 sm:mx-0 sm:px-0 lg:mb-24 xl:mb-32 2xl:mb-40"
          >
            <div class="flex">
              <a href="/" class="block">
                <img
                  src="https://raw.githubusercontent.com/kenhyuwa/litepie-datepicker/main/assets/logo.png"
                  alt="Litepie Datepicker"
                  class="w-auto h-10 rounded-lg shadow-inner"
                />
              </a>
            </div>
            <div
              class="flex items-center space-x-6 sm:space-x-10 ml-6 sm:ml-10"
            >
              <div class="rounded-md overflow-hidden">
                <a href="https://www.buymeacoffee.com/kenhyuwa" target="_blank"
                  ><img
                    src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                    alt="Buy Me A Coffee"
                    class="w-32 h-auto"
                /></a>
              </div>
              <a
                href="https://github.com/kenhyuwa/litepie-datepicker"
                class="text-gray-300 hover:text-gray-400 transition-colors duration-200"
                target="_blank"
              >
                <span class="sr-only">
                  Litepie Datepicker on GitHub
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="max-w-screen-md">
            <h1
              class="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-white mt-10 mb-8 sm:mt-14 sm:mb-10"
            >
              <span
                class="bg-gradient-to-r bg-clip-text text-transparent from-gray-200 to-light-blue-400"
              >
                Litepie Datepicker
              </span>
            </h1>
            <p
              class="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 text-gray-400 font-medium tracking-tight mb-10 sm:mb-11"
            >
              A date range picker component for Vue.js and Tailwind CSS,
              dependent on day.js.
            </p>
            <div
              class="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse text-center"
            >
              <a
                class="sm:order-last w-full sm:w-auto flex-none bg-light-blue-600 hover:bg-light-blue-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-light-blue-400 focus:outline-none transition ease-out duration-300"
                href="#get-started"
              >
                Get started
              </a>
              <div class="flex-1 sm:flex-none">
                <litepie-datepicker
                  ref="myRef"
                  v-model="heroModel"
                  v-slot="{ value, placeholder }"
                  :auto-apply="false"
                  :formatter="formatter"
                >
                  <button
                    type="button"
                    class="w-full sm:w-auto flex-none text-xs sm:text-base font-semibold bg-gray-50 text-gray-400 hover:text-gray-900 font-mono leading-6 py-3 sm:px-6 border border-gray-200 rounded-xl flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gray-300 focus:outline-none transition ease-out duration-300"
                  >
                    <span class="text-gray-900">
                      {{ value || placeholder }}
                    </span>
                  </button>
                </litepie-datepicker>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
  <main id="get-started" class="pt-1">
    <div class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
      <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <section class="relative px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
          <div class="mt-16">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900">
              Installation
            </h2>
            <div class="mt-2">
              <p>
                Learn how to get Litepie Datepicker up and running in your
                project.
              </p>
            </div>
            <div
              class="mt-6 px-6 py-5 bg-yellow-50 border border-yellow-100 rounded-lg"
            >
              <div class="flex items-center">
                <span class="text-yellow-400">
                  <svg
                    class="w-6 h-6 lg:w-8 lg:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                    ></path>
                  </svg>
                </span>
                <span class="font-semibold"> Warning! </span>
              </div>
              <div class="mt-2">
                <p>
                  Litepie Datepicker uses
                  <a
                    href="https://tailwindcss.com"
                    class="font-semibold text-light-blue-400"
                    target="_blank"
                  >
                    Tailwind CSS
                  </a>
                  &
                  <a
                    href="https://day.js.org"
                    class="font-semibold text-orange-400"
                    target="_blank"
                  >
                    Day.js
                  </a>
                  <i>under the hood</i>. You must install them prior to using Litepie.
                </p>
              </div>
            </div>
          </div>
          <div id="install-via-npm" class="pt-6 sm:pt-8">
            <h3 class="group flex items-center font-semibold">
              <a
                href="#install-via-npm"
                class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                aria-label="Anchor"
              ></a>
              <span class="text-lg text-gray-900">
                Install via npm
              </span>
            </h3>
            <div class="rounded-xl overflow-hidden my-6">
              <div class="bg-light-blue-500">
                <v-prims language="atom">
                  $ npm install -S litepie-datepicker
                </v-prims>
              </div>
            </div>
          </div>
          <div id="install-via-yarn" class="pt-6 sm:pt-8">
            <h3 class="group flex items-center font-semibold">
              <a
                href="#install-via-yarn"
                class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                aria-label="Anchor"
              ></a>
              <span class="text-lg text-gray-900">
                Install via yarn
              </span>
            </h3>
            <div class="rounded-xl overflow-hidden my-6">
              <div class="bg-light-blue-500">
                <v-prims language="atom">
                  $ yarn add litepie-datepicker
                </v-prims>
              </div>
            </div>
          </div>
          <div id="how-it-works" class="pt-6 sm:pt-8">
            <h3 class="group flex items-center font-semibold">
              <a
                href="#how-it-works"
                class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                aria-label="Anchor"
              ></a>
              <span class="text-lg text-gray-900">
                How it works
              </span>
            </h3>
            <div>
              <p>Setup as a global component:</p>
              <div class="rounded-xl overflow-hidden my-6">
                <div class="bg-light-blue-500">
                  <v-prims
                    language="js"
                    :code="defaultContent.itWorks.asGlobal"
                  >
                  </v-prims>
                </div>
              </div>
            </div>
            <div>
              <p>Setup as a single component:</p>
              <div class="rounded-xl overflow-hidden my-6">
                <div class="bg-light-blue-500">
                  <v-prims language="html" :code="defaultContent.itWorks.asSFC">
                  </v-prims>
                </div>
              </div>
            </div>
          </div>
          <div id="configure-with-tailwind" class="pt-6 sm:pt-8">
            <h3 class="group flex items-center font-semibold">
              <a
                href="#configure-with-tailwind"
                class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                aria-label="Anchor"
              ></a>
              <span class="text-lg text-gray-900">
                Tailwind CSS configuration:
              </span>
            </h3>
            <div class="rounded-xl overflow-hidden my-6">
              <div class="bg-light-blue-500">
                <v-prims language="js" :code="defaultContent.twConfig">
                </v-prims>
              </div>
            </div>
          </div>
        </section>
        <section
          id="theming-options"
          class="relative px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8"
        >
          <div class="mt-16">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900">
              Theming options
            </h2>
            <div class="mt-2">
              <p>
                Theme of Litepie Datepicker is customable, so You can customize
                your theme with any color you want, via Tailwind CSS
                configuration. And all will work well.
              </p>
            </div>
          </div>
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-10"
          >
            <div id="light-mode" class="pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#light-mode"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Light mode
                </span>
              </h3>
              <div class="space-y-4 sm:space-y-6">
                <div>
                  <p>
                    Light mode color system using color palette
                    <code>`litepie-primary`</code>.
                  </p>
                </div>
                <div class="w-full max-w-md">
                  <litepie-datepicker
                    v-model="dateValue.light"
                    :formatter="formatter"
                  />
                </div>
              </div>
            </div>
            <div id="dark-mode" class="dark dark:bg-gray-800 pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#dark-mode"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Dark mode
                </span>
              </h3>
              <div class="space-y-4 sm:space-y-6">
                <div>
                  <p>
                    Dark mode color system using color palette
                    <code>`litepie-secondary`</code>. Litepie Datepicker work it
                    well with Tailwind CSS <code>`dark`</code> mode
                    configuration.
                  </p>
                </div>
                <div class="w-full max-w-md">
                  <litepie-datepicker
                    v-model="dateValue.dark"
                    :formatter="formatter"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="playground"
          class="relative px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8"
        >
          <div class="mt-16">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900">
              Playground
            </h2>
            <div class="mt-2">
              <p>
                Working with <code>`options props`</code>, to setting up Litepie
                Datepicker.
              </p>
            </div>
          </div>
          <div class="space-y-6 sm:space-y-10">
            <div id="default" class="pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#default"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Default
                </span>
              </h3>
              <p>
                This config if you don't need change any <code>`props`</code>.
              </p>
              <div
                class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8"
              >
                <div class="w-full max-w-md">
                  <litepie-datepicker
                    :formatter="playFormatter"
                    v-model="dateValue.defaults"
                  />
                </div>
                <div class="col-span-2">
                  <div class="rounded-xl overflow-hidden">
                    <div class="bg-light-blue-500">
                      <v-prims language="html" :code="playground.defaults">
                      </v-prims>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="overlay" class="pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#overlay"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Overlay
                </span>
              </h3>
              <p>
                Using date picker with backdrop, by default
                <code>`overlay`</code> is
                <i class="text-light-blue-400">false</i>.
              </p>
              <div
                class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8"
              >
                <div class="w-full max-w-md">
                  <litepie-datepicker
                    :overlay="true"
                    :formatter="playFormatter"
                    v-model="dateValue.overlay"
                  />
                </div>
                <div class="col-span-2">
                  <div class="rounded-xl overflow-hidden">
                    <div class="bg-light-blue-500">
                      <v-prims language="html" :code="playground.overlay">
                      </v-prims>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="as-single" class="pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#as-single"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Single date
                </span>
              </h3>
              <p>
                Using date picker as
                <i class="text-light-blue-400">single date</i>.
              </p>
              <div
                class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8"
              >
                <div class="w-full max-w-md">
                  <litepie-datepicker
                    as-single
                    :formatter="playFormatter"
                    v-model="dateValue.asSingle"
                  />
                </div>
                <div class="col-span-2">
                  <div class="rounded-xl overflow-hidden">
                    <div class="bg-light-blue-500">
                      <v-prims language="html" :code="playground.asSingle">
                      </v-prims>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="as-single-use-range" class="pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#as-single-use-range"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Single date use Range
                </span>
              </h3>
              <p>
                Using date picker as
                <i class="text-light-blue-400">single date</i>, but datepicker
                with range.
              </p>
              <div
                class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8"
              >
                <div class="w-full max-w-md">
                  <litepie-datepicker
                    as-single
                    use-range
                    :formatter="playFormatter"
                    v-model="dateValue.asSingleUseRange"
                  />
                </div>
                <div class="col-span-2">
                  <div class="rounded-xl overflow-hidden">
                    <div class="bg-light-blue-500">
                      <v-prims
                        language="html"
                        :code="playground.asSingleWithRange"
                      >
                      </v-prims>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="placeholder" class="pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#placeholder"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Placeholder
                </span>
              </h3>
              <p>
                Change <i class="text-light-blue-400">placeholder</i>, by
                default placeholder use <code>`formatter.date`</code> object.
              </p>
              <div
                class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8"
              >
                <div class="w-full max-w-md">
                  <litepie-datepicker
                    placeholder="My Placeholder"
                    :formatter="playFormatter"
                    v-model="dateValue.placeholder"
                  />
                </div>
                <div class="col-span-2">
                  <div class="rounded-xl overflow-hidden">
                    <div class="bg-light-blue-500">
                      <v-prims
                        language="html"
                        :code="playground.customPlaceholder"
                      >
                      </v-prims>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="separator" class="pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#separator"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Separator
                </span>
              </h3>
              <p>
                Change <i class="text-light-blue-400">separator</i>, by default
                separator use <code>` ~ `</code>.
              </p>
              <div
                class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8"
              >
                <div class="w-full max-w-md">
                  <litepie-datepicker
                    separator=" to "
                    :formatter="playFormatter"
                    v-model="dateValue.separator"
                  />
                </div>
                <div class="col-span-2">
                  <div class="rounded-xl overflow-hidden">
                    <div class="bg-light-blue-500">
                      <v-prims language="html" :code="playground.separator">
                      </v-prims>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="formatter" class="pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#formatter"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Formatter
                </span>
              </h3>
              <p>
                Change <i class="text-light-blue-400">formatter</i>, default
                <code>`formatter`</code>:
              </p>
              <div class="mt-4 mb-2 rounded-xl overflow-hidden">
                <div class="bg-light-blue-500">
                  <v-prims
                    language="js"
                    :code="
                      `{
  date: 'YYYY-MM-DD HH:mm:ss',
  month: 'MMM'
}`
                    "
                  >
                  </v-prims>
                </div>
              </div>
              <div
                class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8"
              >
                <div class="w-full max-w-md">
                  <litepie-datepicker
                    :formatter="{
                      date: 'DD MMM YYYY',
                      month: 'MMM'
                    }"
                    v-model="dateValue.formatter"
                  />
                </div>
                <div class="col-span-2">
                  <div class="rounded-xl overflow-hidden">
                    <div class="bg-light-blue-500">
                      <v-prims language="html" :code="playground.formatter">
                      </v-prims>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="auto-apply" class="pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#auto-apply"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Auto apply
                </span>
              </h3>
              <p>
                Change <i class="text-light-blue-400">auto apply</i>, by default
                <code>`autoApply`</code> is
                <i class="text-light-blue-400">true</i>.
              </p>
              <div
                class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8"
              >
                <div class="w-full max-w-md">
                  <litepie-datepicker
                    :auto-apply="false"
                    :formatter="playFormatter"
                    v-model="dateValue.autoApply"
                  />
                </div>
                <div class="col-span-2">
                  <div class="rounded-xl overflow-hidden">
                    <div class="bg-light-blue-500">
                      <v-prims language="html" :code="playground.autoApply">
                      </v-prims>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="start-from" class="pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#start-from"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Start from
                </span>
              </h3>
              <p>
                Change <i class="text-light-blue-400">start from</i> of
                datepicker, by default <code>`startFrom`</code> is
                <i class="text-light-blue-400">new Date()</i>.
              </p>
              <div
                class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8"
              >
                <div class="w-full max-w-md">
                  <litepie-datepicker
                    :start-from="new Date(2020, 0, 1)"
                    :formatter="playFormatter"
                    v-model="dateValue.startFrom"
                  />
                </div>
                <div class="col-span-2">
                  <div class="rounded-xl overflow-hidden">
                    <div class="bg-light-blue-500">
                      <v-prims language="html" :code="playground.startFrom">
                      </v-prims>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="shortcuts" class="pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#shortcuts"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Shortcuts
                </span>
              </h3>
              <div
                class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8"
              >
                <div class="w-full max-w-md">
                  <litepie-datepicker
                    :shortcuts="false"
                    :formatter="playFormatter"
                    v-model="dateValue.shortcuts"
                  />
                </div>
                <div class="col-span-2">
                  <div class="rounded-xl overflow-hidden">
                    <div class="bg-light-blue-500">
                      <v-prims language="html" :code="playground.shortcuts">
                      </v-prims>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="disable-date" class="pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#disable-date"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Disable date
                </span>
              </h3>
              <div
                class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8"
              >
                <div class="w-full max-w-md">
                  <litepie-datepicker
                    :disable-date="
                      $event =>
                        $event < new Date() || $event > new Date(2023, 0, 8)
                    "
                    :formatter="playFormatter"
                    v-model="dateValue.disableDate"
                  />
                </div>
                <div class="col-span-2">
                  <div class="rounded-xl overflow-hidden">
                    <div class="bg-light-blue-500">
                      <v-prims
                        language="html"
                        :code="playground.disableDate"
                      ></v-prims>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="disable-in-range" class="pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#disable-in-range"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Disable in range
                </span>
              </h3>
              <div
                class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8"
              >
                <div class="w-full max-w-md">
                  <litepie-datepicker
                    :disable-date="
                      $event =>
                        $event < new Date() || $event > new Date(2023, 0, 8)
                    "
                    :disable-in-range="false"
                    :formatter="playFormatter"
                    v-model="dateValue.disableInRange"
                  />
                </div>
                <div class="col-span-2">
                  <div class="rounded-xl overflow-hidden">
                    <div class="bg-light-blue-500">
                      <v-prims
                        language="html"
                        :code="playground.disableInRange"
                      >
                      </v-prims>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="trigger" class="pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#trigger"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Trigger
                </span>
              </h3>
              <div
                class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8"
              >
                <div class="flex">
                  <div class="flex-1">
                    <litepie-datepicker
                      trigger="open-datepicker"
                      :formatter="playFormatter"
                      v-model="dateValue.trigger"
                    />
                  </div>
                  <div class="flex-shrink-0 ml-4">
                    <button
                      type="button"
                      id="open-datepicker"
                      class="px-4 py-2 rounded-lg sm:rounded-xl bg-light-blue-500 text-white font-medium focus:outline-none"
                    >
                      Open
                    </button>
                  </div>
                </div>
                <div class="col-span-2">
                  <div class="rounded-xl overflow-hidden">
                    <div class="bg-light-blue-500">
                      <v-prims language="html" :code="playground.trigger">
                      </v-prims>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="use-slot" class="pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#use-slot"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Slot
                </span>
              </h3>
              <div
                class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8"
              >
                <div class="w-full max-w-md">
                  <litepie-datepicker
                    :formatter="playFormatter"
                    v-model="dateValue.slots"
                    v-slot="{ value, placeholder, clear }"
                  >
                    <div class="flex">
                      <div class="flex-1">
                        <button
                          type="button"
                          class="block w-full bg-gray-50 text-gray-400 hover:text-gray-900 leading-6 py-3 sm:px-6 border border-gray-200 rounded-xl flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition ease-out duration-300"
                        >
                          <span class="text-gray-900">
                            {{ value || placeholder }}
                          </span>
                        </button>
                      </div>
                      <div class="flex-shrink-0">
                        <button
                          type="button"
                          class="ml-4 block px-3 flex-none bg-indigo-50 text-indigo-400 hover:text-indigo-900 leading-6 py-3 sm:px-6 border border-indigo-200 rounded-xl flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-300 focus:outline-none transition ease-out duration-300"
                          @click="clear"
                        >
                          <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </litepie-datepicker>
                </div>
                <div class="col-span-2">
                  <div class="rounded-xl overflow-hidden">
                    <div class="bg-light-blue-500">
                      <v-prims language="html" :code="playground.useSlot">
                      </v-prims>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="options" class="pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#options"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Options
                </span>
              </h3>
              <div
                class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8"
              >
                <div class="w-full max-w-md">
                  <litepie-datepicker
                    :options="{
                      shortcuts: {
                        today: 'Hari ini',
                        yesterday: 'Kemarin',
                        past: period => period + ' hari terakhir',
                        currentMonth: 'Bulan ini',
                        pastMonth: 'Bulan lalu'
                      },
                      footer: {
                        apply: 'Terapkan',
                        cancel: 'Batal'
                      }
                    }"
                    :auto-apply="false"
                    :formatter="playFormatter"
                    v-model="dateValue.options"
                  />
                </div>
                <div class="col-span-2">
                  <div class="rounded-xl overflow-hidden">
                    <div class="bg-light-blue-500">
                      <v-prims language="html" :code="playground.options">
                      </v-prims>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="advance-feature"
          class="relative px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8"
        >
          <div class="mt-16">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900">
              Advance Feature
            </h2>
            <div class="mt-2">
              <p>
                This feature will help you if you need different
                <code>`model`</code> values.
              </p>
            </div>
          </div>
          <div class="space-y-6 sm:space-y-10">
            <div id="use-array" class="pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#use-array"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Use Array
                </span>
              </h3>
              <div
                class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8"
              >
                <div class="w-full max-w-md">
                  <litepie-datepicker
                    :formatter="playFormatter"
                    v-model="dateValue.useArray"
                  />
                </div>
                <div class="col-span-2">
                  <div class="rounded-xl overflow-hidden">
                    <div class="bg-light-blue-500">
                      <v-prims language="html" :code="advance.useArray">
                      </v-prims>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="use-object" class="pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#use-object"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Use Object
                </span>
              </h3>
              <div
                class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8"
              >
                <div class="w-full max-w-md">
                  <litepie-datepicker
                    :formatter="playFormatter"
                    v-model="dateValue.useObject"
                  />
                </div>
                <div class="col-span-2">
                  <div class="rounded-xl overflow-hidden">
                    <div class="bg-light-blue-500">
                      <v-prims language="html" :code="advance.useObject">
                      </v-prims>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="use-string" class="pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#use-string"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Use String
                </span>
              </h3>
              <div
                class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8"
              >
                <div class="w-full max-w-md">
                  <litepie-datepicker
                    :formatter="playFormatter"
                    v-model="dateValue.useString"
                  />
                </div>
                <div class="col-span-2">
                  <div class="rounded-xl overflow-hidden">
                    <div class="bg-light-blue-500">
                      <v-prims language="html" :code="advance.useString">
                      </v-prims>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="custom-shortcuts" class="pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#custom-shortcuts"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Custom shortcuts
                </span>
              </h3>
              <div
                class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8"
              >
                <div class="w-full max-w-md">
                  <litepie-datepicker
                    :formatter="playFormatter"
                    :shortcuts="customShortcuts"
                    v-model="dateValue.customShortcuts"
                  />
                </div>
                <div class="col-span-2">
                  <div class="rounded-xl overflow-hidden">
                    <div class="bg-light-blue-500">
                      <v-prims language="html" :code="advance.customShortcuts">
                      </v-prims>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="i18n" class="pt-6 sm:pt-8">
              <h3 class="group flex items-center font-semibold">
                <a
                  href="#i18n"
                  class="absolute after:hash opacity-0 group-hover:opacity-100 -ml-4 text-light-blue-400"
                  aria-label="Anchor"
                ></a>
                <span class="text-lg text-gray-900">
                  Localization(i18n)
                </span>
              </h3>
              <div>
                <p>
                  Litepie Datepicker extend to day.js,
                  <a
                    href="https://github.com/iamkun/dayjs/tree/dev/src/locale"
                    target="_blank"
                    class="text-light-blue-400"
                    >List of supported locales</a
                  >.
                </p>
              </div>
              <div
                class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8"
              >
                <div class="w-full max-w-md">
                  <litepie-datepicker
                    i18n="id"
                    :formatter="{
                      date: 'DD MMMM YYYY',
                      month: 'MMM'
                    }"
                    :options="{
                      shortcuts: {
                        today: 'Hari ini',
                        yesterday: 'Kemarin',
                        past: period => period + ' hari terakhir',
                        currentMonth: 'Bulan ini',
                        pastMonth: 'Bulan lalu'
                      },
                      footer: {
                        apply: 'Terapkan',
                        cancel: 'Batal'
                      }
                    }"
                    :auto-apply="false"
                    v-model="dateValue.i18n"
                  />
                </div>
                <div class="col-span-2">
                  <div class="rounded-xl overflow-hidden">
                    <div class="bg-light-blue-500">
                      <v-prims language="html" :code="advance.i18n"> </v-prims>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          class="hidden relative px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8"
        >
          <h2
            class="text-3xl tracking-tight font-extrabold text-gray-900 mt-16 mb-8"
          >
            Get involved
          </h2>
          <ul class="grid sm:grid-cols-2 gap-6 xl:gap-8">
            <li>
              <a
                href="https://github.com/tailwindlabs/tailwindcss/discussions"
                class="flex items-start space-x-4"
                ><svg
                  fill="currentColor"
                  class="flex-none text-gray-900 w-12 h-12"
                >
                  <rect width="48" height="48" rx="12"></rect>
                  <path
                    d="M23.997 12a12 12 0 00-3.792 23.388c.6.12.816-.264.816-.576l-.012-2.04c-3.336.72-4.044-1.608-4.044-1.608-.552-1.392-1.332-1.764-1.332-1.764-1.08-.744.084-.72.084-.72 1.2.084 1.836 1.236 1.836 1.236 1.08 1.824 2.808 1.296 3.492.996.12-.78.42-1.308.756-1.608-2.664-.3-5.46-1.332-5.46-5.928 0-1.32.468-2.388 1.236-3.228a4.32 4.32 0 01.12-3.168s1.008-.324 3.3 1.224a11.496 11.496 0 016 0c2.292-1.56 3.3-1.224 3.3-1.224.66 1.644.24 2.88.12 3.168.768.84 1.236 1.92 1.236 3.228 0 4.608-2.808 5.616-5.484 5.916.432.372.816 1.104.816 2.22l-.012 3.3c0 .312.216.696.828.576A12 12 0 0023.997 12z"
                    fill="currentColor"
                    class="text-gray-50"
                  ></path>
                </svg>
                <div class="flex-auto">
                  <h3 class="font-bold text-gray-900">GitHub Discussions</h3>
                  <p>Connect with members of the Tailwind CSS community.</p>
                </div></a
              >
            </li>
            <li>
              <a href="/discord" class="flex items-start space-x-4"
                ><svg
                  fill="currentColor"
                  class="flex-none text-indigo-400 w-12 h-12"
                >
                  <rect width="48" height="48" rx="12"></rect>
                  <path
                    d="M21.637 23.57c-.745 0-1.332.653-1.332 1.45 0 .797.6 1.45 1.332 1.45.744 0 1.332-.653 1.332-1.45.013-.797-.588-1.45-1.332-1.45zm4.767 0c-.744 0-1.332.653-1.332 1.45 0 .797.6 1.45 1.332 1.45.745 0 1.332-.653 1.332-1.45 0-.797-.587-1.45-1.332-1.45z"
                    fill="currentColor"
                    class="text-indigo-50"
                  ></path>
                  <path
                    d="M32.75 12.613H15.248a2.684 2.684 0 00-2.678 2.69v17.66a2.684 2.684 0 002.678 2.69h14.811l-.692-2.416 1.672 1.554 1.58 1.463 2.809 2.482V15.304a2.684 2.684 0 00-2.678-2.69zm-5.042 17.058s-.47-.561-.862-1.058c1.711-.483 2.364-1.554 2.364-1.554-.535.353-1.045.6-1.502.77a8.591 8.591 0 01-1.894.562 9.151 9.151 0 01-3.383-.013 10.964 10.964 0 01-1.92-.561 7.652 7.652 0 01-.953-.445c-.04-.026-.078-.039-.117-.065-.027-.013-.04-.026-.053-.039-.235-.13-.365-.222-.365-.222s.627 1.045 2.285 1.541c-.392.497-.875 1.084-.875 1.084-2.886-.091-3.983-1.985-3.983-1.985 0-4.206 1.88-7.615 1.88-7.615C20.211 18.661 22 18.7 22 18.7l.131.157c-2.35.679-3.435 1.71-3.435 1.71s.287-.156.77-.378c1.398-.614 2.508-.784 2.965-.823.079-.013.144-.026.223-.026a10.647 10.647 0 016.57 1.228s-1.033-.98-3.253-1.66l.183-.208s1.79-.04 3.67 1.371c0 0 1.881 3.41 1.881 7.615 0 0-1.11 1.894-3.997 1.985z"
                    fill="currentColor"
                    class="text-indigo-50"
                  ></path>
                </svg>
                <div class="flex-auto">
                  <h3 class="font-bold text-gray-900">Discord</h3>
                  <p>
                    Join our Discord group to chat with other Tailwind users.
                  </p>
                </div></a
              >
            </li>
            <li>
              <a
                href="https://twitter.com/tailwindcss"
                class="flex items-start space-x-4"
                ><svg
                  fill="currentColor"
                  class="flex-none text-light-blue-400 w-12 h-12"
                >
                  <rect width="48" height="48" rx="12"></rect>
                  <path
                    d="M37.127 15.989h-.001a11.04 11.04 0 01-3.093.836 5.336 5.336 0 002.37-2.932 10.815 10.815 0 01-3.421 1.284 5.42 5.42 0 00-3.933-1.679c-2.976 0-5.385 2.373-5.385 5.3-.003.406.044.812.138 1.207a15.351 15.351 0 01-11.102-5.54 5.235 5.235 0 00-.733 2.663c0 1.837.959 3.461 2.406 4.413a5.338 5.338 0 01-2.449-.662v.066c0 2.57 1.86 4.708 4.32 5.195a5.55 5.55 0 01-1.418.186c-.34 0-.68-.033-1.013-.099.684 2.106 2.676 3.637 5.034 3.68a10.918 10.918 0 01-6.69 2.269 11.21 11.21 0 01-1.285-.077 15.237 15.237 0 008.242 2.394c9.918 0 15.337-8.077 15.337-15.083 0-.23-.006-.459-.017-.683a10.864 10.864 0 002.686-2.746l.007.008z"
                    fill="currentColor"
                    class="text-light-blue-50"
                  ></path>
                </svg>
                <div class="flex-auto">
                  <h3 class="font-bold text-gray-900">Twitter</h3>
                  <p>
                    Follow the Tailwind Twitter account for news and updates.
                  </p>
                </div></a
              >
            </li>
            <li>
              <a
                href="https://www.youtube.com/tailwindlabs"
                class="flex items-start space-x-4"
                ><svg
                  fill="currentColor"
                  class="flex-none text-red-500 w-12 h-12"
                >
                  <rect width="48" height="48" rx="12"></rect>
                  <path
                    d="M36.83 18.556c0-2.285-1.681-4.124-3.758-4.124a184.713 184.713 0 00-8.615-.182h-.914c-2.925 0-5.799.05-8.612.183-2.072 0-3.753 1.848-3.753 4.133A75.6 75.6 0 0011 23.99a78.487 78.487 0 00.173 5.429c0 2.285 1.68 4.139 3.753 4.139 2.955.137 5.987.198 9.07.192 3.087.01 6.11-.054 9.069-.193 2.077 0 3.758-1.853 3.758-4.138.121-1.813.177-3.62.172-5.434a73.982 73.982 0 00-.165-5.428zM21.512 28.97v-9.979l7.363 4.987-7.363 4.992z"
                    fill="currentColor"
                    class="text-red-50"
                  ></path>
                </svg>
                <div class="flex-auto">
                  <h3 class="font-bold text-gray-900">YouTube</h3>
                  <p>Watch screencasts and feature tutorials of Tailwind.</p>
                </div></a
              >
            </li>
          </ul>
        </section>
      </div>
      <footer
        class="bg-gray-50 pt-16 pb-12 sm:pt-20 md:pt-24 xl:pt-32 sm:pb-20"
      >
        <div
          class="max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8"
        >
          <div class="pt-10 sm:pt-12">
            <span class="text-xs font-medium text-gray-700 tracking-tight"
              >Powered by</span
            >
            <svg viewBox="0 0 247 31" width="208" height="26">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                fill="#06B6D4"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"
                fill="#000"
              ></path>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  </main>
</template>

<script>
import dayjs from 'dayjs';
import { onMounted, reactive, ref, unref } from 'vue';
import content from './content';
import VPrims from './prims';

export default {
  name: 'App',
  components: { VPrims },
  setup() {
    const myRef = ref(null);

    const formatter = ref({
      date: 'YYYY-MM-DD HH:mm:ss',
      month: 'MMM'
    });

    const playFormatter = ref({
      date: 'YYYY-MM-DD',
      month: 'MMM'
    });

    const heroModel = ref([
      dayjs().format(unref(formatter).date),
      dayjs()
        .add(1, 'M')
        .format(unref(formatter).date)
    ]);

    const dateValue = reactive({
      light: [],
      dark: [],
      defaults: [],
      overlay: [],
      asSingle: [],
      asSingleUseRange: [],
      placeholder: [],
      separator: [],
      formatter: [],
      autoApply: [],
      startFrom: [],
      shortcuts: [],
      disableDate: [],
      disableInRange: [
        dayjs()
          .subtract(7, 'd')
          .format(playFormatter.value.date),
        dayjs()
          .subtract(1, 'd')
          .format(playFormatter.value.date)
      ],
      trigger: [],
      slots: [],
      options: [],
      useArray: [],
      useObject: {
        startDate: '',
        endDate: ''
      },
      useString: '',
      customShortcuts: [],
      i18n: []
    });

    const customShortcuts = () => {
      return [
        {
          label: 'Tomorrow',
          atClick: () => {
            const date = new Date();
            return [new Date(date.setDate(date.getDate() + 1)), date];
          }
        },
        {
          label: 'Last Years',
          atClick: () => {
            const date = new Date();
            return [
              new Date(date.setFullYear(date.getFullYear() - 1)),
              new Date()
            ];
          }
        }
      ];
    };

    onMounted(() => {
      setInterval(() => {
        if (unref(myRef) && !unref(myRef).isShow) {
          const [s, e] = heroModel.value;
          const { $H, $m, $s } = dayjs();

          myRef.value.pickerValue = `${dayjs(s, unref(formatter).date, true)
            .hour($H)
            .minute($m)
            .second($s)
            .format(unref(formatter).date)} ~ ${dayjs(
            e,
            unref(formatter).date,
            true
          )
            .hour($H)
            .minute($m)
            .second($s)
            .format(unref(formatter).date)}`;
        }
      }, 1000);

      setInterval(() => {
        if (unref(myRef)) {
          unref(myRef).LitepieDatepickerRef.parentElement.classList.add('dark');
          setTimeout(() => {
            unref(myRef).LitepieDatepickerRef.parentElement.classList.remove(
              'dark'
            );
          }, 10000);
        }
      }, 20000);
    });

    return {
      myRef,
      formatter,
      heroModel,
      dateValue,
      playFormatter,
      customShortcuts,
      defaultContent: content(),
      playground: content().playground,
      advance: content().advance
    };
  }
};
</script>
