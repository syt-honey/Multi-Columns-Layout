# Multi-Columns-Layout

This is a multi-column layout scheme of Vue 2.x version. Currently implemented using `grid` layout.

## Install
```
npm i multi-columns-layout -S
```

## Quick Start

```vue
// main.js
import Vue from 'vue';
import MultiColumnsContainer from "multi-columns-layout";

Vue.use(MultiColumnsContainer);

// your-component.vue
<multi-columns-container>
    <multi-columns-item v-for="(item, index) in picList" :key="index">
        <p>{{item}}</p>
    </multi-columns-item>
</multi-columns-container>
```

## Issues

If you have any questions, please submit [issues](https://github.com/syt-honey/Multi-Columns-Layout/issues), your feedback is very precious to me.
