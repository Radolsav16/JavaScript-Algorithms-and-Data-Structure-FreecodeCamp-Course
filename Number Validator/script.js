const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

const resultDiv = document.getElementById('results-div');

checkBtn.addEventListener('click',checkUserInput)
clearBtn.addEventListener('click',clearResults)

function checkUserInput(){
    const value = userInput.value;
    const regex = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/gm;
    if(!value){
        alert("Please provide a phone number");
        return;
    }

    const isValid =  regex.test(value);

    if(isValid){
        resultDiv.textContent += `Valid US number: ${value}` + '\n';
    }else{
        resultDiv.textContent += `Invalid US number: ${value}` + '\n'
    }


}


function clearResults(){
    resultDiv.textContent = "";
}
