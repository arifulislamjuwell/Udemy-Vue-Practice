<template>
    <div class="row">
        <single-quote v-for="quote in quotes" :key="quote">{{ quote }}</single-quote>
    </div>
</template>

<script>
import Quote from './Quote'
export default {

    props:['quotes'],
    components:{
        singleQuote: Quote
    }
}
</script>

<style scoped>
/*  */
</style>