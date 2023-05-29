import { Header } from "./components/Header";
import { useEffect, useState } from "react";
import ButtonControls from "./components/ButtonControls";
import {
  formatearDinero,
  calcularTotalPagar,
  calcularPagoMensual,
} from "./helpers";
function App() {
  const [range, setRange] = useState(0);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pagoMensual, setPagoMensual] = useState(0);

  useEffect(() => {
    setTotal(calcularTotalPagar(range, meses));
  }, [range, meses]);

  useEffect(() => {
    setPagoMensual(calcularPagoMensual(total, meses));
  }, [total]);

  const handleRange = (el) => {
    setRange(Number(el.target.value));
  };

  return (
    <>
      <main className="mx-auto my-5 p-10 bg-white shadow rounded-sm  max-w-md text-center">
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
        <ButtonControls setRange={setRange} />
        <span className="text-xl text-indigo-500 space-x-0">
          {formatearDinero(range)}
        </span>
        <h2 className="text-lg font-semibold">
          Elige un <span className="text-blue-500">plazo</span> a pagar
        </h2>
        <select
          name=""
          id=""
          value={meses}
          onChange={(op) => {
            setMeses(Number(op.target.value));
          }}
          className="my-5 w-full  bg-white text-center border rounded-lg text-gray-600  border-gray-400"
        >
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="24">24</option>
        </select>
        <div className="bg-blue-100 m-4 p-2">
          <h2 className="text-lg font-semibold">
            Resumen <span className="text-blue-500">de pago</span>
          </h2>
          <div className="w-full h-[1px] bg-slate-900"></div>
          <ul className="font-semibold">
            <li>{meses}</li>
            <li>Total a pagar:{formatearDinero(total)}</li>
            <li>Mensual:{formatearDinero(pagoMensual)}</li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
