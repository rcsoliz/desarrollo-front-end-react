import { createBrowserRouter } from "react-router-dom";
import Default from "../screens/Default";
import FilterableProductTable from "../screens/FilterableProductTable";
import Form from "../screens/Form";

import App from "../App";
import LandingPage from '../screens/LandingPage';

const basename = process.env.NODE_ENV === "production" ? "/desarrollo-front-end-react" : "/";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element:<LandingPage />,
            },
            {
                path: '/default',
                element: <Default />, 
            },
            {
                path: "/products",
                element: <FilterableProductTable/>,
            },
            {
                path: '/login',
                element: <Form />, 
            },
        ]

    }    
], 
    {
        basename: basename    
    }
);

export default router;
