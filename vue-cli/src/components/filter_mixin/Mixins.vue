<template>
        <div>
            <h1>
                Filter And Mixin 
                <br>
            </h1>
            <p>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
                </ul>
            </p>
        </div>
</template>

<script>
import {fruitMixin} from '../../fruitsMixin/fruitMixin'
export default {
     mixins:[fruitMixin],
     created(){
         console.log('created component')
     }
}
</script>