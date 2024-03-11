import { useState } from 'react'

function useInput(validate) {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)
    const isValid = isTouched && validate(enteredValue)

    const inputChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }

    const inputBlurHandler = () => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return { enteredValue, isTouched, isValid, reset, inputChangeHandler, inputBlurHandler }
}

export default useInput
