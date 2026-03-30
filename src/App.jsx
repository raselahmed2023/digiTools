import './App.css'
import Models from './Components/Models'
import Navbar from './Components/Navbar'

const getModels = async () => {
const res=await fetch("/models.json")
return res.json()
}

const modelPromise=getModels()


function App() {

  return (
    <>
      <Navbar></Navbar>

      <Models  modelPromise={modelPromise}></Models>

    </>
  )
}

export default App
