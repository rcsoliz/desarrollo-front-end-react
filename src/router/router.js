import { createBrowserRouter } from "react-router-dom";
import Default from "../screens/Default";
import FilterableProductTable from "../screens/FilterableProductTable";
import Form from "../screens/Form";

import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
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
])

export default router;
