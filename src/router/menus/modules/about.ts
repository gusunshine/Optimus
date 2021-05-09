import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const about: MenuModule = {
  orderNo: 100000,
  menu: {
    path: '/about/index',
    name: '车辆管理' // t('routes.dashboard.about'),
  },
};
export default about;
