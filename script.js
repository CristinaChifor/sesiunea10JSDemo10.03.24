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
//let firstNamee = "Cristina".endsWith("a"); a inlocuit Cristina cu val booleana True
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

// Date Booleane True/ False doua val adev sau fals
// sunt utilizate pt evaluarea conditiilor si luarea deciziilor

let isAdult = true;
console.log(`Is adult = ${isAdult}`);

let isOld = false;
console.log(`Is old = ${isOld}`);

// Date null sau undefined
// marcheaza lipsa catre ref altei valori
// putem avea val null doar daca este setata explicit

let nullValue= null;
console.log(`nullValue = ${nullValue}`);

// nu avem setate date in varibila
// am definit variabila dar nu am initializat-o. Rezultatul in consola este undefined
let notInitialized;
console.log(`notInitialized = ${notInitialized}`);

// Adaugare + 1 la un numar (incrementare ++ a adaugar 1)
// ++ inseamna adauga 1

let x2 = 10;
console.log("x=", x2);

x2++;
console.log("x=", x2);

// Operatori de comparatie

// Operatorul de egalitate ==
// = este doar pentru atribuire; pt comparatii utilizam ==

let value1 = 22;
let value2 = 22;
let value3 = 23;
let value4 = "22";

let firstComparedResult = value1 == value2;
console.log(`${value1} == ${value2} => ${firstComparedResult}`);

let secondComparedResult = value1 == value3;
console.log(`${value1} == ${value3} => ${secondComparedResult}`);

let thirdComparedResult = value1 == value4;
console.log(`${value1} == ${value4} => ${thirdComparedResult}`); // face o conversie interna 22 number == 22 string; le face pe ambele string

let forthComparedResult = value3 == value4;
console.log(`${value3} == ${value4} => ${forthComparedResult}`);

// comparatorul de egalitate stricta ===
// date string === date de tip number => false
// compara atat valoarea cat si tipul de date

let strictEqualComaparison = value1 === value4;
console.log(`${value1} === ${value4} => ${strictEqualComaparison}`);

let strictEqualComaparison2 = value1 === value2;
console.log(`${value1} === ${value2} => ${strictEqualComaparison2}`);

let strictEqualComaparison3 = value1 === value3;
console.log(`${value1} === ${value3} => ${strictEqualComaparison3}`);

// comparatorul de mai mic (<) si mai mic sau egal (<=)

let num1 = 5;
let num2 = 6;
let num3 = 5;

let lessThanComparison = num1 < num2;
console.log(`${num1} < ${num2} => ${lessThanComparison}`);

let lessThanComparison1 = num2 < num3;
console.log(`${num2} < ${num3} => ${lessThanComparison1}`);

let lessOrEqualComparison = num1 <= num2;
console.log(`${num1} <= ${num2} => ${lessThanComparison}`);

let lessOrEqualComparison1 = num2 <= num3;
console.log(`${num2} <= ${num3} => ${lessOrEqualComparison1}`);

// comparatorul de mai mare (>) si mai mare sau egal (>=)

let greaterThanComparison = num1 > num2;
console.log(`${num1} > ${num2} => ${greaterThanComparison}`);

let greaterThanComparison1 = num2 > num3;
console.log(`${num2} > ${num3} => ${greaterThanComparison1}`);

let greaterOrEqualComparison = num1 >= num2;
console.log(`${num1} >= ${num2} => ${greaterOrEqualComparison}`);

let greaterOrEqualComparison1 = num2 >= num3;
console.log(`${num2} >= ${num3} => ${greaterOrEqualComparison1}`);

// Operatori logici
// se folosesc pt operatii intre date de tip boolean

let trueValue = true;
let falseValue = false;

// Operatorul si logic &&

let logicalAndResult = trueValue && falseValue;
console.log(`${trueValue} && ${falseValue} => ${logicalAndResult}`);
// operatorul si intre doua operatii booleane diferite => false

 logicalAndResult = falseValue && falseValue;
console.log(`${falseValue} && ${falseValue} => ${logicalAndResult}`);
// false && false => false

logicalAndResult = trueValue && trueValue;
console.log(`${trueValue} && ${trueValue} => ${logicalAndResult}`);
// true && true => true

// Operatorul sau logic ||

let logicalOrResult = trueValue || falseValue;
console.log(`${trueValue} || ${falseValue} => ${logicalAndResult}`);
// true || false => true cel putin unul dintre operanzi este true

 logicalOrResult = falseValue || falseValue;
console.log(`${falseValue} || ${falseValue} => ${logicalAndResult}`);
//false || false => true intre doua val false => false

logicalOrResult = trueValue || trueValue;
console.log(`${trueValue} || ${trueValue} => ${logicalAndResult}`);
// true || true => true

// Negarea logica not operator !
// da opusul val booleane

let notTrueValue = !trueValue;
console.log(`!${trueValue} => ${notTrueValue}`);

let notFalseValue = !falseValue;
console.log(`!${falseValue} => ${notFalseValue}`);
















