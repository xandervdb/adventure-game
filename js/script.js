var title = document.getElementById("title");
var image = document.getElementById("image");
var options = document.getElementById("options");
var sleutel = document.getElementById("sleutel")
var dropdown = document.getElementsByClassName("dropdown")
var heeftKleren = false;
var viezeAdem = false;
var heeftSleutels = false;
var heeftCadeau = false;
var isSchoon = false;

function slaapkamer (){
    title.innerHTML = "De slaapkamer";
    image.src = "img/slaapkamer.jpg";
    optie1.innerHTML= "Naar de woonkamer"
    optie1.setAttribute("onclick","woonkamer()");
    optie2.innerHTML="Naar de badkamer";
    optie2.setAttribute ("onclick","badkamer()");
    optie3.innerHTML= "Naar de gang";
    optie3.setAttribute ("onclick","gang()");
    optie3.style.display = "inline-block";
    optie4.innerHTML="Naar de Klerenkast";
    optie4.setAttribute("onclick","klerenkast()");
    optie4.style.display= "inline-block";
    dialoog.innerHTML = "*Dit is de slaapkamer. Hier kan ik mijn kledingkast in.*";
}

function woonkamer(){
    title.innerHTML = "De woonkamer";
    image.src = "img/huiskamer.jpg";
    optie1.innerHTML= "Naar de slaapkamer";
    optie1.setAttribute("onclick", "slaapkamer()");
    optie2.innerHTML= "Naar de badkamer";
    optie2.setAttribute("onclick","badkamer()")
    optie3.innerHTML= "naar de gang";
    optie3.setAttribute("onclick","gang()");
    optie2.style.display = "inline-block";
    optie3.style.display = "inline-block";
    optie4.style.display = "none"
    dialoog.innerHTML = "*Ik ben in de woonkamer. het is nu 16:30*"
}

function klerenkast() {
    if (heeftKleren == false){
        title.innerHTML = "De kledingkast";
        image.src = "img/inloopkast.jpg";
        optie1.innerHTML = "Smoking";
        optie1.setAttribute("onclick" ,"smoking()");
        optie2.innerHTML= "Naar de slaapkamer"
        optie2.setAttribute('onclick',"slaapkamer()")
        optie2.style.display = "inline-block";
        optie3.style.display = "none";
        optie4.style.display = "none";
        dialoog.innerHTML = "*Hier kan ik mijn kleding aantrekken. Wat zal ik aantrekken voor vanavond?*"
    } else{
        alert("Je hebt je kleding al gepakt. Hier heb je niks meer te zoeken.")
}
}

function smoking(){
    title.innerHTML= "De smoking";
    image.src= "img/smoking.png";
    optie1.innerHTML= "Aantrekken";
    optie1.setAttribute ('onclick',"aantrekken()"); 
    optie2.innerHTML= "Terug naar de slaapkamer";
    optie2.setAttribute("onclick","slaapkamer()");
    optie3.style.display = "none";
    optie4.style.display = "none";
    dialoog.innerHTML = "*Hmm een smoking die is heel chique.*"
}

function aantrekken (){
    alert("Je hebt de smoking aangetrokken.")
    heeftKleren = true;
    
}
function gang (){
    title.innerHTML = "De gang";
    image.src = "img/gang.jpg";
    optie1.innerHTML= "Naar de slaapkamer";
    optie1.setAttribute("onclick", "slaapkamer()");
    optie1.style.display = "inline-block"
    optie3.innerHTML= "Naar het restaurant gaan";
    optie3.setAttribute("onclick","weggaan()")
    optie3.style.display = "inline-block"
    optie2.innerHTML= "Naar de woonkamer";
    optie2.setAttribute("onclick","woonkamer()");
    optie4.innerHTML= "De autosleutels zoeken";
    optie4.setAttribute("onclick","sleutelkast()");
    optie4.style.display = "inline-block";
    dialoog.innerHTML ="*Ik ben nu in de gang. Hier moeten mijn autosleutels ergens zijn.*"   
    sleutel.style.display ="none"; 
}

function badkamer (){
    title.innerHTML = "De badkamer";
    image.src = "img/badkamer.jpg";
    optie1.innerHTML= "Naar de slaapkamer";
    optie1.setAttribute("onclick","slaapkamer()");
    optie2.innerHTML= "Naar de woonkamer";
    optie2.setAttribute("onclick","woonkamer()");
    optie3.innerHTML= "Naar de gang";
    optie3.setAttribute ("onclick","gang()");
    optie4.innerHTML= "douchen"
    optie4.setAttribute('onclick',"douchen()")
    optie4.style.display= "inline-block";
    dialoog.innerHTML ="*Mischien is het handig als ik even ga douchen. Dan ben ik weer fris*"
}

