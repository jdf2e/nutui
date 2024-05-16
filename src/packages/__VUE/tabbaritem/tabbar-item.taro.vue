<template>
  <div class="nut-tabbar-item" :class="{ 'nut-tabbar-item__icon--unactive': !active }" :style="{
    color: activeColor
  }" @click="change">
    <nut-badge v-bind="$attrs">
      <view class="nut-tabbar-item_icon-box">
        <div v-if="$slots.icon" class="nut-tabbar-item_icon-box_icon">
          <slot name="icon" :active="active"></slot>
        </div>
        <view v-if="icon && !$slots.icon">
          <component :is="renderIcon(icon)" class="nut-popover-item-img"></component>
        </view>

        <view
          :class="['nut-tabbar-item_icon-box_nav-word', { 'nut-tabbar-item_icon-box_big-word': !icon && !$slots.icon }]">
          <slot>
            <view v-if="tabTitle">{{ tabTitle }}</view>
          </slot>
        </view>
      </view>
    </nut-badge>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { renderIcon } from '@/packages/utils/create'
import { useRouter } from '@/packages/utils/useRoute'
import { useParent } from '@/packages/utils'
import { TABBAR_KEY } from '../tabbar/types'
import NutBadge from '../badge/index.taro'

defineOptions({
  name: 'NutTabbarItem'
})

export type TabbarItemProps = Partial<{
  tabTitle: string
  name: string
  icon: any
  /**
   * @deprecated It will be removed in next major version.
   */
  href: string
  /**
   * @deprecated It will be removed in next major version.
   */
  to: string | Record<never, any>
}>

const props = withDefaults(defineProps<TabbarItemProps>(), {
  tabTitle: '',
  href: ''
})

const router = useRouter()
const { parent, index } = useParent(TABBAR_KEY)

const active = computed(() => (props.name ?? index.value) === parent.activeIndex.value)
const activeColor = computed(() => (active.value ? parent.props.activeColor : parent.props.unactiveColor))

const change = async () => {
  try {
    const key = props.name ?? index.value
    await parent.changeIndex(index.value, key)

    if (parent.children[index.value]?.href) {
      window.location.href = parent.children[index.value].href
      return
    }

    if (parent.children[index.value]?.to) {
      const to = parent.children[index.value].to
      if (to && router) {
        router.push(to)
      } else {
        location.replace(to)
      }
    }
  } catch (err) { }
}
</script>
