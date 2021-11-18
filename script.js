window.onload = main;

let text = document.getElementById('infoField');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

// let btn1Text = document.getElementById('btn1Text');
// let btn2Text = document.getElementById('btn2Text');
// let btn3Text = document.getElementById('btn3Text');
let btnForward = document.getElementById('btnForward');

let ageInput;
let age;
let firstnameInput;
let firstname;
let text2;
let polkagris;
let chocoBath;
let noChocobath;
let high;
let stuck;


const allBtns = [btn1, btn2, btn3];
btnForward.innerHTML = "Fortsätt";


function main() {
    introduction();
    addEventListener();

}

function addEventListener() {
    
}
function showForward() {
    setTimeout(function() {
        btnForward.style.display = 'block';
    }, 2000);
    btnForward.onclick = room2;
}
function hideForward() {
    btnForward.style.display = 'none';
}
function showAllBtns() {
    setTimeout(function() {
        btn1.style.display = 'inline-block';
    }, 2000);
    
    setTimeout(function() {
        btn2.style.display = 'inline-block';
    }, 2000);

    setTimeout(function() {
        btn3.style.display ='inline-block';
    }, 2000);
}
function hideAllBtns() {
    for(var i = 0; i < allBtns.length; i++){
        allBtns[i].style.display = null;
    }
}
function showTwoBtns() {
    setTimeout(function() {
        btn1.style.display = 'inline-block';
    }, 2000);
    
    setTimeout(function() {
        btn2.style.display = 'inline-block';
    }, 2000);
}

function introduction() {
    text.innerText = "Du är ute på promenad. Filosoferar över dagen, över livet. Du vaknade i morse med, precis som alla andra mornar, en hemskhet i bröstet. Du kunde inte äta, drack ditt kaffe och åkte buss till jobbet. Det blev långa trista timmar, meningaslösa klychor. Ingen öppnar sig. Man stirrar bara tomt och pratar strunt och skrattar till men man vänjer sig.";
    showForward();
    // setTimeout(function() {
    //     btnForward.style.display ='inline-block';
    // }, 2000);
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
        
        ageInput = document.createElement('INPUT');
        ageInput.setAttribute('type', 'text');
        text.appendChild(ageInput);

        text2 = document.createElement('span');
        text.appendChild(text2);
        text2.innerHTML =" och du funderar över om tillvaron kommer vara lika medioker som den varit hittills. Mitt uppe i ditt misära grubblande blir du avbruten av att telefonen börjar surra ";
        btnForward.onclick = phonecall;
    }
    function phonecall() {
        age = ageInput.value;
        text.innerHTML = "Du tar upp telefonen och ser ett nummer du inte känner igen. Säkert en telefonförsäljare. Med en bitter underton svarar du: 'Hallå? De e "

        firstnameInput = document.createElement('INPUT');
        firstnameInput.setAttribute('type', 'text');
        text.appendChild(firstnameInput);

        btnForward.onclick = continuePhonecall;
    }
    
    function continuePhonecall() {
        btnForward.style.display = null;
        let firstname = firstnameInput.value;
        text.innerHTML = "NÄMEN!! Tjenare " + (firstname) + "! Hur e läget? Du ska inte me ut på en bärs sen?";

        setTimeout(function() {
            conversationAnswer();
        }, 3000);

    }

    function conversationAnswer() {
        btnForward.style.display = null;
        text.innerHTML ="Du tänker 'fyfan va trist' sen svarar du 'absolut'"

        setTimeout(function() {
            room1();
        }, 5000);
       
    }
}
function room1() {
    wakingUp();
    showForward();
    function wakingUp() {
        text.innerText = " ca 37 timmar senare vaknar du till liv. Huvudet bankar hårt med gårdagen dumma beslut. Dina tankar börjar frenetiskt arbeta med att erinra sig händelseförloppet som förde dig hit. VÄNTA. Vart är jag?  Du öppnar långsamt ögonen. Vilket visar sig vara fullkomligt onödigt för det är kolsvart runt omkring dig, med undantag för suddiga konturer av… ja, vadå? Du börjar ta in miljön omkring. Marken under dig är mjuk-, eller nej. Fluffig är ett bättre ord. Marken är fluffig";   
    }
    btnForward.onclick = room2;
}

