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

            isSubmitting: false,
            showAlert: false,
        }

        
    },

    mounted() {

    },

    methods: {
    sendContactRequest() {
        if (this.isSubmitting) {
            // Se il modulo è già in fase di invio, non fare nulla
            return;
        }

        // Imposta lo stato di invio su true per disabilitare il pulsante di invio
        this.isSubmitting = true;
        this.showAlert = true;

        axios.post('http://127.0.0.1:8000/api/new-contact', this.formData)
            .then(res => {
                console.log('Risposta API:', res);
                // Riporta lo stato di invio su false dopo aver inviato con successo il modulo
                this.isSubmitting = false;
                this.showAlert = true; 
                // Svuota i campi del modulo
                this.formData = { 
                    name: '',
                    address: '',
                    message: '',
                };
            })
            .catch(error => {
                // Gestisci eventuali errori nella richiesta
                console.error('Errore nella richiesta HTTP:', error);
                // Assicurati che lo stato di invio torni a false anche in caso di errore
                this.isSubmitting = false;
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
                <label for="address" class="form-label">Indirizzo email</label>
                <input type="email" class="form-control" id="address" name="address" aria-describedby="emailHelp" v-model="formData.address" required>
                <div id="emailHelp" class="form-text">Non condivideremo la tua mail con terzi.</div>
            </div>

            <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Inserisci il tuo messaggio" id="message" name="message" style="height: 200px" v-model="formData.message"></textarea>
                <label for="message">Messaggio</label>
            </div>

            <button type="submit" class="btn btn-primary my-4">Submit</button>
        </form>

        <div v-if="showAlert" class="alert alert-success alert-dismissible fade show" role="alert">
            La mail è stata inviata correttamente
        <button type="button" class="btn-close" @click="showAlert = false" aria-label="Close"></button>
    </div>

    </div>
</template>

<style lang="scss">

</style>