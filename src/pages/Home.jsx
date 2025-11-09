import React from 'react'

export default function Home({onNavigate}){
  return (
    <div>
      <div className="header">South Bandung Air Quality Dashboard</div>

      <div className="grid-2">
        <div className="card">
          <h3>Air Quality Status</h3>
          <div className="metric-box">
            <div className="metric">
              <strong>AQI</strong>
              <div style={{fontSize:24}}>150</div>
              <div style={{color:'#b44'}}>Unhealthy</div>
            </div>
            <div className="metric">
              <strong>PM2.5</strong>
              <div style={{fontSize:20}}>70 µg/m³</div>
            </div>
          </div>
        </div>

        <div className="card chart">Air Quality Trends Chart</div>

        <div className="card map">Interactive Map Placeholder</div>

        <div className="card">
          <h3>Summary</h3>
          <p>Overall air quality today is categorized as Unhealthy.</p>
        </div>
      </div>

      <button className="button" onClick={onNavigate}>See Prediction</button>
    </div>
  )
}
