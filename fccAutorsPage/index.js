const authorContainer = document.querySelector('#author-container');
const btnLoadMore = document.querySelector('#load-more-btn');

const url = 'https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json';

let startingIndex = 0;
let endingIndex = 8;

let dataArr = [];


fetch(url)
    .then(res => res.json())
    .then(data => {
        dataArr = data;
        displayAuthors(data.slice(startingIndex,endingIndex))
    })
    .catch(err => 
        authorContainer.innerHTML += `
        <p class="error-msg">There was an error loading the authors</p>`
    );

    
 function displayAuthors(authors){
    authors.forEach(({author,image,bio,url},index) => {
        authorContainer.innerHTML += `
        <div id="${index}" class="user-card">
      <h2 class="author-name">${author}</h2>
      <img class="user-img" src="${image}" alt="${author} avatar">
      <div class="purple-divider"></div>
      <p class="bio">${bio.length > 50 ? bio.slice(0, 50) + '...' : bio}</p>
      <a class="author-link" href="${url}" target="_blank">${author} author page</a>
    </div>
  `;
    });
 }   


 btnLoadMore.addEventListener('click',showMoreAuthors);


 function showMoreAuthors(){
    startingIndex += 8;
    endingIndex += 8;

    if(endingIndex >=  dataArr.length){
         btnLoadMore.disabled = true;   
         btnLoadMore.textContent = 'No more data to load';
    }

    displayAuthors(dataArr.slice(startingIndex,endingIndex));
 }