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

            baseApiUrl: 'http://127.0.0.1:8000/api',

            currentPage: 1

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

            axios.get(this.baseApiUrl + '/projects', {
                params: {
                page: this.apiPageNumber
                }
            }).then(res => {

                this.projects = res.data.results.data;

            })
        },

        
        changePage(direction) {
            if (direction === 'next' && this.currentPage < this.totalPages) {
                this.currentPage++;
            } else if (direction === 'prev' && this.currentPage > 1) {
                this.currentPage--;
            }

            this.apiPageNumber = this.currentPage;

            
            this.apiCall();
        }


    }   
}
  

</script>

<template>

    <div class="home-bg">

        <div class="container py-5">

            <h1 class="display-2 text-center">Progetti</h1>
            
                <div class="container d-flex align-items-center justify-content-center gap-5 my-5">
                <ProjectCard v-for="currentProject in projects" :project="currentProject"></ProjectCard>
                </div>    
                
                <div class="text-center">

                    <vue-awesome-paginate
                        :total-items="10"
                        v-model="currentPage"
                        :items-per-page="2"
                        :max-pages-shown="6"
                        :on-click="changePage"
                
                    />
                </div>

        </div>
    </div>

</template>

<style lang="scss" >

.home-bg {
    background-image: linear-gradient(112.5deg, rgb(83,82,82) 0%, rgb(83,82,82) 10%,rgb(98,98,98) 10%, rgb(98,98,98) 53%,rgb(98,98,98) 53%, rgb(98,98,98) 55%,rgb(88,87,87) 55%, rgb(88,87,87) 60%,rgb(67,67,67) 60%, rgb(67,67,67) 88%,rgb(57,56,56) 88%, rgb(57,56,56) 91%,rgb(57,56,56) 91%, rgb(57,56,56) 100%),linear-gradient(157.5deg, rgb(83,82,82) 0%, rgb(83,82,82) 10%,rgb(98,98,98) 10%, rgb(98,98,98) 53%,rgb(98,98,98) 53%, rgb(98,98,98) 55%,rgb(88,87,87) 55%, rgb(88,87,87) 60%,rgb(67,67,67) 60%, rgb(67,67,67) 88%,rgb(57,56,56) 88%, rgb(57,56,56) 91%,rgb(57,56,56) 91%, rgb(57,56,56) 100%),linear-gradient(135deg, rgb(83,82,82) 0%, rgb(83,82,82) 10%,rgb(98,98,98) 10%, rgb(98,98,98) 53%,rgb(98,98,98) 53%, rgb(98,98,98) 55%,rgb(88,87,87) 55%, rgb(88,87,87) 60%,rgb(67,67,67) 60%, rgb(67,67,67) 88%,rgb(57,56,56) 88%, rgb(57,56,56) 91%,rgb(57,56,56) 91%, rgb(57,56,56) 100%),linear-gradient(90deg, rgb(98,98,98),rgb(199,199,199)); background-blend-mode:overlay,overlay,overlay,normal;
    width: 100vw;
    height: 100vh;
}

ul {

list-style-type: none;

li {
  
  padding: 2px;

  text-decoration: none;
  color: white;

  transition: all .3s ease;

  cursor: pointer;


 }
} 

.pagination-container {
    display: flex;
    gap: 2px;
  }

.paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(67, 67, 67);
    border: 1px solid rgb(67, 67, 67);
    color: white;
}

.paginate-buttons:hover {
    background-color: #d8d8d8;
}

.active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
}

.active-page:hover {
    background-color: #2988c8;
}

</style>
