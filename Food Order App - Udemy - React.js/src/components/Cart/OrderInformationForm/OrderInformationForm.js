import React, { useContext } from 'react'
import Input from '../../UI/Input'
import useInput from '../../../hooks/use-input';
import useFetch from '../../../hooks/fetch-hook';
import Spinner from '../../UI/Spinner';
import CartContext from '../../../store/cart-context';

function OrderInformationForm(props) {
    const { error, isLoading, fetchRequest } = useFetch()

    const context = useContext(CartContext)
    const {
        enteredValue: firstNameValue,
        isTouched: firstNameTouched,
        isValid: firstNameValid,
        inputChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: firstNameReset
    } = useInput(value => value.trim().length > 0)
    const {
        enteredValue: lastNameValue,
        isTouched: lastNameTouched,
        isValid: lastNameValid,
        inputChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: lastNameReset
    } = useInput(value => value.trim().length > 0);
    const {
        enteredValue: emailValue,
        isTouched: emailTouched,
        isValid: emailValid,
        inputChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: emailReset
    } = useInput(value => /\S+@\S+\.\S+/.test(value));
    const {
        enteredValue: addressValue,
        isTouched: addressTouched,
        isValid: addressValid,
        inputChangeHandler: addressChangeHandler,
        inputBlurHandler: addressBlurHandler,
        reset: addressReset
    } = useInput(value => value.trim().length > 0);

    const submitHandler = (event) => {
        event.preventDefault()

        fetchRequest({
            method: 'POST',
            url: 'https://react-http-43d61-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
            body: {
                firstName: firstNameValue,
                lastName: lastNameValue,
                email: emailValue,
                address: addressValue,
                totalPrice: props.totalPrice,
                meals: { ...context.cartItems }
            },
            headers: { 'Content-Type': 'application/json' },
        }, () => {
            if (!error) {
                firstNameReset()
                lastNameReset()
                emailReset()
                addressReset()
                props.toggleFormDisplay()
                context.onReset()
                context.onToggle()
                alert('Submitted Succesfully!')
            }
        })


    }

    const firstNameError = firstNameTouched && !firstNameValid
    const lastNameError = lastNameTouched && !lastNameValid;
    const emailError = emailTouched && !emailValid;
    const addressError = addressTouched && !addressValid;
    const formIsValid = firstNameValid && lastNameValid && emailValid && addressValid

    return (
        <>
            {!isLoading &&
                <form onSubmit={submitHandler}>
                    <Input
                        id='first-name'
                        name='first-name'
                        label='First Name'
                        type='text'
                        value={firstNameValue}
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                        error={firstNameError}
                        errorMsg={`First Name can't be empty`}
                    />

                    <Input
                        id='last-name'
                        name='last-name'
                        label='Last Name'
                        type='text'
                        value={lastNameValue}
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                        error={lastNameError}
                        errorMsg={`Last Name can't be empty`}
                    />

                    <Input
                        id='email'
                        name='email'
                        label='Email'
                        type='email'
                        value={emailValue}
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        error={emailError}
                        errorMsg='Please enter a valid email'
                    />

                    <Input
                        id='address'
                        name='address'
                        label='Address'
                        type='text'
                        value={addressValue}
                        onChange={addressChangeHandler}
                        onBlur={addressBlurHandler}
                        error={addressError}
                        errorMsg={`Address can't be empty`}
                    />

                    <button onClick={props.toggleFormDisplay}>Close</button>
                    <button type='submit' disabled={!formIsValid}>Submit</button>
                </form>
            }
            {
                isLoading &&
                <div>
                    <h2>Your Order Is Proccessing...</h2>
                    <Spinner />
                </div>
            }
        </>
    )
}

export default OrderInformationForm
