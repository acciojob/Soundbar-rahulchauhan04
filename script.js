// script.js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    const audioContainer = document.getElementById('audio-container');
    let currentAudio = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sound = button.getAttribute('data-sound');
            if (sound) {
                playSound(sound);
            } else {
                stopSound();
            }
        });
    });

    function playSound(sound) {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        let audioElement = document.getElementById(`audio-${sound}`);
        if (!audioElement) {
            audioElement = document.createElement('audio');
            audioElement.id = `audio-${sound}`;
            audioElement.src = `./sounds/${sound}.mp3`;
            audioContainer.appendChild(audioElement);
        }

        currentAudio = audioElement;
        currentAudio.play();
    }

    function stopSound() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }
});
