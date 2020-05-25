export default {
  methods: {
    findCptUpward(cptName) {
      let parentCpt = this.$parent;

      while (parentCpt) {
        if (parentCpt.$options.name === cptName) {
          this.parent = parentCpt;
          break;
        }

        parentCpt = parent.$parent;
      }
    }
  }
};
