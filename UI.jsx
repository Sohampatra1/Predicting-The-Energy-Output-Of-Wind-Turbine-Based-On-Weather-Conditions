import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WindEnergyOutputPredictor = () => {
  const [predictedEnergyOutput, setPredictedEnergyOutput] = useState(0);
  const [cardinalDirection, setCardinalDirection] = useState('N');
  const [windSpeed, setWindSpeed] = useState(25.5);
  const [month, setMonth] = useState('January');
  const [outputHour, setOutputHour] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post('/api/predict', {
        cardinalDirection,
        windSpeed,
        month,
        outputHour,
      });
      setPredictedEnergyOutput(response.data.predictedEnergyOutput);
    };

    fetchData();
  }, [cardinalDirection, windSpeed, month, outputHour]);

  return (
    <div>
      <h1>Wind Energy Output Predictor</h1>
      <div>
        <label htmlFor="cardinalDirection">Cardinal Direction:</label>
        <input
          type="text"
          id="cardinalDirection"
          value={cardinalDirection}
          onChange={(e) => setCardinalDirection(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="windSpeed">Wind Speed:</label>
        <input
          type="number"
          id="windSpeed"
          value={windSpeed}
          onChange={(e) => setWindSpeed(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="month">Month:</label>
        <input
          type="text"
          id="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="outputHour">Output Hour:</label>
        <input
          type="number"
          id="outputHour"
          value={outputHour}
          onChange={(e) => setOutputHour(e.target.value)}
        />
      </div>
      <div>
        <button>Predict</button>
      </div>
      <div>
        <h3>Predicted Energy Output: {predictedEnergyOutput} kW/h</h3>
      </div>
    </div>
  );
};

export default WindEnergyOutputPredictor;
