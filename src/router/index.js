import Home from '../pages/home/index.jsx'
import City from '../pages/city/index.jsx'
import Search from '../pages/search/index.jsx'

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/city',
        component: City
    },
    {
        path: '/search/:id/:ids?',
        component: Search
    }
]