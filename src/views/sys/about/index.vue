<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar></template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'mdi:camera-image',
              onClick: handleDelete.bind(null, record)
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getRoleListByPage } from '/@/api/sys/system';
  import { columns, searchFormSchema } from './role.data';
  export default defineComponent({
    name: 'RoleManagement',
    components: { BasicTable, TableAction },
    setup() {
      const [registerTable] = useTable({
        title: '车辆超速查询',
        api: getRoleListByPage,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 80,
          title: '图片链接',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });
      function handleDelete(record: Recordable) {
        console.log(record);
      }
      return {
        registerTable,
        handleDelete
      };
    },
  });
</script>
