function getEvenAndUnevenElem() {
    
    let arr = [0, 2, 3, 4, 5, 0, 7, '4', 'asd'];
    let countEven = 0, countUneven = 0;

    arr.forEach(function(item, index, array) {
        if (typeof(item) === "number" && isNaN(item) === false) {
        if(item === 0){
            console.log(`${index} элемент массива равен нулю`);
        } else {
            if (item % 2) {
            //console.log("Нечетное");
            countUneven++;
            
            } else {
                //console.log("Четное");
                countEven++;
            }
        }
        } else {
            console.log(`${index} элемент массива не число`);
        }
    });

    console.log(`Количество четных чисел: ${countEven}, количество нечетных: ${countUneven}`);
}

getEvenAndUnevenElem();