<template>
  <div id="app">
    <Header></Header>
    <div class="app-select">
      <h2 class="app-select-title">Select City</h2>
      <v-select v-model="selected" :options="options" @input="selectCity"></v-select>
    </div>
    <transition name="fade">
      <div class="app-info" v-if="temp.min && temp.max">
        <p>Selected City: {{selected.label}}</p>
        <p>Today's date is {{date}}</p>
      </div>
    </transition>
    <Chart :temp="temp" v-if="temp.min !== null && temp.max !== null"></Chart>
    <Alert :error="error" v-if="error" v-on:closeAlert="closeAlert"></Alert>
  </div>
</template>

<script>

import Header from '@/Components/Header/Header.vue'
import Chart from '@/Components/Chart/Chart.vue'
import Alert from '@/Components/Alert/Alert.vue'
import axios from 'axios'

//API address
const API = 'https://www.metaweather.com/api';

export default {
  name: 'app',
  components: {
    Header,
    Chart,
    Alert
  },
  data() {
    return {
      options: [
        {id: 1, label: 'Manchestedd'},
        {id: 3, label: 'Warsaw'},
        {id: 2, label: 'Berlin'},
      ],
      selected: null,
      date: '',
      temp: {
        min: null,
        max: null,
      },
      error: null
    }
  },
  methods: {
    selectCity() {
      //First request to get city woeid
      axios.get(`${API}/location/search/?query=${this.selected.label}`).then(response => {
        return response.data[0].woeid;
      })
      //Second request to get current weather
      .then(woeid => {
        axios.get(`${API}/location/${woeid}/${this.date}`).then(response => {
          this.temp.max = response.data[0].max_temp;
          this.temp.min = response.data[0].min_temp;
        });
        //Reset error alert
        this.error = null;
      })
      //Init error alert
      .catch(error => {
        console.log(error);

        this.error = error;
        //Set 3 seconds timer for Alert
        setTimeout(() => {
          this.error = null;
        }, 3000)
      })
    },
    closeAlert() {
      this.error = null;
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

.app-info {
  text-align: center;
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

//Animation

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
