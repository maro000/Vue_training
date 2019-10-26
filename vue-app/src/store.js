/* eslint-disable */
import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex)

// ストアの作成
const store = new Vuex.Store({
    state : {
        message : '初期メッセージ'
    },
    getters : {
        // messageを使用するゲッター
        message(state) {return state.message}
    },
    mutations : {
        // メッセージを変更するミューテーション
        setMessage(state,payload)  {
            state.message = payload.message
        }
    },
    actions : {
        // メッセージの更新処理
        doUPdate({ commit },message){
            commit('setMessage',{message})
        }
    }
})
export default store