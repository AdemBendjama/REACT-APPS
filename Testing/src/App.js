import React from 'react';
import { getImageUrl } from './utils.js';
import PropTypes from 'prop-types';

function Avatar({ person, size }) {
    let resolution = 'b'
    if (size < 90) {
        resolution = 's'
    }
    return (
        <img
            className="avatar"
            src={getImageUrl(person.imageId, resolution)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

Avatar.propTypes = {
    person: PropTypes.object,
    size: PropTypes.number,
}

export default function Profile() {
    return (
        <Avatar
            size={90}
            person={{
                name: 'Gregorio Y. Zara',
                imageId: '7vQD0fP'
            }}
        />
    );
}
