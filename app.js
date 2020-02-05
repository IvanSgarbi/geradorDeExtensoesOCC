// Get process.stdin as the standard input object.
var standard_input = process.stdin;
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Please input text in command line.");

// When user input data and click enter key.
standard_input.on('data', function (data) {

    for (let i = 0; i < data.length; i++) {
        console.log
    }
    // User input exit.
    if(data.indexOf('exit') != -1){
        // Program exit.
        console.log("User input complete, program exit.");
        process.exit();
    }else
    {
        // Print user input in console.
        console.log('User Input Data : ' + data);
    }
});