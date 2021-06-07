<script lang="ts">
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('layout');
import Row from '@/packages/__VUE/row/index.vue';
import Col from '@/packages/__VUE/col/index.vue';
export default create({
  children: [Row, Col]
});
</script>

<style lang="scss"></style>
