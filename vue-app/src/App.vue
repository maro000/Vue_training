<template>
  <div id="app">
   <p>{{message}}</p>
   <EditFrom />
  </div>
</template>

// eslint-disable 

<script>
import EditForm from '@/components/EditForm.vue'
export default {
  name: 'App',
  components: { EditForm },
  computed :{
    // ローカルのmessageとストアのmessageを同期
    message(){return this.$store.getters.message}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
