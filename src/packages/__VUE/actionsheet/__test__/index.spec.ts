import { config, mount } from '@vue/test-utils';
import ActionSheet from '../index.vue';
import NutIcon from '../../icon/index.vue';
import NutPopup from '../../icon/index.vue';

beforeAll(() => {
  config.global.components = {
    NutIcon,
    NutPopup
  };
});

afterAll(() => {
  config.global.components = {};
});

test('should render shortpassword when visible is true', async () => {
  const wrapper = mount(ActionSheet, {
    props: {
      visible: true
    }
  });
});
