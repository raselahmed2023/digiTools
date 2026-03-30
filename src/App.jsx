import './App.css'
import Models from './Components/Models'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'
import CardsDiscription from './Components/CardsDiscription'
import { useState } from 'react'

const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}
const modelPromise = getModels()


function App() {
  const [activeTab, setActiveTab] = useState('products')

  return (
    <>
      <Navbar></Navbar>

      <CardsDiscription></CardsDiscription>

      <div className="tabs tabs-box justify-center bg-transparent mt-7">
        <input type="radio" onClick={()=>setActiveTab('products')} name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" defaultChecked />
        <input type="radio" onClick={()=>setActiveTab('carts')} name="my_tabs_1" className="tab rounded-full w-40" aria-label="Cart" />
      </div>

      {activeTab==="products" && <Models modelPromise={modelPromise}></Models>}

     { activeTab==="carts" && <Cart></Cart>}

    </>
  )
}

export default App
