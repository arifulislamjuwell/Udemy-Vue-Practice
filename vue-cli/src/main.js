import Vue from 'vue'
import App from './App.vue'
import Form from './components/FormControl.vue'


export const eventBus = new Vue();

new Vue({
    el: '#app',
    render: h => h(Form)
})