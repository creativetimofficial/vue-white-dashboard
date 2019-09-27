<template>
  <div class="content">
    <div class="row">
      <div class="col-12">
        <card>
          <template slot="header">
            <h4 class="card-title">Simple Table</h4>
          </template>
          <div class="table-responsive text-left">
            <base-table :data="table1.data"
                        :columns="table1.columns"
                        thead-classes="text-primary">
            </base-table>
          </div>
        </card>
      </div>

      <div class="col-12">
        <card class="card-plain">
          <template slot="header">
                <h4 class="card-title"> Table on Plain Background</h4>
                <p class="category"> Here is a subtitle for this table</p>
              </template>
          <div class="table-full-width table-responsive text-left">
            <base-table :title="table2.title" :sub-title="table2.subTitle" :data="table2.data"
                        :columns="table2.columns">
            </base-table>
          </div>
        </card>
      </div>

    </div>
  </div>
</template>
<script>

import {
  Card
} from "@/components/index";

import BaseTable from "@/components/BaseTable";

const tableColumns = ["Name", "Country", "City", "Salary"];
const tableData = [
  {
    id: 1,
    name: "Dakota Rice",
    salary: "$36.738",
    country: "Niger",
    city: "Oud-Turnhout",
  },
  {
    id: 2,
    name: "Minerva Hooper",
    salary: "$23,789",
    country: "Curaçao",
    city: "Sinaai-Waas"
  },
  {
    id: 3,
    name: "Sage Rodriguez",
    salary: "$56,142",
    country: "Netherlands",
    city: "Baileux"
  },
  {
    id: 4,
    name: "Philip Chaney",
    salary: "$38,735",
    country: "Korea, South",
    city: "Overland Park"
  },
  {
    id: 5,
    name: "Doris Greene",
    salary: "$63,542",
    country: "Malawi",
    city: "Feldkirchen in Kärnten"
  },
  {
    id: 6,
    name: 'Mason Porter',
    salary: '$98,615',
    country: 'Chile',
    city: 'Gloucester'
  },
  {
    id: 7,
    name: 'Jon Porter',
    salary: '$78,615',
    country: 'Portugal',
    city: 'Gloucester'
  }
];


export default{
  components:{
    Card,
    BaseTable
  },
  data() {
    return {
      table1: {
        title: "Simple Table",
        columns: [...tableColumns],
        data: [...tableData]
      },
      table2: {
        title: "Table on Plain Background",
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  }
}
</script>
<style>
</style>
