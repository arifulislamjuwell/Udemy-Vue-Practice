<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built in Directive</h1>
        <p v-text="'some text'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom in Directive</h1>
        <p v-highlight:background.delayed="'yellow'">color this</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  directives: {
      'highlight':{
              bind(el, binding, vnode) {
        //  el.style.backgroundColor= 'gray'
        var delay = 0
        if (binding.modifiers['delayed']) {
            delay = 3000
        }
        setTimeout(() => {
            if (binding.arg) {
                el.style.backgroundColor = binding.value
            }
            else {
                el.style.color = binding.value
            }

        }, delay)
    }
      }
  }
};
</script>

<style>
</style>