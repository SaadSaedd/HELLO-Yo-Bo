let readlineSync = require('readline-sync');
function begin(){
    console.log("    ")
    console.log("Je opent je ogen in een duistere kamer. Plotseling flitst het licht aan, en je kijkt verward om je heen. In het schamele licht zie je een tafel met twee stoelen. Verwarring overvalt je terwijl je je afvraagt waarom je hier bent en wat er aan de hand is. Op de tafel zie je vier knoppen, en je merkt een brief op die ligt met de boodschap: Je bent geselecteerd om deze mysterieuze zaak op te lossen. Er zijn vier verdachten die je zult ontmoeten, en jij moet beslissen wie de moordenaar is. We vertrouwen erop dat jij dit voor ons kunt oplossen. Je denkt bij jezelf: Wat? Waarom ik? Ik ben waarschijnlijk niet de juiste persoon voor deze taak... ")
    console.log("    ")
    console.log("Keuze A --veder kijken en dit porberen op te lossen (stukje 1) ")
    console.log("Keuze B –niet meedoen en een uitweg zoeken (stukje 20) ")
    
  }
  
  
  function stukje1(){
    console.log("    ")
      console.log("Uiteindelijk besluit je om deze uitdaging aan te gaan. Je gaat verder met je verkenning en ontdekt een envelop. Met aarzeling in je gedachten, besluit je de envelop te openen en treft binnenin vier bladen aan met foto's en namen. ")
      console.log("    ")
      console.log("Keuze A –zitten en alles lezen (stukje 2) ");
      console.log("Keuze B –verder rondkijken (stukje 21) ");
  }
  
  
  function stukje2(){
    console.log("    ")
      console.log("Drie personen en één moordenaar... In een andere brief lees je over de moord - op woensdag 14 februari, omstreeks 11 uur, zat Duncan te eten in een restaurant in Amsterdam toen hij werd vermoord. Nu is het aan jou om uit te zoeken hoe dit is gebeurd en wie er verantwoordelijk is. ")
      console.log("    ")
      console.log("Keuze A –terug naar tafel en lezen (stukje 3)  ");
  }
  
  function stukje3(){
    console.log("    ")
      console.log("Terwijl je de kamer verder onderzoekt, valt je blik op iets ongewoons op de grond. Het is een verontrustende aanblik: bloedvlekken en een stukje blauwe stof. Je vraagt je af van wie deze sporen kunnen zijn. De kamer waarin je je bevindt, is klein en kaal, met kille, grijze muren en een enkel raam dat slechts een zwak straaltje licht binnenlaat. De atmosfeer is gespannen en vol mysterie, en je hebt het gevoel dat er meer aan de hand is dan je aanvankelijk dacht. De vondst van het bloed en de blauwe stof brengt de vraag naar de identiteit van de mogelijke slachtoffers en verdachten naar voren, en je besluit verder te onderzoeken. Wat kan deze nieuwe aanwijzing onthullen over de gebeurtenissen in deze vreemde kamer?")
      console.log("    ")
      console.log("Keuze A –terug naar tafel en lezen (stukje 4)   ")
      console.log("Keuze B –veder kijken (stukje 21) ")
  }
