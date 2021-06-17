<script lang="ts">
import { createComponent } from '../../utils/create';
const { create } = createComponent('layout');
import Row from '../row/index.vue';
import Col from '../col/index.vue';
export default create({
  children: [Row, Col]
});
</script>

<style lang="scss"></style>
