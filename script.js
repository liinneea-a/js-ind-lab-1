window.onload = main;


function main() {
    wakingUp();
    addEventListener();
   
}
function addEventListener() {

}

function wakingUp() {
    document.getElementById('infoField').innerHTML = "Du vaknar till liv";

    let btn1 = document.getElementById('btn1');
    btn1.innerHTML = "Chokladtflod";
    btn1.onclick = ChocolateFlood;

    let btn2 = document.getElementById('btn2');
    btn2.innerHTML = "Gräs";
    btn2.onclick = tastingGrass;

    let btn3 = document.getElementById('btn3');
    btn3.innerHTML = "Träd";
    btn3.onclick = lickingTree;
}

function ChocolateFlood() {
    
   
}

function tastingGrass() {
    
}

function lickingTree() {
   
}

