/* Function to set volume */
function setVolume() {
    const audio = document.getElementById('audio');
    const volume = document.getElementById('volume-slider').value;
    audio.volume = volume / 100;
}

/* Function to stop audio with SPACE key */
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        const audio = document.getElementById('audio');
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0;
        }
    }
});

/* On window load, set initial volume and play audio */
window.onload = function() {
    const audio = document.getElementById('audio');
    setVolume();
    audio.play();
};