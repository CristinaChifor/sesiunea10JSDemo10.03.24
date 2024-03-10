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

// Modulo % restul impartirii

let numberE = 15;
let numberF = 4;
let moduloResult = numberE % numberF;
console.log(moduloResult);
console.log(`Restul impartirii lui ${numberE} la ${numberF} este ${moduloResult}`);


// cum aflam cel mai mare numar de tip number

console.log(Number.MAX_SAFE_INTEGER);

// cum aflam cel mai mic numar de tip number

console.log(Number.MIN_SAFE_INTEGER);

// Numere de tip BigInt

let bigIntNumber = 123456789n;
console.log(`BigInt value is ${bigIntNumber}`);

// String Operations
// string= un sir de caractere; lista de intrari intre ghilimele
// fiecare caracter din string are asignata un index- indexul incepe de la 0
// prima pozitie dintr-un sir de caractere este pozitia 0, 1, 2, 3 ... etc

const myName = "Cristina Chifor";

// afisarea unui caracter de la o anumita pozitie din string
// primul caracter

const firstCharInName= myName[0];
console.log(`Primul caracter din sirul'${myName}' este ${firstCharInName}`);

const secondCharInName= myName[1];
console.log(`Al doilea caracter din sirul'${myName}' este ${secondCharInName}`);

// lungimiea sirului

const myNameLenght = myName.length;
console.log(`Lungimea sirului '${myName}'este ${myNameLenght}`);
// se numara si spatiul dintre Cristina Chifor

// Ultimul caracter din sir

let lastCharIndex = myNameLenght - 1;
let lastChar = myName[lastCharIndex];
console.log(`Ultimul caracter din sir este ${lastChar}`);


// Concatenare de stringuri

let firstNamee = "Cristina";
let secondName = "Chifor";
let separator = " ";
//let fullName = firstNamee + ' '+ secondName;
let fullName = firstNamee + separator + secondName;
console.log(`My fullname is ${fullName}`);

let upperCaseName = fullName.toUpperCase();
console.log(`My name in upper case is ${upperCaseName}`);

let lowerCaseName = fullName.toLowerCase();
console.log(`My name in lower case is ${lowerCaseName}`);

let substringResult = fullName.substring (1, 5);
console.log(substringResult);

// Operatori de atribuire

let x = 5; 
let y = 5;
let z = 5;
let w = 5;

x += 3;
console.log(x);
// x = x +3; x = 5+3 => 8

y -= 2;
console.log(y);
// y = y-2; y = 5-2 => 3

z *= 3;
console.log(z);
// z = z * 3; z = 5 * 3 => 15

w /= 2;
console.log(w);
// w = w / 2; w = 5 / 2 => 2.5

// verificare numar par/ impar

let checkedNumber = 23;
let modulo = checkedNumber % 2;
let isEven = modulo == 0;
console.log(`Number ${checkedNumber} is even: ${isEven}`);



