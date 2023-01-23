import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(VueAxios, axios);
app.use(router);

app.mount("#app");
