<script>
import { Bar } from "vue-chartjs";
export default {
  name: "ChartBoard",
  extends: Bar,
  mounted() {
    this.renderChart(
        {
          labels: [
            "Tháng 1",
            "Tháng 2",
            "Tháng 3",
            "Tháng 4",
            "Tháng 5",
            "Tháng 6",
            "Tháng 7",
            "Tháng 8",
            "Tháng 9",
            "Tháng 10",
            "Tháng 11",
            "Tháng 12",
          ],
          datasets: [
            {
              label: "Năm 2021",
              backgroundColor: "#e4353ad9",
              barPercentage: 0.3,
              data: [2, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 200],
            },
            {
              label: "Năm 2020",
              barPercentage: 0.3,
              backgroundColor: "#254291d9",
              data: [2, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
            },
          ],
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                stacked: true,
              },
            ],
            yAxes: [
              {
                stacked: true,
              },
            ],
          },
        }
    );
  },
};
</script>
