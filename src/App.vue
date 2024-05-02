<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  data (){
    return{
      
    }

  },

  components : {
    AppHeader,
    AppFooter
  },

  mounted (){
    
  },

  methods: {
    
  },

}


</script>

<template>
    <div class=" align-items-center justify-content-center gap-5 my-5">

        <AppHeader></AppHeader>
        <router-view></router-view>
        <AppFooter></AppFooter>

    </div>


</template>

<style lang="scss">



</style>
