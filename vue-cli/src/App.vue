<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent= 'appQuote'"> default</button>
                <button @click="selectedComponent= 'AuthorQuote'"> Author </button>
                <button @click="selectedComponent= 'NewApp'"> New </button>
                {{ selectedComponent }}
                <keep-alive>
                        <component :is="selectedComponent"></component>
                </keep-alive >

                <!-- <app-quote>
                    <h1 slot="title">A wonderful quote</h1>
                    <span>
                        <slot> r yerh </slot>
                    </span>
                    <div>
                    <p> content </p>
                    <p> content </p>
                    </div>
                </app-quote> -->
            </div>
        </div>
    </div>
</template>


<script>
    import Author from './components/quote/Author'
    import Newapp from './components/quote/New'
    import Quote from './components/quote/Quote'

    export default {
        data: function(){
            return {
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            AuthorQuote: Author,
            NewApp: Newapp
        }
    }
</script>

<style>

</style>