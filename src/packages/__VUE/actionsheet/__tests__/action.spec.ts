import Icon from '../../icon/index.vue';
import ActionSheet from '../index.vue';

import { mount } from '@vue/test-utils';
test('base', () => {
  const wrapper = mount(ActionSheet, {
    props: {
      visible: true
    }
  });
});
