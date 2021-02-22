<template>
  <div>
    <h1>slot-demo</h1>
    <slot-base>{{title}}</slot-base>
    <slot-scop>
      <template v-slot="slotProps">{{slotProps.user.name}}</template>
    </slot-scop>
    <slot-name>
      <template v-slot:header>
        <p>hahah,我是头部</p>
      </template>
      <p>A paragraph for the main content.</p>
      <p>任何没有被包裹在带有 v-slot 的 template 中的内容都会被视为默认插槽的内容。</p>
      <template v-slot:footer>
        <p>hahah,我是底部</p>
      </template>
    </slot-name>
  </div>
</template>

<script>
import SlotBase from "./slot-base";
import SlotScop from "./slot-scop";
import SlotName from "./slot-name";
export default {
  components: {
    SlotBase,
    SlotScop,
    SlotName
  },
  data() {
    return {
      title: "slot的基本使用"
    };
  },

  methods: {}
};
</script>
<style scoped>
</style>


