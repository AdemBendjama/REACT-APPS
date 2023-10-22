import PropTypes from 'prop-types';
import React from 'react';

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

ProductRow.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stocked: PropTypes.bool.isRequired,
};

export default ProductRow