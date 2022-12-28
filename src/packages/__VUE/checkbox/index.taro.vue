<script lang="ts">
import { createComponent } from '@/packages/utils/create';
const { create, componentName } = createComponent('checkbox');
import { component } from './common';
import { CheckNormal, Checked, CheckDisabled } from '@nutui/icons-vue-taro';

export default /* @__PURE__ */ create(component(componentName, { CheckNormal, Checked, CheckDisabled }));
</script>
