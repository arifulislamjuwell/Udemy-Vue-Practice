<template>
<div>
        <div>
            <slot name="title"></slot>
        </div>
        <div>
            <slot></slot>
        </div>
</div> 

</template>
<script>

export default {
    props:['quote'],
}
</script>
<style scoped>
    div{
        border: 1px solid black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
</style>