import { useEffect, useState } from 'react';

import { ResponsiveScatterPlot } from '@nivo/scatterplot';
import moment from 'moment';

const ScatterPlot = ({ items }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (items && items.length > 0) {
      setData([
        {
          id: 'Home Premiums Over Time',
          data: items.map((i) => {
            const listPrice = i['List_Price'];
            const homePremiumPercentage = (
              ((i['Sold_Price'] - listPrice) / listPrice) *
              100
            ).toFixed(2);
            return {
              x: moment(i['Closed Date']).format('YYYY-MM-DD'),
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
      xScale={{ type: 'time', format: '%Y-%m-%d', precision: 'day' }}
      xFormat='time:%Y-%m-%d'
      yScale={{ type: 'linear', min: -10, max: 'auto', clamp: true }}
      axisBottom={{
        orient: 'bottom',
        tickValues: 'every month',
        format: '%b %Y',
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
        legend: 'premium %',
        legendPosition: 'middle',
        legendOffset: -60,
        truncateTickAt: 0,
      }}
      legends={[
        {
          anchor: 'top',
          translateY: -30,
          margin: 400,
          itemWidth: 100,
          itemHeight: 12,
          itemsSpacing: 5,
          itemDirection: 'left-to-right',
          symbolSize: 12,
          symbolShape: 'circle',
        },
      ]}
    />
  );
};

export default ScatterPlot;
