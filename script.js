window.onload = main;

let text = document.querySelector('p');

function main() {
    wakingUp();
    showBtn3();
    addEventListener();

}
function addEventListener() {
    
}

function wakingUp() {
    text.innerHTML = "Du vaknar till liv. Dina tankar börjar frenetiskt arbeta med att erinra sig händelseförloppet som förde dig hit. VÄNTA. Vart är jag?  Du öppnar långsamt ögonen. Vilket visar sig vara fullkomligt onödigt för det är kolsvart runt omkring dig, med undantag för suddiga konturer av… ja, vadå? Du börjar ta in miljön omkring. Marken under dig är mjuk-, eller nej. Fluffig är ett bättre ord. Marken är fluffig";
}

function showBtn3() {
    setTimeout(function() {
        btn3.style.display = 'block';
    }, 2000);
    btn3.innerHTML = "Fortsätt";
    
}

function chooseStepTwo() {
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
    document.getElementById('infoField').innerHTML = "Du närmar dig floden";
    btn1.innerHTML = "Slå tillbaka";
    btn1.onclick = hitBackFunction;

}

function tastingGrass() {

}

function lickingTree() {

}

function hitBackFunction() {
    console.log(text);
}

