import houseSalesData from './data/house_sales.json';

global.fetch = (url) => {
    return new Promise((resolve, reject) => {
        resolve(houseSalesData);
        reject(new Error('Could not fetch data'));
    });
};  
