//your JS code here. If required.
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
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
        currentAudio = new Audio(`./sounds/${sound}.mp3`);
        currentAudio.play();
    }

    function stopSound() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }
});
