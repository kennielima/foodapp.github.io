import React from 'react';
import Header from './components/headercomps/Header';
import Meals from './components/Mealscomp/Meals';
import './App.css';
import { useState } from 'react';

function App() {
  const [lists, setList] = useState('');

//   const saveHandler = ((x) => {
//     setList((prev) => {
//     const list={
//         ...x
//     }
//     return [(x), ...prev];
//   })
// })
    // console.log(lists)

  return (
    <div>
      <Header />
      <Meals />
    </div>
  );
}

export default App;
