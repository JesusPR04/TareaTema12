import { useState } from 'react'
import './App.css'
import Script1 from './Services/script1';
import Adventages from './components/Adventages';
import Offers from './components/Offers';

function App() {
  return (
    <main>
      <section>
        <Script1></Script1>
        <Adventages></Adventages>
        <Offers></Offers>
      </section>
    </main>
  )
}

export default App
