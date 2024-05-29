import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import axios from "axios";
import store from "@/store/vuex";

const app = createApp(App)


app.use(router);
app.use(axios);
app.use(store);
app.mount('#app')
