/* eslint-disable react/prop-types */
import React from 'react';
import { Fragment } from 'react';

const poem = {
    lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.'
    ]
};

export default function Poem() {
    const haiku = poem.lines.map((line, index) => {
        return (
            <Fragment key={`${line}_${index}`}>
                <p key={index}>
                    {line}
                </p>
                {(poem.lines.length - 1) !== index && <hr key={index} />}
            </Fragment>
        )
    })
    return (
        <article>
            {haiku}
        </article>
    );
}