function stukje6(){
    console.log("    ")
    console.log("Je drukt op de knop met Damian's naam, en al snel verschijnt Damian in de kamer. Jullie kijken elkaar aan terwijl hij tegenover je gaat zitten. Nu is het tijd om te bedenken welke vragen je aan hem wilt stellen. Wat zou je willen weten? ")
    console.log("    ")
    console.log("Keuze A –waarom ben jij hier (stukje 7)   ")
}
function stukje7(){
    console.log("    ")
    console.log("Ik weet het niet, zegt Damian terwijl hij uitlegt, Ik was plotseling opgepakt. Ik was in een bar met een vriendin, en ineens kwam de politie en nu ben ik hier. Wat brengt jou hier? vraagt hij nieuwsgierig. ")
    console.log("    ")
    console.log("Keuze A –beantwoord Damian zijn vraag (stukje 8)   ")
    console.log("Keuze B – blijf Damian vragen stukje (9)  ")
}
function stukje8(){
    console.log("    ")
    console.log("Ja, ik weet het niet waarom, maar ik wil gewoon proberen dit op te lossen, zeg je terwijl je Damian ondervraagt. Maar Damian, waar was je op woensdag 14 februari rond 11 uur? Damian antwoordt, Ik was toen buiten met een vriend... Je onderbreekt hem met de vraag, Welke vriend? Damian antwoordt, Kaj... Je vervolgt, Wat waren jullie aan het doen? Damian zegt, Gewoon wat rondlopen in het centrum... ")
    console.log("    ")
    console.log("Keuze A –stel nog een vraag (stukje 9)   ")
    console.log("Keuze B –ga naar volgende persoon (stukje 4)  ")
}
function stukje9(){
    console.log("    ")
    console.log("Je vraagt, Hoe is jouw relatie met Duncan? Damian reageert, Gewoon goed, is er iets bijzonders aan de hand? Je zegt, Misschien... dat is voor nu genoeg, je mag gaan. Nu sta je voor de keuze om de volgende persoon te ondervragen.")
    console.log("    ")
    console.log("Keuze A –ga naar volgende persoon (stukje 4)  ")
}
function stukje4(){
    console.log("    ")
    console.log("Wie ga je ondervragen")
    console.log("    ")
    console.log("Keuze A – Damian (stukje 5) ")
    console.log("Keuze B –Joyce (stukje 14) ")
    console.log("Keuze C –ilyaas (stukje 10)   ")
    console.log("Keuze D –Abdul (stukje 17) ")
    console.log("Keuze E -de moordernaar kiezen")
    let antwoord4 =readlineSync.question("wat ga jij kiezen A/B/C/D/E " )
    if (antwoord4 === "A" ){
        stukje510()
    } else if (antwoord4 === "C"){
    stukje1013()
    }else if (antwoord4 === "B"){
    stukje1416()
    } else if (antwoord4 === "D"){
    stukje1718()
    }else if (antwoord4 === "E"){
        stukje19()
    }
}


function stukje11(){
    console.log("    ")
    console.log("Je drukt op Ilyaas' knop, en al snel verschijnt hij in de kamer. Hij gaat tegenover je zitten. Je begint het gesprek en vraagt, Hoe gaat het? Ilyaas antwoordt, Ja, gaat goed... Nu is het jouw beurt om te bedenken welke vragen je aan hem wilt stellen. Wat zou je willen weten? ")
    console.log("    ")
    console.log("Keuze A – weet je wat er aan de hand is (stukje 12) ")
}


function stukje12(){
    console.log("    ")
    console.log("(jij vraagt) Weet je wat er aan de hand is? Ilyaas reageert, Ja, het gaat over Duncan. Hij is vermoord door iemand... (jij zegt) Ja, wat weet je nog meer? Ilyaas vervolgt, Ik was aan het werk bij KFC en had pauze, dus ik ging wat eten halen. Toen zag ik Duncan soep eten, en er was iemand naast hem. Ik kon die persoon niet goed zien, maar hij had een mes in de rug van Duncan gestoken... ")
    console.log("    ")
    console.log("Keuze A – verder laten praten(stukje 13)")
    console.log("Keuze B – naar de volgende persoon gaan (stukje 4) ")
}

