<template>
  <view :class="classes">
    <nut-icon color="#808080" :name="uploadIcon"></nut-icon>
    <input type="file" :name="name" @change="onChange" />
  </view>
</template>

<script lang="ts">
import { computed } from 'vue';
import { createComponent } from '@/utils/create';
import Icon from '@/packages/icon/index.vue';
const { componentName, create } = createComponent('uploader');

export default create({
  props: {
    name: { type: String, default: 'file' },
    url: { type: String, default: '' },
    defaultFileList: { type: Array, default: [] },
    fileList: { type: Array, default: [] },
    isPreview: { type: Boolean, default: true },
    isDeletable: { type: Boolean, default: true },
    method: { type: String, default: 'post' },
    capture: { type: String, default: '' },
    maxSize: { type: [Number, String], default: 1024 * 1024 * 5 },
    maxCount: { type: [Number, String], default: 1 },
    clearInput: { type: Boolean, default: false },
    acceptType: { type: String, default: '' },
    headers: { type: Object, default: {} },
    formData: { type: Object, default: {} },
    uploadIcon: { type: String, default: 'photograph' },
    xhrState: { type: [Number, String], default: 200 },
    withCredentials: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    beforeUpload: { type: Function },
    beforeDelete: { type: Function },
    onChange: { type: Function },
    customRequest: { type: Function }
  },
  components: {
    [Icon.name]: Icon
  },
  emits: ['start', 'progress', 'oversize', 'success', 'failure', 'on-change'],
  setup(props, { emit }) {
    console.log(props);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const onChange = (event: Event) => {
      emit('on-change', event);
    };

    return {
      onChange,
      classes
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
