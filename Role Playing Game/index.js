const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');

const divMonsterStats = document.querySelector('#monsterStats');
const monsterHealthText = document.querySelector('#monsterHealth');
const monsterNameText = document.querySelector('#monsterName');

const text = document.querySelector('#text');

let health = 100;
let xp = 0;
let gold = 50;
const inventory = [];
let currentWeaponIndex = 0;

const weapons = [
    {
        name:"Stick",damage:15
    },
    {
        name:'Hammer', damage:35
    },
    {
        name:'Blade',level:60
    },
]


const monsters = {
    "Slime":{ health: 150 , damage:30 },
    "Fanged Beast":{health : 300 , damage:60},
    "Dragon":{health: 500 , damage: 100}
}
  


const locations = [
    {
        name:'Start',
        "button-texts":["Go to store","Go to Cave","Fight Dragon"],
        "button-functions":[goToStore,goToCave, figthDragon],
        text:"Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above."
    }
    ,
    {
        name:'Town Square',
        "button-texts":["Go to store","Go to Cave","Fight Dragon"],
        "button-functions":[goToStore,goToCave, figthDragon],
        text:"You are in the town square."

    },
    {
        name:"Store",
        "button-texts":["Buy 10 health(10 gold)","Buy weapon (30 gold)","Go to town square"],
        "button-functions":[buyHealth,buyWeapon, goTownSquare],
        text:"You enter the store."
    },
    {
        name:"Cave",
        "button-texts":["Fight slime","Fight fanged beast","Go to town square"],
        "button-functions":[figthSlime,fightFangedBeast,goTownSquare],
        text:"You enter the cave. You see some monsters."   
    },
    {
        name:"Fight Dragon",
        "button-texts":["Attack","Dodge","Run"],
        "button-functions":[attack,dodge,goTownSquare],
        stats:["Dragon",monsters.Dragon.health],
        text:"You are fighting a Dragon."
    },
    {
        name:"Fight Slime",
        "button-texts":["Attack","Dodge","Run"],
        "button-functions":[attack,dodge,goTownSquare],
        stats:["Slime",monsters.Slime.health],
        text:"You are fighting a Slime monster."
    },
    {
        name:"Fight Fanged Beast",
        "button-texts":["Attack","Dodge","Run"],
        "button-functions":[attack,dodge,goTownSquare],
        stats:["Fanged Beast",monsters["Fanged Beast"].health],
        text:"You are fighting a Fanged Beast monster."
    }
];


function update(obj){
    button1.textContent = obj["button-texts"][0];
    button2.textContent = obj["button-texts"][1];
    button3.textContent = obj["button-texts"][2];

    button1.onclick = obj["button-functions"][0];
    button2.onclick = obj["button-functions"][1];
    button3.onclick = obj["button-functions"][2];
    text.textContent = obj.text;

    if(obj.hasOwnProperty("stats")){
        monsterNameText.textContent = obj.stats[0]
        monsterHealthText.textContent = obj.stats[1];
    }
}


startGame();


function attack(){
    let currentMonster = monsterNameText.textContent;

    if(inventory.length === 0){
        text.textContent = 'You should have a weapon to figth!';
        return
    }

    monsters[currentMonster].health -= weapons[currentWeaponIndex].damage;
    health -= monsters[currentMonster].damage;

    if(health <= 0){
        healthText.textContent = 0;
        text.textContent = 'You lost ! \n Try again!';
        let result = confirm('You die !!!!! Do you want to try again?');

    }

    if(monsters[currentMonster].health <= 0){
        monsterHealthText.textContent = 0;
        text.textContent = 'You won against monster! \n Congartulations!';
        gold += 30;
        xp += 2000;
    }

    monsterHealthText.textContent = monsters[currentMonster].health;
    healthText.textContent = health;
    goldText.textContent = gold;
    xpText.textContent = xp




}

function dodge(){


}


function figthSlime(){
    divMonsterStats.style.display = 'block';
    update(locations[5]);
}

function fightFangedBeast(){
    divMonsterStats.style.display = 'block';
    update(locations[6]);
}



function buyHealth(){
    if(gold >= 10){
        health += 10;
        gold -= 10;
        healthText.textContent = health;
        goldText.textContent = gold;
        text.textContent = "You bought 10 health!";
    }else{
        text.textContent = "You can't buy a health!"
    }   
}


function buyWeapon(){
    if(gold >= 30){
        currentWeaponIndex === 0 ? currentWeaponIndex : currentWeaponIndex++;
        inventory.push(weapons[currentWeaponIndex].name);
        gold -= 30;
        goldText.textContent = gold;
        text.textContent = 'Current Inventory ' + inventory.join(', ');
    }else{
        text.textContent = 'You don\'t have gold to buy weapon!';
    }
}



function goToCave(){
    update(locations[3])
}

function figthDragon(){
    divMonsterStats.style.display = 'block';
    update(locations[4])

}


function goToStore(){
    if(gold === 0){
        text.textContent = 'You can\'t go to store! \n You don\'t have a gold!';
        return;
    }
    update(locations[2]);
}


function goTownSquare(){
    divMonsterStats.style.display = 'none';
    update(locations[1])
}


function startGame(){
    xpText.textContent = xp;
    healthText.textContent = health;
    goldText.textContent = gold;
    update(locations[0]);
}


function restart(){
    xp = 0;
    health = 100;
    gold = 50
    divMonsterStats.style.display = 'none';
    startGame();
}