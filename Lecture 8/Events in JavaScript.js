// Event handling is suitable from JS file

// callback is argument which passes through the function

let modeBtn01 = document.querySelector("#mode");
let curMode = "light";

modeBtn01.addEventListener("click", () => {
    if(curMode == "light"){
        curMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        curMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(curMode);
});
