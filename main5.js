let numtotgatti = 200;
let numgattifila = 30
//calcolo file
let calcolofile = numtotgatti / numgattifila;
// gatti mancanti X nuova fila
let gattimancanti = numgattifila - (numtotgatti % numgattifila)
// gatti fuori
let gattifuori = numgattifila % numgattifila
console.log("ci sono " + calcolofile + " file e ne mancono " + gattimancanti + " per una nuova fila e ne avanzono " + gattifuori +"")


