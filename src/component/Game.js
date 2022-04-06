import React from 'react'
import {useParams} from 'react-router-dom'


export default function Game() {
    let { level } = useParams();

    return (
        <div>
            <h3>the parameter I get from you: {level}</h3>
        </div>
    );
}

