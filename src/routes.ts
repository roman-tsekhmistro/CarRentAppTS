/** @format */

import { type RouteConfig, index, layout } from '@react-router/dev/routes';

export default [
  layout('./layouts/PublicLayout.tsx', [index('./pages/Home.tsx')]),
] satisfies RouteConfig;
