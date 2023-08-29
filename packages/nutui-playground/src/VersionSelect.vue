<script setup lang="ts">
import { onMounted, ref } from 'vue';

const expanded = ref(false);
const versions = ref<string[]>();
const props = defineProps<{
  pkg: string;
  label: string;
  modelValue: string;
}>();
const emits = defineEmits(['update:modelValue']);

async function toggle() {
  expanded.value = !expanded.value;
  if (!versions.value) {
    versions.value = await fetchVersions();
  }
}

async function fetchVersions(): Promise<string[]> {
  const res = await fetch(`https://data.jsdelivr.com/v1/package/npm/${props.pkg}`);
  const { versions } = (await res.json()) as { versions: string[] };

  if (props.pkg === '@nutui/nutui') {
    const filteredVersions = (versions as any).filter((i) => {
      return !i.includes('-') && i >= '4.1.0';
    });
    return filteredVersions;
  }
  return versions;
}

function setVersion(v: string) {
  emits('update:modelValue', v);
  expanded.value = false;
}

onMounted(() => {
  window.addEventListener('click', () => {
    expanded.value = false;
  });
  window.addEventListener('blur', () => {
    if (document.activeElement?.tagName === 'IFRAME') {
      expanded.value = false;
    }
  });
});
</script>

<template>
  <div class="version" @click.stop>
    <span class="active-version" @click="toggle">
      {{ label }}
      <span class="number">{{ props.modelValue }}</span>
    </span>

    <ul class="versions" :class="{ expanded }">
      <li v-if="!versions"><a>loading versions...</a></li>
      <li v-for="version of versions" :key="version">
        <a @click="setVersion(version)">v{{ version }}</a>
      </li>
      <div @click="expanded = false">
        <slot />
      </div>
    </ul>
  </div>
</template>

<style>
.version {
  margin-right: 12px;
  position: relative;
}

.active-version {
  cursor: pointer;
  position: relative;
  display: inline-flex;
  place-items: center;
}

.active-version .number {
  color: var(--green);
  margin-left: 4px;
}

.active-version::after {
  content: '';
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 6px solid #aaa;
  margin-left: 8px;
}
</style>
