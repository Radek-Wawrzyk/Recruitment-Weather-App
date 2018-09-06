<template>
  <section class="chart">
    <div id="chart"></div>
    <p>{{temp}}</p>
  </section>
</template>

<script>

export default {
  name: "Chart",
  props: ['temp'],
  created () {
    AmCharts.makeChart("chart", {
      "type": "serial",
      "categoryField": "type",
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
          "title": "Pizza types",
          "valueField": "sold",
          "fillAlphas": 0.8
        }
      ],

      "dataProvider": [
        {"type": "Margherita", "sold": 120},
        {"type": "Funghi", "sold": 82},
        {"type": "Capricciosa", "sold": 78},
        {"type": "Quattro Stagioni", "sold": 71}
      ]
    });
    console.log("xd")
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

</style>