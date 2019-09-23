<template>
  <div class="content">
    <div class="row">
      <div class="col-12">
        <chart-card
        :cardCol = "false"
        title="Performance"
        subTitle="Total Shipments"
        :chard-data="activityChart.data"
        :chart-options="activityChart.options">
        </chart-card>
      </div>
    </div>
  </div>
</template>
<script>

import {
  ChartCard
} from "@/components/index";

export default {
  components: {
    ChartCard
  },
  data(){
    return{
      activityChart: {
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar"
          ],
          series:[
            [500,600,700],
            [200,300,400]
          ]
        },
        options:{
          seriesBarDistance: 10,
          axisX: {
            showGrid: false
          },
          height: "245px"
        }
      }
    };
  }
}
</script>
<style>
</style>
