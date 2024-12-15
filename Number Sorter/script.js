const sortButton = document.querySelector('#sort');

sortButton.addEventListener('click',sortNumbers);

function sortNumbers(e){
    e.preventDefault();
    const valuesArr = [...document.getElementsByClassName('values-dropdown')]
    .map(select =>Number(select.value));

    updateUI(valuesArr.sort((a,b) => a - b));
   
    
    
}


function updateUI(array){
    array.forEach((val,i) => {
        document.querySelector(`#output-value-${i}`)
            .textContent = val;
    })
}