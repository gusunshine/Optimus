import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 10,
  menu: {
    name: '首页', // t('routes.dashboard.dashboard'),
    path: '/dashboard'
  },
};
export default menu;
