import './App.css';
import { useState } from 'react';
import PDR from './PDR';
import Title from './Title'
import Instruction from './Instruction';
import Participants from './Participants';
import axios from 'axios';
import Footer from './Footer'
import Menu from './Menu'

function App() {

  const [content, setContent] = useState("I think you should...");

  function handleClick() {
    // Make a request for a user with a given ID
    axios.get('http://www.boredapi.com/api/activity/')
    .then(function (response) {
        // handle success
        setContent(response.data.activity);
    })
    .catch(function (error) {
        // handle error
        setContent(error);
    })
    .finally(function () {
        // always executed
    });
  }

  return (
    <>
      <Menu/>
      <Title/>
      <PDR data={content}/>
      <Instruction/> 
      <button data={content} onClick={handleClick}>bored-no-mo!</button>
      <Footer/>
    </>
  )
}

export default App