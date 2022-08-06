let Title = document.querySelector('.title')
let Artist = document.querySelector('.artist')
let myImage = document.querySelector('.image')
let myAudio = document.querySelector('.audio')
let playBtn = document.getElementById('play-btn')
let prevBtn = document.getElementById('back-btn')
let forwBtn = document.getElementById('forw-btn')
let muteBtn = document.getElementById('mute-btn')
let replayBtn = document.getElementById('replay-btn')
let fastForw = document.getElementById('fast-forward')
let fastBackw = document.getElementById('fast-backward')
let switchBtn = document.querySelector('.switch')
let darkText = document.querySelector('.dark');

let Songs = [
    {
        title: 'Eminem',
        artist: 'Not Arfaid',
        song: 'song1',
        image: 'pic1'
    },

    {
        title: 'Bank Account',
        artist: '21 Savage',
        song: 'song2',
        image: 'pic2'
    },

    {
        title: 'Faded',
        artist: 'Alan Walker',
        song: 'song3',
        image: 'pic3'
    },
]

let isPlaying = false;

function playMusic() {
    isPlaying = true;
    myAudio.play();
    playBtn.classList.replace('fa-play', 'fa-pause');
    myImage.classList.add('anime')
}

function pauseMusic() {
    isPlaying = false;
    myAudio.pause();
    playBtn.classList.replace('fa-pause', 'fa-play');
    myImage.classList.remove('anime')
}

playBtn.addEventListener('click', () => {
    if(isPlaying) {
        pauseMusic()
    }
    else {
        playMusic()
    }
})


function loadSong(song) {
    Title.innerText = song.title;
    Artist.innerText = song.artist;
    myImage.src = `${song.image}.jpg`;
    myAudio.src = `${song.song}.mp3`;
}

let songIndex = 0;

loadSong(Songs[0]);

forwBtn.addEventListener('click', nextTrack);

function nextTrack() {
    songIndex = (songIndex + 1) % Songs.length;
    loadSong(Songs[songIndex]);
    pauseMusic();
}

prevBtn.addEventListener('click', prevTrack)

function prevTrack() {
    songIndex = (songIndex - 1 + Songs.length) % Songs.length;
    loadSong(Songs[songIndex])
    pauseMusic()
}

let Muted = false;
   
function MuteSong() {
    Muted = false;
    myAudio.muted = true;
    muteBtn.classList.add('cross')
}

function unMuteSong() {
    Muted = true;
    myAudio.muted = false;
    muteBtn.classList.remove('cross');
}

muteBtn.addEventListener('click', () => {
    if(Muted) {
        MuteSong()
    }
    else {
        unMuteSong()
    }
})

replayBtn.addEventListener('click', () => {
    myAudio.currentTime = 0;
    pauseMusic()
})


fastForw.addEventListener('click', () => {
    myAudio.currentTime += 10.0
})

fastBackw.addEventListener('click', () => {
   myAudio.currentTime -= 10.0;
})

myAudio.addEventListener('ended', () => {
    pauseMusic()
})

let trueBtn = false;
let music_container = document.querySelector('.music_container')

function darkMode() {
    trueBtn = true;
    music_container.style.backgroundColor = 'black'
    music_container.style.border = '1px solid white'
    Title.style.color = 'white';
    Artist.style.color = 'white';
    muteBtn.style.color = 'white';
    replayBtn.style.color = 'white';
    fastForw.style.color = 'white';
    fastBackw.style.color = 'white';
    prevBtn.style.color = 'white';
    forwBtn.style.color = 'white';
    playBtn.style.backgroundColor = 'white'
    darkText.style.color = 'white'
    darkText.innerText = 'Light Mode';
}

function lightMode() {
    trueBtn = false
    music_container.style.backgroundColor = 'rgb(38, 119, 167)'
    music_container.style.border = '1px solid grey'
    Title.style.color = 'black'
    Artist.style.color = 'black'
    muteBtn.style.color = 'black';
    replayBtn.style.color = 'black';
    fastForw.style.color = 'black';
    fastBackw.style.color = 'black';
    prevBtn.style.color = 'black';
    forwBtn.style.color = 'black';
    playBtn.style.backgroundColor = 'black'
    darkText.innerText = 'Dark Mode'
}

switchBtn.addEventListener('click', () => {
    if(trueBtn) {
        lightMode()
    }

    else {
        darkMode()
    }
})


















