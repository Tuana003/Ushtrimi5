let notat = [8, 6, 10, 5, 9, 7];

let shuma = 0;
let notaTeLarta = 0;
let provimeTePakaluara = 0;

for (let nota of notat) {
    shuma += nota;

    if (nota === 9 || nota === 10) {
        notaTeLarta++;
    }

    if (nota === 5) {
        provimeTePakaluara++;
    }
}

let mesatarja = shuma / notat.length;

console.log("Mesatarja: " + mesatarja.toFixed(2));
console.log("Nota 9 ose 10: " + notaTeLarta);
console.log("Provime te pakaluara: " + provimeTePakaluara);