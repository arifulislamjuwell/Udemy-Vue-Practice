<template>
    <div class="row">
        <single-quote @click.native="catchIndex(index)" v-for="(quote, index) in quotes" :key="index">{{ quote }}</single-quote>
    </div>
</template>

<script>
import Quote from './Quote'
export default {

    props:['quotes'],
    components:{
        singleQuote: Quote
    },
    methods:{
        catchIndex(index){
            this.$emit('passIndex', index)
        }
    }
}
</script>

<style scoped>
/*  */
</style>