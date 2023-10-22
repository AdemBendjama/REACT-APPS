import PropTypes from 'prop-types';
import React from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

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

ProductTable.propTypes = {
    products: PropTypes.array.isRequired,
    filterText: PropTypes.string.isRequired,
    inStockOnly: PropTypes.bool.isRequired,
};


export default ProductTable