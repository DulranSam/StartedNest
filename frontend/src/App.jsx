import { useEffect, useState } from 'react';
import Axios from 'axios';

import './App.css';

function App() {
  const [data, setData] = useState([]);

  async function FetchNuts() {
    try {
      const response = await Axios.get('http://localhost:8000/xbox/awesome');

      setData(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    FetchNuts();
  }, []);
  return (
    <>
      {data.map((x) => (
        <div key={x.id}>
          <h1>{x.title}</h1>
        </div>
      ))}
    </>
  );
}

export default App;
