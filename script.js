document.addEventListener("DOMContentLoaded", () => {
    // Add mouseover event listener to elements with class "word"
    const links = document.querySelectorAll(".word");
    links.forEach((link) => {
        link.addEventListener('mouseover', shuffleanimation);
    });

    // Add mouseover event listener to elements with class "logo"
    const logos = document.querySelectorAll(".logo");
    logos.forEach((logo) => {
        logo.addEventListener('mouseover', shuffleanimation);
    });

    // Add mouseover event listener to elements with class "login-btn"
    const logins = document.querySelectorAll(".login-btn");
    logins.forEach((login) => {
        login.addEventListener('mouseover', shuffleanimation);
    });

    // Function to generate a random character
    function randomchar() {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        return chars[Math.floor(Math.random() * chars.length)];
    }
    
    // Function to shuffle the text content of an element
    function shuffleanimation(event) {
        const target = event.currentTarget;
        if (target.dataset.animating) {
            return;
        }
        target.dataset.animating = true;

        const originalText = target.textContent;
        let shuffles = 0;
        const maxShuffles = 10;
        const intervalDuration = 500 / maxShuffles;

        // Interval to change the text content at regular intervals
        let animationInterval = setInterval(() => {
            if (shuffles >= maxShuffles) {
                clearInterval(animationInterval);
                target.textContent = originalText;
                delete target.dataset.animating;
            } else {
                let shuffledText = "";
                for (let i = 0; i < originalText.length; i++) {
                    shuffledText += randomchar();
                }
                target.textContent = shuffledText;
                shuffles++;
            }
        }, intervalDuration);
    }
    
    // Function to generate a random position within the window
    function getRandomPosition() {
        var x = window.innerWidth - 100;
        var y = window.innerHeight - 100;
        var randomX = Math.floor(Math.random() * x);
        var randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }

    // Function to create and animate the "RAPUP" element
    function createRapup() {
        var rapupElement = document.createElement('div');
        rapupElement.textContent = 'RAPUP';
        rapupElement.classList.add('rapup');
        
        var [randomX, randomY] = getRandomPosition();
        rapupElement.style.left = randomX + 'px';
        rapupElement.style.top = randomY + 'px';
        
        document.body.appendChild(rapupElement);
        
        var duration = Math.random() * 4000 + 2000;
        setTimeout(function() {
            rapupElement.remove();
        }, duration);
    }

    // Function to repeatedly create "RAPUP" elements at intervals
    function generateRandomRapup() {
        setInterval(createRapup, 1500);
    }

    generateRandomRapup();
    
