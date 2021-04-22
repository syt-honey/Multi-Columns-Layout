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
    // 获取 container 中的 gap、auto-rows
    const grid = document.getElementsByClassName("multi-column-container")[0];
    this.rowGapInner = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
    );
    this.rowHeightInner = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
    );

    // 查看是否有 img，如果有的话需要等待其加载完才计算高度
    // TODO 支持更多媒体资源
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
      // TODO 可以优化，如果不是第一次的话，不需要将所有的 items 的位置都重新计算一遍
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
