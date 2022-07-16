import Budget from "../components/Budget/Budget"
import Overview from "../components/Overview/Overview"
import Settings from "../components/Settings/Settings"
import NotFound from "../components/NotFound/NotFound"

const RoutesConfig = [
    {
        path: '/people',
        exact: true,
        element: Budget
    },
    {
        path: '/',
        exact: true,
        element: Overview
    },
    {
        path: '/people/:id',
        exact: true,
        element: Settings
    }, {
        path: '/search',
        exact: true,
        element: NotFound
    },
   
]

export default RoutesConfig