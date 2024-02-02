window.onload = function() {
    const list = document.getElementById('Top5');
    const inp = document.getElementById('inp');
    const btn = document.getElementById('btn');
    list.innerHTML = '';

    const myHistory = [];
    const MAX_HISTORY = 5;

    btn.onclick = () => {
        // we will only allow a term to be entered if the search input isn't empty
        if (inp.value !== '') {
            const searchTerm = inp.value.trim();

            // Add the new search term to the beginning of the history array
            myHistory.unshift(searchTerm);

            // Remove duplicates from the history array
            const uniqueHistory = [...new Set(myHistory)];

            // Keep only the first MAX_HISTORY items in the history array
            const myHistoryCopy = uniqueHistory.slice(0, MAX_HISTORY);

            // Empty the list so that we don't display duplicate entries
            list.innerHTML = '';

            // Loop through the sorted array and display all the search terms in the list
            for (const itemText of myHistoryCopy) {
                const li = document.createElement('li');
                li.textContent = itemText;
                list.appendChild(li);
            }

            // If the array length is 5 or more, remove the oldest search term
            if (myHistory.length > MAX_HISTORY) {
                myHistory.pop(); // Remove the last item from the array
            }

            // Empty the search input and focus it, ready for the next term to be entered
            inp.value = '';
            inp.focus();
        }
    };
};
