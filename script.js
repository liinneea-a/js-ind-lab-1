window.onload = main;

let text = document.querySelector('p');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btnForward = document.getElementById('btnForward');



const allBtns = [btn1, btn2, btn3];
btnForward.innerHTML = "Fortsätt"


function main() {
    room1();
    addEventListener();

}

function addEventListener() {
    
}

function room1() {
    wakingUp();
    showBtnForward();

    function wakingUp() {
        text.innerText = "Du vaknar till liv. Dina tankar börjar frenetiskt arbeta med att erinra sig händelseförloppet som förde dig hit. VÄNTA. Vart är jag?  Du öppnar långsamt ögonen. Vilket visar sig vara fullkomligt onödigt för det är kolsvart runt omkring dig, med undantag för suddiga konturer av… ja, vadå? Du börjar ta in miljön omkring. Marken under dig är mjuk-, eller nej. Fluffig är ett bättre ord. Marken är fluffig";
        btnForwardText.innerHTML = "Vill du fortsätta?";
    }

    function showBtnForward() {
        setTimeout(function() {
            btnForward.style.display = 'block';
        }, 2000);
        btnForward.onclick = room2;
    }
}

function room2() {
    text.innerText = "Du ser dig omkring";
    btnForward.style.display = null;
    showAllBtns();
    
    function showAllBtns() {
        

        setTimeout(function() {
            btn1.style.display = 'inline-block';
        }, 2000);
        btn1.innerHTML = "Choklad"
        
        setTimeout(function() {
            btn2.style.display = 'inline-block';
        }, 2000);
        btn2.innerHTML = "Gräs"

        setTimeout(function() {
            btn3.style.display ='inline-block';
        }, 2000);
        btn3.innerHTML = "Träd";
        
    }
    btn1.onclick = roomChoco;
    btn2.onclick = roomWeed;
    btn3.onclick = roomTree;
}

function roomChoco() {
    text.innerText= "Du närmar dig något som liknar en pool. Det finns till och med en stege som leder rakt ner i chokladen.";

    for(var i = 0; i < allBtns.length; i++){
        allBtns[i].style.display = null;
    }
    
    setTimeout(function() {
        btnForward.style.display = 'inline-block';
        }, 2000);

    btnForward.onclick = meetsOmpalompa;

    function meetsOmpalompa() {
        text.innerText= "Ompalompa frågar var du heter + slår dig med polkagris. Vad vill du göra?";
        btnForward.style.display = null;

    }
}

function roomWeed() {

}

function roomTree() {

}

function hitBackFunction() {
    console.log(text);
}

