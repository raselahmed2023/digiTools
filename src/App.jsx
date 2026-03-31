import './App.css'
import Models from './Components/Models'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'
import CardsDiscription from './Components/CardsDiscription'
import { useState } from 'react'
import Hero from './Components/Hero'
import Stat from './Components/Stat'
import Started from './Components/Started'
import Pack from './Components/Pack'

const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}
const modelPromise = getModels()


function App() {
  const [activeTab, setActiveTab] = useState('products');
  const [carts, setCarts]= useState([]);

  return (
    <>
      <Navbar carts={carts}></Navbar>

      <Hero></Hero>

      <Stat></Stat>

      <CardsDiscription></CardsDiscription>

      <div className="tabs tabs-box justify-center bg-transparent mt-7">
        <input type="radio" onClick={()=>setActiveTab('products')} name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" defaultChecked />
        <input type="radio" onClick={()=>setActiveTab('carts')} name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Cart (${carts.length})`} />
      </div>

      {activeTab==="products" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Models>}

     { activeTab==="carts" && <Cart carts={carts} setCarts={setCarts}></Cart>}

     <Started></Started>

     <Pack></Pack>

    </>
  )
}

export default App
