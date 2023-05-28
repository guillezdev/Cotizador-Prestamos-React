import { Header } from "./components/Header"
import { useState } from 'react'
import ButtonControls from "./components/ButtonControls";
import {formatearDinero} from './helpers'
function App() {
  const [range, setRange] = useState(0);

  const handleRange = (el) => { setRange(Number(el.target.value)) };

  return (
    <>
      <div className="mx-auto my-5 px-10 bg-white shadow rounded-sm min-h-[200px] max-w-lg text-center">
        <Header />
        <input
          type="range"
          className="w-full h-2 bg-green-50 text-green-500 hover:text-green-600"
          value={range}
          onChange={handleRange}
          min={0}
          max={20000}
          step={100}
        />
        <ButtonControls setRange={setRange}/>
        <span className="text-xl text-indigo-500 space-x-0">{formatearDinero(range)}</span>
      </div>
    </>
  )
}

export default App
