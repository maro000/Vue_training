var app = new Vue({
    el : '#app',
    data:{
        name:'キマイラ',
        ok:true,
        message:{
            value:'Vue.js!'
        },
        count:0,
        list: [
            {id : 1, name:'slime',hp: 100},
            {id : 2, name:'goblin',hp: 200},
            {id : 3, name:'dragon',hp: 500}
        ],
        num:1
    },
    methods:{
        increment: function(){
            this.count +=1;
        },
        doAdd:function(){
            var max=this.list.reduce(function(a,b,){
                return a > b.id ? a : b.id
            },0)
            this.list.push({
                id: max+1,
                name:this.name,
                hp:500
            })
        },
        doRemove:function(index){
            this.list.splice(index,1)
        }   
    }
})