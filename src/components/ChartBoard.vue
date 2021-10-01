<script>
import {Bar} from "vue-chartjs";

export default {
  dname: "ChartBoard",
  extends: Bar,
  mounted() {
    const dataSets = this.display ?
        this.dataChart.map(item => {
          // Case ComparisionChart has 2 chart and stack
          return {
            label: item.NAME,
            backgroundColor: item.color,
            barPercentage: 0.5,
            barThickness: 30,
            borderRadius: 24,
            borderWidth: 1,
            data: item.DATA || [],
          }
        })
        :
        //Case TemporaryElectricBill has one chart
        [{
          label: this.dataChart[0].NAME,
          backgroundColor: this.color,
          barPercentage: 0.5,
          barThickness: 30,
          borderRadius: 24,
          borderWidth: 1,
          data: this.dataChart[0].DATA || [],
        }]

    //Bar chart generate here
    if (dataSets) {
      console.log(dataSets, this.color, 'xxxxxx')
      this.renderChart(
          {
            labels: this.label,
            datasets: dataSets,
          },
          {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: this.display
            },
            scales: {
              xAxes: [
                {
                  stacked: this.stacked,
                  display: this.display
                },
              ],
              yAxes: [
                {
                  stacked: this.stacked,
                  display: this.display
                },
              ],
            },
          }
      );

    }
  },
  props: {
    color: String,
    xAxis: Boolean,
    yAxis: Boolean,
    stacked: Boolean,
    label: Array,
    dataChart: Array,
    display: Boolean,
  }
};
</script>
