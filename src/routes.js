export const routes = [
    {
        path: '/',
        component: () => import('./pages/HomePage.vue'),
    },
    {
      path: '/table-contents',
      component: () => import('./pages/TableContentsPage.vue'),
    },
    {
        path: '/list-page/:id',
        component: () => import('./pages/ListPage.vue'),
    },
    {
        path: '/details',
        component: () => import('./pages/DetailsPage.vue'),
    },
    {
        path: '/my-notes',
        component: () => import('./pages/NotesPage.vue'),
    },
    {
        path: '/front-cover',
        component: () => import('./pages/FrontCoverPage.vue'),
    }
]