const convertion = require('./convertion.js');

if(process.argv.length == 6 && parseFloat(process.argv[2]) && typeof(process.argv[3]) == "string" && (process.argv[3] == "m" || process.argv[3] == "mm" || process.argv[3] == "cm" || process.argv[3] == "g" || process.argv[3] == "kg") && process.argv[4] == "to" && typeof(process.argv[5]) == "string" && (process.argv[5] == "m" || process.argv[5] == "mm" || process.argv[5] == "cm" || process.argv[5] == "g" || process.argv[5] == "kg")){
    convertion.convert(process.argv[2], process.argv[3], process.argv[5]);
} else 
    console.log("Invalid parameters")