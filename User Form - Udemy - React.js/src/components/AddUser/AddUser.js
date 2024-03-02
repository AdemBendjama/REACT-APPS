import { useState } from "react"
function AddUser(props) {

    const initialInput = { username: '', age: 0 }
    const [userInput, setUserInput] = useState(initialInput)
    const onSubmit = props.onSubmit

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(userInput)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [name]: value,
            }
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="username">UserName</label>
                <input type="text" name="username" id="username"
                    value={userInput.username}
                    onChange={handleChange} />
            </div>

            <div className="input-group">
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age"
                    value={userInput.age}
                    onChange={handleChange} />
            </div>

            <button type="submit" className='add-user' id="add-user">Add User</button>
        </form>
    )
}

export default AddUser;