/** @format */

import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

export default [
  layout('./layouts/PublicLayout.tsx', [index('./pages/Home.tsx')]),
  route('likes', './pages/Likes.tsx'),
] satisfies RouteConfig;
