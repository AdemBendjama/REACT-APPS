import React from 'react';
import { getImageUrl } from './utils.js';
import PropTypes from 'prop-types';

export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile name={"Maria Skłodowska-Curie"}
                imageId={"szV5sdG"}
                profession={"physicist and chemist"}
                awards={["Nobel Prize in Physics", " Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"]}
                discoveries={"polonium (chemical element)"} />

            <Profile
                name={"Katsuko Saruhashi"}
                imageId={"YfeOqp2"}
                profession={"geochemist"}
                awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
                discoveries={"a method for measuring carbon dioxide in seawater"}
            />

        </div>
    );
}

function Profile({ name, imageId, profession, awards, discoveries }) {
    return (
        <section className="profile">
            <h2>{name}</h2>
            <img
                className="avatar"
                src={getImageUrl(imageId)}
                alt="Maria Skłodowska-Curie"
                width={70}
                height={70}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {profession}
                </li>
                <li>
                    <b>Awards: {awards.length} </b>
                    ({
                        awards.map(award => {
                            return award + ', '
                        })
                    })
                </li>
                <li>
                    <b>Discovered: </b>
                    {discoveries}
                </li>
            </ul>
        </section>
    )
}

Profile.propTypes = {
    name: PropTypes.string,
    imageId: PropTypes.string,
    profession: PropTypes.string,
    awards: PropTypes.array,
    discoveries: PropTypes.string,

}