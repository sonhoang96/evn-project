<script>
import { Bar } from "vue-chartjs";
export default {
  name: "ChartBoard",
  extends: Bar,
  mounted() {
    console.log(this.display)
    this.renderChart(
        {
          labels: this.label || [],
          datasets: [
            {
              label: "Năm 2021",
              backgroundColor: this.color || "#e4353ad9",
              barPercentage: 0.5,
              barThickness: 30,
              borderRadius: 24,
              borderWidth: 1,
              data: this.dataChart[0] || [],
              // borderSkipped: 'start',
            },
            {
              label: "Năm 2020",
              barPercentage: 0.5,
              backgroundColor: "#254291d9",
              barThickness: 30,
              borderRadius: 24,
              borderWidth: 1,
              data: this.dataChart[1] || [],
              // borderSkipped: 'start',
            },
          ],
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
  },
  props:{
    color: String,
    xAxis: Boolean,
    yAxis: Boolean,
    amount: Number,
    stacked: Boolean,
    label: Array,
    dataChart: Array,
    display: Boolean,
  }
};
</script>
