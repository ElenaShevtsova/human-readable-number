module.exports = function toReadable(number) {
    let string = number.toString();
    let array = string.split('');
    let arrayLength = array.length;
    let arrayOfNumbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',

    }
    let secondArray = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred'
    }
    for (key in secondArray) {

        if (arrayLength === 1) {
            for (l in arrayOfNumbers) {
                if (l === string) { return arrayOfNumbers[l] }
            }
        }
        for (key in secondArray) {
            if (arrayLength === 2 && string === key) {

                return secondArray[key];


            } else if (arrayLength === 2 && number > 20) {
                let x = array[0] + '0';
                let y = array[1];

                if (x === key) {
                    for (j in arrayOfNumbers) {
                        if (j === y) {
                            return secondArray[key] + ' ' + arrayOfNumbers[j];
                        }
                    }
                }
            } else if (arrayLength === 2 && number < 20) {
                for (n in arrayOfNumbers) {
                    if (n === string) {
                        return (arrayOfNumbers[n]);
                    }
                }
            } else if (arrayLength === 3) {
                let p = array[1] + '0';
                let r = array[2];
                let res = array[1] + array[2];

                for (m in arrayOfNumbers) {
                    if (m === array[0]) {
                        if (res === '00') {
                            return arrayOfNumbers[m] + ' ' + 'hundred';
                        }
                        if (array[1] === '0') {
                            for (p in arrayOfNumbers) {
                                if (r === p) {
                                    return arrayOfNumbers[m] + ' ' + 'hundred' + ' ' + arrayOfNumbers[p];
                                }
                            }
                        }
                        if (array[1] === '0') {
                            for (g in arrayOfNumbers) {
                                if (r === m) {
                                    return arrayOfNumbers[m] + ' ' + 'hundred' + ' ' + arrayOfNumbers[g];
                                }
                            }
                        }
                        for (w in secondArray) {
                            if (p === w) {
                                for (t in arrayOfNumbers) {
                                    if (r === '0') {
                                        return arrayOfNumbers[m] + ' ' + 'hundred' + ' ' + secondArray[w];
                                    } else if (t === r) {
                                        return arrayOfNumbers[m] + ' ' + 'hundred' + ' ' + secondArray[w] + ' ' + arrayOfNumbers[t];
                                    } else if (array[1] === '0') {
                                        for (g in arrayOfNumbers) {
                                            if (r === g) {
                                                return arrayOfNumbers[m] + ' ' + 'hundred' + ' ' + arrayOfNumbers[g];
                                            }
                                        }
                                    }
                                }
                            }
                            for (k in arrayOfNumbers) {
                                if (res === k) {
                                    return arrayOfNumbers[m] + ' ' + 'hundred' + ' ' + arrayOfNumbers[k];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

