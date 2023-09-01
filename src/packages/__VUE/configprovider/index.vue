<script lang="ts">
import { h } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { mapThemeVarsToCSSVars } from './common';

const { create } = createComponent('config-provider');

export default create({
  props: {
    theme: { type: String, default: '' },
    themeVars: { type: Object, default: {} },
    tag: { type: String, default: 'div' }
  },

  setup(props: any, { slots }: any) {
    return () => {
      const defaultSlots = slots.default?.();
      return h(
        props.tag,
        {
          class: `nut-theme-${props.theme}`,
          style: mapThemeVarsToCSSVars(props.themeVars)
        },
        defaultSlots
      );
    };
  }
});
</script>
