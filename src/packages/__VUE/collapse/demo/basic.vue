<template>
  <nut-collapse>
    <nut-collapse-item name="name1" title="Title 1"> Content 1 </nut-collapse-item>
    <nut-collapse-item name="name2" title="Title 2" value="Description"> Content 2 </nut-collapse-item>
    <nut-collapse-item name="name3">
      <template #title> Title 3 </template>
      <template #value> Description </template>
      Content 3
    </nut-collapse-item>
  </nut-collapse>
</template>
