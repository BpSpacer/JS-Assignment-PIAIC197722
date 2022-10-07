var people = ["Sir Zia", "Sir Ali", "Sir Danish"];

document.write(people[0] + ", come to my place to eat.","<br>");
document.write(people[1] + ", come to my place to eat.","<br>");
document.write(people[2] + ", come to my place to eat.","<br>","<br>");

document.write(" I have got a bigger dinner table and now I can invite more people to eat with us. Let's invite more people!","<br>","<br>");

people.push("Mr Saaim");
people.push("Mr Aliyan");
people.push(("Mr Mohsin"));

document.write(people[3] + ", come to my place to eat.","<br>");
document.write(people[4] + ", come to my place to eat.","<br>");
document.write(people[5] + ", come to my place to eat.","<br>","<br>","<br>");

document.write("Sorry guys, now i only have place for 2 people!","<br>","<br>","<br>");

var one = people.pop();
var two = people.pop();
var three = people.pop();
var four = people.pop();

document.write(one + ", sorry you can't come ","<br>");
document.write(two + ", sorry you can't come ","<br>");
document.write(three + ", sorry you can't come ","<br>");
document.write(four + ", sorry you can't come ","<br>","<br>","<br>","<br>");

document.write("<br>");

document.write(people[0] + ", you can come.","<br>")
document.write(people[1] + ", you can come.","<br>")

people.pop()
people.pop()

document.write("<br>")

document.write(people.length);