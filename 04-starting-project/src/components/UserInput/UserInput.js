import { useState } from "react"

function UserInput(props) {

    const [userInput, setUserInput] = useState({ 'Name': '', 'Age': "" })

    const submitHandler = (event) => {
        event.preventDefault()
        props.onAdd(userInput)
    }

    const changeHandler = (input, value) => {
        setUserInput(prevState => {
            return (
                {
                    ...prevState,
                    [input]: value
                }
            )
        })
    }


    return (
        <div className="user-input">
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="Name">Name</label>
                    <input type="text" id="Name"
                        onChange={(event => changeHandler('Name', event.target.value))} />
                </div>
                <div>
                    <label htmlFor="Age">Age</label>
                    <input type="number" id="Age"
                        onChange={(event => changeHandler('Age', event.target.value))} />
                </div>
                <button type="submit">Add User</button>
            </form>
        </div>
    )
}

export default UserInput;