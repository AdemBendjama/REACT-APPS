import { useState } from "react"


function ProductRow({ name, price, stocked }) {

    if (!stocked) {
        name = <span style={{ color: 'red' }} >
            {name}
        </span>
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>
    )
}

function ProductTable({ products, filterText, inStockOnly }) {

    let rows = []
    let lastCategory = null

    products.forEach((product) => {

        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow category={product.category} key={product.category} />
            )
        }
        
        if (product.name.toLowerCase().includes(filterText.toLowerCase()) && (!inStockOnly || product.stocked)) {
            rows.push(
                <ProductRow name={product.name} price={product.price} stocked={product.stocked} key={product.name} />
            )
        }


        lastCategory = product.category
    })


    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnly }) {
    return (
        <>
            <form>
                <input
                    type="text" placeholder="Search..."
                    value={filterText}
                    onChange={e => onFilterTextChange(e.target.value)}
                />
                <br />
                <label>
                    <input type="checkbox"
                        checked={inStockOnly}
                        onChange={e => onInStockOnly(e.target.checked)} />
                    {' '}
                    Only show products in stock
                </label>
            </form>
        </>
    )
}

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