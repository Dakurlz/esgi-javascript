
function ucfirst(str){
    if(typeof str !== "string"  || str.length === 0) return "";
        return str[0].toUpperCase() + str.substring(1);

}
console.log(capitalize('test du cours'))
function capitalize(str){
    if(typeof str !== "string"  || str.length === 0) return "";
    const array  = str.toLowerCase().split(" ");
    for(let i=0; i< array.length;){
        array[i] = ucfirst(array[i++]);
    }
    return array.join(" ");
    /*
    return str.
    toLowerCase().
    split(' ').
    map((item) => ucfirst(item)).join(" ")
    */
}


function camelCase(str){ /* Delete carateres speciaux */
    if(typeof str !== "string"  || str.length === 0) return "";
    const array = capitalize(str)
    return  array.split(' ').join('').replace(/[^a-zA-Z0-9 ]/g, "");
}
console.log(camelCase("Ceci est un test $"))

function snake_case(){

}

function leet(){

}

function prop_access(){

}

function verlan(){

}

function yoda(){

}

function vig(){

}