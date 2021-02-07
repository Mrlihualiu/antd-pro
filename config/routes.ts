export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
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
                authority: ['admin'],
                routes: [
                  {
                    path: '/admin/sub-page',
                    name: 'sub-page',
                    icon: 'smile',
                    component: './Welcome',
                    authority: ['admin'],
                  },
                ],
              },
              {
                path: '/goods',
                name: '商品',
                icon: 'crown',
                // component: './Goods',
                authority: ['admin', 'user'],
                routes: [
                  {
                    path: '/goods/list',
                    name: '商品列表',
                    icon: 'smile',
                    component: './Goods/List',
                    authority: ['admin', 'user'],
                  },
                  {
                    path: '/goods/add',
                    name: '添加商品',
                    icon: 'smile',
                    component: './Goods/Add',
                    authority: ['admin', 'user'],
                  },
                  {
                    path: '/goods/Brand',
                    name: '商品分类',
                    icon: 'smile',
                    component: './Goods/Brand',
                    authority: ['admin', 'user'],
                  },
                  {
                    path: '/goods/style',
                    name: '商品类型',
                    icon: 'smile',
                    component: './Goods/Style',
                    authority: ['admin', 'user'],
                  },
                ],
              },
              {
                name: 'list.table-list',
                icon: 'table',
                path: '/list',
                component: './TableList',
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
