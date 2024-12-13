const inputElement = document.querySelector('#number-input');
const buttonConvert = document.querySelector('#convert-btn');
const output = document.querySelector('#result');


buttonConvert.addEventListener('click',displayBinary);

function displayBinary(){
    const number = parseInt(inputElement.value);

    if(number < 0 || isNaN(number)){
        alert('Please fill corect number!');
        return;
    }

    const binary = convertNumber(number);

    output.textContent = binary;
}


function convertNumber(number){
    if(number === 0 || number === 1){
        return String(number);
    }else{
        return convertNumber(Math.floor(number / 2)) + (number % 2);
    }

}
