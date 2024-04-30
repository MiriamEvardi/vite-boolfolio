<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {

    name: 'HomePage',

    data (){
        return{

            projects: [],
            
            apiLinks: [],
            apiPageNumber: 1,

            isLoading: true,

            baseApiUrl: 'http://127.0.0.1:8000/api',


        }

    },

    components : {
        
        ProjectCard,
        
    },

    mounted (){

        this.apiCall();
        
    },

    methods: {

        apiCall() {

            this.isLoading = true

            axios.get(this.baseApiUrl + '/projects', {
                params: {
                page: this.apiPageNumber
                }
            }).then(res => {
            
                if(res.data.success) {
                    this.isLoading = false
                }

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

    <div class="container py-5">

        <h1>Progetti</h1>

        <div v-if="!isLoading">
        
            <div class="container d-flex align-items-center justify-content-center gap-5 my-5">
              <ProjectCard v-for="currentProject in projects" :projectTitle="currentProject.name"></ProjectCard>
            </div>    
            
            <ul class="d-flex gap-2 justify-content-center mt-5">
                <li v-for="link in apiLinks" v-html="link.label" @click="changeApiPage(link.label)" :class="link.label == apiPageNumber ? 'active' : ''">
                </li>
            </ul>

        </div>

        <div v-else>
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

    </div>

</template>

<style scoped>

ul {

list-style-type: none;

li {
  
  padding: 8px;

  text-decoration: none;
  color: white;

  transition: all .3s ease;

  cursor: pointer;

  &:hover, &.active {
    background-color: rgba(255,255,255,0.4);
    color: black;
  }

 }
} 

</style>
