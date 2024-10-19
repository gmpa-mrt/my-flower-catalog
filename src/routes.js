
export const routes = [
    {
        path: '/',
        component: () => import('./pages/FrontCoverPage.vue'),
    },
    {
        path: '/first-page',
        component: () => import('./pages/FirstPage.vue'),
    },
    {
        path: '/summary',
        component: () => import('./pages/HomePage.vue'),
    },
    {
      path: '/table-contents',
      component: () => import('./pages/TableContentsPage.vue'),
    },
    {
        path: '/list-page/:items(flowers|trees)',
        component: () => import('./pages/ListPage.vue'),
    },
    {
        // Prevents wrong route for items
        path: '/list-page/',
        redirect: to => {
            return '/list-page/plants'
        },
    },
    {
        path: '/list-page/:items/:id',
        component: () => import('./pages/DetailsPage.vue'),
    },
    {
        path: '/my-notes',
        component: () => import('./pages/NotesPage.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('./pages/NotFoundPage.vue'),
    },
]