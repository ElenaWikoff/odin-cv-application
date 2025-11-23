import { useEffect, useRef, useState } from 'react';
import reactLogo from '@/assets/react.svg';
import viteLogo from '/vite.svg';
import colleges from './data/colleges';
import Awesomplete from 'awesomplete';
import 'awesomplete/awesomplete.css';
// import './App.css';

const initialGeneral = {
  state: "editing",
  name: "",
  email: "",
  phone: "",
}

const initialEducation = {
  state: "editing",
  school: "",
  title: "",
  date: Date.now(),
}

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      new Awesomplete(inputRef.current, {
        list: colleges,
      });
    }
  }, [colleges]); // Re-initialize if dataList changes

  return (
    <>
      <div>
        <label htmlFor="colleges-input">University:</label>
        <input ref={inputRef} id="colleges-input" type="text" />
      </div>
    </>
  )
}

export default App
