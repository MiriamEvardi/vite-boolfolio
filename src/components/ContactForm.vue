<script>

import axios from 'axios'

export default {
    name: 'ContactForm',

    data() {
        return {
            formData: {
                name: '',
                address: '',
                message: '',
            },
        }
    },

    mounted() {

    },

    methods: {
        sendContactRequest() {
            axios.post('http://127.0.0.1:8000/api/new-contact', this.formData).then(res => {
             
            });
        }
    }

}

</script>

<template>
    <div class="container">
        
        <form @submit.prevent="sendContactRequest()">

            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" name="name" v-model="formData.name" required>
            </div>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="formData.address" required>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div class="form-floating">
                <textarea class="form-control" placeholder="Scrivici quello che vuoi sapere" id="floatingTextarea" style="height: 100px" v-model="formData.message"></textarea>
                <label for="floatingTextarea">Comments</label>
            </div>

            <button type="submit" class="btn btn-primary my-4">Submit</button>
        </form>

    </div>
</template>

<style lang="scss">

</style>