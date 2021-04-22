import Main from "./examples/components/Main";
import _Vue from "vue";

Main.install = (Vue) => {
    if (!Vue) {
        window.Vue = Vue = _Vue;
    }
    Vue.component(Main.name, Main);
}

export default Main;