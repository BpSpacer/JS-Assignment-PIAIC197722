var names = ['Lance Burton', 'Ricky Jay', 'Harry Anderson'];
var great_names = []

function make_great(arr){
    for (let i=0;i<arr.length;i++){
        great_names.push('The Great ' + arr[i]);
    }}
    
make_great(names)    

console.log(names);
console.log(great_names);