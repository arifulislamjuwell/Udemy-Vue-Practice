<template>
  <div class="container">
    <new-quote @quoteAdd="addQuote"></new-quote>
    <quote-grid :quotes="quotes"></quote-grid>
  </div>
</template>

<script>

import QuoteGrid from './components/QuoteGrid'
import AddQuote from './components/newQuote'
export default {
  components:{
    quoteGrid: QuoteGrid,
    newQuote: AddQuote
  },
  name: 'app',
  data () {
    return {
      quotes: ['Welcome to Your Vue.js App'],
      maxQuote: 10
    }
  },
  methods:{
    addQuote(quote){
      this.quotes.push(quote)
    }
  }
}
</script>

<style>

</style>
