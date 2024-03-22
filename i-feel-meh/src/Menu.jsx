import React from 'react'
import { useState } from "react";
import {menu} from './assets'

export default function Footer() {
    const [toggle, setToggle] = useState(false);
    return(
        <>
            <div id='menu'>
                <button className='menu-content'>meh</button>
                <button className='menu-content'>wow</button>
                <button className='menu-content'>hmm</button>
                <button className='menu-content'>huh</button>
            </div>

            <div id='menu-mobile'>
                <img src={menu} alt="menu icon" height='30px' onClick={() => setToggle((prev) => !prev)}/>
            </div>
            <div className={`${
                toggle ? "dropdown" : "hidden"}`}>
                    <div className="dropdown-content">
                        <button>meh</button>
                        <button>wow</button>
                        <button>hmm</button>
                        <button>huh</button>
                </div>
            </div>
        </>
    )
}