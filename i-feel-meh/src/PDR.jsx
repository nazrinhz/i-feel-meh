import React, { useState } from 'react';

export default function PDR(props) {
    return(
        <>
        <p id='pdr'>
          {props.data}
        </p>
      </>
    );
}