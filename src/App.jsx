import React, {useState} from 'react'
import Home from './pages/Home'
import Prediction from './pages/Prediction'

export default function App(){
  const [route, setRoute] = useState('home')
  return (
    <div className="layout">
      {route === 'home' && <Home onNavigate={() => setRoute('prediction')} />}
      {route === 'prediction' && <Prediction onBack={() => setRoute('home')} />}
    </div>
  )
}
