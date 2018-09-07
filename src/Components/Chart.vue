<template>
  <transition name="fade">
    <section class="chart">
      <div id="chart"></div>
    </section>
  </transition>
</template>

<script>

export default {
  name: "Chart",
  props: ['temp'],
  mounted() {

    //Configure object for amChart
    let data = [
      { name: "Min", value: this.temp.min },
      { name: "Max", value: this.temp.max }
    ];

    //Initialize Chart
    AmCharts.makeChart("chart", {
      "type": "serial",
      "categoryField": "name",
      "theme": "light",
      "chartCursor": {},
      "valueAxes": [ {
        "gridColor": "#FFFFFF",
        "gridAlpha": 0.2,
        "dashLength": 0
      } ],
      "graphs": [
        {
          "type": "column",
          "title": "Min and max temperatures",
          "valueField": "value",
          "fillAlphas": 0.8
        }
      ],
      "dataProvider": data
    });
  },
  watch: {
    temp: {
      handler() {
        let data = [
          {name: "Min", value: this.temp.min},
          {name: "Max", value: this.temp.max}
        ];
        AmCharts.makeChart("chart", {
          "type": "serial",
          "categoryField": "name",
          "theme": "light",
          "chartCursor": {},
          "valueAxes": [{
            "gridColor": "#FFFFFF",
            "gridAlpha": 0.2,
            "dashLength": 0
          }],
          "graphs": [
            {
              "type": "column",
              "title": "Min and max temperatures",
              "valueField": "value",
              "fillAlphas": 0.8
            }
          ],
          "dataProvider": data
        });
      },
      deep: true
    }
  }
}

</script>

<style lang="scss" scoped>

.chart {
  width: 100%;
  max-width: 500px;
  height: auto;
  margin: 50px auto;
}
#chart {
  height: 300px;
  width: 100%;
}

//Animation

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>