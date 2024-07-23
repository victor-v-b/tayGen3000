
        document.addEventListener('click', () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;

            if (scrollPosition / pageHeight > 0.7) {
                insertRandomContent();
            }
        });

        function insertRandomContent() {
            fetch('/generate_text')
                .then(response => response.json())
                .then(data => {
                    const container = document.createElement('div');
                    container.classList.add('content');
                    
                    const contentType = Math.floor(Math.random() * 3);

                    if (contentType === 0) {
                        container.textContent = data.generated_text;
                    } else if (contentType === 1) {
                        const img = document.createElement('img');
                        img.src = 'https://thispersondoesnotexist.com/';
                        container.appendChild(img);
                    } else {
                        const img = document.createElement('img');
                        img.src = 'https://thispersondoesnotexist.com/';
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
    