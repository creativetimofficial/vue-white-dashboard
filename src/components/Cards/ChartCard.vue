<template>
  <card>
    <template slot="header">
      <div class="col-6" v-if="cardCol">
        <h5 class="card-category">
          <slot name="subTitle">
            {{subTitle}}
          </slot>
        </h5>
      </div>
      <h2 class="card-title">
        <slot name="title">
          {{title}}
        </slot>
      </h2>
    </template>
    <div>
      <div :id="chartId" class="ct-chart"></div>
      <div class="footer">
        <div class="stats">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>

  </card>
</template>
<script>
import Card from "./Card.vue";
export default {
  name: "chart-card",
  components: {
    Card
  },
  props:{
    cardCol: {
      type: Boolean,
      default: false
    },
    title:{
      type: String,
      default:""
    },
    subTitle:{
      type: String,
      default:""
    },
    chartType:{
      type: String,
      default: "Line"
    },
    chartData:{
      type: Object,
      default: () => {
        return{
          labels: [],
          series: []
        };
      }
    },
    chartOptions: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data(){
    return{
      chartId: "no-id"
    };
  },
  methods:{
    initChart(Chartist){
      const chartIdQuery = `#${this.chartID}`;
      Chartist[this.chartType](
        chartIdQuery,
        this.chartData,
        this.chartOptions
      );
    }
  }
}
</script>
<style>
</style>
