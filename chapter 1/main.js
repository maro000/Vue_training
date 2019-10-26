var app = new Vue({
    el : '#app',
    data : {
        message :'初期メッセージ',
        list: ['apple','banana', 'stoloberry' ],
        show: true

    },
    methods:{
        handleClick : function(event){
            alert(event.target)
        }
    }
})

