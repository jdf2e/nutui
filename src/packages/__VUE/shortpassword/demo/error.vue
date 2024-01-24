<template>
  <nut-cell title="Error Message" is-link @click="visible = true"></nut-cell>
  <nut-short-password
    v-model="value"
    v-model:visible="visible"
    :error-msg="errorMsg"
    @focus="showKeyboard = true"
    @complete="complete"
    @tips="onTips"
  >
  </nut-short-password>
  <nut-number-keyboard v-model="value" v-model:visible="showKeyboard" @blur="showKeyboard = false">
  </nut-number-keyboard>
</template>
<script setup>
import { ref } from 'vue';
const visible = ref(false);
const showKeyboard = ref(false);
const value = ref('');
const errorMsg = ref('Please enter correct password');
const complete = (value) => {
  console.log(value);
};
const onTips = () => {
  console.log('Execute forgotten password logic');
};
</script>
