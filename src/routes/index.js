import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from '../pages/Home'
import ExplorePage from '../pages/ExplorePage'
import DetailsPage from '../pages/DetailsPage'
import Search from '../pages/Search'

const router=createBrowserRouter([{
    path: "/",
    element: <App />,
    children:[{
        path: "",
        element: <Home />
    },
    {
        path: ":explore",
        element: <ExplorePage />
    },
    {
        path: ":explore/:id",
        element: <DetailsPage />
    },
    {
        path: "search",
        element: <Search/>
    },
    {
        path:"cinewood",
        element:<Home/>
    }
    // {
    //     path: "tv",
    //     element: <ExplorePage/>
    //   // element: <h1 className="text-white">TV Shows Page</h1>
    // },
    // {
    //     path: "movie",
    //     element: <ExplorePage/>
    //   //  element: <h1 className="text-white">Movies Page</h1>
    // }
]
}])


export default router;