import MultiColumnsContainer from "./MultiColumnsContainer";
import MultiColumnsItem from "./MultiColumnsItem";

const components = [
    MultiColumnsContainer,
    MultiColumnsItem
]

const install = (Vue) => {
    if (install.installed) return;
    components.map(component => Vue.component(component.name, component));
}

if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    MultiColumnsContainer,
    MultiColumnsItem
}