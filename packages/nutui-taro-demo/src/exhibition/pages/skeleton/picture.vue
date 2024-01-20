<template>
  <div class="skeleton-picture">
    <nut-skeleton width="250px" height="15px" title animated row="3" class="item"> </nut-skeleton>
    <nut-skeleton width="250px" height="15px" title animated row="3" class="item"> </nut-skeleton>
  </div>
</template>
<style>
.skeleton-picture {
  display: flex;
  justify-content: space-between;
}
.skeleton-picture .item {
  width: 47%;
}
</style>
