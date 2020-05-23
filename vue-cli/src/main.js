import Vue from 'vue'
import App from './App.vue'
import Form from './components/formControl/FormControl.vue'


export const eventBus = new Vue();

Vue.filter('toLower', function(value){
    return value.toLowerCase()
})

Vue.mixin({
    created(){
        console.log('Global mixin')
    }
})

new Vue({
    el: '#app',
    render: h => h(App)
})