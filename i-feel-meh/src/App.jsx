import './App.css';
import {arrowleft, arrowright} from './assets';
import Button from './Button';
import { useState } from 'react';

function App() {

  const [content, setContent] = useState("Feeling meh? I think you should...");

  return (
    <>
    <div id='mainbody'>
      
      <div className='section'>
        <h1 id='maintitle'>Feeling meh?</h1>
      </div>

      <div className='section'>
        <p id='content'>
          {content}
        </p>
      </div>

      <div className='section'>
        <p>find random things to do by clicking the button below</p>
        <Button setContent(data)/>
      </div>

      <div className='section'>
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
      </div>
      
    </div>
      
    </>
  )
}

export default App