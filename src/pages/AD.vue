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
		<button class="next-button" @click="nextPage" :disabled="table1.currentPage === this.table1.currenttotalPage">Backward</button>
		<button class="next-button" @click="tailPage" :disabled="table1.currentPage === this.table1.currenttotalPage">Last</button>
		<span class="page-info">Current Page   {{table1.currentPage}}/{{this.table1.currenttotalPage}}</span>
	    </div>
          </div>
        </card>
      </div>
    </div>
    <div class="row">
      <line-chart ref="blackChartInstance" :chart-data="AirDLChart"></line-chart>
      <line-chart ref="blackChartInstance" :chart-data="AirULChart"></line-chart>
      <line-chart ref="blackChartInstance" :chart-data="RlcDLChart"></line-chart>
      <line-chart ref="blackChartInstance" :chart-data="RlcULChart"></line-chart>
      <line-chart ref="blackChartInstance" :chart-data="HandoverChart"></line-chart>
      <line-chart ref="blackChartInstance" :chart-data="blackChart"></line-chart>
    </div>                                                                       
  </div>                                                                         
</template>                                                                      
<script>                                                                         
import { Card } from "@/components/index";
import { Line, mixins } from "vue-chartjs";
import LineChart from "@/components/Charts/LineChart";
import * as chartConfigs from "@/components/Charts/config";
import BaseTable from "@/components/BaseTable";
import config from "@/config";

import axios from "axios"; 

