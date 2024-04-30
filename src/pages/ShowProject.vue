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
    <p>aaaaaaaaaa</p>
</template>

<style lang="scss">

</style>