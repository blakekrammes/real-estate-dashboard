import './App.css';
import './fetch';

import { useEffect, useState } from 'react';

import Dropdown from './Dropdown';
import Grid from './Grid';
import ScatterPlot from './ScatterPlot';

function App() {
  const [data, setData] = useState();
  const [selectedTown, setSelectedTown] = useState();
  const [filteredDataByTown, setFilteredDataByTown] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/sales');
      setData(res);
    };
    fetchData().catch((e) => console.error(e));
    if (selectedTown) {
      const filteredTowns = data.filter((i) => i.Town === selectedTown);
      setFilteredDataByTown(filteredTowns);
    }
  }, [data, selectedTown]);

  return (
    <div className='h-64'>
      <Dropdown items={data} setSelectedTown={setSelectedTown} />
      <Grid items={filteredDataByTown} />
      <ScatterPlot items={filteredDataByTown} />
    </div>
  );
}

export default App;
