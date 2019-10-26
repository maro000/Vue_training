var app = new Vue({
    el : '#app',
    data:{
        ok:true,
        message:{
            value:'Vue.js!'
        },
        count:0,
        list:['apple','banana','storoberry'],
        num:1
    },
    methods:{
        increment: function(){
            this.count +=1;
        }
    }
})