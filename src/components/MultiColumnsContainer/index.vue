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
    return {
      rowGap: "",
      rowHeight: ""
    };
  },

  mounted() {
    const grid = document.getElementsByClassName("multi-column-container")[0];
    this.rowGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
    );
    this.rowHeight = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
    );

    this.positionInit();

    window.onresize = () => {
      this.positionInit();
    };
  },

  methods: {
    positionInit() {
      // 可以优化
      const allItems = document.getElementsByClassName("grid-item");
      Array.from(allItems).map((item) => {
        this.setPosition(item);
      });
    },
    setPosition(item) {
      const content = item.querySelector(".grid-item--content");
      let span = Math.ceil(
        content.getBoundingClientRect().height / (this.rowHeight + this.rowGap)
      );
      let rowEnd = "span " + span;
      item.style.gridRowEnd = rowEnd;
    }
  },

  destroyed: {
    // window.onresize
  }
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
