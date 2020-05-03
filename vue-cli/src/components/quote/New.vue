<template>
<div>
    <h3>
        A author
        <button @click="counter++"> Increase </button>
    </h3>
    {{ counter }}
</div> 

</template>
<script>

export default {
data: function(){
    return{
        counter:0
    }
},
    destroyed: function(){
        console.log('distroy')
    },
    activated: function(){
        console.log('activated')
    },
    deactivated: function(){
        console.log('deactivated')
    }
}
</script>
<style>

</style>