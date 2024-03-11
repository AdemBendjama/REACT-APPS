import { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGED':
            return { ...state, enteredValue: action.enteredValue }
        case 'TOUCHED':
            return { ...state, isTouched: action.isTouched }
        default:
            return state
    }
}

function useInputReducer(validate) {
    const [inputState, dispatch] = useReducer(reducer, { enteredValue: '', isTouched: false })
    const isValid = inputState.isTouched && validate(inputState.enteredValue)

    const inputChangeHandler = (event) => {
        dispatch({ type: 'CHANGED', enteredValue: event.target.value })
    }

    const inputBlurHandler = () => {
        dispatch({ type: 'TOUCHED', isTouched: true })
    }

    const reset = () => {
        dispatch({ type: 'CHANGED', enteredValue: '' })
        dispatch({ type: 'TOUCHED', isTouched: false })
    }

    return {
        enteredValue: inputState.enteredValue, isTouched: inputState.isTouched,
        isValid, reset, inputChangeHandler, inputBlurHandler
    }

}

export default useInputReducer
