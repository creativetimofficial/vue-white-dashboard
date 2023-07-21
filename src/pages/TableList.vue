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

      <div class="col-12">
        <card class="card-plain">
          <template slot="header">
            <h4 class="card-title">Table on Plain Background</h4>
            <p class="category">Here is a subtitle for this table</p>
          </template>
          <div class="table-full-width table-responsive text-left">
            <base-table
              :title="table2.title"
              :sub-title="table2.subTitle"
              :data="table2.data"
              :columns="table2.columns"
            >
            </base-table>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import { Card } from "@/components/index";

import BaseTable from "@/components/BaseTable";

import axios from "axios"; 

export default {
  components: {
    Card,
    BaseTable,
  },
  data() {
    return {
     table1:{
	title: "Simple Table",
	columns: [...table1Columns],
	data: [],
     },
     table2:{
        title: "Table on Plain Background",
        columns: [...tableColumns],
        data: [...tableData],
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
const table1Columns = ["DRB_AirDL","DRB_AirUL","DRB_RlcDL","DRB_RlcUL","Date","Handover","Total_Delay"];
const tableColumns = ["id", "country", "city", "salary"];
const tableData = [
  {
    id: 1,
    name: "Dakota Rice",
    salary: 36.738,
    country: "Niger",
    city: "Oud-Turnhout",
  },
  {
    id: 2,
    name: "Minerva Hooper",
    salary: "$23,789",
    country: "Curaçao",
    city: "Sinaai-Waas",
  },
  {
    id: 3,
    name: "Sage Rodriguez",
    salary: "$56,142",
    country: "Netherlands",
    city: "Baileux",
  },
  {
    id: 4,
    name: "Philip Chaney",
    salary: "$38,735",
    country: "Korea, South",
    city: "Overland Park",
  },
  {
    id: 5,
    name: "Doris Greene",
    salary: "$63,542",
    country: "Malawi",
    city: "Feldkirchen in Kärnten",
  },
  {
    id: 6,
    name: "Mason Porter",
    salary: "$98,615",
    country: "Chile",
    city: "Gloucester",
  },
];


</script>
<style></style>
