export default [
  {name: '咸鱼API', path: '/', icon: 'smile', component: './Index' },
  {name: '已开通API', path: '/user/openapi', icon: 'smile', component: './User/OpenApi' },
  {name: '用户设置', path: '/user/setting', icon: 'smile', component: './User/Setting' },
  {name: '接口详情', path: '/openApi/:id', icon: 'smile', component: './OpenApi', hideInMenu: true},
  {name: '登录', path: '/user', layout: false,
    routes: [{ path: '/user/login', component: './User/Login' },{ name: '注册', path: '/user/register', component: './User/Register' },]
  },
  {name: '管理页',
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {name: 'API管理', icon: 'table', path: '/admin/xianYu_openApi', component: './Admin/XianYuOpenApi' },
      {name: 'API调用次数统计', icon: 'analysis', path: '/admin/xianYu_openApi_analysis', component: './Admin/XianYuOpenApiAnalysis' },
      {name: '用户管理', icon: 'table', path: '/admin/xianYu_openApi_user', component: './Admin/XianYuOpenApiUser' },
    ],
  },
  // {path: '/', redirect: '/welcome' },
  {path: '*', layout: false, component: './404' },
];
