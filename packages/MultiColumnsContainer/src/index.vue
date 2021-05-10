<template>
  <div
    class="multi-column-container"
    :style="{
      'grid-row-gap': rowGap,
      'grid-column-gap': columnGap,
      'grid-auto-rows': rowHeight
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MultiColumnsContainer",
  props: {
    columnGap: {
      type: String,
      default: "10px"
    },
    rowGap: {
      type: String,
      default: "10px"
    },
    rowHeight: {
      type: String,
      default: "20px"
    }
  },
  data() {
    return {
      rowGapInner: "",
      rowHeightInner: ""
    };
  },

  mounted() {
    // get gap、auto-rows of container 
    const grid = document.getElementsByClassName("multi-column-container")[0];
    this.rowGapInner = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
    );
    this.rowHeightInner = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
    );

    // Check if there is an img, if so, need to wait for it to load before calculating the height
    // TODO: to support more  multimedia
    const allImg = document.querySelectorAll("img");

    if (allImg.length) {
      Array.from(allImg).map((item, index) => {
        item.addEventListener("load", () => {
          if (index === allImg.length - 1) {
            this.positionInit();
          }
          item.removeEventListener("load", () => {});
        });
      });
    }

    window.onresize = () => {
      this.positionInit();
    };
  },

  methods: {
    positionInit() {
      // TODO: It can be optimized, if it is not the first time, there is no need to recalculate the positions of all items
      const allItems = document.getElementsByClassName("grid-item");
      Array.from(allItems).map((item) => {
        this.setPosition(item);
      });
    },
    setPosition(item) {
      const content = item.querySelector(".grid-item--content");
      let span = Math.ceil(
        content.getBoundingClientRect().height /
          (this.rowHeightInner + this.rowGapInner)
      );
      let rowEnd = "span " + span;
      item.style.gridRowEnd = rowEnd;
    }
  }
};
</script>


<style scoped>
@import "./index.css";
</style>
