<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p> my name {{ switchName() }}</p>
        <p>my age {{ myAge }} </p>
        <button @click="resetName"> Reset </button>
        <button @click="resetNm()"> Reset from parent </button>
    </div>
</template>

<script>
import {eventBus} from '../../main'
export default{
    props:{
        'myName':{
            type: String,
            default: 'MAX'
        },
        resetNm: Function,
        myAge: Number
    },
    methods:{
        switchName(){
            return this.myName.split("").reverse().join("")
        },
        resetName(){
            this.myName= 'Max'
            this.$emit('nameWasChange', this.myName)
        },
        created() {
            eventBus.$on('chaneAge', (age)=> {
                this.myAge= age
            })
        },
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>