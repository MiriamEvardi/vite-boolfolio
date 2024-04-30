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
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">Descrizione progetto</p>
            <div class="button d-flex">
                <router-link :to="{name: 'show-project', params: {slug: project.slug}}" class="btn btn-primary">Visualizza</router-link>
                <a href="#" class="btn btn-warning">Modifica</a>
                <a href="#" class="btn btn-danger">Elimina</a>
            </div>
        </div>
    </div>
    
</template>

<style>

</style>