// array 5 numeri
var numbers = []
// array numeri individuati
var numbersCheck = []

// funzione che genera 5 numeri casuali
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

// funzione --> il numero è presente nell'array?
function numberIncludes(number, array) {
  if (array.includes(number)) {
    return true
  } else {
    return false
  }
}

// genero 5 numeri e li pusho in numbers
while (numbers.length < 5) {
  var numberGenerated = randomNumber(1, 100)
  if (numberIncludes(numberGenerated, numbers) === false){
    numbers.push(numberGenerated)
  }
}

// li mostro all'utente
alert(numbers)

// funzione con timeout che chiede 5 volte un numero all'utente
setTimeout(function() {
  for (i = 0; i < 5; i++) {
    var numberUser = parseInt(prompt('Inserisci uno dei numeri che hai visto'))
    // se i numberUser sono presenti in numbers, li salvo
    if (numberIncludes(numberUser, numbers)) {
      numbersCheck.push(numberUser)
    }
  }
  alert('Il tuo punteggio è ' + numbersCheck.length + '/5')
})
