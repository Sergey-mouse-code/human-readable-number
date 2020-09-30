module.exports = function toReadable(readableNumber) {
    let readStr = readableNumber + '';
    let readbleResult = '';
    const digits = {
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
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }
    if (readableNumber <= 20) {
        if (digits[readableNumber + ''] !== undefined) readbleResult += digits[readableNumber + ''];
    }
    if (readableNumber > 20 && readableNumber < 100) {
        if (readStr[1] === '0') { readbleResult += digits[readStr[0] + '0'] } else { readbleResult += digits[readStr[0] + '0'] + ' ' + digits[readStr[1]]; }
    }

    if (readableNumber >= 100 && readableNumber < 1000) {
        if (readStr[1] === '0' && readStr[2] === '0') {
            readbleResult += digits[readStr[0]] + ' hundred';

        } else
        if (readStr[1] === '0') { readbleResult += digits[readStr[0]] + ' hundred ' + digits[readStr[2]]; } else
        if (readStr[1] === '1') { readbleResult += digits[readStr[0]] + ' hundred ' + digits[readStr[1] + readStr[2]]; } else if (readStr[2] === '0') {
            readbleResult += digits[readStr[0]] + ' hundred ' + digits[readStr[1] + '0'];
        } else {
            readbleResult += digits[readStr[0]] + ' hundred ' + digits[readStr[1] + '0'] + ' ' +
                digits[readStr[2]];
        }

    }
    return readbleResult;
}