function douchen (){
    alert("Je hebt gedoucht. Nu ben je weer lekker schoon!") 
    isSchoon  =  true;  
}

function sleutelkast (){
    if (heeftSleutels == false){
        title.innerHTML = "De sleutelkast";
        image.src = "img/sleutelkastje.jpg";
        sleutel.src = "img/sleutel.png";
        sleutel.style.display ="block"; 
        sleutel.setAttribute('onclick',"pakSleutel()");
        optie1.innerHTML = "Terug naar de gang"
        optie1.setAttribute("onclick","gang()")
        dialoog.innerHTML = "*Ah daar is mijn sleutel*"
        optie2.style.display = "none";
        optie3.style.display = "none";
        optie4.style.display = "none";
    } else{
        alert("Je hebt de auto sleutels al. Je hebt hier niks meer te zoeken")
    }
}

function pakSleutel (){ 
    alert("Je hebt de autosleutel opgepakt! Nu kan je vertrekken") 
    sleutel.style.display = "none" 
    heeftSleutels  =  true; 
} 

function weggaan (){
    title.innerHTML = "Voordeur";
    image.src = "img/deur.jpg";
    optie1.innerHTML = "Vertrekken";
    optie1.setAttribute ("onclick","auto()")
    optie2.innerHTML = "Blijven";
    optie2.setAttribute("onclick","gang()");
    optie3.style.display = "none";
    optie4.style.display = "none";
     dialoog.innerHTML = "*Ben ik klaar voor de date of zou ik nog wat moeten doen?*"
    optie2.innerHTML = "Blijven";
    optie2.setAttribute("onclick","gang()");
    optie2.style.display = "inline-block"
    optie3.style.display = "none";
    optie4.style.display = "none";
    dialoog.innerHTML = "*Ben ik klaar voor de date of zou ik nog wat moeten doen?*"
}

function auto (){
    if (heeftSleutels == false){
        alert("Mischien is het handig om de auto sleutel te pakken.");
    } else{
        title.innerHTML = "Onderweg";
        image.src = "img/onderweg.jpg";
        optie1.innerHTML = "Naar de chocoladewinkel";
        optie1.setAttribute("onclick","chocolade()");
        optie2.innerHTML = "Naar de bloemenwinkel";
        optie2.setAttribute("onclick","bloemen()");
        dialoog.innerHTML = "*hmm ik kan natuurlijk niet met lege handen daar aankomen. Ik zou chocolade kunnen halen. Of ik kan een bosje bloemen halen*"
    }
}
function chocolade (){
    if (heeftKleren == false){
        gameOver()
        alert("je liep naakt de winkel in. Schaam je!")
    } else{
        title.innerHTML = "De chocoladewinkel";
        image.src = "img/chocolade.jpg";
        optie1.innerHTML = "Chocolade kopen";
        optie1.setAttribute ('onclick',"koopCadeau()")
        optie2.innerHTML = "Naar het restaurant gaan"
        optie2.setAttribute('onclick',"buitenRestaurant()")
        optie3.style.display = "none";
        optie4.style.display = "none";
        dialoog.innerHTML= "*Hmmm ik zou eigenlijk ook chocolade voor mezelf moeten kopen*"
    }
}

function bloemen (){
    if (heeftKleren == false){
        gameOver()
        alert("je liep naakt de winkel in. Schaam je!")
    } else{
        title.innerHTML= "De bloemenwinkel"
        image.src = "img/bloemen.jpg"
        optie1. innerHTML = "Een bosje bloemen kopen"
        optie1. setAttribute ('onclick',"koopCadeau()")
        optie2.innerHTML= "naar het restaurant gaan"
        optie2.setAttribute ('onclick',"buitenRestaurant()")
        optie3.style.display = "none";
        optie4.style.display = "none";
        dialoog.innerHTML= "*Hmmm er is wel veel keus hoor. Ik koop wel een gemengde bos bloemen*"
    }
}
function koopCadeau (){
    alert("Je hebt een cadeautje. Ga nu snel naar het restaurant toe"); 
    heeftCadeau  =  true; 
}

