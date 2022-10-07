var items = ["chicken", "salad", "tomatoes"];
var items1 = ["Shami", "salad", "tomatoes", "cheese"];
var items2 = ["Mutton", "salad", "tomatoes", "onion", "ketchup", "mayonnaise", "Beaf"];


function make_sandwitch(){
    console.log("The sandwitch contains ");
    for(i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}
make_sandwitch("chicken", "salad", "tomatoes");
make_sandwitch("Shami", "salad", "tomatoes", "cheese");
make_sandwitch("Mutton", "salad", "tomatoes", "onion", "ketchup", "mayonnaise", "Beaf");