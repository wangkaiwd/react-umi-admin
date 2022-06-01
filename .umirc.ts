import { defineConfig } from 'umi';
import path from 'path';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mock: false,
  webpack5: {},
  mfsu: {},
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
