'use strict';
import Vue from "vue"
import App from './app.vue'
// 路由对象
import VueRouter from 'vue-router'

Vue.use(VueRouter);
//mintui
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//使用vue-drawer-layout
import {DrawerLayout} from 'vue-drawer-layout'
Vue.component(DrawerLayout.name, DrawerLayout);
//mui
import './static/css/mui.min.css'
import './static/js/iconfont.js'
//自定义背景样式
import './static/css/beijingse.css'
// axios
import Axios from 'axios'
Axios.defaults.withCredentials=true;
Vue.prototype.$axios = Axios;
Axios.defaults.withCredentials = false;
Axios.defaults.baseURL='http://oa.yuanbensheng.net';
// Axios.interceptors.request.use(function(config){
//     //显示图标
//     Indicator.open({
//         text: '加载中...',
//         spinnerType: 'fading-circle'
//     });
//     return config;
// });
// Axios.interceptors.response.use(function(config){
//     //隐藏图标
//     Indicator.close();
//     //获取到config中的data，进行加工
//     return config;
// });

// //moment
// import Moment from 'moment'
//引入地图组件
import VueAMap  from 'vue-amap';
Vue.use(VueAMap );
VueAMap.initAMapApiLoader({
    key: '92010b42f6c0663dd6ecd6250d32f833',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4'
});
//自定义过滤器（改变时间日期格式），以及全局样式
// Vue.filter('dateChange',function (value) {
//      return Moment(value).format('YYYY-MM-DD')
// });
import Home from './components/home/home.vue';
import top_on from './components/common/top_on.vue';
Vue.component('top_on',top_on);
import About from './components/home/about.vue';
import Map from './components/home/map.vue';
Vue.component('ymap',Map);
import Apidownload from './components/home/part/apiDownload.vue'
Vue.component('apiDownLoad',Apidownload);
import CompanyAnimate from './components/home/companyAnimate.vue'
import Item from './components/home/part/item.vue'
Vue.component('item',Item);
import Organization from './components/home/staticComponent/organization.vue'
Vue.component('organization',Organization);
import HealthyFood from './components/home/healthFood.vue'
import RecipeTitle from './components/home/part/recipeTitle.vue'
Vue.component('recipeTitle',RecipeTitle);
import Common from './components/home/staticComponent/common.vue'
Vue.component('common',Common);
import Contract from './components/home/contract.vue'
import Join_us from './components/home/join_us.vue'
import Recrut from './components/home/recruit.vue'
import Download from  './components/home/download.vue'
import MarketDetail from './components/home/marketDetail.vue'
import NavBar from './components/common/navBar.vue'
Vue.component('navBar',NavBar);
import Beian from './components/common/beian.vue'
Vue.component('beian',Beian);

let router = new VueRouter({
    linkActiveClass:'active',
    routes:[
        { path:'/',redirect:{ name:'home' }},
        { name:'home',path:'/home',component:Home },
        { name:'about',path:'/about',component:About},
        { name:'map',path:'/map',component:Map },
        { name:'companyAnimate',path:'/companyAnimate',component:CompanyAnimate},
        { name:'healthyFood',path:'/healthyFood',component:HealthyFood},
        { name:'contract',path:'/contract',component:Contract },
        { name:'join_us',path:'/join_us',component:Join_us },
        { name:'recruit',path:'/recruit',component:Recrut },
        { name:'download',path:'/download',component:Download },
        { name:'marketDetail',path:'/marketDetail',component:MarketDetail}

    ]
});
// 创建vue实例
new Vue({
    el : "#app",
    router:router,
    render : function (callback) {
        return callback(App);
    },
    components:{ App }
});