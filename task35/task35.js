var animals = ["cat", "dog", "cow"];

for(var i=0; i<animals.length; i++){
    if (animals[i] == 'cat'){
        console.log(animals[i] + " is a very cute animal!");
    } else if (animals[i] == 'dog') {
        console.log(animals[i] + "s are dangerous!");
    } else if (animals[i] == 'tiger'){
        console.log(animals[i] + 's are Big!');
    }
} 

console.log("The thing that is common in these animals is that all " + animals.length + " of them walk on four legs");