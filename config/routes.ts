export default [
  {name: '主页', path: '/', icon: 'smile', component: './Index' },
  {name: '接口详情', path: '/openApi/:id', icon: 'smile', component: './OpenApi', hideInMenu: true},
  {name: '登录', path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  {name: '管理员页面',
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {name: '接口管理', icon: 'table', path: '/admin/xianYu_openApi', component: './Admin/XianYuOpenApi' },
      {name: '接口统计分析', icon: 'analysis', path: '/admin/xianYu_openApi_analysis', component: './Admin/XianYuOpenApiAnalysis' },
    ],
  },
  // {path: '/', redirect: '/welcome' },
  {path: '*', layout: false, component: './404' },
];
