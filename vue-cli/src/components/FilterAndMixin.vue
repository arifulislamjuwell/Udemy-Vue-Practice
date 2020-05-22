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
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            text:'hello world',
            fruits: [
                'apple', 'orange', 'banana'
            ],
            filterText:''
        }
    },
    filters:{
        toUppercase(value){
            return value.toUpperCase()
        }
    },
    computed:{
        filteredFruits(){
            return this.fruits.filter((element)=> {
                return element.match(this.filterText)
            })
        }
    }
}
</script>