function stukje13(){
    console.log("    ")
    console.log("(Ilyaas zegt) Ja, ik had toen de politie gebeld en ben nu opeens een verdachte hier... Maar ik was het echt niet. Waarom zou ik Duncan vermoorden? (jij zegt) Ja, ik begrijp het ook niet. Je mag gaan. Bedankt voor de informatie...")
    console.log("    ")
    console.log("Keuze A – naar volgende persoon gaan (Stukje 4) ")
}
function stukje15(){
    console.log("    ")
    console.log("Joyce gaat tegenover je zitten, en je begint het gesprek. Je vraagt, Weet jij wat er gebeurd is? Joyce kijkt je aan en zegt, Nee, ik was opeens opgepakt door de politie. Ze denken dat ik iemand heb vermoord. (jij zegt) Ja, Duncan is vermoord... Waar was jij op woensdag 14 februari? Joyce antwoordt, Ik was toen aan het shoppen. Ik was cadeautjes aan het halen voor mijn werk...")
    console.log("    ")
    console.log("Keuze A – vragen wat voor cadeautjes (stukje 16) ")
}

function stukje16(){
    console.log("    ")
    console.log("Je besluit wat meer over de cadeautjes te vragen om te zien of Joyce mogelijk iets weet wat kan helpen bij het oplossen van de zaak. (jij vraagt) Wat voor cadeautjes was je aan het kopen op woensdag 14 februari? Joyce glimlacht even en zegt: Nou, ik was op zoek naar een speciaal cadeau voor mijn beste vriendin Sarah. Ze is gek op sieraden, dus ik zocht naar een unieke ketting voor haar verjaardag. (jij vraagt) Heb je die ketting uiteindelijk gevonden? Joyce knikt en laat een glinsterende ketting zien die ze draagt. Ja, dit is hem! Ik vond de perfecte ketting in een klein boetiekje. Het was een beetje duur, maar Sarah is het waard. Je overweegt de informatie en besluit om verder te gaan. ")
    console.log("    ")
}

function stukje18(){
    console.log("    ")
    console.log("Je besluit meer informatie te verkrijgen over Abdul's alibi op de dag van de moord. (jij vraagt) Kun je me vertellen waar je was op woensdag 14 februari rond 11 uur? Abdul antwoordt: Natuurlijk, ik was aan het werk in de supermarkt. Ik sta vaak bij de kassa, dus er zijn getuigen die kunnen bevestigen dat ik op dat tijdstip in de winkel was. Misschien kun je mijn collega s of mijn baas ondervragen, ze kunnen bevestigen dat ik daar was.(jij vraagt) Heb je enig idee waarom de politie denkt dat je betrokken bent bij de moord op Duncan? Abdul lijkt even te aarzelen en zegt dan: Ik heb geen idee, misschien is er een misverstand of een fout. Ik ken Duncan niet eens. ")
    console.log("    ")
}
function stukje19(){
    console.log("    ")
    console.log("Dat was iedereen nu moet ik kiezen wie het was dit is moeilijk maar volgens mij weet ik wie het is")
    console.log("    ")
    console.log("Keuze A—Ilyaas (einde 1) ")
    console.log("Keuze B—Damian (einde 2) ")
    console.log("Keuze C—Abdul (einde 3) ")
    console.log("Keuze D—joyce (einde 4) ")
    let antwoord20 =readlineSync.question("wat ga jij kiezen A/B/C/D " );
    if (antwoord20 === "A" ){ 
         einde1()
         process.exit(); 
    }else if (antwoord20 === "B"){
        einde2()
        process.exit(); 
    }else if (antwoord20 === "C"){
        einde3()
        process.exit(); 
    }else if (antwoord20 === "D"){
        einde4()
        process.exit(); 
    }
    
}

function stukje20(){
    console.log("    ")
    console.log("Je kijkt een paar minuten om je heen, maar vindt niets dat je kan helpen. Uiteindelijk besluit je toch te proberen dit mysterie op te lossen. ")
    console.log("    ")
}

