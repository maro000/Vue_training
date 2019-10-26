// ローカルは汎用性の低いもの
// 下の方法はローカルのやりかた

var myComponent ={
    template : '<p>Sex on the beach</p>'
}

new Vue({
    el : '#app',
    components : {
        'my-component' : myComponent
    }
})

Vue.component('my-component',{
    // テンプレート
    template : '<p>{{message}}</p>',
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