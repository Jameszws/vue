import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router/router.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './components/app.vue';

Vue.use(VueRouter);
const router = new VueRouter(routes);

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
    el:"#app",
    router,
    components:{App}
});
