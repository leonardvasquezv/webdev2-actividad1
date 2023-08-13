
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Contador from './components/Contador'
import { dataCards } from './data/data-cards'

function App() {
  const [contador, setContador] = useState(0)

  return (
    <>
      <div>
        <h1 className='text-center mb-5 mt-2'>Cards</h1>
        <div className='row'>
          {dataCards.map((dataCard) => {
            return (
              <Card key={dataCard.id} dataCard={dataCard} contador={contador}/>
            )
          })}
        </div>
      </div>
      <div>
          <Contador contador={contador} setContador={setContador}/>
      </div>
    </>
  )
}

export default App
