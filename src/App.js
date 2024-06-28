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

  if (data) console.log(data);

  return (
    <div>
      <Dropdown />
    </div>
  );
}

export default App;
