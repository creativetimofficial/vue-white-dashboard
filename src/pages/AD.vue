<template>
  <div class="content">
    <div class="row">
      <div class="col-12">
        <card>
          <template slot="header">
            <h4 class="card-title">Simple Table</h4>
          </template>
          <div class="table-responsive text-left">
            <base-table
              :data="table1.data"
              :columns="table1.columns"
              thead-classes="text-primary"
            >
            </base-table>
          </div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <card type="chart" cardCol>
          <template slot="header">
            <h5 class="card-category">{{ $t("dashboard.dailySales") }}</h5>
            <h3 class="card-title">
              <i class="tim-icons icon-delivery-fast text-info"></i> 3,500€
            </h3>
          </template>
          <bar-chart
            class="chart-area"
            chart-id="blue-bar-chart"
            :chart-data="blueBarChart.chartData"
            :gradient-stops="blueBarChart.gradientStops"
            :extra-options="blueBarChart.extraOptions"
          >
          </bar-chart>
        </card>
      </div>
      <div class="col-lg-4">
        <card type="chart" cardCol>
          <template slot="header">
            <h5 class="card-category">{{ $t("dashboard.completedTasks") }}</h5>
            <h3 class="card-title">
              <i class="tim-icons icon-send text-success"></i> 12,100K
            </h3>
          </template>
          <line-chart
            class="chart-area"
            chart-id="purple-line-chart"
            :chart-data="purpleLineChart.chartData"
            :gradient-stops="purpleLineChart.gradientStops"
            :extra-options="purpleLineChart.extraOptions"
          >
          </line-chart>
        </card>
      </div>
      <div class="col-lg-4" :class="{ 'text-right': isRTL }">
        <card type="chart" cardCol>
          <template slot="header">
            <h5 class="card-category">{{ $t("dashboard.totalShipments") }}</h5>
            <h3 class="card-title">
              <i class="tim-icons icon-bell-55 text-primary"></i> 763,215
            </h3>
          </template>
          <line-chart
            class="chart-area"
            chart-id="green-line-chart"
            :chart-data="greenLineChart.chartData"
            :gradient-colors="greenLineChart.gradientColors"
            :gradient-stops="greenLineChart.gradientStops"
            :extra-options="greenLineChart.extraOptions"
          >
          </line-chart>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import { Card } from "@/components/index";
import LineChart from "@/components/Charts/LineChart";
import BarChart from "@/components/Charts/BarChart";
import * as chartConfigs from "@/components/Charts/config";
import BaseTable from "@/components/BaseTable";
import config from "@/config";

import axios from "axios"; 

export default {
  components: {
    Card,
    BaseTable,
    BarChart,
    LineChart,
  },
  data() {
    return {
     table1:{
	title: "Simple Table",
	columns: [...table1Columns],
	data: [],
     },
     blueBarChart: {
       extraOptions: chartConfigs.barChartOptions,
       chartData: {
         labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
         datasets: [
           {
             label: "Countries",
             fill: true,
             borderColor: config.colors.info,
             borderWidth: 2,
             borderDash: [],
             borderDashOffset: 0.0,
             data: [53, 20, 10, 80, 100, 45],
           },
         ],
       },
       gradientColors: config.colors.primaryGradient,
       gradientStops: [1, 0.4, 0],
     },
     purpleLineChart: {
       extraOptions: chartConfigs.purpleChartOptions,
       chartData: {
         labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
         datasets: [
           {
             label: "My First dataset",
             fill: true,
             borderColor: config.colors.danger,
             borderWidth: 2,
             borderDash: [],
             borderDashOffset: 0.0,
             pointBackgroundColor: config.colors.danger,
             pointBorderColor: "rgba(255,255,255,0)",
             pointHoverBackgroundColor: config.colors.danger,
             pointBorderWidth: 20,
             pointHoverRadius: 4,
             pointHoverBorderWidth: 15,
             pointRadius: 4,
             data: [90, 27, 60, 12, 80],
           },
         ],
       },
       gradientColors: [
         "rgba(66,134,121,0.15)",
         "rgba(66,134,121,0.0)",
         "rgba(66,134,121,0)",
       ],
       gradientStops: [1, 0.4, 0],
     },
     greenLineChart: {
       extraOptions: chartConfigs.greenChartOptions,
       chartData: {
         labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
         datasets: [
           {
             label: "Data",
             fill: true,
             borderColor: config.colors.primary,
             borderWidth: 2,
             borderDash: [],
             borderDashOffset: 0.0,
             pointBackgroundColor: config.colors.primary,
             pointBorderColor: "rgba(255,255,255,0)",
             pointHoverBackgroundColor: config.colors.primary,
             pointBorderWidth: 20,
             pointHoverRadius: 4,
             pointHoverBorderWidth: 15,
             pointRadius: 4,
             data: [80, 100, 70, 80, 120, 80],
           },
         ],
       },
       gradientColors: config.colors.primaryGradient,
       gradientStops: [1, 0.2, 0],
     },
    };
  },
methods : {
	async getTableData() {
		try {
    		const response = await axios.get("http://192.168.127.76:8888/ttd/1")
				console.log(Object.values(response.data[1]));
				console.log(typeof Object.values(response.data[1]));
    				return Object.values(response.data[1]);
			}catch(error) {
    				console.log(error);
  			}
		}
},
async mounted() {
	this.table1.data = await this.getTableData();


	console.log("mounted");
	console.log(this.table1.data);
},
};
const table1Columns = ["Date","DRB_AirDL","DRB_AirUL","DRB_RlcDL","DRB_RlcUL","Handover","Total_Delay"];


</script>
<style></style>
