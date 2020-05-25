import {getResult} from './API.js';

var tempElement = document.getElementById('temp');
var windElement = document.getElementById('wind');
var symbolElement = document.getElementById('weatherSymbol');
var windElementDirection = document.getElementsByClassName('windDirection');

var i;
var y;

let promise = getResult();


promise.then(function(response) {

    var lastTimeSerie = response.timeSeries[0];

    var parametrar = lastTimeSerie['parameters'];
    console.dir(parametrar);

        for (y = 0; y < parametrar.length; y++) {
            var thisParameter = parametrar[y];
            if (thisParameter['name'] == 't') {
                var tempValue = (thisParameter['values'] + ' ' + thisParameter['unit']);
                insertValueinText(tempElement, tempValue);
            }

            else if(thisParameter['name'] == 'ws'){
                var windValue = (thisParameter['values'] + ' ' + thisParameter['unit']);
                insertValueinText(windElement, windValue);
            }

            else if (thisParameter['name'] == 'Wsymb2') {
                var weatherValue = thisParameter['values'];
                var weatherSymbol = weatherValue[0];
                weatherDefinition(weatherSymbol);
            }
            
            else if (thisParameter['name'] == 'wd') {
                var degrees = thisParameter['values'];
                windElementDirection[0].style.transform = "rotate(" + degrees + "deg)";
            }
        }   
    })


function insertValueinText (text, add) {
    text.innerHTML = text.innerHTML + add;
}


function weatherDefinition(value) {
    if(value == 1) {
        insertValueinText(symbolElement, 'Klart')
    }

    if(value == 2){
        insertValueinText(symbolElement, 'Lätt molnighet');
    }

    if(value == 3) {
        insertValueinText(symbolElement, 'Halvklart');
    }
 
    if(value == 4) {
        insertValueinText(symbolElement, 'Molnigt');
    }

    if(value == 5) {
        insertValueinText(symbolElement,'Mycket moln');
    }

    if (value == 6) {
        insertValueinText(symbolElement, 'Mulet');
    }

    if(value == 7) {
        insertValueinText(symbolElement, 'Dimma');
    }

    if(value == 8) {
        insertValueinText(symbolElement,'Lätta regnskurar');
    }

    if(value == 9) {
        insertValueinText(symbolElement, 'Regnskurar');
    }

    if(value == 10) {
        insertValueinText(symbolElement,'Kraftiga regnskurar');
    }

    if(value == 11) {
        insertValueinText(symbolElement, 'Åskskurar');
    }

    if(value == 12) {
        insertValueinText(symbolElement,'Lätta byar av regn och snö');
    }

    if(value == 13) {
        insertValueinText(symbolElement, 'Byar av regn och snö');
    }

    if(value == 14) {
        insertValueinText(symbolElement, 'Kraftiga byar av regn och snö');
    }

    if(value == 15) {
        insertValueinText(symbolElement, 'Lätta snöbyar');
    }

    if(value == 16) {
        insertValueinText(symbolElement,'Snöbyar');
    }

    if(value == 17) {
        insertValueinText(symbolElement,'Kraftiga snöbyar');
    }

    if(value == 18) {
        insertValueinText(symbolElement,'Lätt regn');
    }

    if(value == 19) {
        insertValueinText(symbolElement, 'Regn');
    }

    if(value == 20) {
        insertValueinText(symbolElement,'Kraftig regn');
    }

    if(value == 21) {
        insertValueinText(symbolElement,'Åska');
    }

    if(value == 22) {
        insertValueinText(symbolElement, 'Lätt snöblandat regn');
    }

    if(value == 23) {
        insertValueinText(symbolElement, 'Snöblandat regn');
    }

    if(value == 24) {
        insertValueinText(symbolElement, 'Kraftigt snöblandat regn');
    }

    if(value == 25) {
        insertValueinText(symbolElement,'Lätt snöfall');
    }

    if(value == 26) {
        insertValueinText(symbolElement,'Snöfall');
    }

    if(value == 27) {
        insertValueinText(symbolElement, 'Ymnigt snöfall');
    }
}