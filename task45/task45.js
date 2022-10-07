function cars(manufacturer, model, color){
    var obj = {
        "Manufacturer" : manufacturer,
        "Model" : model,
        "Color" : color,
        "Capacity" : capacity
    }
    if (obj["Color"] == undefined){
        delete obj["Color"];
    }
    if (obj["Capacity"] == undefined){
        delete obj["Capacity"];
    }
    
    return obj;
}

var car1 = cars("a", "b");
var car2 = cars("a", "b", "c");
var car3 = cars("a", "b", "c", "d"); 


document.write(car1);
document.write(car2);
document.write(car3);