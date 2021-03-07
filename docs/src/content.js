module.exports = () => {
  const twConfig = `const path = require('path');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    path.resolve(__dirname, './node_modules/litepie-datepicker/dist/*.js')
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Change with you want it
        'litepie-primary': colors.lightBlue, // color system for light mode
        'litepie-secondary': colors.coolGray // color system for dark mode
      }
    }
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      textOpacity: ['disabled'],
      textColor: ['disabled']
    }
  },
  plugins: []
};`;

  const itWorks = {
    asGlobal: `// main.js
import { createApp } from 'vue';
import App from '@/App.vue';
import LitepieDatepicker from 'litepie-datepicker';
// ...

const app = createApp(App);

app.use(LitepieDatepicker);
app.mount('#app');
`,
    asSFC: `<!-- SFC file -->
<template>
  <div class="flex">
    <litepie-datepicker
      v-model="dateValue"
    ></litepie-datepicker>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import LitepieDatepicker from 'litepie-datepicker';
  
  export default {
    components:{
      LitepieDatepicker
    },
    setup() {
      const dateValue = ref([]);
      
      return {
        dateValue
      };
    }
  }
</script>
`
  };

  const defaults = `<template>
  <div class="flex">
    <litepie-datepicker
      v-model="dateValue"
    ></litepie-datepicker>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MyComponent',
  setup() {
    const dateValue = ref([]);

    return {
      dateValue
    };
  }
};
</script>`;

  const overlay = `<template>
  <div class="flex">
    <litepie-datepicker
      overlay
      v-model="dateValue"
    ></litepie-datepicker>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MyComponent',
  setup() {
    const dateValue = ref([]);

    return {
      dateValue
    };
  }
};
</script>`;

  const asSingle = `<template>
  <div class="flex">
    <litepie-datepicker
      as-single
      v-model="dateValue"
    ></litepie-datepicker>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MyComponent',
  setup() {
    const dateValue = ref([]);

    return {
      dateValue
    };
  }
};
</script>`;

  const asSingleWithRange = `<template>
  <div class="flex">
    <litepie-datepicker
      as-single
      use-range
      v-model="dateValue"
    ></litepie-datepicker>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MyComponent',
  setup() {
    const dateValue = ref([]);

    return {
      dateValue
    };
  }
};
</script>`;

  const customPlaceholder = `<template>
  <div class="flex">
    <litepie-datepicker
      placeholder="My Placeholder"
      v-model="dateValue"
    ></litepie-datepicker>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MyComponent',
  setup() {
    const dateValue = ref([]);

    return {
      dateValue
    };
  }
};
</script>`;

  const separator = `<template>
  <div class="flex">
    <litepie-datepicker
      separator=" to "
      v-model="dateValue"
    ></litepie-datepicker>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MyComponent',
  setup() {
    const dateValue = ref([]);

    return {
      dateValue
    };
  }
};
</script>`;

  const formatter = `<template>
  <div class="flex">
    <litepie-datepicker
      :formatter="formatter"
      v-model="dateValue"
    ></litepie-datepicker>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MyComponent',
  setup() {
    const dateValue = ref([]);
    const formatter = ref({
      date: 'DD MMM YYYY',
      month: 'MMM'
    })

    return {
      dateValue,
      formatter
    };
  }
};
</script>`;

  const autoApply = `<template>
  <div class="flex">
    <litepie-datepicker
      :auto-apply="false"
      v-model="dateValue"
    ></litepie-datepicker>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MyComponent',
  setup() {
    const dateValue = ref([]);

    return {
      dateValue
    };
  }
};
</script>`;

  const startFrom = `<template>
  <div class="flex">
    <litepie-datepicker
      :start-from="startFrom"
      v-model="dateValue"
    ></litepie-datepicker>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MyComponent',
  setup() {
    const dateValue = ref([]);
    const startFrom = new Date(2020, 0, 1);

    return {
      dateValue,
      startFrom
    };
  }
};
</script>`;

  const shortcuts = `<template>
  <div class="flex">
    <litepie-datepicker
      :shortcuts="false"
      v-model="dateValue"
    ></litepie-datepicker>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MyComponent',
  setup() {
    const dateValue = ref([]);

    return {
      dateValue
    };
  }
};
</script>`;

  const disableDate = `<template>
  <div class="flex">
    <litepie-datepicker
      :disable-date="dDate"
      v-model="dateValue"
    ></litepie-datepicker>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MyComponent',
  setup() {
    const dateValue = ref([]);
    const dDate = (date) => {
      return date < new Date() || date > new Date(2023, 0, 8);
    }

    return {
      dateValue,
      dDate
    };
  }
};
</script>`;

  const disableInRange = `<template>
  <div class="flex">
    <litepie-datepicker
      :disable-date="dDate"
      :disable-in-range="false"
      v-model="dateValue"
    ></litepie-datepicker>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MyComponent',
  setup() {
    const dateValue = ref([]);
    const dDate = (date) => {
      return date < new Date() || date > new Date(2023, 0, 8);
    }

    return {
      dateValue,
      dDate
    };
  }
};
</script>`;

  const trigger = `<template>
  <div class="flex">
    <div class="flex-1">
      <litepie-datepicker
        trigger="open-datepicker"
        v-model="dateValue"
      ></litepie-datepicker>
    </div>
    <div class="flex-shrink-0 ml-4">
      <button
        type="button"
        id="open-datepicker"
        class="px-3 py-2 rounded-md bg-light-blue-500 text-white font-medium focus:outline-none"
      >
        Open
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MyComponent',
  setup() {
    const dateValue = ref([]);

    return {
      dateValue
    };
  }
};
</script>`;

  const useSlot = `<template>
  <div class="flex">
    <litepie-datepicker
      v-model="dateValue"
      v-slot="{ value }"
    >
      <button
        type="button"
        class="w-full sm:w-auto flex-none bg-gray-50 text-gray-400 hover:text-gray-900 leading-6 py-3 sm:px-6 border border-gray-200 rounded-xl flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition ease-out duration-300"
      >
        <span class="text-gray-900">
          {{ value || 'Litepie datepicker' }}
        </span>
      </button>
    </litepie-datepicker>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MyComponent',
  setup() {
    const dateValue = ref([]);

    return {
      dateValue
    };
  }
};
</script>`;

  return {
    twConfig,
    itWorks,
    playground: {
      defaults,
      overlay,
      asSingle,
      asSingleWithRange,
      customPlaceholder,
      separator,
      formatter,
      autoApply,
      startFrom,
      shortcuts,
      disableDate,
      disableInRange,
      trigger,
      useSlot
    }
  };
};