function stukje21(){
    console.log("    ")
    console.log("Terwijl je de kamer rondkijkt, valt je oog op een scherm. Je tikt erop, en het gaat aan, maar je ziet meteen dat de batterij bijna leeg is. In de spaarzame tijd die je hebt, scan je de beschikbare informatie op het scherm. Op het scherm zie je verontrustend nieuws dat je doet schrikken - iemand is vermoord, en je realiseert je dat het nieuws over de moord op Duncan gaat. Terwijl je dit tot je door laat dringen, besef je dat deze zaak dringend moet worden opgelost. Daarna valt je blik op een kleine aantekening naast het nieuwsbericht. Het staat er geschreven dat Kaj zich in Amerika bevindt voor een concert. Dit werpt een nieuwe wending op de zaak, en je begint je af te vragen of Kaj, ondanks zijn afwezigheid in Amsterdam, toch betrokken is bij deze gebeurtenis. ")
    console.log("    ")
}
function stukje22(){
    console.log("    ")
    console.log("Je vraagt aan Joyce hoe het met haar gaat. Joyce antwoordt: Ja, het gaat wel, maar ik ben gewoon heel erg in de war. Ik weet niet wat er gebeurt is. Bovendien ben ik net gevallen, dus ik heb wat bloed en mijn shirt is kapot.(jij zegt) Dat is naar om te horen, maar kom hier zitten. Laten we proberen dit allemaal op te helderen.")
    console.log("    ")
}
function einde1(){
    console.log("je denkt dat het ilyaas is...... dat is fout!!!!! zou maar heb je haat op ilyaas")
}
function einde2(){
    console.log("je denkt dat het damian is...... dat is goed omdat kaj kon niet met damian zijn want kaj was in amarika op tour dus damian loog")
}
function einde3(){
    console.log("je denkt dat het abdul is..... dat is fout hij heeft veel alibis ")
}
function einde4(){
    console.log("je denkt dat het joyce is...... dat is fout want zei is gwn te noob")
}




function stukje510(){
    console.log("    ")
    console.log("Je leest het verhaal van Damian - Damian is 17 jaar oud en afkomstig uit Amsterdam. Zijn hobby's zijn gamen, sporten en vechtsporten. In het verleden had hij te kampen met woede-uitbarstingen, maar door dit te overwinnen, heeft hij zich ontwikkeld tot een bedreven vechtsporter. ")
    console.log("    ")
    console.log("Keuze A –een gesprek met Damian aan gaan  (stukje 6)   ")
    let antwoord5 = readlineSync.question("wat ga jij kiezen A " );
   if (antwoord5 === "A" ){
    stukje6()
   }
    let antwoord6 = readlineSync.question("wat ga jij kiezen A " );
    if (antwoord6 === "A" ){
        stukje7()
    }
    let antwoord7 = readlineSync.question("wat ga jij kiezen A/B " );
    if (antwoord7 === "A" ){
    stukje8()
    }else if (antwoord7 === "B"){
        stukje9()
    }
    let antwoord8 = readlineSync.question("wat ga jij kiezen A/B 2 " );
    if (antwoord8 === "A" ){
    stukje9()
   }else if (antwoord8 === "B"){
    stukje4()
   }

   let antwoord9 = readlineSync.question("wat ga jij kiezen A " );
if (antwoord9 === "A" ){
    stukje4()
}
     


}
function stukje1013(){
    console.log("    ")
    console.log("Je leest over Ilyaas – hij is 17 jaar oud en woont in Amsterdam. Hij brengt veel van zijn tijd door met gamen en gaat bijna nooit naar school, waardoor hij voor veel mensen onbekend is. Zijn achtergrond blijft mysterieus en wordt gekenmerkt door geheimen en onopgeloste raadsels. ")
    console.log("    ")
    console.log("Keuze A – druk op ilyaas zijn knop (stukje 11) ")
    let antwoord10 = readlineSync.question("wat ga jij kiezen A " );
    if (antwoord10 === "A"){
        stukje11()
    }
    let antwoord11 = readlineSync.question("wat ga jij kiezen A " );
    if (antwoord11 === "A"){
        stukje12()
    }
    let antwoord12 = readlineSync.question("wat ga jij kiezen A/B " );
    if (antwoord11 === "A"){
        stukje13()
    }else if (antwoord11 === "B"){
        stukje4()
    }
    let antwoord13 = readlineSync.question("wat ga jij kiezen A " );
    if (antwoord13 === "A"){
        stukje4()
    }
}

