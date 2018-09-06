<template>
  <div id="app">
    <Header></Header>
    <div class="app-select">
      <h2 class="app-select-title">Pick City</h2>
      <v-select v-model="selected" :options="options"></v-select>
    </div>
    <p>{{selected.label}}</p>
  </div>
</template>

<script>

import Header from '@/Components/Header.vue'

export default {
  name: 'app',
  components: {
    Header,
  },
  data() {
    return {
      options: [
        {id: 1, label: 'Manchaster'},
        {id: 3, label: 'Warsaw'},
        {id: 2, label: 'Berlin'},
      ],
      selected: {id: 1, label: 'Manchaster'},
    }
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

//V-select

.app-select {
  max-width: 400px;
  width: 100%;
  margin: 50px auto;
  text-align: center;
  &-title {
    margin: 0 0 20px 0;
    font-size: 20px;
  }
}

</style>
