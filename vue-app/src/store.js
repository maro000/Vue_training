import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

// ストアの作成

const store = new Vuex.Store({
    state : {
        count : 0
    },
    mutations : {
        // カウントアップするミューテーションを登録
        increment(state) : {
            state.count++
        }
    }
})