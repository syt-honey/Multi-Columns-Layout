import MultiColumnsContainer from "./src/index.vue";

MultiColumnsContainer.install = (Vue) => {
    Vue.component(MultiColumnsContainer.name, MultiColumnsContainer);
}

export default MultiColumnsContainer;
