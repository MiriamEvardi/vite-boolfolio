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
    
    <div class="card pt-3 px-3">
        <div class="image">
            <img :src="'http://localhost:8000/storage/' + project.preview" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
            <h5 class="card-title text-center py-3">{{ project.name }}</h5>
            <div class="button d-flex justify-content-center pb-3">
                <router-link :to="{name: 'show-project', params: {slug: project.slug}}" class="btn btn-primary ">Visualizza</router-link>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss">
    .card {
        width: 20%;
    }

    .image {
        width: 100%;
        height: 150px;
        display: flex; 
    }

    img {
        object-fit: cover;
    }
</style>