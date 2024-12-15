const searchText = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const inputImageDiv = document.querySelector('#input-image-div');

const [nameTd,idTd,weigthId,heigthId,typesTd,hpTd,attackTd,defenseTd,specialAttackTd,specialDefenceTd,speedTd] = document.querySelectorAll('tr :nth-child(2)');




searchButton.addEventListener('click',searchPokemon);


async function searchPokemon(){
    clearTypes(typesTd)
    inputImageDiv.innerHTML = "";
    let nameOrId = searchText.value;

    
    if(isNaN(Number(nameOrId))){
        nameOrId = nameOrId.toLowerCase();
    }

    


    const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${nameOrId}`;

    try{
    const res = await fetch(url);
    const data = await res.json();

    
    
    
    const {id , height , name, weight , types , stats , sprites , order } = data;


    nameTd.textContent = name;
    idTd.textContent = id;
    heigthId.textContent = height;
    weigthId.textContent = weight;

    const { front_default } = sprites;

    const img = document.createElement('img');
    img.src = front_default;
    img.id= 'sprite';

    inputImageDiv.appendChild(img);


    displayALLTypes(types,typesTd);


    displayStats(stats);


  

    }catch(err){
        alert("Pokémon not found");
    }

}





    


function displayStats(stats){
    stats.forEach(obj => {
        const value = obj.base_stat;
        const id = obj.stat.name;
        const element = document.querySelector(`#${id}`);
        element.textContent = value;
    });
}


function displayALLTypes(arr,element){
    arr.forEach(obj => {
        const value = obj.type.name;
        const p = document.createElement('p');
        p.textContent = value.toUpperCase();
        element.appendChild(p);
    })
}


function clearTypes(element){
   element.innerHTML = "";
}

