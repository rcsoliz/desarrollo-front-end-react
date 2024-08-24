import { useSelector, useDispatch } from "react-redux";
import {useEffect} from "react";
import SearchBar from "./Products/_components/SearchBar";
import ProductTable from "./Products/_components/ProductTable";


import {setProducts} from "../../src/redux/products/productAction";
import { useState } from 'react';

const FilterableProductTable = () => {

    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setProducts([
                { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
                { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
                { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
                { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
                { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
                { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
            ])
        )
    }, []);

    return (
        <>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange ={setFilterText}
                onInStockOnlyChange ={setInStockOnly}
            />
            <ProductTable 
                products={product.PRODUCTS}
                filterText = {filterText}
                inStockOnly = {inStockOnly}    
            />
        </>
    )
}

export default FilterableProductTable;