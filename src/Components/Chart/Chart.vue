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
  data() {
    return {
      data: [
        { name: "Min", value: this.temp.min },
        { name: "Max", value: this.temp.max }
      ]
    }
  },
  mounted() {

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
      "dataProvider": this.data
    });
  },
  watch: {
    temp: {
      handler() {
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
          "dataProvider":  this.data
        });
      },
      deep: true
    }
  }
}

</script>

<style lang="scss" src="./Chart.scss" scoped />
