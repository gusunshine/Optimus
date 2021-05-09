import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/about',
  name: 'About',
  component: LAYOUT,
  redirect: '/about/index',
  meta: {
    icon: 'ant-design:car-filled',
    title: '车辆管理'//t('routes.dashboard.about'),
  },
  children: [
    {
      path: 'index',
      name: 'AboutPage',
      component: () => import('/@/views/sys/about/index.vue'),
      meta: {
        title: '车辆管理',//t('routes.dashboard.about'),
        icon: 'ant-design:car-filled'
      },
    },
  ],
};

export default dashboard;
