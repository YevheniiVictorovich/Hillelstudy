const apiUrl = 'https://api.chucknorris.io/jokes/random';

const jokeDiv = document.getElementById('joke');
const getJokeBtn = document.getElementById('getJokeBtn');

getJokeBtn.addEventListener('click', () => {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      jokeDiv.innerHTML = data.value;
    })
    .catch(error => {
      jokeDiv.innerHTML = 'Error fetching joke';
      console.error(error);
    });
});
