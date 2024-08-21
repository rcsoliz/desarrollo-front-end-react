import { createBrowserRouter } from "react-router-dom";
import Default from "../screens/Default";
import FilterableProductTable from "../screens/FilterableProductTable";

import App from "../App";

const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];

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
                element: <FilterableProductTable products={PRODUCTS} />,
            }
        ]

    }    
])

export default router;
