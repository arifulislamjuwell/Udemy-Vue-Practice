<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-default">
        <div class="panel-body quote">
            <slot></slot>
        </div>
    </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.panel-body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 34px;
    color: blueviolet;
}
.quote{
    cursor: pointer;
}
.quote:hover{
    background-color: rgb(14, 13, 12);
}

</style>