const moment = require('moment');
moment.locale('fr');
const month = ["mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre","janvier","février"]
const dfmonth = ["Granit","Ardoise","Felsite","Hématite","Malachite","Galène","Calcaire","Grès","Bois","Pierre de lune","Opale","Obsidienne"]
var date = moment().format('LLL');
month.forEach((val,index) => { 
    if (date.includes(month[index])) {
        date = date.replace(month[index], dfmonth[index]);
    }
 })  
console.log(date);