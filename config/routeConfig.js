const routes = [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    authority: 'a',
    routes: [
      {
        path: '/',
        redirect: '/welcome',
      },
      {
        path: '/welcome',
        name: 'welcome',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/admin',
        name: 'admin',
        icon: 'crown',
        component: './Admin',
        routes: [
          {
            path: '/admin/sub-page',
            name: 'sub-page',
            icon: 'smile',
            component: './Welcome',
          },
        ],
      },
    ],
  },
];
export default routes;
