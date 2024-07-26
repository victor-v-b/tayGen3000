
document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition / pageHeight > 0.2) {
        insertRandomContent();
        insertRandomContent();
        insertRandomContent();
    }
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function insertRandomContent() {
    fetch('/generate_text')
        .then(response => response.json())
        .then(data => {
            const container = document.createElement('div');
            container.classList.add('content');

            const contentType = (Math.random() * 2);

            if (contentType < 0.5) {
                container.textContent = data.generated_text;
            } else {
                const img = document.createElement('img');
                img.src = 'https://thispersondoesnotexist.com/';
                img.style.width = getRandomInt(50, 300) + 'px';
                img.style.height = getRandomInt(50, 300) + 'px';
                const text = document.createElement('p');
                text.textContent = data.generated_text;
                container.appendChild(img);
                container.appendChild(text);
            }

            document.body.appendChild(container);

            // Remove event listener to prevent infinite addition of content
            document.removeEventListener('scroll', onScroll);
        })
        .catch(error => {
            console.error('Error fetching generated text:', error);
        });
}
