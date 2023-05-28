import { Header } from "./components/Header"
import { useState } from 'react'
import ButtonControls from "./components/ButtonControls";
function App() {
  const [range, setRange] = useState(0);

  const handleRange = (el) => { setRange(Number(el.target.value)) };

  return (
    <>
      <div className="mx-auto my-5 px-4 bg-white shadow rounded-sm min-h-[200px] max-w-lg text-center">
        <Header />
        <input
          type="range"
          className="w-full h-2 bg-gray-50 text-teal-500 hover:text-teal-600"
          value={range}
          onChange={handleRange}
          min={0}
          max={20000}
          step={100}
        />
        <ButtonControls setRange={setRange}/>
        <span className="text-xl text-indigo-500 space-x-0">{range}$</span>
      </div>
    </>
  )
}

export default App