function buitenRestaurant ()
{
    title.innerHTML= "buiten het restaurant"
    image.src = "img/buiten.jpg"
    optie1.innerHTML= "Naar binnen gaan"
    optie1.setAttribute('onclick',"restaurant()")
    optie2.innerHTML= "sigaret roken"
    optie2.setAttribute ('onclick',"cigaret()")
    dialoog.innerHTML= "*Owh hier is het restaurant al. Ik ben wel een beetje nerveus hoor.*"
}

function cigaret (){
    alert("Je hebt zojuist een sigaret gerookt. Je hebt nu een viese adem.")
    viezeAdem = true
}

function restaurant (){
    title.innerHTML= "Het restaurant"
    image.src = "img/vrouw.jpg"
    optie1.innerHTML= "Begroeten"
    optie1.setAttribute ('onclick',"restaurant2()")
    optie2.innerHTML= "Een hand geven"
    optie2.setAttribute ('onclick',"restaurant2()")
    dialoog.innerHTML= "*daar zit ze*"
}

function restaurant2 (){
    if (viezeAdem == true){
        gameOver()
        alert("Je had een vieze adem. Dat vondt je date niet zo leuk.")
    }else {
        optie1.innerHTML= "Geen voorgerecht nemen"
        optie1.setAttribute('onclick',"restaurant3()")
        optie2.style.display= "none"
        dialoog.innerHTML= "Ober: wat willen jullie als voorgerecht?          date: ik hoef niks wil jij ook toch niks?"
    }
}

function restaurant3 (){
    dialoog.innerHTML= "Ober: wat willen jullie als hoofdgerecht?          Date: doe mij maar de steak. Wat neem jij? "
    optie1.innerHTML= "Doe mij maar een schnitzel"
    optie1.setAttribute('onclick',"restaurant4()")
    optie2.innerHTML= "Doe mij maar een steak"
    optie2.style.display= "inline-block"
    optie2.setAttribute('onclick',"restaurant4()")
    optie3.innerHTML= "Doe mij maar de kippen vleugels"
    optie3.setAttribute('onclick',"restaurant4()")
    optie3.style.display= "inline-block"
}

function restaurant4 (){
    dialoog.innerHTML= "Ober: oke jullie eten komt eraan.                 Date: Mijn hobby is auto's in de prak rijden. En jouw creditcard leeg maken. Wat is jou hobby?"
    optie1.innerHTML= "Mijn hobby is sporten"
    optie1.setAttribute('onclick',"restaurant5()")
    optie2.innerHTML= "Mijn hobby is gamen"
    optie2.setAttribute('onclick',"restaurant5()")
    optie3.innerHTML= "Mijn hobby is tv kijken"
    optie3.setAttribute('onclick',"restaurant5()")
    optie4.style.display = "inline-block";
    optie4.innerHTML= "Ik heb geen hobby's"
    optie4.setAttribute('onclick',"restaurant5()")
}

function restaurant5 (){
    dialoog.innerHTML= "Ober: Hier is jullie eten."
    optie1.innerHTML= "Lekker bedankt"
    optie1.setAttribute('onclick',"restaurant6()")
    optie2.style.display = "none";
    optie3.style.display = "none";
    optie4.style.display = "none";
}

function restaurant6 (){
    alert("Je hebt je eten op. Je vond het lekker")
    dialoog.innerHTML= "Ober: Willen jullie nog een nagerecht?            Date: Ja graag doe mij maar de dame blanché. Wat neem jij?"
    optie1.innerHTML= "Doe mij maar een kaasplankje"
    optie1.setAttribute('onclick',"restaurant7()")
    optie2.innerHTML= "Doe mij maar de dame blanché"
    optie2.style.display= "inline-block"
    optie2.setAttribute('onclick',"restaurant7()")
    optie2.style.display= "inline-block"
    optie3.innerHTML= "Doe mij maar de belgische wafels"
    optie3.setAttribute('onclick',"restaurant7()")
    optie3.style.display= "inline-block"
}

function restaurant7(){
    dialoog.innerHTML= "Ober: jullie nagerecht komt er aan.                Date: Ik ben een clown. Wat ben jij voor beroep?"
    optie1.innerHTML= "Ik ben een vuilnisman"
    optie1.setAttribute('onclick',"restaurant8()")
    optie2.innerHTML= "Ik ben een proffesionele (e)sporter"
    optie2.setAttribute('onclick',"restaurant8()")
    optie3.innerHTML= "Ik ben helaas werkloos"
    optie3.setAttribute('onclick',"restaurant8()")
}

