import { defineConfig } from 'umi';
import routes from './routeConfig';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
});
