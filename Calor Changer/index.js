const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
  ];

const changeButton = document.querySelector('#btn');
const spanHex = document.querySelector('#bg-hex-code');


function getRandomIndex(){
    return Math.floor(Math.random() * darkColorsArr.length);
}


changeButton.addEventListener('click',changeBackRoundColor);


function changeBackRoundColor(){
    const index = getRandomIndex();
    const newHexColor = darkColorsArr[index];

    spanHex.textContent = newHexColor;
    document.body.style.backgroundColor = newHexColor;
}