<template>
  <div class="agz-datagrid-container">
    <table class="agz-datagrid">
      <thead>
        <tr class="agz-datagrid__header">
          <th v-for="field in schema.fields">
            <div class="agz-datagrid__header-item agz-datagrid__header-item-left">
              {{field.name}}
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="agz-datagrid__body">
          <td v-for="field in schema.fields" class="agz-datagrid__body-item">
            data1
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    name: 'grid',
    props: ['config'],
    computed: {
      schema () {
        return this.config
      }
    }
  }
</script>
