import React from 'react'

export default function Prediction({onBack}){
  return (
    <div>
      <button className="back-btn" onClick={onBack}>← Back</button>
      <div className="header">Air Quality Prediction</div>

      <div className="grid-2">
        <div className="card chart">48-Hour Forecast Chart</div>

        <div className="card">
          <h3>Risk Level</h3>
          <strong>High Risk</strong>
          <p>Avoid prolonged outdoor activity.</p>
        </div>

        <div className="card">
          <h3>Tips</h3>
          <ul>
            <li>Wear a mask outdoors</li>
            <li>Use air purifiers indoors</li>
          </ul>
        </div>

        <div className="card chart">Humidity / Temp Relation Chart</div>
      </div>
    </div>
  )
}
