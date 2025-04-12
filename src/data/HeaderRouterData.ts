/** @format */

import like from '@assets/icons/like.svg';
import notification from '@assets/icons/notification.svg';
import settings from '@assets/icons/setting.svg';

interface IHeaderRouter {
  icon: string;
  path: string;
  [key: string]: object | string;
}

const HeaderRouterData: IHeaderRouter[] = [
  { icon: like, path: 'likes' },
  { icon: notification, path: 'notification' },
  { icon: settings, path: 'settings' },
  // { icon: 'search', path: 'search' },
  // { icon: 'profile', path: '/profile' },
];

export default HeaderRouterData;
