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
    MultiColumnsItem
  },
  data() {
    return {
      picList: [
        "https://hbimg.huabanimg.com/37b8855c0471a83ac4a8ce636cfec235eec06ba653282b-fYAqhN_fw658/format/webp",
        "https://video.yingtu.co/1184005967549829120/159505991161879756.jpg",
        "https://hbimg.huabanimg.com/5a7bca3060861b58a2f10c54dbb250cf0fdb185d3e94-0Xxpkk_/fw/480/format/webp",
        "https://hbimg.huabanimg.com/36ca02a7036816bda916e8c990756cfcf4f84ab11f52cd-AHqQM7_/fw/480/format/webp",
        "https://hbimg.huabanimg.com/fcd1b3c0949180f459a769e2b7b04fa41787d7b7184e3-4X1aRk_/fw/480/format/webp",
        "https://hbimg.huabanimg.com/a0e13b02b4220fa452fe5a655b1bede2effa72c37b07-AOB1Pl_/fw/480/format/webp",
        "https://hbimg.huabanimg.com/9795a671fe8959d4b5e94b1790feb324befae2d45742f-5C5j59_/fw/480/format/webp",
        "https://hbimg.huabanimg.com/842e8420e74de4a0f4e061acb6454fea94ec472124207d-c2SVSn_/fw/480/format/webp",
        "https://hbimg.huabanimg.com/b7904dc8963e2e9870b003998c6f8ef2379a45cf5db50-4z7esL_/fw/480/format/webp",
        "https://hbimg.huabanimg.com/eb4973dcaaae2795ffc696c4c33406a04f83e8452bd95-eK6lJY_/fw/480/format/webp",
        "https://hbimg.huabanimg.com/37b8855c0471a83ac4a8ce636cfec235eec06ba653282b-fYAqhN_fw658/format/webp",
        "https://video.yingtu.co/1184005967549829120/159505991161879756.jpg",
        "https://hbimg.huabanimg.com/5a7bca3060861b58a2f10c54dbb250cf0fdb185d3e94-0Xxpkk_/fw/480/format/webp",
        "https://hbimg.huabanimg.com/36ca02a7036816bda916e8c990756cfcf4f84ab11f52cd-AHqQM7_/fw/480/format/webp",
        "https://hbimg.huabanimg.com/fcd1b3c0949180f459a769e2b7b04fa41787d7b7184e3-4X1aRk_/fw/480/format/webp"
      ]
    };
  }
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
