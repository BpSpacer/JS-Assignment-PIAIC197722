var current_users = ["admin", "Ahsan", "Ali", "Akram", "Jawad", "Yasir"]
var new_users = ["Saad", "Fahad", "Sana", "Iqra", "Ramzan", "Abrar"]

for(var a=0; a < new_users.length; a++) {
    for (var x=0; x < current_users.length; x++) {
        if (new_users[a] === current_users[x]) {
            console.log("This username is taken. Please enter a new username.")
        } else{
            console.log("this username is available.")
        }
    }
}