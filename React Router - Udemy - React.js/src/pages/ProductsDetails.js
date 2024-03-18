import React from 'react'
import { Link, useParams } from 'react-router-dom'
function ProductsDetailsPage() {
    const params = useParams()

    return (
        <>
            <h1>{params.productID}</h1>
            <div>
                <button><Link to='..'>Back</Link></button>
            </div>
        </>
    )
}

export default ProductsDetailsPage
