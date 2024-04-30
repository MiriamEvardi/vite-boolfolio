<script>

import axios from 'axios';

export default{
    name: 'ShowProject',

    data(){
        return{

            project: null,

            baseApiUrl: 'http://127.0.0.1:8000/api',


        }
    },

    mounted(){
        
    }

}

</script>

<template>
    <header>
        <nav>
            <h1>Boolfolio</h1>
        </nav>
    </header>
</template>

<style lang="scss">

</style>