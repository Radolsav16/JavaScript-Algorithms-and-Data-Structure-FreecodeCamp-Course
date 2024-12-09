const selectOption = document.querySelector('#date-options');
const pCurrentDate = document.querySelector('#current-date');

selectOption.addEventListener('change',displayData)

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();

function displayData(e){
    const format = e.target.value;
    
    switch(format){
        case 'yyyy-mm-dd':
            pCurrentDate.textContent = `${year}-${month}-${day}`;
            break;
        case 'mm-dd-yyyy-h-mm':
            pCurrentDate.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
            break;

        default : pCurrentDate.textContent = `${day}-${month}-${year}`   
    }

    
    
}