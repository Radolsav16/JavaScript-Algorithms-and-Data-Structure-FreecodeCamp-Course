import { data } from "./data.js";

const playButton = document.querySelector("#play");
const playList = document.querySelector("#playlist-songs");

const userData = {
  currentSongs: [...data],
};

render(sortedMusic(data), playList);
attachEvents();

function playSong(e) {
  const id = e.target.id;

  const audio = new Audio();

  audio.src = data[id].src;
  audio.title = data[id].title;

  audio.currentTime = 0;

  audio.play();
}

playButton.addEventListener("click", () => playSong(0));

function sortedMusic(arr) {
  return arr.sort((a, b) => a.title.localeCompare(b.title));
}

function render(arr, domElement) {
  const playListHTML = arr
    .map(
      (song) => ` 
      <li id="song-${song.id}" class="playlist-song">
      <button class="playlist-song-info" id="${song.id}">
          <span class="playlist-song-title" id="${song.id}">${song.title}</span>
          <span class="playlist-song-artist" id="${song.id}">${song.artist}</span>
          <span class="playlist-song-duration" id="${song.id}">${song.duration}</span>
      </button>
      <button class="playlist-song-delete" aria-label="Delete ${song.title}" id="${song.id}">
          <svg width="20" id="${song.id}" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62" id="${song.id}" />
          <path fill-rule="evenodd" id="${song.id}" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
        </button>
      </li>
      `
    )
    .join("");

  domElement.innerHTML = playListHTML;
}

function deleteSong(e) {
  const id = Number(e.target.id);

  const filterSong = userData.currentSongs.filter((song) => song.id !== id);

  userData.currentSongs = filterSong;

  render(sortedMusic(userData.currentSongs), playList);
  attachEvents();
}

function attachEvents() {
  const buttonsPlay = document.querySelectorAll(".playlist-song-info");
  buttonsPlay.forEach((button) => button.addEventListener("click", playSong));

  const deleteButtons = document.querySelectorAll(".playlist-song-delete");
  deleteButtons.forEach((button) =>
    button.addEventListener("click", deleteSong)
  );
}
