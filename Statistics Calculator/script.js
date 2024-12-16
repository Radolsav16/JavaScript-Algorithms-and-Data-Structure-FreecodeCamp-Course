const form = document.querySelector('form');

form.addEventListener('submit',calculate);


function calculate(e){
    e.preventDefault();
  
    const enter = document.getElementById('numbers').value;

    const arrOfEnter = enter.split(/,\s*/g);

    const numbers = arrOfEnter.map(el => Number(el));

    const mean = getMean(numbers);
    const median = getMedian(numbers);
    const mode = getMode(numbers);
    const range = getRange(numbers);
    const variance = getVariance(numbers)
    const standardDeviation = getStandardDeviation(numbers);

    document.querySelector('#mean').textContent = mean;
    document.querySelector('#median').textContent = median;
    document.querySelector('#mode').textContent = mode;
    document.querySelector('#range').textContent = range;
    document.querySelector('#variance').textContent = variance;
    document.querySelector('#standardDeviation').textContent = standardDeviation;
  


}


function getMean(array){
    return array.reduce((acc,val) => acc + val,0) / array.length;
}


function getMedian(array){
        const sortedList = array.sort((a,b) => a - b);

        if(sortedList % 2 === 0){
            const firstNum = Math.floor(sortedList.length / 2);
            const secondNum = Math.floor(sortedList.length / 2 + 1);
            return (firstNum + secondNum) / 2;
        }

        return  Math.floor(sortedList.length / 2);

 }


function getMode(array){
    const counts = {};
    let pastKeyValue = Number.MIN_SAFE_INTEGER;
    let mostlyRepeatKey;
   
    for (const number of array) {
        if(counts[number]){
            counts[number]++;
        }else{
            counts[number] = 1;
        }
    }

    for (const key of Object.keys(counts)) {
        if(counts[key] > pastKeyValue ){
            mostlyRepeatKey = key ;
            pastKeyValue = counts[key];
            continue;
        }

        pastKeyValue = counts[key];

    }


    return mostlyRepeatKey;
    
}


function getRange(array){
    return Math.max(...array) - Math.min(...array);
}


function getVariance(array){    
    const mean = getMean(array);

   return  array.reduce((acc,val)=> {
        const diffrence = val - mean;
        const squared = diffrence ** 2;
        
        return acc + squared;
    },0) / array.length;
}



function getStandardDeviation(array){
    const variance = getVariance(array)
    return Math.sqrt(variance);
}
