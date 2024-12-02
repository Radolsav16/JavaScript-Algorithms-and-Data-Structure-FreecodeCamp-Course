const rows = [];
const inverted = true;
const count = 8;
const character = '#';

for(let i = 1; i <= count; i++ ){
    if(inverted){
        rows.unshift(createRow(i,count))
    }else{
        rows.push(createRow(i,count))
    }
}


function createRow(rowNumber,rowCount){
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber)
}



for(const row of rows){
    console.log(row)
}

