let auto = ["Renault", "Porsche", "BMW", "Audi", "Toyota"];

let eersteAuto = auto[0];
let laatsteAuto =auto[auto.length - 1]; 

document.getElementById("auto").innerHTML =
    "De eerste auto in de array is: " + eersteAuto + "<br>" +
    "De laatste auto in de array is: " + laatsteAuto + "<br>" +
    "Het totaal aantal auto's in de array is: " + auto.length;