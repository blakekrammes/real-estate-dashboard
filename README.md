# Real Estate Dashboard

0. Earlier in the week, before I began the project on Friday (6/28), I spent a bit of time cursorily familiarizing myself with AG Grid and the Nivo Scatter Plot component, but did not write any code.
   - ~15–30 minutes

1. Create a new React App using create-react-app to serve as the basis for the Real Estate Dashboard described above. 
   - ~5 minutes
     
2. Override the fetch API with a custom function that returns data from JSON objects to mimic fetching data from a remote REST API. The static data is available in house_sales.
   - ~30 minutes
   - `src/fetch.js`

3. Add a Town selector dropdown with the available towns that can be selected from.
   - ~105 minutes (included setting up tailwind and finding/installing a UI library)–– this took more time than it should have.
   - `src/Dropdown.js`

4. Using AG Grid, display a list of House Sales for the selected Town.
   - ~35 minutes
   - `src/Grid.js`

5. Using Nivo create a scatter plot that plots the % Premium ((Sold Price - List Price) / List Price * 100) versus Closed Date to show the trend of home premiums over time. The data for this grid should also be filtered on selected Town (from #3).
    - ~65 minutes
    - `src/ScatterPlot.js`

5.5 I spent a couple more hours on the scatter plot correctly formatting the dates for the x-axis and tweaking other settings. I tweaked a couple of other things as well.
    
Areas for improvement:
- Make scatter plot properly responsive
- General formatting/styling to make the design unified. I would want to create a tailwind theme to standardize things.
- On headless-ui dropdown menu items, show which item is curently selected.
- Display which town is selected more saliently. 
- While not an expensive operation, avoid calculating grid columns every time a different town is selected in    
  `Grid.js`.
