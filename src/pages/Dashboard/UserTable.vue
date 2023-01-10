<template>
  <base-table
    :data="table.data"
    :columns="table.columns"
    table-class="text-left"
    thead-classes="text-primary text-left"
  >
  </base-table>
</template>
<script>
import BaseTable from "@/components/BaseTable";

export default {
  components: {
    BaseTable,
  },
  computed: {
    table() {
      return this.$t("dashboard.usersTable");
    },
  },
};
</script>
<style></style>
