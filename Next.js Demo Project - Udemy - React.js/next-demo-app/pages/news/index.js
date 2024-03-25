import Link from 'next/link'
import React from 'react'

function NewsPage() {
    return (
        <>
            <h1>News Page Select Your Favorite Article</h1>
            <ul>
                <li><Link href='/news/tech-article'>Technology is advanding Again with AI !</Link></li>
                <li><Link href='/news/food-article'>5 Must try food recepies from south asia !</Link></li>
            </ul>
        </>
    )
}

export default NewsPage
