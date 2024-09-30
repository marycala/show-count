import { useState } from 'react'
import './App.css'
import ShowCount from './components/ShowCount/ShowCount'

function App() {
  const [counter, setCount] = useState(0)

  return (
    <div className='app'>
      <ShowCount count={counter} />
      <div className='buttons'>
        <button className='restar' onClick={() => setCount(counter - 1)}>
          Restar
        </button>
        <button className='sumar' onClick={() => setCount(counter + 1)}>
          Sumar
        </button>
      </div>
    </div>
  )
}

export default App
