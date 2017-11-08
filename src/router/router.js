
import Index from '../components/index/index.vue';
import TestToast from '../components/TestToast/testToast.vue';

export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            name: '测试弹出层',
            component: TestToast,
            redirect: '/testToast',
            children: [
                { path: "testToast",component: TestToast }
            ]
        },
        {
            path: '/index',
            name: '首页',
            component: Index
        }
    ]
};