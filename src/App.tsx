import React, { useState } from 'react';
import './App.css';
// import { Button } from './Button';
import NewComponent from './NewComponent';

export type FilterType = 'all maney' | 'Dollars' | 'RUBLS'

function App() {

  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])

  const [filter, setFilter] = useState('all maney')
  let currentMoney = money;

  if (filter === "Dollars") {
    currentMoney = money.filter(money => money.banknots === "Dollars")
  }
  if (filter === "RUBLS") {
    currentMoney = money.filter(money => money.banknots === "RUBLS")
  }

  const buttonFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton)
  }


  



  return (<>
    <NewComponent currentMoney={currentMoney} buttonFilterHandler={buttonFilterHandler} />
  </>
  );
}

export default App;
