//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line) {
        var output = "";
        var params = line.split(' ').map(function (elem) {
        	return parseInt(elem, 10);
        });

        for (var i = 1; i <= params[2]; i++) {
        	output += ' ';
        	if (i % params[0] === 0)
        		output += 'F';
        	if (i % params[1] === 0)
        		output += 'B';
        	if (i % params[0] !== 0 && i % params[1] !== 0)
        		output += i;
       	};
       	console.log(output.trim());
   }
});