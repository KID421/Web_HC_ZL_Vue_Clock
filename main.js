// 常數 時鐘 = { 資料 () {} }
const clock = {
    data() {
        return {
            test: 19
        }
    }
};

// Vue 建立 APP(常數時鐘).安裝("ID 時鐘")
Vue.createApp(clock).mount("#clock");