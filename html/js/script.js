function playAudio() {
    const audio = document.getElementById('audio');
    audio.play();
    document.getElementById('play-btn').style.display = 'none';
    document.getElementById('pause-btn').style.display = 'inline-block';
    document.getElementById('stop-btn').style.display = 'inline-block';
}

function pauseAudio() {
    const audio = document.getElementById('audio');
    audio.pause();
    document.getElementById('play-btn').style.display = 'inline-block';
    document.getElementById('pause-btn').style.display = 'none';
}

function stopAudio() {
    const audio = document.getElementById('audio');
    audio.pause();
    audio.currentTime = 0;
    document.getElementById('play-btn').style.display = 'inline-block';
    document.getElementById('pause-btn').style.display = 'none';
    document.getElementById('stop-btn').style.display = 'none';
}

function setVolume() {
    const audio = document.getElementById('audio');
    const volume = document.getElementById('volume-slider').value;
    audio.volume = volume / 100;
}

window.onload = function() {
    document.getElementById('pause-btn').style.display = 'none';
    document.getElementById('stop-btn').style.display = 'none';
};