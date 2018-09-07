<template>
  <div id="app" style="text-align: center">
    <Header></Header>
    <div class="app-select">
      <h2 class="app-select-title">Select City</h2>
      <v-select v-model="selected" :options="options" @input="selectCity"></v-select>
    </div>
    <p>Selected City: {{selected.label}}</p>
    <p>Today's date: {{date}}</p>
    <p>City max and min temp: {{temp}}</p>
    <Chart :temp="temp" v-if="temp.min !== null && temp.max !== null"></Chart>
  </div>
</template>

<script>

import Header from '@/Components/Header.vue'
import Chart from '@/Components/Chart.vue'
import axios from 'axios'

//API address
const API = 'https://www.metaweather.com/api';

export default {
  name: 'app',
  components: {
    Header,
    Chart
  },
  data() {
    return {
      options: [
        {id: 1, label: 'Manchester'},
        {id: 3, label: 'Warsaw'},
        {id: 2, label: 'Berlin'},
      ],
      selected: '',
      date: '',
      temp: {
        min: null,
        max: null,
      },
    }
  },
  methods: {
    selectCity() {
      axios.get(`${API}/location/search/?query=${this.selected.label}`).then(response => {
        console.log(response);
        return response.data[0].woeid;
      })
      .then(woeid => {
        axios.get(`${API}/location/${woeid}/${this.date}`).then(response => {
          this.temp.max = response.data[0].max_temp;
          this.temp.min = response.data[0].min_temp;
        });
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  created: function() {
    //Get current user's date
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();

    //Set Date
    let currentDate = year + '/' + month + '/' + day;
    this.date = currentDate;
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