function room2() {
 hideAllBtns();
 hideForward();
 // btn3.style.display = 'none';
 btn1.innerText = "ena hållet"; // chocklad
 btn2.innerText = "andra hållet"; // träd

    if (noChocobath === true) {
        text.innerHTML = ".. och väljer istället att gå åt...";
        btn2.style.display = 'block';
    } else {
    text.innerText = "Med mycket möda reser du dig upp. Du inser att planen på att ta dig hem kan bli svårare än var du hade hoppats. Du bestämer dig för att försöka hitta en väg ut. Du börjar knata iväg åt.. ";
    showTwoBtns();
    }
  

    btn1.onclick = roomChoco;
    btn2.onclick = roomTree;
}
function roomChoco() {
    showForward();
    hideAllBtns();
    text.innerText= "Du närmar dig något som ser ut att vara ett svart hål, som en grop av något slag. Fast, nej. Det mörkfärgade gapet är inte tomt. Tvärtom, det verkar vara fyllt av något kompakt, lent och sötdoftande. Tillslut är du såpas nära att du skulle kunna ta ett skutt och dyka ner, i chokladen. Det är en pool av smält choklad. Efter att ögonen vant sig vid det dunkla ljuset lägger du även märke till att på chokladpoolens andra kant hänger det en stege, som leder rakt ner i sörjan." ;
   
    btnForward.onclick = findsChocolatePool;

    function findsChocolatePool() { 
        hideForward();
        showAllBtns();
        text.innerText= "Du slås av en impulsiv tanke att ta ett skutt rakt ner i det aptitretande badet men din rationella hjärnhalva säger stopp. Ett minne letar sig fram i ditt innre och du minns chokladfontänen du dröme om att ha på din 10e födelsedag. Den som alla 9åringar drömde om att ha på sin 10e födelsedag. Man kanske bara skulle smaka?";
        btn1.innerHTML = "Du böjer dig ner för att sörpla";
        btn2.innerHTML = "Du slänger av dig kläderna och gör dig redo för ett dyk";
        btn3.innerHTML = "Rädslan för det okända kryper sig på. Du går tillbaka";
    }

    btn1.onclick = slurping;
    btn2.onclick = bath;
    btn3.onclick = noChoco;
}
function noChoco() {
    noChocobath = true;
    room2();
}

function slurping() {
    showForward();
    hideAllBtns();
    text.innerText = "Du för ner händerna. Chokladen känns len och lockande. Du börjar klunka i dig. Med ens är det som att något djuriskt kommer över dig. Klunkandet övergår till slukande och slafsande, som om du gått hungrig i alla dina " + (age) + " år."
    
    btnForward.onclick = meetsOmpaLompa;
}
function meetsOmpaLompa() {
    hideAllBtns();
    showForward();
    btnForward.onclick = meetsOmpaLompa2;
    text.innerHTML = "Plötsligt känner du hur något sliter tag i dig bakifrån och du flyger baklänges med en väldig kraft. Väl på rygg, täckt av choklad ser du en gestalt stå lutad över dig. Gestalten är kort. Ungefär hälften av din egen längd. En röd dräckt har den också. Det är en arg liten Ompalompa."
}
function meetsOmpaLompa2() {
    showForward();
    btnForward.onclick = hitBack;
    text.innerHTML = "Den lille mannen skriker med en arg röst på ett språk du aldrig har hört tidigare sedan springer han iväg en bit bort. Mörkret sväljer hans konturer, men du hinner inte mer än att resa dig innan han kommer emot dig med full fart. Du känner en skarp smärta på smalbenen, sedan på ryggen. I sina händer har Ompalompan en giganstisk polkagris som han svingar runt i en övermänsklig hastighet."
}
function hitBack() {
    hideForward();
    showTwoBtns();
    
    btn1.innerHTML = "Tar polkagrisen och springer iväg";
    btn2.innerHTML = "Skiter fullständigt i polkagrisen och springer för kung och fosterland därifrån";
    text.innerHTML = "Instinktivt langar du iväg ett slag i självförsvar. Då du aldrig tidigare har misshandlat en Ompalompa är slaget mer anpassat efter medellång mänsklig storlek och den lille mannen tuppar av. Den gigantiska polkagrisen glider ur hans grepp. Vad gör du härnäst?"
    
    btn1.onclick = savePolka;
    btn2.onclick = noPolka;
       
    function savePolka() {
      polkagris = true;
      backToStart();
    }
    function noPolka() {
        backToStart();
    }
   
}
function backToStart() {
    hideForward();

    if (chocoBath === true) {
        text.innerHTML = "Du tar dig tillbaka till samma plats där du tidigare vaknat. Naken, rädd, hungrig och bakfull. Du sätter dig ner under något som liknar ett träd men som doftar hallon. Du känner markens fluffighet mellan tårna. Hungern gör sig påmind och du väljer att...";
    } else if (stuck === true) {
        text.innerHTML = "Du tar dig tillbaka till samma plats där du tidigare vaknat. Rädd, hungrig, bakfull och djävulskt ont i tungan. Du ser trädet och känner doften av hallon. Du känner markens fluffighet mellan tårna. Hungern gör sig påmind och du väljer att...";
        btn2.style.display = 'none';
    } else {
        text.innerHTML = "Du tar dig tillbaka till samma plats där du tidigare vaknat. Kladdig, rädd, hungrig och bakfull.  Du sätter dig ner under något som liknar ett träd men som doftar hallon. Du känner markens fluffighet mellan tårna. Hungern gör sig påmind och du väljer att...";
    }

    btn1.innerHTML = "..plocka upp en tuve fluffgräs och stoppar det i munnen";
    btn2.innerHTML = "..slicka på den hallondoftande trästammen";
    btn1.onclick = roomCottonCandy;
    btn2.onclick = roomTree;


}
function bath() {
    hideAllBtns();
    showForward();
    chocoBath = true;
    btnForward.onclick = meetsOmpaLompa;
    
    text.innerHTML = "Med ett smärtsamt magplask befinner du dig nu i ett hav av choklad. Det var betydligt mycket svårare att simma än vad du trott. Du märker hur du långsamt sugs neråt och paniken börjar infinna sig. I sista sekund känner du badstegen i din högerhand. Du lyckas med all din kraft att dra dig upp ur poolen. Där sitter du naken, täckt av choklad och försöker flämtande hämta andan när du hör steg komma mot dig."
}


