<template>
    <div class="container">
        <div class="row">
            <h1>
                Filter And Mixin 
                <br>
                <h6>{{ text | toUppercase | toLower}}</h6>
            </h1>
            <p>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
                </ul>
            </p>
            <mixin-double></mixin-double>
        </div>
    </div>
</template>

<script>
import Mixin from './Mixins'
import {fruitMixin} from '../../fruitsMixin/fruitMixin'
export default {
        mixins:[fruitMixin],
    data(){
        return{
            text:'hello world',

            filterText:''
        }
    },
    filters:{
        toUppercase(value){
            return value.toUpperCase()
        }
    },
    components: {
        mixinDouble: Mixin
    }
}
</script>