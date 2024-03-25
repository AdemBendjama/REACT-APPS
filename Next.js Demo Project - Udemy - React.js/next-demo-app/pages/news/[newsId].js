import { useRouter } from 'next/router'
import React from 'react'

function NewsDetail() {
    const router = useRouter()
    const newsId = router.query.newsId

    return (
        <>
            <h1>{newsId}</h1>
            <main>
                <h3>Main article content</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eaque obcaecati culpa, facere odio ipsa accusantium quia id numquam neque, est praesentium porro similique minima ratione consequuntur autem amet non!</p>
            </main>
        </>
    )
}

export default NewsDetail
