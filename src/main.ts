import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 额外引入图标库
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';

import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ArcoVue);
app.use(ArcoVueIcon);
app.mount('#app')


