const formCalorieCounter = document.querySelector('form');
const buttonAddEntry = document.querySelector('#add-entry');
const budgetInput = document.querySelector('#budget');
buttonAddEntry.addEventListener('click',addEntry);
const buttonClear = document.querySelector('#clear');

buttonClear.addEventListener('click',clear);

const output = document.querySelector('#output');




formCalorieCounter.addEventListener('submit',calculateRemainingCalories);



function calculateRemainingCalories(e){
    e.preventDefault();
    const inputs = Array.from(document.querySelectorAll('div > input[type="number"]'));
    
    const {eatenCalories , burnedCalories} = calculateCalories(inputs);

    const budgetCalories = Number(budgetInput.value);
    
    
    const isSurplusOrDeficit = (budgetCalories - eatenCalories + burnedCalories) > 0 ? "Deficit":"Surplus";
    let remainingCalories = 0;

    if(isSurplusOrDeficit === 'Deficit'){
        remainingCalories = budgetCalories - eatenCalories + burnedCalories;
    }
    

    outputGenerate(isSurplusOrDeficit,remainingCalories,budgetCalories,eatenCalories,burnedCalories);

    
    
   
}


function addEntry(){
    const entryDropDown = document.querySelector('#entry-dropdown');
    const entry = entryDropDown.value;
    const divContainer = document.querySelector(`#${entry} > div[class="input-container"]`);
    let entryNumber = divContainer.querySelectorAll('input[type="text"]').length;
    const entryHTML = `
     <label for="${entry}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entry}-${entryNumber}-name" placeholder="Name" />
  <label for="${entry}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input
    type="number"
    min="0"
    id="${entry}-${entryNumber}-calories"
    placeholder="Calories"
  />`;


  divContainer.insertAdjacentHTML('beforeend',entryHTML);


    
}


function calculateCalories(list){
    let caloriesData = {
        eatenCalories:0,
        burnedCalories:0
    }
    for (const item of list) {
        if(!item.id.includes('exercise')){
           caloriesData.eatenCalories += Number(item.value)
        }else{
            caloriesData.burnedCalories += Number(item.value);
        }
    }

    return caloriesData;
}



function outputGenerate(surplusOrDeficit,remainingCalories,budgetCalories,consumedCalories,exerciseCalories){
    output.innerHTML = ` <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
  <hr>
  <p>${budgetCalories} Calories Budgeted</p>
  <p>${consumedCalories} Calories Consumed</p>
  <p>${exerciseCalories} Calories Burned</p>
  `;

  output.classList.remove('hide');
}



function clear(){
    budgetInput.value = '';
    output.innerHTML = ``;
    document.querySelectorAll('.input-container').forEach(div => div.innerHTML = '');

}