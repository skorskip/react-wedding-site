import { Home } from '../view/home/home';
import { DetailsPage } from '../view/details-page/details-page';
import { Login } from '../view/login/login';

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/details',
        component: DetailsPage
    },
    {
        path: "/login",
        component: Login
    }
]