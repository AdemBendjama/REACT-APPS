/* eslint-disable react/prop-types */
import React from 'react';
// import { getImageUrl } from './utils.js';

function Item({ name, isPacked, importance }) {
    return <li className="item">
        {name}
        {isPacked && '✔' || '❌'}
        {importance > 0 && `importance(${importance})`}
    </li>;
}

export default function PackingList() {
    return (
        <section>
            <h1>Sally Rides Packing List</h1>
            <ul>
                <Item
                    importance={9}
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    importance={0}
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item
                    importance={6}
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    );
}

