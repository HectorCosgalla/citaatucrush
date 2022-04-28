let buttonWidth = document.getElementById("button_no").clientWidth;
let buttonHeight = document.getElementById("button_no").clientHeight;
let winWidth = (Math.floor(window.innerWidth/2))-buttonWidth;
let winHeight = (Math.floor(window.innerHeight/3))-buttonHeight;

console.log(winHeight);
console.log(winWidth);

function ChangeQuestion(x) {
    let buttons = document.getElementsByClassName("buttons")
    for(let i in buttons){
        buttons[i].hidden = true;
    }
    switch(x){
        case 1:
            document.getElementById("question_crush").innerHTML = "¡Sabia que aceptarias! &#128512;";
            document.getElementById("return_button").style.display = "block";
            break;
        default:
            document.getElementById("question_crush").innerHTML = "DAFUQ youdidbruh?";
    }
}

function moveButton(){
    document.getElementById("button_no").style.top = neg() * Math.floor(Math.random() * winHeight) + 1 +"px";
    document.getElementById("button_no").style.left = neg() * Math.floor(Math.random() * winWidth) + 1 +"px";
}

function neg(){
    return ((Math.floor(Math.random() * 10) < 5)? -1 : 1);
}