import { defineConfig } from 'umi';
import routes from './routeConfig';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  favicon: '/favicon.png',
  title: '房产',
  ignoreMomentLocale: true,
  dynamicImport: {
    loading: '@/components/Loading',
  },
  hash: false, // 需要在生产环境开启
  routes,
});
