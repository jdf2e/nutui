<template>
    <div>
      <nut-radiogroup>
          <nut-radio label="禁用">备选项1</nut-radio>
          <nut-radio label="禁用2">备选项2</nut-radio>
      </nut-radiogroup>
    </div>
</template>

<script>
export default {
  data() {
    return {
      myData:[
        {
          id:1,
          text:'备选项1',
          label:'a',
        },
        {
          id:2,
          text:'备选项2',
          label:'b',
        },
        {
          id:3,
          text:'备选项3',
          label:'c'
        },
      ]
    };
  },
  methods: {
      
  }
};
</script>

<style lang="scss" scoped>

</style>
