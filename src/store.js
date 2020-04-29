import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
var firebase = require("firebase/app");


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario:'',
    error:''
  },
  mutations: {
    setUsuario(state,payload){
      state.usuario = payload;
    }
  },
  actions: {
    crearUsuario({commit}, payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.pass)
      .then(res =>{
        console.log(res)
        commit('setUsuario',{email:res.user.email, uid: res.user.uid})
        router.push({name:'inicio'})
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  modules: {
  }
})
