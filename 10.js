function getSimpleNumberStatus (num) {
    if (num <= 1000 && num !== 0 && num !== 1) {
        d = num-1;
        while (d > 1){
            if ((num % d) == 0) return `${num} не простое число`;
            d--;
        }
        return `${num} простое число`;
    }
    else {
        if (num == 1) {
            return '1 не простое число';
        }
        if (num == 0) {
            return '0 не простое число';
        }
        return 'Введите число меньше 1000 и больше 1';
    }
}

console.log(getSimpleNumberStatus(997));
//алгоритм нахождения взят от сюда: https://coderoad.ru/17389350/%D0%9F%D1%80%D0%BE%D1%81%D1%82%D1%8B%D0%B5-%D0%A7%D0%B8%D1%81%D0%BB%D0%B0-JavaScript
//выборочно тестировал на последовательности: https://oeis.org/A000040/b000040.txt