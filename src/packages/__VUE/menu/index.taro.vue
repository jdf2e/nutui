<template>
  <view>
    <nut-popup
      v-bind="$attrs"
      v-model:visible="showMask"
      @close="handleClose"
    ></nut-popup>
    <div :class="classes" :style="{ 'z-index': nutMenuIndex }">
      <div class="title-list">
        <div
          v-for="(menu, index) in menuList"
          :key="index"
          class="title"
          :class="{
            'is-active': activeTitle === menu.title,
            disabled: menu.disabled
          }"
          @click="!menu.disabled && handleClickTitle(menu.title, index)"
        >
          {{ menu.title }}
          <nut-icon
            size="10"
            color="#333"
            name="arrow-up"
            v-if="activeTitle === menu.title"
          ></nut-icon>
          <nut-icon size="10" color="#999" name="arrow-down" v-else></nut-icon>
        </div>
      </div>
      <div
        :key="index"
        v-for="(menu, index) in menuList"
        v-show="hasOptions && activeTitle === menu.title"
        class="option-list"
      >
        <ul>
          <li
            v-for="(option, index2) in menu.options"
            :key="index2"
            @click="handleClickOption(option.text, index, option.value)"
            :style="styleObj"
          >
            <nut-icon
              size="20"
              :color="activeColor"
              name="Check"
              v-if="menu.title === option.text"
            ></nut-icon
            >{{ option.text }}
          </li>
        </ul>
      </div>
      <view v-show="!hasOptions && isShowCustomer" class="customer-item">
        <slot></slot>
      </view>
    </div>
  </view>
</template>
<script lang="ts">
import { toRefs, ref, computed, onMounted, reactive, toRaw } from 'vue';
import { createComponent } from '../../utils/create';
import Icon from '../icon/index.vue';
const { componentName, create } = createComponent('menu');
export default create({
  components: {
    [Icon.name]: Icon
  },
  props: {
    col: {
      type: [String, Number],
      default: 1
    },
    activeColor: {
      type: String,
      default: '#f00'
    }
  },
  emits: ['choose'],
  setup(props, { slots, emit }) {
    interface IOption {
      text: string,
      value: string | number
    }

    interface IMenuItem {
      title: string,
      disabled: boolean,
      options?: Array<IOption>
    }

    const menuList:Array<IMenuItem> = reactive([]);
    let activeTitle = ref('');
    let showMask = ref(false);
    let styleObj = reactive({
      flexBasis: 100 / Number(props.col) + '%'
    });
    let nutMenuIndex = ref<String | Number>('auto');
    let hasOptions = ref(true);
    let isShowCustomer = ref(false);

    if(slots.default){
      for (let i = 0; i < slots.default().length; i++) {
        if ((slots.default()[i] as any).type['name'] === 'nut-menu-item') {
          let item:IMenuItem = {
            title: (slots.default()[i] as any).props['title'],
            disabled: !!(slots.default()[i] as any).props['disabled']
          };
          if ((slots.default()[i] as any).props['options']) {
            item['options'] = (slots.default()[i] as any).props['options'];
          } else {
            hasOptions.value = false;
          }
          menuList.push(item);
        }
      }
    }

    const handleClickTitle = (title: string, index: number) => {
      if (!hasOptions.value) {
        if (activeTitle.value) {
          activeTitle.value = '';
          isShowCustomer.value = false;
          showMask.value = false;
          nutMenuIndex.value = 'auto';
        } else {
          activeTitle.value = title;
          isShowCustomer.value = true;
          showMask.value = true;
          nutMenuIndex.value = 2001;
        }
        return;
      }

      if (menuList.length > 1) {
        if (activeTitle.value === title) {
          activeTitle.value = '';
          nutMenuIndex.value = 'auto';
          showMask.value = false;
        } else {
          activeTitle.value = title;
          nutMenuIndex.value = 2001;
          showMask.value = true;
        }
      } else {
        if (activeTitle.value) {
          activeTitle.value = '';
          nutMenuIndex.value = 'auto';
          showMask.value = false;
        } else {
          activeTitle.value = title;
          nutMenuIndex.value = 2001;
          showMask.value = true;
        }
      }
    };

    const handleClickOption = (text: string, index: number, value: string | number) => {
      menuList[index].title = text;
      activeTitle.value = '';
      showMask.value = false;
      nutMenuIndex.value = 'auto';
      emit('choose', text, value);
    };

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const handleClose = () => {
      activeTitle.value = '';
      nutMenuIndex.value = 'auto';

      if (isShowCustomer.value) {
        isShowCustomer.value = false;
      }
    };

    return {
      menuList,
      activeTitle,
      classes,
      showMask,
      styleObj,
      nutMenuIndex,
      hasOptions,
      isShowCustomer,
      handleClickTitle,
      handleClickOption,
      handleClose
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
