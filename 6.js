let arr = ['1', '1', '1', '1', '1', '1'];
let status;

if(arr.length >= 2) {
    for(let i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        if(arr[0] === arr[i]) {
            //console.log('=');
            status = true;
        } else {
            //console.log('!=');
            status = false;
            break;
        }
    }
    console.log(status);
} else {
    console.log('В массиве мало элементов');
}