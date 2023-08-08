import { Line, mixins } from "vue-chartjs";

export default {
  name: "line-chart",
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: {
    extraOptions: Object,
    gradientColors: {
      type: Array,
      default: () => [
        "rgba(255,0,0,1)",
        "rgba(255,255,255,0.0)",
        "rgba(255,255,255,0.0)",
        "rgba(255,255,255,0.0)",
        "rgba(255,255,255,0.0)",
        "rgba(255,255,255,0.0)",
        "rgba(255,255,255,0.0)",
        "rgba(255,255,255,0.0)",
        "rgba(255,255,255,0.0)",
        "rgba(255,255,255,0.0)",
        "rgba(255,255,255,0.0)",
      ],
      validator: (val) => {
        return val.length > 2;
      },
    },
    gradientStops: {
      type: Array,
      default: () => [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1 , 0],
      validator: (val) => {
        return val.length > 2;
      },
    },
  },
  data() {
    return {
      ctx: null,
    };
  },
  methods: {
    updateGradients(chartData) {
      if (!chartData) return;
      const ctx =
        this.ctx || document.getElementById(this.chartId).getContext("2d");
      const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(
        this.gradientStops[0],
        this.gradientColors[0]
      );
      gradientStroke.addColorStop(
        this.gradientStops[1],
        this.gradientColors[1]
      );
      gradientStroke.addColorStop(
        this.gradientStops[2],
        this.gradientColors[2]
      );
      gradientStroke.addColorStop(
        this.gradientStops[3],
        this.gradientColors[3]
      );
      gradientStroke.addColorStop(
        this.gradientStops[4],
        this.gradientColors[4]
      );
      gradientStroke.addColorStop(
        this.gradientStops[5],
        this.gradientColors[5]
      );
      gradientStroke.addColorStop(
        this.gradientStops[6],
        this.gradientColors[6]
      );
      gradientStroke.addColorStop(
        this.gradientStops[7],
        this.gradientColors[7]
      );
      gradientStroke.addColorStop(
        this.gradientStops[8],
        this.gradientColors[8]
      );
      gradientStroke.addColorStop(
        this.gradientStops[9],
        this.gradientColors[9]
      );
      gradientStroke.addColorStop(
        this.gradientStops[10],
        this.gradientColors[10]
      );
      chartData.datasets.forEach((set) => {
        set.backgroundColor = gradientStroke;
      });
    },
  },
  mounted() {
    this.$watch(
      "chartData",
      (newVal, oldVal) => {
        this.updateGradients(this.chartData);
        if (!oldVal) {
          this.renderChart(this.chartData, this.extraOptions);
        }else{
	  this.updateChart();
	}
      },
      { immediate: true }
    );
  },
};
