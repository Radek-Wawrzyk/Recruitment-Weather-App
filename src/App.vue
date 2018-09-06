<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>

import Header from '@/Components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}

</script>

<style lang="scss">

//Imports

@import url('https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css');
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&subset=latin-ext');

* {
  box-sizing: border-box;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

//Font settings

html, body, * {
  font-family: 'Roboto', sans-serif;
}

</style>
