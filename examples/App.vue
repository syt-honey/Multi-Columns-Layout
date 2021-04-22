<template>
  <div id="app">
    <multi-columns-container></multi-columns-container>
  </div>
</template>

<script>
import MultiColumnsContainer from "./components/Multi-Columns-Layout";

export default {
  name: "App",
  components: {
    MultiColumnsContainer
  },
  data() {
    return {};
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
