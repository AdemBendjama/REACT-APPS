import React, { useState } from 'react'

function Greetings() {
    const [isChanged, setIsChanged] = useState(false)

    const onChangeHandler = () => {
        setIsChanged(!isChanged)
    }

    return (
        <div>
            <h1>Hello World!</h1>
            {!isChanged && <p>It is good to see you !</p>}
            {isChanged && <p>Changed !</p>}
            <button onClick={onChangeHandler}>Change Text !</button>
        </div>
    )
}

export default Greetings

