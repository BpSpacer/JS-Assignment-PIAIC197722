var people = ["Ahsan", "Akram", "Javed"];

document.write(people[0] + ", come to my place to eat.","<br>");
document.write(people[1] + ", come to my place to eat.","<br>");
document.write(people[2] + ", come to my place to eat.","<br>","<br>","<br>");

document.write("I have got a bigger dinner table and now I can invite more people to eat with us. Let's invite more people!","<br>","<br>","<br>");

people.push("Ali");
people.push("Saad");
people.push("Fahad");

document.write(people[3] + ", come to my place to eat.","<br>");
document.write(people[4] + ", come to my place to eat.","<br>");
document.write(people[5] + ", come to my place to eat.","<br>");

document.write("<br>")

document.write("I am inviting " + people.length + "friends to eat with me.")