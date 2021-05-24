// We insert process librairy
const process = require('process');


function testInterval(speed, nbrLap) {
    // Begin
    console.log("Program begin");
    // Count variable
    let count = '1';
    // Method setInterval 
    var test = setInterval(function () {
        process.stdout.write('#');
        count++;
        // count overpassed
        if (count > nbrLap) {
            console.log('');
            // End
            console.log('Program end');
            process.exit();
        }
    }, speed);

}

// It exports the function
module.exports = { testInterval };
