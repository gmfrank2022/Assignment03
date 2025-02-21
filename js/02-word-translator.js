let incode = prompt("Please input code(\"es\", \"de\", \"en\", and \"fr\")");

let fulllang = "English"

let Hwld = "Hello World";

if(incode === "es"){
    fulllang = "Spanish"
    Hwld = "Hola Mundo";
}
else if(incode === "de"){
    fulllang = "German"
    Hwld = "Hallo Welt";
}
else if(incode === "en"){
    fulllang = "English"
    Hwld = "Hello World";
}
else if(incode === "fr"){
    fulllang = "French"
    Hwld = "Bonjour le monde";
}
else{
    fulllang = "English"
    Hwld = "Hello World";
}

console.log(`Hello World translated in ${fulllang} is: ${Hwld}`)