const chartlabels = ["Date","DRB_AirDL","DRB_AirUL","DRB_RlcDL","DRB_RlcUL","Handover","Total_Delay"];
export default {
  components: {
    Card,
    BaseTable,
    LineChart,
  },
  data() {
    return {
     table1:{
	title: "AD Data Table",
	currenttotalPage: 318,
	currentPage: 1,
	currentDataST: "ttd",
	currentDataName: "Train Data",
	currentGnb: 1,
	columns: [...table1Columns],
	data: [],
     },
     AirDLChart: {
        labels: [],// Your labels here
        datasets: [
          {
            label: "Air Downlink Delay Chart",
            fill: true,
            borderColor: "black", // Change color as needed
            borderWidth: 1,
            borderDash: [],
	    threshold: 0.15,
            borderDashOffset: 0.0,
            // use data is or not over threshold to change pointBackGroundColor
	    pointBackgroundColor: "black",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "black", // Change color as needed
            pointBorderWidth: 20,
            pointHoverRadius: 3,
            pointHoverBorderWidth: 39,
            pointRadius: 3,
            data: [], // Your data here
          },
        ],
      },
     AirULChart: {
        labels: [], // Your labels here
        datasets: [
          {
            label: "Air Uplink Delay Chart",
            fill: true,
            borderColor: "black", // Change color as needed
            borderWidth: 1,
            borderDash: [],
	    threshold: 0.15,
            borderDashOffset: 0.0,
            // use data is or not over threshold to change pointBackGroundColor
	    pointBackgroundColor: "black",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "black", // Change color as needed
            pointBorderWidth: 20,
            pointHoverRadius: 3,
            pointHoverBorderWidth: 39,
            pointRadius: 3,
            data: [], // Your data here
          },
        ],
      },
     RlcDLChart: {
        labels: [], // Your labels here
        datasets: [
          {
            label: "Rlc Downlink Delay Chart",
            fill: true,
            borderColor: "black", // Change color as needed
            borderWidth: 1,
            borderDash: [],
	    threshold: 0.15,
            borderDashOffset: 0.0,
            // use data is or not over threshold to change pointBackGroundColor
	    pointBackgroundColor: "black",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "black", // Change color as needed
            pointBorderWidth: 20,
            pointHoverRadius: 3,
            pointHoverBorderWidth: 39,
            pointRadius: 3,
            data: [], // Your data here
          },
        ],
      },
     RlcULChart: {
        labels: [], // Your labels here
        datasets: [
          {
            label: "Rlc UpLink Delay Chart",
            fill: true,
            borderColor: "black", // Change color as needed
            borderWidth: 1,
            borderDash: [],
	    threshold: 0.15,
            borderDashOffset: 0.0,
            // use data is or not over threshold to change pointBackGroundColor
	    pointBackgroundColor: "black",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "black", // Change color as needed
            pointBorderWidth: 20,
            pointHoverRadius: 3,
            pointHoverBorderWidth: 39,
            pointRadius: 3,
            data: [], // Your data here
          },
        ],
      },
     HandoverChart: {
        labels: [], // Your labels here
        datasets: [
          {
            label: "Handover Success Rate Chart",
            fill: true,
            borderColor: "black", // Change color as needed
            borderWidth: 1,
            borderDash: [],
	    threshold: 0.15,
            borderDashOffset: 0.0,
            // use data is or not over threshold to change pointBackGroundColor
	    pointBackgroundColor: "black",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "black", // Change color as needed
            pointBorderWidth: 20,
            pointHoverRadius: 3,
            pointHoverBorderWidth: 39,
            pointRadius: 3,
            data: [], // Your data here
          },
        ],
      },
     blackChart: {
        labels: [], // Your labels here
        datasets: [
          {
            label: "Total Delay Chart",
            fill: true,
            borderColor: "black", // Change color as needed
            borderWidth: 1,
            borderDash: [],
	    threshold: 0.15,
            borderDashOffset: 0.0,
            // use data is or not over threshold to change pointBackGroundColor
	    pointBackgroundColor: "black",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "black", // Change color as needed
            pointBorderWidth: 20,
            pointHoverRadius: 3,
            pointHoverBorderWidth: 39,
            pointRadius: 3,
            data: [], // Your data here
          },
        ],
      },
    };
  },
methods : {
	async getTableData(gnbNumber , tableInfo , pageNumber) {
		console.log(tableInfo);
		console.log(pageNumber);
		console.log(this.table1.currentPage);
		try {
    		const response = await axios.get(`http://192.168.127.76:8888/${tableInfo}/${gnbNumber}/${pageNumber}`);
				console.log(Object.values(response.data[this.table1.currentGnb]));
				console.log(typeof Object.values(response.data[this.table1.currentGnb]));
    				return Object.values(response.data[this.table1.currentGnb]);
			}catch(error) {
    				console.log(error);
  			}
	},
	async getChartData(gnbNumber , tableInfo , pageNumber) {
		try {
    		const response = await axios.get(`http://192.168.127.76:8888/${tableInfo}/${gnbNumber}/${pageNumber}`);
				console.log(typeof Object.values(response.data[this.table1.currentGnb]));
    				return Object.values(response.data[this.table1.currentGnb]);
			}catch(error) {
    				console.log(error);
  			}
	},
	async loadDataForCurrentPage() {
		this.table1.data = await this.getTableData(this.table1.currentGnb , this.table1.currentDataST , this.table1.currentPage);
		const fdata = await this.getChartData(this.table1.currentGnb , this.table1.currentDataST , this.table1.currentPage);
		const RTC = await this.getChartData(this.table1.currentGnb , this.table1.currentDataST , this.table1.currentPage);
		this.blackChart.datasets[0].data = fdata.map((item) => item.Total_Delay);
		this.AirDLChart.datasets[0].data = fdata.map((item) => item.DRB_AirDL);
		this.AirULChart.datasets[0].data = fdata.map((item) => item.DRB_AirUL);
		this.RlcDLChart.datasets[0].data = fdata.map((item) => item.DRB_RlcDL);
		this.RlcULChart.datasets[0].data = fdata.map((item) => item.DRB_RlcUL);
		this.HandoverChart.datasets[0].data = fdata.map((item) => item.Handover);
		this.blackChart.labels = RTC.map((item) => item.Date);
		this.AirDLChart.labels = RTC.map((item) => item.Date);
		this.AirULChart.labels = RTC.map((item) => item.Date);
		this.RlcDLChart.labels = RTC.map((item) => item.Date);
		this.RlcULChart.labels = RTC.map((item) => item.Date);
		this.HandoverChart.labels = RTC.map((item) => item.Date);
		//console.log(this.fdata);
		//console.log(this.blackChart.datasets[0].data);
		//console.log(this.blackChart.datasets[0].labels);
	},
	prevPage() {
		if (this.table1.currentPage > 1) {
			console.log(this.table1.currentPage);
			this.table1.currentPage--;
			this.loadDataForCurrentPage();
		}
	},
	nextPage() {
		if (this.table1.currentPage < this.table1.currenttotalPage) {
			this.table1.currentPage++;
			this.loadDataForCurrentPage();
		}
	},
	firstPage() {
		this.table1.currentPage = 1;
		this.loadDataForCurrentPage();
	},
	tailPage() {
		this.table1.currentPage = this.table1.currenttotalPage;
		this.loadDataForCurrentPage();
	},
	ttdBtn() {
		this.table1.currentDataST = "ttd";
		this.table1.currentDataName = "Train Data";
		this.table1.currentPage = 1;
		this.table1.currenttotalPage = 318;
		this.loadDataForCurrentPage();
	},
	trdBtn() {
		this.table1.currentDataST = "trd";
		this.table1.currentDataName = "Test Data";
		this.table1.currentPage = 1;
		this.table1.currenttotalPage = 79;
		this.loadDataForCurrentPage();
	},
	vldBtn() {
		this.table1.currentDataST = "vld";
		this.table1.currentDataName = "Validation Data";
		this.table1.currentPage = 1;
		this.table1.currenttotalPage = 399;
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
		this.table1.currenttotalPage = 318;
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
	console.log("mounted");
	this.loadDataForCurrentPage();
	this.loadDate();
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
