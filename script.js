let checked = "Hello World";
console.log(checked);

// variabilele aloca spatiu in memoria browser-ului pentru a stoca date
// blocuri fundamentale de stocare date in JS
// 3 metode de a defini variabilele: var- met veche; nu se mai foloseste, let, const
// conventii de denumire a varibilelor: nume date de noi cat mai reprezentative scrise in camel case ex: numeVariabila
// JS limbaj de programare sensibil la Majuscule
// numele variabilelor nu incepe cu cifre si nu se scriu cu spatiu intre primul cuvant si al doilea
// de evitat abrevierile
// o var o data declarata poate fi reatribuita
// o var definita cu let/ var poate fi reatribuita (! in cazul var def cu let nu se mai pune let la var reatribuita)
// var def cu const nu pot fi reatribuite
// orice linie de cod in JS se inchide cu ;

let age = 30;
console.log(age);
console.log(`My age is ${age}`);

let years = 10;
console.log(years);

age= 36;
console.log(age);
console.log(`My age is ${age}`);

// Tipuri de date
// Number = 1, 2, 3 etc
// let age = 30;
// String= text
// o var poate sa contina stringuri

let firstName = "Cristina";
console.log(firstName);
console.log(`name:`);
console.log(`My name is ${firstName}`);

const piNumber = 3.14;
console.log(piNumber);
//piNumber = 4; nu se mai executa codul deoarece val atribuite in constante nu pot fi schimbate

// Tipuri de date numerice: Number
// Cu tipurile de date Number putem folosi operatii matematice

// Operatori de date numerice
// Operatori aritmetici
// operatori= simboluri concepute pt a efectua operatii pe variabile si valori

// Addition +
// string interpolation = concept (`se trece text si ${}`); se fol pt a crea texte mai repezentative

let firstNumber = 10;
let secondNumber = 22;
let sum = firstNumber + secondNumber;
console.log(sum);
console.log(`Rezultatul sumei dintre ${firstNumber} si ${secondNumber} este ${sum}`);

// Substraction -

let pastAge= age - years;
console.log(pastAge);
console.log(`Acum ${years} ani aveam varsta de ${pastAge}`);
console.log(`Acum ${years} ani aveam varsta de ${age - years}`);

// Multiplication *

let numberA = 5;
let numberB = 23;
let multiplication = numberA * numberB;
console.log(multiplication);
console.log(`Rezultatul inmultirii dintre ${numberA} si ${numberB} => ${multiplication}`);

// Divison /

let numberC = 10;
let numberD = 35;
let division = numberC / numberD;
console.log(division);
console.log(`Rezultatul impartirii lui ${numberC} la ${numberD} este egal cu ${division}`);
let division2 = numberD / numberC;
console.log(division2);
console.log(`Rezultatul impartirii lui ${numberD} la ${numberC} este egal cu ${division2}`);