

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

function ProductTable({ products }) {

    let rows = []
    let lastCategory = null

    products.forEach((product) => {

        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow category={product.category} key={product.category}/>
            )
        }

        rows.push(
            <ProductRow name={product.name} price={product.price} stocked={product.stocked} key={product.name} />
        )

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

function SearchBar() {
    return (
        <>
            <form>
                <input type="text" placeholder="Search..." />
                <br />
                <label>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
                </label>
            </form>
        </>
    )
}

function FilterableProductTable({ products }) {
    return (
        <div>
            <SearchBar />
            <ProductTable products={products} />
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