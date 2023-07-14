<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in tableData" :key="index">
          <td>{{ row.column1 }}</td>
          <td>{{ row.column2 }}</td>
          <td>{{ row.column3 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3' },
        { column1: 'Data 4', column2: 'Data 5', column3: 'Data 6' },
        { column1: 'Data 7', column2: 'Data 8', column3: 'Data 9' }
      ]
    };
  }
};
</script>

<style scoped>
/* Add any custom styling here */
</style>