function roomCottonCandy() {
    hideAllBtns();
    showForward();
    btnForward.innerHTML = "Fortsätt";
    high = true;
    text.innerHTML = "Sockervadd! Mer hinner du inte tänka innan slocknar."
    btnForward.onclick = roomWeed2;
}
function roomWeed2() {
    showForward();
    text.innerHTML = "Allt srnurar. ohc har kostniga färger. Du frösörke resa idg pup. vnigligt. Ögnolokcen knäns tnuga. Scokrervdadden var ogn nite sokorervodddad."
    btnForward.onclick = door;
}

function roomTree() {
    btn1.style.display = 'none';
    btn2.style.display = 'none';
    hideAllBtns();
    showForward();
    text.innerHTML = "Några meter framför dig ser du något som påminner om ett träd, men kronan har inga löv. Istället finns där kluster av rosa små bollar. Ju närmare du kommer detso starkare känner du en syntetisk doft av hallon. Väl framme lägger du handen mot det som kan liknas vid en stam. Kladdigt. Från ingenstans känner du ett enormt begär av att smaka. Du försöker stå emot... Men kanske bara en liten bit.."
    btnForward.onclick = roomTree2;
}
function roomTree2() {
    showTwoBtns();
    hideForward();

    if (stuck === true) {
        text.innerHTML = "Stammen smakar fortfarande zoo-klubba. Och du har återigen två val.";
        btn2.innerHTML = "Du står kvar och fortsätter hoppas att någon annan ska lösa ditt problem";
    } else {
        text.innerHTML = "Stammen smakar zoo-klubba. När du ska vända din om för att gå tillbaka inser du att du sitter fast. Aj. Det är som att du slickat på en lyktstolpe i minusgrader. Fast istället för att vara 5 år och dum är du " + age + " år och ännu dummare. Du står mellan 2 val. Vad gör du?";
         btn2.innerHTML = "Du står kvar och hoppas att någon annan ska lösa ditt problem";
    }
    btn1.innerHTML = "Du fattar mod och rycker loss tungan";
    btn1.onclick = backToStart;
    btn2.onclick = roomTree3;
    
}
function roomTree3() {
    showForward();
    hideAllBtns();
    btnForward.innerHTML = "Gå tillbaka";
    btnForward.onclick = roomTree2;
    stuck = true;
        text.innerHTML = "Där blir du stående. Det var ju dumt. "
}
 function door() {
     text.innerHTML = "Efter att förvirrat ha vandrat omkring och förundrats över meningslösa saker hittar du en dörr. På dörren finns en stor fördjupning som har formen av en stor polkagris. Bredvid dörren sitter en lapp.";
 }