import MeetupDetail from '@/components/meetups/MeetupDetail'
import { useRouter } from 'next/router'
import React from 'react'

function MeetupDetailPage(props) {
    const router = useRouter()
    const meetupId = router.query.meetupId
    // fetch item from backend with the id
    // dummy object for testing
    const meetup = {
        id: meetupId,
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    }

    return (
        <MeetupDetail {...meetup} />
    )
}

export default MeetupDetailPage
