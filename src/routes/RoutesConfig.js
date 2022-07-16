import Budget from "../components/Budget/Budget"
import Overview from "../components/Overview/Overview"
import Settings from "../components/Settings/Settings"
import NotFound from "../components/NotFound/NotFound"

const RoutesConfig = [
    {
        path: '/Budget',
        exact: true,
        element: Budget
    },
    {
        path: '/Overview',
        exact: true,
        element: Overview
    },
    {
        path: '/Settings',
        exact: true,
        element: Settings
    }, {
        path: '/NotFound',
        exact: true,
        element: NotFound
    },
   
]

export default RoutesConfig