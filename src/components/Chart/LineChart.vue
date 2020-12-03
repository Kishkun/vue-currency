<template>
    <div class="chart">
        <canvas ref="canvas"></canvas>
    </div>
</template>
<script>
  import {Line} from 'vue-chartjs'

  export default {
    name: 'LineChart',
    extends: Line,
    props: {
      labels: {
        type: Array,
        default: () => ([])
      },
      datasets: {
        type: Object,
        default: () => ({})
      }
    },
    data: () => ({
    
    }),
    mounted() {
      this.loadChart()
    },
    methods: {
      loadChart() {
        this.renderChart({
          labels: this.labels,
          datasets: [{
            label: this.datasets.label,
            borderColor: this.datasets.borderColor,
            borderWidth:this.datasets.borderWidth,
            fill: this.datasets.fill,
            data: this.datasets.data
          }]
        }, {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            onClick: (e) => e.stopPropagation()
          }
        })
      }
    }
  }
</script>
<style scoped lang="scss">
    .chart {
        height: 250px;
        margin-top: 5vw;
    }
</style>
