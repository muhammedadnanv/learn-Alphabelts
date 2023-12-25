   // Sample data for letters and words
        const data = {
            letters: ['A', 'B', 'C', 'D', 'E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
            words: {
                'A': ['Apple', 'Ant', 'Airplane'],
                'B': ['Banana', 'Ball', 'Bear'],
                'C': ['Car', 'Cat', 'Cloud'],
                'D': ['Dog', 'Duck', 'Diamond'],
                'E': ['Elephant', 'Eagle', 'Egg'],
                'F': ['Father', 'Fork', 'Future'],
                'G': ['Gaana', 'Game', 'Goat'],
                'H': ['Happy', 'Hope', 'Horror'],
                'I': ['Ice Cream', 'ideas', 'information'],
                'J': [' jump', 'journey', 'Joyful'],
                'K': ['Kindhearted', 'kittens', 'Kaleidoscopic'],
                'L': ['Luminous', 'Lavender', 'Laughter'],
                'M': ['Majestic', 'Mountains', 'Moonlight'],
                'N': ['Nimble', 'Nautical', 'Nurturing'],
                'O': ['Oceanic', 'Opulent', 'Outstanding'],
                'P': ['Playful', 'pandas', 'party'],
                'Q': [' Quilted', ' Quest', 'Quivering'],
                'R':['Rainbow','Rustic','River'],
                'S':['Star','Storyteller','Sunsets'],
                'T':['Tranquil','Twinkling','Towering'],
                'U':['unicorn','Uplifting','Underwater'],
                'V':['Vibrant','Voyage','Venture'],
                'W':['Watermelon','Wanderlust','Wildlife'],
                'X':['Xenon','Xylem','Xylophone'],
                'Y':['Yellow','Yoga','Yarn'],
                'Z':['Zebra','Zenith','Zucchini']

            }
        };

        // Function to create letter buttons dynamically
        function createLetterButtons() {
            const lettersContainer = document.getElementById('letters-container');

            data.letters.forEach(letter => {
                const letterButton = document.createElement('div');
                letterButton.classList.add('letter');
                letterButton.textContent = letter;
                letterButton.addEventListener('click', () => showWords(letter));
                lettersContainer.appendChild(letterButton);
            });
        }

        // Function to show words for a selected letter
        function showWords(letter) {
            const wordsContainer = document.getElementById('words-container');
            wordsContainer.innerHTML = '';

            if (data.words[letter]) {
                data.words[letter].forEach(word => {
                    const wordElement = document.createElement('div');
                    wordElement.classList.add('word');
                    wordElement.textContent = word;
                    wordsContainer.appendChild(wordElement);
                });
            }
        }

        // Initialize the application
        createLetterButtons();
