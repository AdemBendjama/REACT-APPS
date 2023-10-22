import PropTypes from 'prop-types';
import React from 'react';


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

SearchBar.propTypes = {
    filterText: PropTypes.string.isRequired,
    inStockOnly: PropTypes.bool.isRequired,
    onFilterTextChange: PropTypes.func.isRequired,
    onInStockOnly: PropTypes.func.isRequired,

}

export default SearchBar