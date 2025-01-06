console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'))
let songs = [
    { songName: "Warriyo", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "cielo", filePath: "song/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "DEAF KEV", filePath: "song/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Different Heaven", filePath: "song/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Janji heroes", filePath: "song/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Walking Alone", filePath: "song/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Seven music ", filePath: "song/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Final motion", filePath: "song/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Street", filePath: "song/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Mixed feeling", filePath: "song/10.mp3", coverPath: "covers/10.jpg" },
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    console.log("Play button clicked"); // Check if this logs
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.classList.remove(xmlns="http://www.w3.org/2000/svg");
      masterPlay.classList.add( xmlns="http://www.w3.org/2000/svg" );
      gif.style.opacity=1; 

    } else {
      audioElement.pause();
      masterPlay.classList.remove(xmlns="http://www.w3.org/2000/svg");
      masterPlay.classList.add( xmlns="http://www.w3.org/2000/svg");
      gif.style.opacity=0;
    }
  });

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove(xmlns="http://www.w3.org/2000/svg");
        element.classList.add(xmlns="http://www.w3.org/2000/svg");
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove(xmlns="http://www.w3.org/2000/svg");
    e.target.classList.add(xmlns="http://www.w3.org/2000/svg");
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1; 
    masterPlay.classList.remove(xmlns="http://www.w3.org/2000/svg");
    masterPlay.classList.add(xmlns="http://www.w3.org/2000/svg");
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1; 
    masterPlay.classList.remove(xmlns="http://www.w3.org/2000/svg");
    masterPlay.classList.add(xmlns="http://www.w3.org/2000/svg");
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1; 
    masterPlay.classList.remove(xmlns="http://www.w3.org/2000/svg");
    masterPlay.classList.add(xmlns="http://www.w3.org/2000/svg");
})