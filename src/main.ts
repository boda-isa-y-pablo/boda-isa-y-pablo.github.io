import "./styles/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";
import { loadHeartShape } from "@tsparticles/shape-heart";

const app = createApp(App);

app.use(Particles, {
    init: async (engine) => {
        // await loadHeartShape(tsParticles);
        await loadHeartShape(engine, true);
        await loadFull(engine, true);
    },
});

app.mount("#app");
