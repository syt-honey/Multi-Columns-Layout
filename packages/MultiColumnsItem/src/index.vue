<template>
  <div class="grid-item">
    <div class="grid-item--content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultiColumnsItem",
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style scoped>
@import "./index.css";
</style>