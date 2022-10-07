function make_album(name, title, track){
    var obj = {
        'name' : name,
        'title' : title,
        'tracks' : track
    };
    if (obj['tracks'] == undefined){
        delete obj['tracks'];
    }
    return obj;
}

const a = make_album("Baby ", "Lil Baby and DaBaby.");
const b = make_album("Billie Eilish", "Billie Bossa Nova");
const c = make_album("Sugarcane Jane", "Ballad of Sugarcane Jane");
const d = make_album("Cardi B", "Bartier Cardi", 5);

console.log(a)
console.log(b)
console.log(c)
console.log(d)