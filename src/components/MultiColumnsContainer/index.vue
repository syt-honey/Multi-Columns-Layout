<template>
  <div class="multi-column-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MultiColumnsContainer",
  props: {},
  data() {
    return {};
  },

  mounted() {
    const doc = document.getElementsByClassName("multi-column-container");
    console.log(doc);
  },
};
</script>


<style scoped>
.multi-column-container {
  display: grid;
  grid-gap: 10px;
  grid-auto-rows: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>
