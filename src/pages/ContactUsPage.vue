<script>

export default{
    name: 'ContactUsPage',

    data(){
        return{

        }
    }
}

</script>

<template>
    <div class="container">
        
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="form-floating">
                <textarea class="form-control" placeholder="Scrivici quello che vuoi sapere" id="floatingTextarea" style="height: 100px"></textarea>
                <label for="floatingTextarea">Comments</label>
            </div>
            <button type="submit" class="btn btn-primary my-4">Submit</button>
        </form>

    </div>
</template>

<style lang="scss">

</style>