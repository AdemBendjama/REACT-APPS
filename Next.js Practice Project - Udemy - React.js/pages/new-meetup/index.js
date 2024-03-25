import NewMeetupForm from '@/components/meetups/NewMeetupForm'
import React from 'react'

function NewMeetupPage() {
    const addMeetupHandler = (meetupData) => {
        console.log(meetupData);
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}

export default NewMeetupPage
