/* console.log('test')

var audio = new Audio('./musica.mp3');
audio.play();
 */
console.log('test');

var audio = new Audio('musica.mp3');

// Function to play audio when triggered by user interaction
function playAudio() {
    audio.play()
        .then(() => {
            // Playback started successfully
            console.log('Audio playback started');
        })
        .catch(error => {
            // Playback failed
            console.error('Failed to start audio playback:', error);
        });
}

// Trigger audio playback on a user interaction, such as a click event
document.addEventListener('scroll', playAudio);
