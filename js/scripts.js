init();

function init() {
    $(document).ready(function () {
        nombreProcess();
    });

    $(".nombre").keyup(function () {
        nombreProcess();
    });


    $(".fecha").change(function () {
        fechaProcess();
    });

    $(".clear_log").click(function () {
        $(".logger").html('');
    });
}

function fechaProcess() {
    // console.clear();
    hideResults();
    logger('fechaProcess: ');

    var numReduc = 0;
    $(".output").html('');

    var fecha = $(".fecha").val();
    fecha = clearSpecChars(fecha);
    var fechaArr = splitNameToArray(fecha); // string to array


    output(fecha);
    output(fechaArr);
    sumTotalNmms(fechaArr);

    minNum(fecha);
    showResults(sumTotalNmms(fecha));
}

function sumTotalNmms(s) {
    //TODO: la idea es que reduzca el total de num

    var numero = s;
    while (numero >= 10) {
        numero = numero.toString()
            .split('')
            .map(x => parseInt(x) )
            .reduce( (x, y) => x + y);
    }

    return numero;
}

function clearSpecChars(c) {
    return c.replace(/[^\w\s]/gi, '');
}

function checkIfEmptyValueArray(value) {
    logger("checkIfEmptyValueArray");

    return value != " ";
}

function removeNumbers(value) {
    logger("removeNumbers" + value);
    // TODO: remove special characters

    value = value.replace(/[0-9]/g, "");
    return value;
}


function nombreProcess() {
    console.log("nombreProcess(), name: " + name);

    hideResults();
    

    var name = normalize($(".nombre").val().trim());
    name = removeNumbers(name).toLowerCase();
    name = splitNameToArray(name); // string to array

    name = name.filter(checkIfEmptyValueArray);

    arrEachCharToNumber(name);

    // logger(name);
}

function splitNameToArray(name) {
    // TODO:renombrar esta funcion a split arr
    console.log("splitNameToArray(name)" + name);
    return name.split("")
}

function arrEachCharToNumber(name) {
    console.log("arrEachCharToNumber(name)" + name);
    // console.clear();
    $('.output, .logger').html('');

    var sum = 0, num;

    name.forEach(function (element) {
        num = loopToRenombrar(element);
        sum = num + sum;
        console.log('element: ' + element);
        console.log(loopToRenombrar(element));
        $('.output').append(loopToRenombrar(element));

    });

    switch (sum) {
        case 11:
            var minNumVal = sum;
            break;
        case 22:
            var minNumVal = sum;
            break;
        case 33:
            var minNumVal = sum;
            break;
        default:
            // var minNumVal = minNum(sum);
            var minNumVal = sumTotalNmms(sum);
    }

    // var minNumVal = minNum(sum);


    output(sum);
    output("número reducido: " + minNumVal);

    showResults(minNumVal);
}

function output(params) {
    $('.output')
        .append('<br>')
        .append(params);
}

function showResults(minNumVal) {
    $('.num-' + minNumVal).fadeIn();
}

function hideResults() {
    $('.resultados li').hide();
}

function loopReduc(digits) {

    //TODO: cambiar por while
    if (digits.length > 1) {
        logger("es mayor a 1");

        var arrayLength = digits.length, numReduc = 0;

        for (var i = 0; i < arrayLength; i++) {

            numReduc = numReduc + parseInt(digits[i]); // cast to int

        }

        logger("numReduc: " + numReduc);
        showResults(numReduc);
    }

    return numReduc;
}

function minNum(num) {
    logger('minNum(num): ' + num);



    var digits = numToDigitsArr(num);


    return loopReduc(digits);


}

function numToDigitsArr(num) {

    var digits = num.toString().split('');
    logger('digits: ' + digits + '; digits.length: ' + digits.length);

    return digits;
}

function loopToRenombrar(letra) {
    //logger('loopToRenombrar');
    console.log("arrEachCharToNumber(letra)" + letra);

    // Correspondencia de números y letras
    // 1	2	3	4	5	6	7	8	9
    // A	B	C	D	E	F	G	H	I
    // J	K	L	M	N	O	P	Q	R
    // S	T	U	V	W	X	Y	Z
    switch (letra) {

        // A J S = 1
        case "a":
            console.log("nro 1: " + letra);
            return 1;
            break;
        case "j":
            console.log("nro 1: " + letra);
            return 1;
            break;
        case "s":
            console.log("nro 1: " + letra);
            return 1;
            break;


        // B K T = 2
        case "b":
            console.log("nro 2: " + letra);
            return 2;
            break;

        case "k":
            console.log("nro 2: " + letra);
            return 2;
            break;

        case "t":
            console.log("nro 2: " + letra);
            return 2;
            break;


        // C L U = 3
        case "c":
            console.log("nro 3: " + letra);
            return 3;
            break;

        case "l":
            console.log("nro 3: " + letra);
            return 3;
            break;

        case "u":
            console.log("nro 3: " + letra);
            return 3;
            break;


        // D M V = 4
        case "d":
            console.log("nro 4: " + letra);
            return 4;
            break;

        case "m":
            console.log("nro 4: " + letra);
            return 4;
            break;

        case "v":
            console.log("nro 4: " + letra);
            return 4;
            break;


        // E N W = 5
        case "e":
            console.log("nro 5: " + letra);
            return 5;
            break;

        case "n":
            console.log("nro 5: " + letra);
            return 5;
            break;


        case "w":
            console.log("nro 5: " + letra);
            return 5;
            break;


        // F O X = 6
        case "f":
            console.log("nro 6: " + letra);
            return 6;
            break;

        case "o":
            console.log("nro 6: " + letra);
            return 6;
            break;

        case "x":
            console.log("nro 6: " + letra);
            return 6;
            break;

        // G P Y = 7
        case "g":
            console.log("nro 7: " + letra);
            return 7;
            break;

        case "p":
            console.log("nro 7: " + letra);
            return 7;
            break;

        case "y":
            console.log("nro 7: " + letra);
            return 7;
            break;



        // H Q Z = 8
        case "h":
            console.log("nro 8: " + letra);
            return 8;
            break;

        case "q":
            console.log("nro 8: " + letra);
            return 8;
            break;

        case "z":
            console.log("nro 8: " + letra);
            return 8;
            break;


        // I R = 9

        case "i":
            console.log("nro 9: " + letra);
            return 9;
            break;

        case "r":
            console.log("nro 9: " + letra);
            return 9;
            break;
    }
}

var normalize = (function () {
    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",
        to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
        mapping = {};

    for (var i = 0, j = from.length; i < j; i++)
        mapping[from.charAt(i)] = to.charAt(i);

    return function (str) {
        var ret = [];
        for (var i = 0, j = str.length; i < j; i++) {
            var c = str.charAt(i);
            if (mapping.hasOwnProperty(str.charAt(i)))
                ret.push(mapping[c]);
            else
                ret.push(c);
        }
        return ret.join('');
    }

})();