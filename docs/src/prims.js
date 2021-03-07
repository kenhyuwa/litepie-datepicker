import { defineComponent, h } from 'vue';
import Prism from 'prismjs';

export default defineComponent({
  name: 'VPrims',
  props: {
    code: String,
    inline: Boolean,
    language: {
      type: String,
      default: 'markup'
    }
  },
  setup(props, { slots, attrs }) {
    const slotsData = (slots && slots.default && slots.default()) || [];
    const code =
      props.code || (slotsData.length > 0 ? slotsData[0].children : '');
    const prismLanguage = Prism.languages[props.language];
    const className = `language-${props.language}`;
    const d = Prism.highlight(code, prismLanguage);
    if (props.inline) {
      return () =>
        h('code', {
          ...attrs,
          class: [attrs.class, className],
          innerHTML: d
        });
    }
    return () =>
      h('pre', { ...attrs, class: [attrs.class, className] }, [
        h('code', {
          class: className,
          innerHTML: d
        })
      ]);
  }
});
