window.onload = main;

let text = document.getElementById('infoField');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btnForward = document.getElementById('btnForward');
let age;
let text2;


const allBtns = [btn1, btn2, btn3];
btnForward.innerHTML = "Fortsätt"


function main() {
    introduction();
    addEventListener();

}

function addEventListener() {
    
}
function introduction() {
    text.innerText = "Du är ute på promenad. Filosoferar över dagen, över livet. Du vaknade i morse med, precis som alla andra mornar, en hemskhet i bröstet. Du kunde inte äta, drack ditt kaffe och åkte buss till jobbet. Det blev långa trista timmar, meningaslösa klychor. Ingen öppnar sig. Man stirrar bara tomt och pratar strunt och skrattar till men man vänjer sig.";
    
    setTimeout(function() {
        btnForward.style.display ='inline-block';
    }, 2000);
    btnForward.onclick = intro2;

    function intro2() {
        text.innerText = "Jobbet du gör det har du ingenting för. Det är någon annan som drar nytta av det, ingen aning vem. Du bara flyttar dina papper, drar i dina spakar, hämtar dina pengar. Det känns dumt och idiotiskt."
        btnForward.onclick = intro3;
    }
    function intro3() {
        text.innerText = "Men man vänjer sig..."
        btnForward.onclick = intro4;

    }
    function intro4() {
        text.innerHTML = "Du funderar över vad du åstadkommit under dina år i livet. Nästa år fyller du "
        // document.getElementById('intro4Text').style.display = 'block';
        // btnForward.onclick = saveValue;
        
        age = document.createElement('INPUT');
        age.setAttribute('type', 'text');
        text.appendChild(age);

        text2 = document.createElement('span');
        text.appendChild(text2);
        text2.innerHTML =" och funderar över xx. Mitt uppe i ditt misära grubblande blir du avbruten av att telefonen börjar surra ";
        
    }
    function saveValue() {
        // age = document.getElementById('intro4Text').value;
        phonecall();
    }
    function phonecall() {

    }
    
}
function room1() {
    wakingUp();
    showBtnForward();
// const input = document.querySelector('input').value;
input.value = ""
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
    text.innerText= "Du närmar dig något som ser ut att vara ett svart hål, som en grop av något slag. Fast, nej. Det mörkfärgade gapet är inte tomt. Tvärtom, det verkar vara fyllt av något kompakt, lent och sötdoftande. Tillslut är du såpas nära att du skulle kunna ta ett skutt och dyka ner, i chokladen. Det är en pool av smält choklad. Efter att ögonen vant sig vid det dunkla ljuset lägger du även märke till att på chokladpoolens andra kant hänger det en stege, som leder rakt ner i sörjan." ;
    

    for(var i = 0; i < allBtns.length; i++){
        allBtns[i].style.display = null;
    }
    
    setTimeout(function() {
        btnForward.style.display = 'inline-block';
        }, 2000);

    btnForward.onclick = findsChocolatePool;

    function findsChocolatePool() {
        text.innerText= "Du slås av en impulsiv tanke att ta ett skutt rakt ner i sörjan men din rationella hjärnhalva säger stopp. Ett minne letar sig fram i ditt innre och du minns chokladfontänen du dröme om att ha på din 10e födelsedag. Den som alla 9åringar drömde om att ha på sin födelsedag. Man kanske bara skulle smaka? ";
        btnForward.style.display = null;
   
        // let btn1Text = document.getElementById('btn1Text');
        // btn1Text.style.display = 'inline';
        // btn1Text.innerText = "Du bestämer dig för att sörpla i dig lite"

        setTimeout(function() {
            btn1.style.display = 'inline-block';
        }, 2000);
        btn1.innerHTML = "Du böjer dig ner för att sörpla"
        
        setTimeout(function() {
            btn2.style.display = 'inline-block';
        }, 2000);
        btn2.innerHTML = "Du slänger av dig kläderna och gör dig redo för ett dyk!"

        setTimeout(function() {
            btn3.style.display ='inline-block';
        }, 2000);
        btn3.innerHTML = "Rädslan för det okända kryper sig på. Du bestämer dig för att gå tillbaka"
    }
    btn1.onclick = slurping;
}

function slurping() {
    text.innerText = "Du för ner händerna. Chokladen känns len och lockande. Du börjar klunka i dig. Med ens är det som att något djuriskt kommer över dig. Klunkandet övergår till slukande och slafsande, som om du gått hungrig "
}
function roomWeed() {

}

function roomTree() {

}

function hitBackFunction() {
    console.log(text);
}

