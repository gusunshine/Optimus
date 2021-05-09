import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/index',
  meta: {
    icon: 'ant-design:home-filled',
    title: '首页'// t('routes.dashboard.dashboard'),
  },
  children: [
    {
      path: 'index',
      name: 'Workbench',
      component: () => import('/@/views/dashboard/workbench/index.vue'),
      meta: {
        title: '首页'// t('routes.dashboard.workbench'),
      },
    },
  ],
};

export default dashboard;