function stukje1416(){
    console.log("    ")
    console.log("Je leest over Joyce. Ze is 16 jaar oud en woont in Volendam. Haar hobby's omvatten gamen, tijd doorbrengen met vrienden en, zoals ze zelf zegt, af en toe een noob zijn. Daarnaast werkt ze in een restaurant. Je drukt op de knop met Joyce's naam, en al snel verschijnt ze in de kamer. Echter, in plaats van meteen te gaan zitten, blijft ze staan, haar ogen scannen de ruimte, alsof ze de situatie probeert te begrijpen voordat ze verder gaat. Wat ga je nu doen?")
    console.log("    ")
    console.log("Keuze A – zeg tegen haar dat ze kan gaan zitten (stukje 15) ")
    console.log("Keuze B – vraag of alles goed gaat (stukje 22) ")
    let antwoord14 = readlineSync.question("wat ga jij kiezen A/B " );
    if (antwoord14 === "A"){
        stukje15()
    }else if (antwoord14 === "B"){
        stukje22()
    }
    let antwoord15 = readlineSync.question("wat ga jij kiezen A " );
    if (antwoord15 === "A"){
        stukje16()
    }  
    let antwoord16 = readlineSync.question("wat ga jij kiezen A " );
    if (antwoord16 === "A"){
        stukje4()


}
}
function stukje1718(){
    console.log("    ")
     console.log("Je roept Abdul binnen en hij neemt plaats tegenover je. (jij vraagt) Abdul, kun je me vertellen waarom de politie je hier heeft gebracht? Abdul kijkt serieus en antwoordt: Ik begrijp het zelf niet goed. Ik was gewoon aan het werk in de supermarkt op de bewuste dag, en de politie kwam me oppakken. Ze zeiden dat ik iets met de moord op Duncan te maken had.")
     console.log("    ")
     console.log("Keuze A- Vraag Abdul waar hij precies was op de dag van de moord (stukje 18)  ")
     let antwoord17 = readlineSync.question("wat ga jij kiezen A " );
     if (antwoord17 === "A"){
         stukje18()
    }
    let antwoord19 = readlineSync.question("wat ga jij kiezen A " );
    if (antwoord19 === "A"){
        stukje4()
    }
}
begin()
let antwoord =readlineSync.question("wat ga jij kiezen A/B " );
if (antwoord === "A" ){
    stukje1()
}else if (antwoord === "B"){
    stukje20()
}
let antwoord1 =readlineSync.question("wat ga jij kiezen A/B " );
if (antwoord1 === "A" ){
    stukje2()
} else if (antwoord1 === "B"){
    stukje21()
}
let antwoord2 =readlineSync.question("wat ga jij kiezen A " );
if (antwoord2 === "A" ){
    stukje3()
}
let antwoord3 =readlineSync.question("wat ga jij kiezen A/B " );
if (antwoord3 === "A" ){ 
    stukje4()  
}else if (antwoord3 === "B"){
    stukje21()
}

let antwoord4 =readlineSync.question("wat ga jij kiezen A/B/C/D/E " )
if (antwoord4 === "A" ){
    stukje510()
} else if (antwoord4 === "C"){
stukje1013()
}else if (antwoord4 === "B"){
stukje1416()
} else if (antwoord4 === "D"){
stukje1718()
}else if (antwoord4 === "E"){
    stukje19()
}
let antwoord20 =readlineSync.question("wat ga jij kiezen A/B/C/D " );
if (antwoord20 === "A" ){ 
     einde1()
}else if (antwoord20 === "B"){
    einde2()
}else if (antwoord20 === "C"){
    einde3
}else if (antwoord20 === "D"){
    einde4
}

