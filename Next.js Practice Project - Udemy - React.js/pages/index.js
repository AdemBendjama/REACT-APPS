import MeetupList from '@/components/meetups/MeetupList'
import React from 'react'

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup!'
    }
]

function HomePage(props) {
    return (
        <MeetupList meetups={props.meetups} />
    )
}

// build in reserved next js function 
// function excutes on server side
// excutes once during build process
// excutes again depending on revalidate prop timer
/*
* can fetch data before serving the page to the user by excuting in server
* and then passing any data through props, can only be written inside pages components,
* in summery allows pre rendering pages in server with the fetched data
* because in a normal situation the page would be served empty without data then it would be filled with data after fetching in the second re-render 
*/
// ! this form of Pre-rendering is called Static generation
export async function getStaticProps() {
    // Fetch data here
    //...

    // pass data into page with components
    return (
        {
            props: {
                meetups: DUMMY_DATA
            },
            revalidate: 10
        }
    )
}

// use it when ur data and ui changes frequently 
// and when you need to use request and response headers in ur data menupilation
// ! this form of Pre-rendering is called Server side rendering 
// export async function getServerSideProps(context) {
//     const request = context.req
//     const response = context.res

//     return (
//         {
//             props: {
//                 meetups: DUMMY_DATA
//             }
//         }
//     )
// }

export default HomePage
