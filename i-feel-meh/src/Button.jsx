import React, { useState } from 'react';
import axios from 'axios';

export default function Button() {

    const [content, setContent] = useState("Feeling meh? I think you should...");

    function handleClick() {
        // Make a request for a user with a given ID
        axios.get('http://www.boredapi.com/api/activity/')
        .then(function (response) {
            // handle success
            setContent(response);
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    }

    return(
        <button data={content} onClick={handleClick}>bored-no-mo!</button>
    );
}