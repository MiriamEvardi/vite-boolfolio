<script>

export default{

    name: 'ProjectCard',

    data(){
        return{

        }
    },

    props : {

        project: Object,

    }
}

</script>

<template>
    
    <div class="card" style="width: 18rem;">
        <img :src="'http://localhost:8000/storage/' + project.preview" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">Descrizione progetto</p>
            <div class="button d-flex justify-content-center">
                <router-link :to="{name: 'show-project', params: {slug: project.slug}}" class="btn btn-primary ">Visualizza</router-link>
            </div>
        </div>
    </div>
    
</template>

<style>

</style>