const API_ADRESS = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json';

export function getResult () {
    return new Promise(function (resolve, reject) {
            return fetch(API_ADRESS)
            .then(function (response) {
                return response.json();
            })
        
            .then (function(response) {
                resolve(response);
            }); 
    }
)}
