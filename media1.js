const Title = document.querySelector('.title');
const Artist = document.querySelector('.artist');
const image = document.querySelector('.image');
const audio1 = document.querySelector('.audio');
const prevBtn = document.querySelector('#back-btn');
const playBtn = document.querySelector('#play-btn');
const nextBtn = document.querySelector('#forw-btn');

const songs = [
    {
        song: "song1",
        pic : "pic1",
        title: "Not Afraid",
        artist: "Eminem",
    },

    {
        song: "song2",
        pic : "pic2",
        title: "Bank Account",
        artist: "21 savage",
    },

    {
        song: "song3",
        pic : "pic3",
        title: "Faded",
        artist: "Alan walker",
    },
];

let isPlaying = false;

function playMusic() {
    isPlaying = true;
    image.classList.add('anime');
    playBtn.classList.replace('fa-play', 'fa-pause');
    audio1.play();
}

function pauseMusic() {
    isPlaying = false;
    image.classList.remove('anime');
    playBtn.classList.replace('fa-pause', 'fa-play');
    audio1.pause();
}

playBtn.addEventListener('click', () => {
    if(!isPlaying) {
        playMusic();
    }
    else if(isPlaying) {
        pauseMusic()
    }
});

function loadSong(songs) {
    Title.innerText = songs.title;
    Artist.innerText = songs.artist;
    audio1.src = `${songs.song}.mp3`;
    image.src  = `${songs.pic}.jpg`;
}

let songIndex = 0;

loadSong(songs[0]);

function nextTrack() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    pauseMusic(); 
}

nextBtn.addEventListener('click', nextTrack);

function prevTrack() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    pauseMusic();
}

prevBtn.addEventListener('click', prevTrack);
