
import { useState } from 'react'
import phrases from './utils/Phrases.json'
import getRandomElemArray from './utils/getRandomElemArray'
import Quote from './components/Quote'
import BtnQuote from './components/BtnQuote'
import './utils/index.css'
import './utils/App.css'




function App() {
  const phraseRamdon=getRandomElemArray(phrases)
  const numberRandom=getRandomElemArray([1,2,3,4])
const [quote, setQuote]=useState(phraseRamdon)
const [numberBg , setNumberBg  ] = useState(numberRandom)

const bgStyle={
backgroundImage:`url(/fondo${numberBg}.jpg)`
}
  return (
   
    <div style={bgStyle} className='galleta'>
      <h1 className='title'>Galleta de la fortuna</h1>
      <Quote phrase={quote}/>
      <BtnQuote setQuote={setQuote} phrases={phrases} setNumberBg={setNumberBg}/>
    </div>
   
  )
}

export default App
