<script>

import axios from 'axios';

export default{
    name: 'ShowProject',

    data(){
        return{
            project: null,
            slugProject: null,

            baseApiUrl: 'http://127.0.0.1:8000/api',

        }
    },

    mounted(){
        this.slugProject = this.$route.params.slug;
        
        axios.get(this.baseApiUrl + '/projects/' + this.slugProject).then(res => {

                this.project = res.data.project;
            })
    }

}

</script>

<template>

    <div class="bg">

        <div class="container py-5 text-white ">
        
        <div v-if="project" class="d-flex flex-column justify-content-center align-items-center" >
            <h2 class="pb-4 text-uppercase ">
                {{ project.name }}
            </h2>
            
            <div class="preview" >

                <img :src="'http://localhost:8000/storage/' + project.preview" class="card-img-top pb-3" alt="...">
            </div>
            
            <div class="d-flex flex-column align-items-center gap-2 ">
                <span>
                    <strong>Descrizione</strong>
                </span>
                
                <span class="mb-4">
                    {{ project.description }}
                </span>
            </div>

            <div class="d-flex flex-column align-items-center gap-2 ">
                <span>
                    <strong>Tipologia</strong>
                </span>
                <span class="mb-4">
                    {{ project.type.name }}
                </span>
                
            </div>
                
                <div class="d-flex">
                    <strong>Tecnologie: </strong>
                    <p v-for="(tech, index) in project.technologies" 
                    :key="index" 
                    class="badge rounded-pill text-bg-secondary m-1 "> {{ tech.title }}</p>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bg{

    background-image:repeating-linear-gradient(45deg, rgba(226, 226, 226,0.06) 0px,
                    rgba(226, 226, 226,0.06) 2px,transparent 2px, transparent 4px),
                    linear-gradient(90deg, rgb(33,33,33),rgb(33,33,33));
                    width: 100%;
                    height: 100vh;
                                   
                    
                    .preview {
                        width: 500px;
                    }
                }
</style>