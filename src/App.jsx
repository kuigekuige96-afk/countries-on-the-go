import './App.css'
import Countries from './components/Countries/Countries'
import { Suspense } from 'react'

const countriesPromises = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {


  return (
    <>
      {/* <h1>Countries on the world</h1> */}

      <Suspense fallback={<p style={{'color':'white'}}>Countries Are Loading...</p>}>
        <Countries countriesPromises={countriesPromises}></Countries>
      </Suspense>
    </>
  )
}

export default App
