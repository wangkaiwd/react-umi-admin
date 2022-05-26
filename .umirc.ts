import { defineConfig } from 'umi';

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
