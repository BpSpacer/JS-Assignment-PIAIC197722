var a = 5 + 5;
var b = "no";
var c = 9 - 8;
var d = 4.67;
var e = "my name";
var f = false;
var g = 8 * 7 / 4;
var h = "Ahsan";
var i = 3.142;
var j = 1 + 2 + 3 + 4;

var predictions = [true, true, true, false, true, false, false, true, false, false];
var results = [a == 10, b == 'no', c == 1, d == 4, e == "my name", f == true, g == 20, h == 'Ahsan', i == -1, j == 100];

for (var z=0; z<10; z++) {
    console.log("I predict " + predictions[z]);
    console.log("Actual Result = " + results[z]);
}