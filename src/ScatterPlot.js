import { useEffect, useState } from 'react';

import { ResponsiveScatterPlot } from '@nivo/scatterplot';

const ScatterPlot = ({ items }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (items && items.length > 0) {
      // y axis will be sales premium
      // x will be dates
      setData([
        {
          id: 'Home Premiums Over Time',
          data: items.map((i) => {
            const listPrice = i['List_Price'];
            const homePremiumPercentage = `${(
              ((i['Sold_Price'] - listPrice) / listPrice) *
              100
            ).toFixed(2)}%`;
            return {
              x: i['Closed Date'],
              y: homePremiumPercentage,
            };
          }),
        },
      ]);
    }
  }, [items]);
  return (
    <ResponsiveScatterPlot
      data={data}
      margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
      xScale={{ type: 'linear', min: 0, max: 'auto' }}
      xFormat='time:%m-%d-%Y'
      yScale={{ type: 'linear', min: 0, max: 'auto' }}
      yFormat='>-.2f'
      blendMode='multiply'
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'closed date',
        legendPosition: 'middle',
        legendOffset: 46,
        truncateTickAt: 0,
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'premium',
        legendPosition: 'middle',
        legendOffset: -60,
        truncateTickAt: 0,
      }}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 130,
          translateY: 0,
          itemWidth: 100,
          itemHeight: 12,
          itemsSpacing: 5,
          itemDirection: 'left-to-right',
          symbolSize: 12,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default ScatterPlot;
