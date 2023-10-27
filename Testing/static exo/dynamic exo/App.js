/* eslint-disable react/prop-types */
import React, { useState } from 'react';

// editing
// saving
export default function App() {

    const [editing, setEditing] = useState(false)
    const [form, setForm] = useState({
        firstName: 'Jane',
        lastName: 'Jacobs'
    })

    function handleInputChange(e) {
        let field = e.target.id === "firstNameInput" ? 'firstName' : 'lastName';
        setForm(
            {
                ...form,
                [field]: e.target.value
            }
        )
    }

    function handleEdit(e) {
        e.preventDefault()
        setEditing(!editing)
    }

    let display = { display: 'none' }

    if (editing) {
        display = { display: '' };
    }


    return (
        <form id="form">
            <label>
                First name:
                <b id="firstNameText">{!editing ? form.firstName : ""}</b>
                <input id="firstNameInput" defaultValue={form.firstName} style={display}
                    onChange={handleInputChange} />
            </label>
            <label>
                Last name:
                <b id="lastNameText">{!editing ? form.lastName : ""}</b>
                <input id="lastNameInput" defaultValue={form.lastName} style={display}
                    onChange={handleInputChange} />
            </label>
            <button type="submit" id="editButton" onClick={handleEdit}>{!editing ? "Edit Profile" : "Save Profile"}</button>
            <p><i id="helloText">Hello, {form.firstName + " " + form.lastName}!</i></p>
        </form>
    )
}