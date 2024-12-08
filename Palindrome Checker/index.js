const textInput = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const resultDiv = document.querySelector("#result");

checkButton.addEventListener("click", checkWord);

function checkWord() {
  const text = textInput.value;

  if (!text) {
    window.alert("Please input a value");
    return;
  }

  const isPalindrome = checkIsPalindrome(text.toLowerCase());

  if (isPalindrome) {
    resultDiv.textContent = `${text} is a palindrome`;
  } else [(resultDiv.textContent = `${text} is not a palindrome`)];
}

function checkIsPalindrome(string) {
  const regEx = /[\_+\W\s+]/g;
  const firstText = string.replaceAll(regEx, "").trim();

 
  if (firstText.length === 1) {
    return true;
  }


  const secondText = firstText.split('').reverse().join('');

  if(firstText === secondText){
    return true;
  }else{
    return false;
  }

}
