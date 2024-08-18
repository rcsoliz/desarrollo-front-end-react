import SearchBar from "./_components_products/SearchBar";
import ProductTable from "./_components_products/ProductTable";

import { useState } from 'react';

const FilterableProductTable = ({ products }) => {

    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange ={setFilterText}
                onInStockOnlyChange ={setInStockOnly}
            />
            <ProductTable 
                products={products} 
                filterText = {filterText}
                inStockOnly = {inStockOnly}    
            />
        </>
    )
}

export default FilterableProductTable;