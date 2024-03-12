import { useState } from 'react'

function useInput(validate) {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)
    const isValid = validate(enteredValue)

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

    return { enteredValue, isTouched, isValid, inputChangeHandler, inputBlurHandler, reset }
}

export default useInput
