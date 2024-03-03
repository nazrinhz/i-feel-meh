import React from 'react'
import {arrowleft, arrowright} from './assets';

export default function Participants() {
    return(
        <>
            <p>participants</p>
            <div className='participants-container debug'>
            <div>
                <img className='arrow' src={arrowleft} alt="left arrow" />
            </div>
            <div id='participants-number' className='debug'>
                <p id='participants-number' className='debug'>10</p>
            </div>
            <div>
                <img className='arrow' src={arrowright} alt="right arrow" />
            </div>
            </div>
        </>
    )
}