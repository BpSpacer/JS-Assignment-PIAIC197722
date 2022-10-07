// version that fails the test.
var alien_color = 'red';
var points;

if (alien_color === 'green') {
    points += 5
    console.log("Player just earned " + points + " points!")
}

// version that passes the test.
var alien_color2 = 'yellow';
var points1;

if (alien_color2 === 'yellow') {
    points1 += 10
    console.log("You just earned " + points1 + " points!")
}