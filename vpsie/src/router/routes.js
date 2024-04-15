const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),name:'MainLayout',
    children: [
      // , beforeEnter: requireAuth
      { path: 'dashboard', component: () => import('pages/Dashboard'),name:'dashboard'},
      { path: 'new', component: () => import('pages/NewServer'),name:'newServer'},

    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: 'user-register', component: () => import('pages/UserRegister'), name: 'user-register' },
      { path: '', component: () => import('pages/UserLogin'), name: 'user-login' },
      { path: 'forgetPass', component: () => import('pages/ForgetPassword'), name: 'ForgotPassword' },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]



export default routes

