import MeetupDetail from '@/components/meetups/MeetupDetail'
import { useRouter } from 'next/router'
import React from 'react'

function MeetupDetailPage(props) {
    // const router = useRouter()
    // const meetupId = router.query.meetupId
    // // fetch item from backend with the id
    // // dummy object for testing
    // const meetup = {
    //     id: meetupId,
    //     title: 'A First Meetup',
    //     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    //     address: 'Some address 5, 12345 Some City',
    //     description: 'This is a first meetup!'
    // }
    const meetup = props.meetup

    return (
        <MeetupDetail {...meetup} />
    )
}

export function getStaticPaths() {
    // fallback false means all listed params are all the possible values for the dnamic url so anything outside of it throws a 404 error
    // fallback true means the listed params are some and any new params would result in getStaticProps to excute
    return ({
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm1'
                }
            }]
    })
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId

    const meetup = {
        id: meetupId,
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    }

    return ({
        props: {
            meetup: meetup
        }
    })
}

export default MeetupDetailPage
