/** @format */

import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

export default [
  index('./pages/welcome.tsx'),
  layout('./layouts/PublicLayout.tsx', [
    route('main', './pages/main.tsx'),
    route('likes', './pages/likes.tsx'),
  ]),
] satisfies RouteConfig;
