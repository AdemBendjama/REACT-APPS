/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
    const [selectedIds, setSelectedId] = useState([]);

    function handleToggle(toggledId) {
        // TODO: allow multiple selection
        let found = selectedIds.filter(id => id === toggledId).length !== 0;
        let newSelectedIds
        if (found) {
            newSelectedIds = selectedIds.map(id => {
                if (id === toggledId) {
                    return null
                } else {
                    return id
                }
            }).filter(id => id !== null)
        } else {
            newSelectedIds = [...selectedIds, toggledId]
        }
        setSelectedId(newSelectedIds)
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isSelected={
                            // TODO: allow multiple selection
                            selectedIds.some(id => letter.id === id)
                        }
                        onToggle={handleToggle}
                    />
                ))}
                <hr />
                <p>
                    <b>
                        You selected {selectedIds.length} letters
                    </b>
                </p>
            </ul>
        </>
    );
}
