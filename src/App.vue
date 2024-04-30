<script>
import AppHeader from './components/AppHeader.vue';

export default {
  data (){
    return{
      
    }

  },

  components : {
    AppHeader
  },

  mounted (){
    
  },

  methods: {
    
  },

}


</script>

<template>
    <div class="container d-flex align-items-center justify-content-center gap-5 my-5">

        <Appheader></Appheader>
        <router-view></router-view>

    </div>


</template>

<style lang="scss">



</style>
