import React, { useState } from 'react';
import { processData } from '../services/dataServices';

function ProcessComponent() {
  const [data, setData] = useState(null);

  const handleProcess = () => {
    processData()
      .then(response => {
        console.log(response);
        setData(response.data);
      })
      .catch(error => {
        console.log(error); 
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={handleProcess}>Process Data</button>
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}

export default ProcessComponent;