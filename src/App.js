import './App.css';
import './fetch';

import { useEffect, useState } from 'react';

import Dropdown from './Dropdown';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/sales');
      setData(res);
    };
    fetchData().catch((e) => console.error(e));
  }, []);

  return (
    <div>
      <Dropdown items={data}/>
    </div>
  );
}

export default App;
