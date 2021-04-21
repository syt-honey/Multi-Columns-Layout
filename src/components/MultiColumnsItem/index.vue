<template>
  <div class="grid-item">
    <div class="grid-item--content">
      <img :src="pic" alt="pic" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MultiColumnsItem",
  props: {
    pic: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>