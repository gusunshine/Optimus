<template>
  <div class="p-4">
    <Card>
      <Calendar v-model:value="value" @panelChange="onPanelChange" />
    </Card>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Card, Calendar } from 'ant-design-vue';
  import { Moment } from 'moment';

  export default defineComponent({
    components: {
      Calendar,
      Card,
    },
    setup() {
      const value = ref<Moment>();
      const onPanelChange = (value: Moment, mode: string) => {
        console.log(value, mode);
      };
      return {
        value,
        onPanelChange,
      };
    },
  });
</script>
