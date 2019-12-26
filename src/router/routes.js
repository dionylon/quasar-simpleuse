
const routes = [
  {
    path: '/',
    component: () => import('layouts/IndexLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/article', component: () => import('pages/article/Article.vue') },
      { path: '/archive', component: () => import('pages/article/Archive.vue') },
      { path: '/category', component: () => import('pages/article/Category.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
