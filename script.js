document.addEventListener('DOMContentLoaded', function() {
    let dictionary = {};

    // Fetch the dictionary data from the JSON file
    fetch('dictionary.json')
        .then(response => response.json())
        .then(data => {
            dictionary = data;
        })
        .catch(error => console.error('Error loading dictionary:', error));

    document.getElementById('send').addEventListener('click', function() {
        const input = document.getElementById('input');
        const word = input.value.trim().toLowerCase();
        const messages = document.getElementById('messages');

        if (word) {
            const userMessage = document.createElement('div');
            userMessage.className = 'message user';
            userMessage.innerHTML = `<p>${word}</p>`;
            messages.appendChild(userMessage);

            const botMessage = document.createElement('div');
            botMessage.className = 'message bot';
            botMessage.innerHTML = `<p>${dictionary[word] || "Sorry, definition not found. use google insted :)"}</p>`;
            messages.appendChild(botMessage);

            input.value = '';
            messages.scrollTop = messages.scrollHeight;
        }
    });
});
