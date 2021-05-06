let x = 'true + 12' * 1;

let typeX = typeof(x);

switch(typeX) {
    case "number":
    isNaN(x) ? console.log('X - это NaN') : console.log(x + ' - это число');
    break;
    
    case "string":
    console.log(x + ' - это строка');
    break;
    
    case "boolean":
    console.log(x + ' - это логический тип');
    break;
    
    default:
    console.log('Тип x не определён');
    break;   
}