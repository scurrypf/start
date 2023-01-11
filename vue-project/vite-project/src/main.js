import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import nativeUi from "naive-ui"

import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.use(nativeUi)

app.mount("#app");
