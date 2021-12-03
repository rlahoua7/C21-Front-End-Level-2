let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom? omdat er aleen letter worden gebruikt vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype str waarom? omdat er aleen nummers word gebruikt vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? daar word mee word een fariabele gemaakt vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen regel 17 vul je antwoord in op de lijn

    // vul in wat naam is: naam is de parameter vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde zakaria de waarde noemen we een Argument vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een pop up op het scherm met de tekst zakaria deze tekst staan op regel 17 van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? ja vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? img word aangeroepen en waar wordt deze in je HTML aangeroepen? regel 17 vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML in regel 25 vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? zoekt in de html voor ale html elemneten vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? in deze funtie verandert de image in een andere vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen regel 17 en wanneer wordt deze aangeroepen waneer de terminal gebruikt vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan reken(5) en waar komt de waarde van getal vandaan? van de som van de parameter vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector?  alle elemneten met een bijbehorende naam  Wat is antwoord hier? vul je antwoorden in op de lijn


    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen funtie word geroepen 44 vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan html en waar komt de waarde van kleur vandaan? html vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? html vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? in deze funtie verandert de kleur en groote van de letters vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven het geeft een pop up en wanneer gebeurt dat consel (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? de pop up verandert vul je antwoord in op de lijn.