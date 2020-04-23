<template>
    <div>  
        <check-server-status v-for="server in 5" :key="server"> </check-server-status>
    </div>
</template>

<script>
import ServerStatus from './ServerStatus.vue';
export default {
    components:{
        'check-server-status': ServerStatus                                                                                                                                                                                                                                                                          
    }
}
</script>