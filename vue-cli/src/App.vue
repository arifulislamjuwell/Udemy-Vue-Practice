<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-user></app-user>
            </div>
        </div>
    </div>
</template>


<script>
    import UserApp from './components/user/User.vue'

    export default {
        components: {
            appUser: UserApp,
        }
    }
</script>

<style>

</style>