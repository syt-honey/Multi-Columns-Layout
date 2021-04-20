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
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
img {
  width: 200px;
  /* height: 400px; */
}
</style>