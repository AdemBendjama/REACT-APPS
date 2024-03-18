import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate('products')
    }
    return (
        <>
            <h1>
                Welcome to Homepage !
            </h1>
            <div>
                <button onClick={navigateHandler}>Navigate</button>
            </div>
        </>
    )
}

export default HomePage
