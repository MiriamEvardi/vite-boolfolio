<script>
import axios from 'axios';

export default {
  data (){
    return{
      projects: [],
      
      apiLinks: [],
      apiPageNumber: 1,

      baseApiUrl: 'http://127.0.0.1:8000/api',

    }
  },

  mounted (){
    this.apiCall();
    
  },

  methods: {
    apiCall() {
      axios.get(this.baseApiUrl + '/projects', {
        params: {
          page: this.apiPageNumber
        }
    }).then(res => {
      this.projects = res.data.results.data;

      this.apiLinks = res.data.results.links;
    })
  },

  changeApiPage(pageNumber) {
    this.apiPageNumber = pageNumber;

    this.apiCall();
  },
},
}
  

</script>

<template>
  

</template>

<style scoped>

</style>
