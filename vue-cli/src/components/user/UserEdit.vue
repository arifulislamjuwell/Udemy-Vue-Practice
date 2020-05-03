<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button @click="changeAge()"> chage age </button>
    </div>
</template>h

<script>
import {eventBus} from '../../main'
export default{
    props:{
        changeAge: Function
    },
    methods:{
        changeAg(){
            this.changeAge= 30;
            // this.$emit('changeAge', this.myAge)
            eventBus.$emit('chaneAge', this.changeAge)
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>