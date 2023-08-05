import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import TableList from "@/pages/AD.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "table",
    children: [
      {
        path: "table",
        name: "AD(Anomaly Detection)  Data",
        component: TableList,
      },
    ],
  },
];

export default routes;
