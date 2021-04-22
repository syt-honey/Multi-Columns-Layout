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

img {
  width: 100%;
}

p {
  word-break: break-word;
  text-align: start;
}
</style>