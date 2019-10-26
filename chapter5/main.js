Vue.component('my-component',{
    // テンプレート
    template : '<comp-child></comp-child>',
    // データをオブジェクトを返す関数にする
    data : function(){
        return {
            message: 'Hello Vue.js'
        }
    },
    method: {
        // メゾッドや算出プロパティ、ウォッチャなどの定義方法は
        // ルートコンストラクタのオプションと同じ
    }
})
Vue.component('comp-child',{
    template : '<li>{{name}} HP.{{hp}}¥
    <button v-on:click="doAttack">攻撃する</button></li>',
    props : ['name','hp']
})
Vue.component('')
new Vue({
    el : '#app',
    data:{
        list:[
            {id : 1, name : 'slime', hp : 100},
            {id : 2, name : 'goblin', hp : 200},
            {id : 3, name : 'dragon', hp :4000}
        ]
    }
})
