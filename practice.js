let greeting = 'This is a phrase';

let split_greeting = greeting.split(" ");

let letters = ['h','e','l','l','o'];

let join_letters = letters.join("");


function getRandomInx(myArray) {
    let max = myArray.length;
    let rad_inx = Math.floor(Math.random()*(max - 0));
    return rad_inx;
}

function getRandomItem(myArray){
    let inx= getRandomInx(myArray);
    return myArray[inx];
}

function swap_items(myArray) {
    let inx1 = getRandomInx(myArray);
    let inx2 = getRandomInx(myArray);

    let a = myArray[inx1];
    myArray[inx1] = myArray[inx2];
    myArray[inx2] = a;

    console.log(inx1);
    console.log(inx2);

}


console.log(getRandomItem(letters));
swap_items(letters);
console.log (letters)