function restaurant8(){
    dialoog.innerHTML= "Ober: Hier zijn jullie nagerechten"
    optie1.innerHTML= "bedankt"
    optie1.setAttribute ('onclick',"restaurant9()");
    optie2.style.display = "none";
    optie3.style.display = "none";
    optie4.style.display = "none";
}

function restaurant9() {
    alert("Je hebt je nagerecht op. Je vond het lekker!");
    dialoog.innerHTML= "Date: Ik heb de rekening al betaald met jou creditcard. Gaan we naar buiten?"
    optie1.innerHTML= "ja"
    optie1.setAttribute ('onclick',"buitenRestaurant2()")
}

function buitenRestaurant2() {
    if (heeftCadeau == true) {
        auto2()
        alert("Je date vond je zo aardig dat je haar naar huis mag brengen.")
    }else{
        gewonnen1()
        alert("gefeliciteerd je hebt een succesvolle date gehad.")
    }
}

function auto2() {
    title.innerHTML= "buiten het huis van je date"
    image.src= "img/onderweg.jpg"
    dialoog.innerHTML= "date: zo we zijn er"
    optie1.innerHTML= "ja het was gezellig"
    optie1.setAttribute ('onclick',"buiten()")
    optie2.innerHTML= "nou tot ziens dan he"
    optie2.setAttribute("onclick","gewonnen2()")
    optie2.style.display= "inline-block"
}

function buiten() {
    image.src= "img/date-huis.jpg"
    dialoog.innerHTML= "Date: De avond hoeft hier nog niet te eindigen ga je mee naar binnen?"
    optie1.innerHTML= "ja graag"
    optie1.setAttribute ('onclick',"buiten2()")
    optie2.innerHTML= "nee bedankt"
    optie2.setAttribute("onclick","gewonnen()")
}

function buiten2() {
    if (isSchoon == true) {
        gewonnen3()
    }else{
        verloren()
        alert("Helaas ze kwam er achter dat je niet gedoucht had.")
    }
}

function verloren() {
    title.innerHTML = "Game over"
    dialoog.innerHTML= "Helaas je date verliep niet goed. Om het opnieuw te proberen druk op f5."
    image.src= "img/gameover.gif"
    optie1.style.display = "none";
    optie2.style.display = "none";
    optie3.style.display = "none";
    optie4.style.display = "none"; 
}

function gameOver() {
    title.innerHTML = "Game over"
    dialoog.innerHTML= "je date verliep goed. Maar omdat ze erachter kwam dat je niet gedouched had heeft ze je weg gestuurd. Om het opnieuw te proberen druk op f5."
    image.src= "img/gameover.gif"
    optie1.style.display = "none";
    optie2.style.display = "none";
    optie3.style.display = "none";
    optie4.style.display = "none";
}

function gewonnen() {
    title.innerHTML= "gewonnen"
    image.src= "img/gewonnen.png"
    dialoog.innerHTML= "Gefeliciteerd je hebt een leuke date gehad. Je was waarschijnlijk een beetje nerveus om naar binnen te gaan of niet? Om het spel opnieuw te spelen druk je op f5."
    optie1.style.display = "none";
    optie2.style.display = "none";
    optie3.style.display = "none";
    optie4.style.display = "none";
}

function gewonnen1() {
    title.innerHTML= "gewonnen"
    image.src= "img/gewonnen.png"
    dialoog.innerHTML= "Gefeliciteerd je hebt een leuke date gehad. om het spel opnieuw te spelen druk je op f5."
    optie1.style.display = "none";
    optie2.style.display = "none";
    optie3.style.display = "none";
    optie4.style.display = "none";
}

function gewonnen2() {
    title.innerHTML= "gewonnen"
    image.src= "img/gewonnen.png"
    dialoog.innerHTML= "Gefeliciteerd je hebt een leuke date gehad. Maar of het nou zo goed idee was om haar uit je auto te gooien en weg te rijden bij haar huis weet ik niet. Om het spel opnieuw te spelen druk je op f5."
    optie1.style.display = "none";
    optie2.style.display = "none";
    optie3.style.display = "none";
    optie4.style.display = "none";
}

function gewonnen3() {
    title.innerHTML= "gewonnen"
    image.src= "img/gewonnen.png"
    dialoog.innerHTML= "Gefeliciteerd je hebt een leuke date gehad. Je hebt de nacht bij haar doorgebracht en jullie zijn een stelletje . Om het spel opnieuw te spelen druk je op f5."
    optie1.style.display = "none";
    optie2.style.display = "none";
    optie3.style.display = "none";
    optie4.style.display = "none";
}