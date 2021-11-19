/** Starts the site */
window.onload = main;

let text = document.getElementById('infoField');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btnForward = document.getElementById('btnForward');

let age;
let firstname;
let text2;
let polkagris;
let chocoBath;
let noChocobath;
let high;
let stuck;
let riddleAnswer;

/** array for buttons except continue button */
const allBtns = [btn1, btn2, btn3];


/** starts when page is loaded */
function main() {
    introduction();
}

/** Settings for continue button and show with delay on 2sec */
function showForward() {
    btnForward.innerHTML = "Fortsätt";
    setTimeout(function() {
        btnForward.style.display = 'block';
    }, 2000);
    btnForward.onclick = room2;
}
/** set continue button hide */
function hideForward() {
    btnForward.style.display = 'none';
}
/** Shows all buttons except for continue button with delay on 2sec */
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
/** Hides all buttons except for continue button */
function hideAllBtns() {
    for(var i = 0; i < allBtns.length; i++){
        allBtns[i].style.display = null;
    }
}
/** Shows two of text buttons with delay on 2 sec */
function showTwoBtns() {
    setTimeout(function() {
        btn1.style.display = 'inline-block';
    }, 2000);
    
    setTimeout(function() {
        btn2.style.display = 'inline-block';
    }, 2000);
}

