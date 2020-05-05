<template>
  <div class="container">
    <app-header :maxNumberQuote="maxQuote" :quoteCount="quotes.length"></app-header>
    <new-quote @quoteAdd="addQuote"></new-quote>
    <quote-grid @passIndex="removeQuote" :quotes="quotes"></quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info"> Click on a quote to delete</div>
      </div>
    </div>
  </div>
</template>

<script>
import Progress from './components/Header'
import QuoteGrid from './components/QuoteGrid'
import AddQuote from './components/newQuote'
export default {
  components:{
    quoteGrid: QuoteGrid,
    newQuote: AddQuote,
    appHeader: Progress
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
      if(this.quotes.length >= this.maxQuote){
        return alert("please remove quote first")
      }
      this.quotes.push(quote)
    },
    removeQuote(index){
      this.quotes.splice(index, 1);
    }
  }
}
</script>

<style>

</style>
