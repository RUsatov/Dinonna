
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/main/Index.vue') },
      { path: '/feedback', component: () => import('pages/feedback/Index.vue') },
      {
        path: '*',
        name: 'Error404',
        component: () => import('pages/Error404.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    name: 'Error404',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
