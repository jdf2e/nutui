<template>
  <nut-cell>
    <nut-trend-arrow :rate="10.2365" rise-color="rgb(73,143,242)" />
    <nut-trend-arrow :rate="-0.2535" show-sign drop-color="rgb(255, 190, 13)" />
    <nut-trend-arrow
      :sync-text-color="false"
      show-sign
      :rate="-0.2535"
      text-color="rgb(39,197,48)"
      drop-color="rgb(255, 190, 13)"
    />
  </nut-cell>
</template>
