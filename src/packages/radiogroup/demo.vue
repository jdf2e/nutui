<template>
    <div>
      <nut-radiogroup :groupData="myData">
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
