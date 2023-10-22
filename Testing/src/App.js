import React, { useState } from "react";
import PropTypes from 'prop-types';
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState('')
    const [inStockOnly, setInStockOnly] = useState(false)

    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnly={setInStockOnly} />
            <ProductTable products={products}
                filterText={filterText}
                inStockOnly={inStockOnly} />
        </div>
    )

}

FilterableProductTable.propTypes = {
    products: PropTypes.array.isRequired,
}


const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

const sortedProducts = products.sort((a, b) => (a.category < b.category) ? -1 : (a.category > b.category) ? 1 : 0);


export default function App() {
    return (
        <FilterableProductTable products={sortedProducts} />
    )
}