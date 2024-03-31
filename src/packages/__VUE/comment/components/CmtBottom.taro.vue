<template>
  <view class="nut-comment-bottom">
    <view class="nut-comment-bottom__lable" @click="handleClick">
      <span v-if="type != 'complex'" style="display: inline">{{ info.size }}</span>
    </view
    >

    <view class="nut-comment-bottom__cpx">
      <template v-for="(name, i) in mergeOp" :key="i">
        <view :class="['nut-comment-bottom__cpx-item', `nut-comment-bottom__cpx-item--${name}`]" @click="operate(name)">
          <template v-if="name != 'more'">
            <span>{{ info[name] }}</span>
            <Fabulous v-if="name == 'like'"></Fabulous>
            <Comment v-else></Comment>
          </template>
          <template v-if="name == 'more'">
            <MoreX></MoreX>
            <view v-if="showPopver" class="nut-comment-bottom__cpx-item-popover" @click="operate('popover')">
              {{
                translate('complaintsText')
              }}
            </view>
          </template>
        </view>
      </template>
    </view>
  </view>
</template>
<script lang="ts">
import { ref, onMounted, PropType } from 'vue'
import { Fabulous, Comment, MoreX } from '@nutui/icons-vue-taro'
import { createComponent } from '@/packages/utils/create'
import { useLocale } from '@/packages/utils/useLocale'

const { create } = createComponent('comment-bottom')
const cN = 'NutComment'

export default create({
  props: {
    type: {
      type: String,
      default: 'base' // simple，base，complex
    },
    info: {
      type: Object,
      default: () => ({})
    },

    operation: {
      type: Array as PropType<string[]>,
      default: ['replay', 'like', 'more']
    }
  },
  components: { Fabulous, Comment, MoreX },
  emits: ['clickOperate', 'handleClick'],
  setup(props, { emit }) {
    const translate = useLocale(cN)
    const showPopver = ref(false)

    const mergeOp = ref([])

    onMounted(() => {
      const deOp = ['replay', 'like', 'more']

      if (props.operation) {
        props.operation.forEach((name: string) => {
          if (deOp.includes(name)) {
            (mergeOp.value as any).push(name)
          }
        })
      }
    })

    const operate = (type: string) => {
      if (type == 'more') {
        showPopver.value = !showPopver.value
      }

      emit('clickOperate', type)
    }

    const handleClick = () => {
      emit('handleClick')
    }

    return { showPopver, operate, mergeOp, handleClick, translate }
  }
})
</script>
