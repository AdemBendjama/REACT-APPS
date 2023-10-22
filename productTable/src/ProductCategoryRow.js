import PropTypes from 'prop-types';
import React from 'react';



function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>
    )
}

ProductCategoryRow.propTypes = {
    category: PropTypes.string.isRequired
}

export default ProductCategoryRow
