<template>
  <div id="app">
    <multi-columns-container>
      <template v-for="(pic, index) in picList">
        <multi-columns-item :pic="pic" :key="index"></multi-columns-item>
      </template>
    </multi-columns-container>
  </div>
</template>

<script>
import MultiColumnsContainer from "./components/MultiColumnsContainer/index.vue";
import MultiColumnsItem from "./components/MultiColumnsItem/index.vue";

export default {
  name: "App",
  components: {
    MultiColumnsContainer,
    MultiColumnsItem,
  },
  data() {
    return {
      picList: [
        "https://video.yingtu.co/1101008450369884160/155227981995862290.jpg",
        "https://video.yingtu.co/1184005967549829120/159505991161879756.jpg",
        "http://img.alicdn.com/imgextra/i4/4058337907/O1CN01YJhaBq28HSHy3jNBr_!!4058337907-0-lubanu-s.jpg_800x800q90.jpg",
        "http://img.alicdn.com/imgextra/i4/2208008850922/O1CN01h36s0y1IgJlppOz4d_!!0-item_pic.jpg_800x800q90.jpg",
        "http://img.alicdn.com/imgextra/i1/4058337907/O1CN01omewVQ28HSHYIkNBG_!!0-item_pic.jpg_800x800q90.jpg",
        "http://img.alicdn.com/imgextra/i4/2208008850922/O1CN01v55qm21IgJmc38jv6_!!0-item_pic.jpg_800x800q90.jpg",
        "https://video.yingtu.co/1184005967549829120/1599203678119552860.jpg",
        "http://img.alicdn.com/imgextra/i4/2208008850922/O1CN01TCCNyA1IgJmSuqrMt_!!2208008850922.jpg_800x800q90.jpg",
        "http://img.alicdn.com/imgextra/i2/475325704/O1CN01AZ918A1s0Th02XWEm_!!0-item_pic.jpg_800x800q90.jpg",
        "http://img.alicdn.com/imgextra/i2/2208008850922/O1CN01bcWvC81IgJm5HHJcY_!!0-item_pic.jpg_800x800q90.jpg",
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
