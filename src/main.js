import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { VueEditor } from "vue3-editor";
// import "./assets/main.css";
import Vuex from "vuex";
import store from "@/store/store";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

const app = createApp(App);
app.component("VueEditor", VueEditor);
app.use(router);
app.use(Vuex);
app.use(store);

app.mount("#app");
