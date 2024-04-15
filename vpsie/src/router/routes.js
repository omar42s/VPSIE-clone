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

// function requireAuth(to, from, next) {
//   const isAuthenticated = // Check if user is authenticated (e.g., from your authentication state)
//   if (!isAuthenticated) {
//     next({ name: 'user-login', query: { redirect: to.fullPath } }); // Redirect to login page
//   } else {
//     // Fetch user information (e.g., name)
//     const userInfo = // Fetch user information from authentication state or API
//     next(vm => {
//       vm.$store.commit('setUserInfo', userInfo);
//     });
//   }
// }

export default routes

