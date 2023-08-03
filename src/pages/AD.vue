<template>
  <div class="content">
    <div class="row">
      <div class="col-12">
        <card>
          <template slot="header">
            <h4 class="card-title">AD Data Table</h4>
	    <div class="gnbla">	
	    	<!--
	        <button class="gnbno-btn" @click="" :disabled="table1.currentGnb === 1">1</button>
	        <button class="gnbno-btn" @click="" :disabled="table1.currentGnb === 2">2</button>
	        <button class="gnbno-btn" @click="" :disabled="table1.currentGnb === 3">3</button>
	        <button class="gnbno-btn" @click="" :disabled="table1.currentGnb === 4">4</button>
	        <button class="gnbno-btn" @click="" :disabled="table1.currentGnb === 5">5</button>
		-->
		<button class="gb-info" @click="gnbBtn">GNodeB No </button>
		<span class="gnb-info">{{table1.currentGnb}}</span>
	    </div>
	    <div class="tablela">
	        <button class="ttd-btn" @click="ttdBtn" :disabled="table1.currentDataST === ttd">Train Data</button>
	        <button class="trd-btn" @click="trdBtn" :disabled="table1.currentDataST === trd">Test Data</button>
	        <button class="vld-btn" @click="vldBtn" :disabled="table1.currentDataST === vld">Validation Data</button>
		<span class="page-info">{{table1.currentDataName}}</span>
	    </div>
          </template>
          <div class="table-responsive text-left">
            <base-table
              :data="table1.data"
              :columns="table1.columns"
              thead-classes="text-primary"
	      :items-per-page="10"
            >
            </base-table>
	    <div class="pagination">
		<button class="prev-button" @click="firstPage" :disabled="table1.currentPage === 1">First</button>
		<button class="prev-button" @click="prevPage" :disabled="table1.currentPage === 1">Forward</button>
		<button class="next-button" @click="nextPage" :disabled="table1.currentPage === 50">Backward</button>
		<button class="next-button" @click="tailPage" :disabled="table1.currentPage === 50">Last</button>
		<span class="page-info">Current Page   {{table1.currentPage}}/{{this.totalPages}}</span>
	    </div>
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
	title: "AD Data Table",
	currentPage: 1,
	currentDataST: "ttd",
	currentDataName: "Train Data",
	currentGnb: 1,
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
	async getTableData(tableInfo , pageNumber) {
		console.log(tableInfo);
		console.log(pageNumber);
		console.log(this.table1.currentPage);
		try {
    		const response = await axios.get(`http://192.168.127.76:8888/${tableInfo}/1/${pageNumber}`);
				console.log(Object.values(response.data[1]));
				console.log(typeof Object.values(response.data[1]));
    				return Object.values(response.data[1]);
			}catch(error) {
    				console.log(error);
  			}
		},
	async loadDataForCurrentPage() {
		this.table1.data = await this.getTableData(this.table1.currentDataST , this.table1.currentPage);
	},
	prevPage() {
		if (this.table1.currentPage > 1) {
			console.log(this.table1.currentPage);
			this.table1.currentPage--;
			this.loadDataForCurrentPage();
		}
	},
	nextPage() {
		if (this.table1.currentPage < this.totalPages) {
			this.table1.currentPage++;
			this.loadDataForCurrentPage();
		}
	},
	firstPage() {
		this.table1.currentPage = 1;
		this.loadDataForCurrentPage();
	},
	tailPage() {
		this.table1.currentPage = this.totalPages;
		this.loadDataForCurrentPage();
	},
	ttdBtn() {
		this.table1.currentDataST = "ttd";
		this.table1.currentDataName = "Train Data";
		this.table1.currentPage = 1;
		this.loadDataForCurrentPage();
	},
	trdBtn() {
		this.table1.currentDataST = "trd";
		this.table1.currentDataName = "Test Data";
		this.table1.currentPage = 1;
		this.loadDataForCurrentPage();
	},
	vldBtn() {
		this.table1.currentDataST = "vld";
		this.table1.currentDataName = "Validation Data";
		this.table1.currentPage = 1;
		this.loadDataForCurrentPage();
	},
	gnbBtn() {
		if(this.table1.currentGnb < 5){
			this.table1.currentGnb++;
		}else{
			this.table1.currentGnb = 1;
		}
		this.table1.currentPage = 1;
		this.table1.currentDataST = "ttd";
		this.table1.currentDataName = "Train Data";
		this.loadDataForCurrentPage();
	},
	
},
computed: {
	totalPages() {
		return 50;
	},
},
async mounted() {
	this.loadDataForCurrentPage();
	//this.table1.data = await this.getTableData();


	console.log("mounted");
	console.log(this.table1.data);
},
};
const table1Columns = ["Date","DRB_AirDL","DRB_AirUL","DRB_RlcDL","DRB_RlcUL","Handover","Total_Delay"];


</script>
<style>
.pagination {
  display: flex;
  align-items: center;
  text-align: center;	

}
.prev-button {
  background-color: purple;
  color: yellow;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin: 0 10px;
  cursor: pointer;
}
.next-button {
  background-color: green;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin: 0 10px;
  cursor: pointer;
}
.page-info {
  margin-left: auto;
  font-size: 20px;
}
.ttd-btn,
.trd-btn,
.vld-btn {
  background-color: lightgray;
  color: darkblue;
  border: none;
  font-size: 12px;
  padding: 8px 16px;
  border-radius: 4px;
  margin: 0 10px;
  cursor: pointer;
}
.tablela {
  display: flex;
  align-items: center;
  text-align: center;	

}
/*테이블 정보*/


.gnbla {
  display: flex;
  align-items: center;
  text-align: center;	

}
/*
.gnbno-btn {
  margin: 0 5px;
  padding: 5px 10px;
  border: 5px solid #FFFFFF;
  background-color: #42A5F5;
  color: #FFFFFF;
  cursor: pointer;
  border-radius: 50%;
  width: 30px; 
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  }
  */
.gb-info {
  background-color: #3F51B5;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 8px;
  margin: 0 10px;
  cursor: pointer;
}
.gnb-info {
  background-color: #3F51B5;
  color: white;
  border: 1px solid #FFFFFF;
  padding: 5px 10px; 
  cursor: pointer;
  border-radius: 50%;
  width: 30px; 
  height: 30px;

  margin: 0 9px;
}


</style>
