/*
// helloWorld function
function helloWorld() {
    return "Hello, World!";
}*/


const helloWorld = function() {
    return "Hello, World!";
};


function sayHello(input) {

    // if (input === "Jane") {
    //     return "Hello, Jane!";
    // }else if (input=== "Alex") {
    //     return "Hello, Alex!";
    // }else if(input==="Pat"){
    //     return "Hello, Pat!";
    // }
    // return "";
    if(input === undefined){
        return "Hello, World!";
    }
    return "Hello, " + input + "!";
}

