// 常數 時鐘 = { 資料 () {} }
const clock = {
    data() {
        return {
            h: 99,
            m: 99,
            s: 99
        }
    },
    methods: {
        // 更新時鐘
        updateClock() {
            var date = new Date();
            console.log(date);
        }
    },
    mounted() {
        this.updateClock();
    }
};

// Vue 建立 APP(常數時鐘).安裝("ID 時鐘")
Vue.createApp(clock).mount("#clock");