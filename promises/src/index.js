import GameSavingLoader from './js/GameSavingLoader';

GameSavingLoader.load()
  .then((saving) => {
    document.getElementById('result').textContent = JSON.stringify(saving, null, 2);
  })
  .catch((error) => {
    document.getElementById('result').textContent = error.message;
  });
