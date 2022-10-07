function make_shirt(size = 'small', message = 'Programming'){
    if (size == 'large' || size == "medium") {
        message = 'Programming' 
    } 

console.log("The size of this shirt is " + size + " and the message written on this shirt is '" + message + "'.")
    
}

make_shirt(undefined, "lets do it!")
make_shirt()
make_shirt('large')
make_shirt('medium')
make_shirt("small", "abc")