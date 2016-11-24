<template>
  <div class="agz-datagrid-container">
    <table class="agz-datagrid">
      <thead>
        <tr class="agz-datagrid__header">
          <th>
            <div class="agz-datagrid__header-item agz-datagrid__header-item-left">
              Column 1
            </div>
          </th>
          <th>
            <div class="agz-datagrid__header-item agz-datagrid__header-item-left">
              Column 2
            </div>
          </th>
          <th>
            <div class="agz-datagrid__header-item agz-datagrid__header-item-left">
              Column 3
            </div>
          </th>

        </tr>
      </thead>
      <tbody>
        <tr class="agz-datagrid__body">
          <td class="agz-datagrid__body-item">
            data1
          </td>
          <td class="agz-datagrid__body-item">
            data2
          </td>
          <td class="agz-datagrid__body-item">
            data3
          </td>
        </tr>
        <tr class="agz-datagrid__body">
          <td class="agz-datagrid__body-item">
            data1
          </td>
          <td class="agz-datagrid__body-item">
            data2
          </td>
          <td class="agz-datagrid__body-item">
            data3
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

      }
    }
  }
</script>
