import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartitems = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://react-http-43d61-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json', {
                method: 'GET',
            });

            if (!response.ok) {
                throw Error("Failed to Fetch!");
            }

            const data = await response.json();
            dispatch(cartActions.replace({ cartItems: [...data] }));
        } catch (error) {
            dispatch(uiActions.notify({
                status: 'error',
                title: 'Error',
                message: 'Failed to fetch data from server!'
            }));
        }
    };
}

export const putCartItems = (data) => {
    return async (dispatch) => {
        const putData = async () => {
            try {
                dispatch(uiActions.notify({
                    status: 'pending',
                    title: 'Sending...',
                    message: 'Sending data in progress'
                }));

                const response = await fetch('https://react-http-43d61-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json', {
                    method: 'PUT',
                    body: JSON.stringify(data.cartItems),
                });

                if (!response.ok) {
                    throw Error('Failed to send data!');
                }

                await response.json();
                dispatch(uiActions.notify({
                    status: 'success',
                    title: 'Success',
                    message: 'Successfully Sent Data!'
                }));
            } catch (error) {
                dispatch(uiActions.notify({
                    status: 'error',
                    title: 'Error',
                    message: 'Failed to send data to server!'
                }));
            }
        };

        if (data.changed) {
            putData();
        }
    }
}