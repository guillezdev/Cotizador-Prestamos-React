import { Header } from "./components/Header"


function App() {

  return (
    <>
      <div className="mx-auto my-5 px-4 bg-white shadow rounded-sm min-h-[200px] max-w-lg text-center">
         <Header />

         <input type="range" className="w-full h-2 bg-gray-50 text-teal-500 hover:text-teal-600" />
      </div>
    </>
  )
}

export default App