/** Function for intro to story  */
function introduction() {
    text.innerText = "Du är ute på promenad. Filosoferar över dagen, över livet. Du vaknade i morse med, precis som alla andra mornar, en hemskhet i bröstet. Du kunde inte äta, drack ditt kaffe och åkte buss till jobbet. Det blev långa trista timmar, meningaslösa klychor. Ingen öppnar sig. Man stirrar bara tomt och pratar strunt och skrattar till men man vänjer sig.";
    showForward();
    btnForward.onclick = intro2;

    /** continues intro */
    function intro2() {
        text.innerText = "Jobbet du gör det har du ingenting för. Det är någon annan som drar nytta av det, ingen aning vem. Du bara flyttar dina papper, drar i dina spakar, hämtar dina pengar. Det känns dumt och idiotiskt."
        btnForward.onclick = intro3;
    }
    /** continues intro */
    function intro3() {
        text.innerText = "Men man vänjer sig..."
        btnForward.onclick = intro4;

    }
     /** continues intro and creates input for users age */
    function intro4() {
        text.innerHTML = "Du funderar över vad du åstadkommit under dina år i livet. Nästa år fyller du "
        
        ageInput = document.createElement('INPUT');
        ageInput.setAttribute('type', 'text');
        text.appendChild(ageInput);
        
        text2 = document.createElement('span');
        text.appendChild(text2);
        text2.innerHTML =" och du funderar över om tillvaron kommer vara lika medioker som den varit hittills. Mitt uppe i ditt misära grubblande blir du avbruten av att telefonen börjar surra ";
        btnForward.onclick = checkAgeinput;
    }
    /** Checks so age input textfield is filled */
    function checkAgeinput() {
        age = ageInput.value;

        if (age === "") {
            intro4();
        } else {
            phonecall();
        }
    }
    /** continues intro and creates input for users firstname */
    function phonecall() {
        text.innerHTML = "Du tar upp telefonen och ser ett nummer du inte känner igen. Säkert en telefonförsäljare. Med en bitter underton svarar du: 'Hallå? De e "

        firstnameInput = document.createElement('INPUT');
        firstnameInput.setAttribute('type', 'text');
        text.appendChild(firstnameInput);

        btnForward.onclick = checkName;
     }
   /** checks so input textfield for firstname is filled */
    function checkName() {
        firstname = firstnameInput.value;
        if (firstname === "") {
            phonecall();
        } else {
        continuePhonecall();
        }
    }
    /** Users firstname is used. Redirects user automatically after 2 seconds */
    function continuePhonecall() {
        btnForward.style.display = null;
        text.innerHTML = "NÄMEN!! Tjenare " + (firstname) + "! Hur e läget? Du ska inte me ut på en bärs sen?";

        setTimeout(function() {
            conversationAnswer();
        }, 2000);
        
    }
    /** end of introduction to story. Redirects user automatically after 2 seconds*/
    function conversationAnswer() {
        btnForward.style.display = null;
        text.innerHTML ="Du tänker 'fyfan va trist' sen svarar du 'absolut'"

        setTimeout(function() {
            room1();
        }, 2000);
    }
}
/** User wakes up in Factory */
function room1() {
    wakingUp();
    showForward();
    function wakingUp() {
        text.innerText = " ca 37 timmar senare vaknar du till liv. Huvudet bankar hårt med gårdagen dumma beslut. Dina tankar börjar frenetiskt arbeta med att erinra sig händelseförloppet som förde dig hit. VÄNTA. Vart är jag?  Du öppnar långsamt ögonen. Vilket visar sig vara fullkomligt onödigt för det är kolsvart runt omkring dig, med undantag för suddiga konturer av… ja, vadå? Du börjar ta in miljön omkring. Marken under dig är mjuk-, eller nej. Fluffig är ett bättre ord. Marken är fluffig";   
    }
    btnForward.onclick = room2;
}
/** User chooses between 2 different rooms.*/
function room2() {
 hideAllBtns();
 hideForward();
 
 btn1.innerText = "ena hållet"; // chocklad
 btn2.innerText = "andra hållet"; // träd

    /** If = user chose 'go back' in next room, User can then only chose one btn.
     *  Else = user visits first time.  */
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
/** Description of chocolate pool */
function roomChoco() {
    showForward();
    hideAllBtns();
    text.innerText= "Du närmar dig något som ser ut att vara ett svart hål, som en grop av något slag. Fast, nej. Det mörkfärgade gapet är inte tomt. Tvärtom, det verkar vara fyllt av något kompakt, lent och sötdoftande. Tillslut är du såpas nära att du skulle kunna ta ett skutt och dyka ner, i chokladen. Det är en pool av smält choklad. Efter att ögonen vant sig vid det dunkla ljuset lägger du även märke till att på chokladpoolens andra kant hänger det en stege, som leder rakt ner i sörjan." ;
   
    btnForward.onclick = findsChocolatePool;

    /** hides continue button and changes text on text buttons */
    function findsChocolatePool() { 
        hideForward();
        showAllBtns();
        text.innerText= "Du slås av en impulsiv tanke att ta ett skutt rakt ner i det aptitretande badet men din rationella hjärnhalva säger stopp. Ett minne letar sig fram i ditt innre och du minns chokladfontänen du dröme om att ha på din 10e födelsedag. Den som alla 9åringar drömde om att ha på sin 10e födelsedag. Man kanske bara skulle smaka?";
        btn1.innerHTML = "Du böjer dig ner för att sörpla";
        btn2.innerHTML = "Du slänger av kläderna och gör dig redo för ett dyk";
        btn3.innerHTML = "Rädslan för det okända kryper sig på. Du går tillbaka";
    }
    btn1.onclick = slurping;
    btn2.onclick = bath;
    btn3.onclick = noChoco;
}
/** User chose 'go back' in previous step user goes back to room2 */
function noChoco() {
    noChocobath = true;
    room2();
}
/** User chose first button in previous step. Shows continue button. Hides all text buttons. */
function slurping() {
    showForward();
    hideAllBtns();
    text.innerText = "Du för ner händerna. Chokladen känns len och lockande. Du börjar klunka i dig. Med ens är det som att något djuriskt kommer över dig. Klunkandet övergår till slukande och slafsande, som om du gått hungrig i alla dina " + (age) + " år."
    
    btnForward.onclick = meetsOmpaLompa;
}
/** If user chose second button in previous step chocoBath = true. Only shows continue button and story text */
function bath() {
    hideAllBtns();
    showForward();
    chocoBath = true;
    btnForward.onclick = meetsOmpaLompa;
    
    text.innerHTML = "Med ett smärtsamt magplask befinner du dig nu i ett hav av choklad. Det var betydligt mycket svårare att simma än vad du trott. Du märker hur du långsamt sugs neråt och paniken börjar infinna sig. I sista sekund känner du badstegen i din högerhand. Du lyckas med all din kraft att dra dig upp ur poolen. Där sitter du naken, täckt av choklad och försöker flämtande hämta andan när du hör steg komma mot dig."
}
/** Shows continue button. Hides all text buttons. Story text */
function meetsOmpaLompa() {
    hideAllBtns();
    showForward();
    btnForward.onclick = meetsOmpaLompa2;
    text.innerHTML = "Plötsligt känner du hur något sliter tag i dig bakifrån och du flyger baklänges med en väldig kraft. Väl på rygg, täckt av choklad ser du en gestalt stå lutad över dig. Gestalten är kort. Ungefär hälften av din egen längd. En röd dräckt har den också. Det är en arg liten Ompalompa."
}
/** Shows continue button and story text */
function meetsOmpaLompa2() {
    showForward();
    btnForward.onclick = hitBack;
    text.innerHTML = "Den lille mannen skriker med en arg röst på ett språk du aldrig har hört tidigare sedan springer han iväg en bit bort. Mörkret sväljer hans konturer, men du hinner inte mer än att resa dig innan han kommer emot dig med full fart. Du känner en skarp smärta på smalbenen, sedan på ryggen. I sina händer har Ompalompan en giganstisk polkagris, minst lika stor som mannen sjäv. Han svingar runt den i en övermänsklig hastighet."
}
/** shows to text buttons. Hides continue button. Gives user two choises of action */
function hitBack() {
    hideForward();
    showTwoBtns();
    btn1.innerHTML = "Tar polkagrisen och springer iväg";
    btn2.innerHTML = "Skiter fullständigt i polkagrisen och springer för kung och fosterland därifrån";
    text.innerHTML = "Instinktivt langar du iväg ett slag i självförsvar. Då du aldrig tidigare har misshandlat en Ompalompa är slaget mer anpassat efter medellång mänsklig storlek och den lille mannen tuppar av. Den gigantiska polkagrisen glider ur hans grepp. Vad gör du härnäst?"
    
    btn1.onclick = savePolka;
    btn2.onclick = noPolka;
       
    /** If user chose to save Polkagris - polkagris = true. User is then redirected to next step */
    function savePolka() {
      polkagris = true;
      backToStart();
    }
    /** If user chose not to take Polkagris -  Polkagris = !true. User get redirected to next step */
    function noPolka() {
        backToStart();
    }
}
/** Hides continue button.  */
function backToStart() {
    hideForward();

    /** if user took chocolate bath in room findsChocolatePool story text */
    if (chocoBath === true) {
        text.innerHTML = "Du tar dig tillbaka till samma plats där du tidigare vaknat. Naken, rädd, hungrig och bakfull lunkar du fylld av självömkan vidare. Du känner markens fluffighet mellan tårna. Hungern gör sig påmind och du väljer att...";
    } 
    /** If user visited roomTree2 first */
    else if (stuck === true) {
        text.innerHTML = "Du tar dig tillbaka till samma plats där du tidigare vaknat. Rädd, hungrig, bakfull och djävulskt ont i tungan. Du ser trädet och känner doften av hallon. Du känner markens fluffighet mellan tårna. Hungern gör sig påmind och du väljer att...";
        btn2.style.display = 'none';
    } 
    /** If user not took cholate bath or have visited roomTree2 */
    else {
        text.innerHTML = "Du tar dig tillbaka till samma plats där du tidigare vaknat. Kladdig, rädd, hungrig och bakfull.  Du sätter dig ner under något som liknar ett träd men som doftar hallon. Du känner markens fluffighet mellan tårna. Hungern gör sig påmind och du väljer att...";
    }

    btn1.innerHTML = "..plocka upp en tuve fluffgräs och stoppar det i munnen";
    btn2.innerHTML = "..gå mot hallondoften";
    btn1.onclick = roomCottonCandy;
    btn2.onclick = roomTree;
}
/** Only shows continue button. When user visits this room user gets 'high' (high = true.)  */
function roomCottonCandy() {
    hideAllBtns();
    showForward();
    btnForward.innerHTML = "Fortsätt";
    high = true;
    text.innerHTML = "Sockervadd! Mer hinner du inte tänka innan slocknar."
    btnForward.onclick = roomWeed2;
}
/** only show continue button and story text.  */
function roomWeed2() {
    showForward();
    text.innerHTML = "Allt srnurar. ohc har kostniga färger. Du frösörke resa idg pup. vnigligt. Ögnolokcen knäns tnuga. Scokrervdadden var ogn nite sokorervodddad."
    btnForward.onclick = door;
}
/** If user chose button 2 in room2. Only shows continue button and story text. */
function roomTree() {
    btn1.style.display = 'none';
    btn2.style.display = 'none';
    hideAllBtns();
    showForward();
    text.innerHTML = "Några meter framför dig ser du något som påminner om ett träd, men kronan har inga löv. Istället finns där kluster av rosa små bollar. Ju närmare du kommer detso starkare känner du en syntetisk doft av hallon. Väl framme lägger du handen mot det som kan liknas vid en stam. Kladdigt. Från ingenstans känner du ett enormt begär av att smaka. Du försöker stå emot... Men kanske bara en liten bit.."
    btnForward.onclick = roomTree2;
}
/** Only shows two text buttons. */
function roomTree2() {
    showTwoBtns();
    hideForward();

    /** if user visited room  */
    if (stuck === true) {
        text.innerHTML = "Stammen smakar fortfarande zoo-klubba. Och du har återigen två val.";
        btn2.innerHTML = "Du står kvar och fortsätter hoppas att någon annan ska lösa ditt problem";
    } else {
        text.innerHTML = "Stammen smakar zoo-klubba. När du ska vända din om för att gå tillbaka inser du att du sitter fast. Aj. Det är som att du slickat på en lyktstolpe i minusgrader. Fast istället för att vara 5 år och dum är du " + age + " år och ännu dummare. Du står mellan 2 val. Vad gör du?";
         btn2.innerHTML = "Du står kvar och hoppas att någon annan ska lösa ditt problem";
    }
    btn1.innerHTML = "Du fattar mod och rycker loss tungan";
    btn1.onclick = roomTreeStuck;
    btn2.onclick = roomTree3;
    
}
/** User have visited roomTree2 and chose first button stuck = true. User gets redirected to backToStart */
function roomTreeStuck() {
    stuck = true;
    backToStart();
}
/** This is only a side step.
 * Only shows continue button 
 */
function roomTree3() {
    showForward();
    hideAllBtns();
    btnForward.innerHTML = "Gå tillbaka";
    btnForward.onclick = roomTree2;
    stuck = true;
        text.innerHTML = "Där blir du stående. Det var ju dumt. "
}
/** last room. User needs Polkagris to unlock door. Or solve a riddle */
 function door() {
    text.innerHTML = "Efter att förvirrat ha vandrat omkring och förundrats över meningslösa saker hittar du en dörr. På dörren ser du en fördjupning. Något slags nyckelhål kanske? Den har formen av något avlångt, men en krok i änden - Kan det vara en giganisk polkagris? Bredvid dörren sitter en liten lapp.";
    
    /** User chose to pick up  polkagris in step hitBack user can unlock door */
    if (polkagris === true) {
        btn1.innerText = "Du skiter i lappen och langar fram polkagrisen!";
        btn1.onclick = end;
    } 
    /** Empty button. If user dont have Polkagris only option to read note*/
    else {
        btn1.innerHTML = "Vilken polkagris???"
        btn1.onclick = "";
    }
    hideForward();
    showTwoBtns();
    btn2.innerHTML = "Den där lappen ser sådär lagom mystik ut..."
    btn2.onclick = note;
}
/** only shows continue button. Story text about note with riddle */
function note() {
    hideAllBtns();
    showForward();
    text.innerHTML = "Fortfarande aningen lullig av sockervadden läser du: 'Om du mot förmodan lyckats slarva bort den gigantiska polkagrisnyckeln så kan du låsa upp dörren genom att svara en gåta.";
    btnForward.onclick = riddle;
}
/** Riddle. Creates input for riddle answer. */
function riddle() {
    text.innerHTML ="Hur många gånger kan man subtrahera siffran 1 från 1111? Svara inte med bokstäver."
    
        riddleInput = document.createElement('INPUT');
        riddleInput.setAttribute('type', 'text');
        text.appendChild(riddleInput);
        btnForward.innerText = "Svara";
        btnForward.onclick = checkAnswer;

        /** Funciton to check if answer is correct. If answer is correct user gets out and game is done
         * if answeer is wrong user gets redirected to step wrong.  */
        function checkAnswer() {
            riddleAnswer = riddleInput.value;
            if (riddleAnswer == 1) {
                end();
            } else {
                wrong;
            }
            /** If users answer is incorrect. Only shows story text of 'wrong'. After 2 seconds user gets automatically redirectd back to riddle */
            function wrong() {
                text.innerHTML ="FEL!"
                setTimeout(function() {
                    riddle();
                }, 2000);
            }
        }
    
}
/** last room */
function end() {
    hideForward();
    hideAllBtns();
    /** If useer took chocolate bath this text shows */
    if (chocoBath === true) {
        text.innerHTML = "Grattis! Du är ute! Du är också naken och täckt av lagom intorkad choklad. Sedär! Den smakar fortfarande helt okej. Då är det bara att börja vandra hemåt.";
    } 
    /** if user didnt take chocolate bath this text shows */
    else {
    text.innerHTML = "Grattis! Du är ute! Du är också fortfarande hög på sockervadd. Lycka till med vandringen hemåt."
    }
    
}