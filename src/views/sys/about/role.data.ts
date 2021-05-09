import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
export const columns: BasicColumn[] = [
  {
    title: '时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '车牌号',
    dataIndex: 'roleValue',
    width: 180,
  },
  {
    title: '摄像头位置',
    dataIndex: 'orderNo',
    width: 50,
  },
  {
    title: '是否超速',
    dataIndex: 'status',
    width: 80,
    customRender: ({ record }) => {
      const status = record.status;
      const enable = ~~status === 0;
      const color = enable ? 'green' : 'red';
      const text = enable ? '未超速' : '超速';
      return h(Tag, { color: color }, () => text);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'time',
    component: 'RangePicker',
    label: '时间：',
    colProps: { span: 7 },
  },
  {
    field: 'roleNme',
    label: '车牌号：',
    component: 'Input',
    colProps: { span: 5 },
  },
  {
    field: 'status',
    label: '摄像头位置：',
    component: 'Select',
    componentProps: {
      options: [
        { label: '1号摄像头', value: '1' },
        { label: '2号摄像头', value: '2' },
        { label: '3号摄像头', value: '3' },
      ],
    },
    colProps: { span: 6 },
  },
];
