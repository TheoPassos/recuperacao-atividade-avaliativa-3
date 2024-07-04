import leia from "readline-sync";

var gols = leia.questionInt("Informe a quantidade de gols: ");
var pc = leia.questionInt("Informe a quantidade de passes certos: ");
var pe = leia.questionInt("Informe a quantidade de passes errados: ");

var total = (gols + 50) + (pc + 10) - (pe - 5);
var media = gols + pc - pe;

if (numero (50) >= 0) {
    console.log("Péssima partida");
} else if (numero (100) >= 50) {
    console.log("Partida ruim");
} else if (numero (150) >= 100) {
    console.log("Fez o básico");
} else if (numero (200) >= 150) {
    console.log("Foi bem na partida");
} else {
    console.log("Jogou demais");
}