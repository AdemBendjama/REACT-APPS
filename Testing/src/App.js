import React from 'react';
// import { getImageUrl } from './utils.js';
import PropTypes from 'prop-types';

export default function Profile() {
    return (
        <div>
            <Card>
                <Photo />
            </Card>
            <Card>
                <About />
            </Card>
        </div>
    );
}

function Card({ children }) {
    return (
        <div className="card">
            <div className="card-content">
                {children}
            </div>
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.object
}


function Photo() {
    return (
        <>
            <h1>Photo</h1>
            <img
                className="avatar"
                src="https://i.imgur.com/OKS67lhm.jpg"
                alt="Aklilu Lemma"
                width={70}
                height={70}
            />
        </>
    )
}
function About() {
    return (
        <>
            <h1>About</h1>
            <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
        </>
    )
}
