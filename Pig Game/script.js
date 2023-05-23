'use strict';

let [
  playerOneCurrent,
  playerOneTotal,
  playerTwoCurrent,
  playerTwoTotal,
  playerOneValue,
  playerTwoValue,
] = [0, 0, 0, 0, 0, 0];
let playerOneTurn = true;

document.querySelector('.btn--roll').addEventListener('click', function () {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  document
    .querySelector('.dice')
    .setAttribute('src', `dice-${randomNumber}.png`);

  if (randomNumber == 1) {
    playerOneTurn = !playerOneTurn;
    [playerOneCurrent, playerTwoCurrent] = [0, 0];
    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#current--1').textContent = 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
  } else if (playerOneTurn) {
    playerOneCurrent += randomNumber;
    document.querySelector('#current--0').textContent = playerOneCurrent;
  } else {
    playerTwoCurrent += randomNumber;
    document.querySelector('#current--1').textContent = playerTwoCurrent;
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  playerOneTurn = !playerOneTurn;
  playerOneValue += playerOneCurrent;
  playerTwoValue += playerTwoCurrent;
  document.querySelector('#score--0').textContent = playerOneValue;
  document.querySelector('#score--1').textContent = playerTwoValue;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  [playerOneCurrent, playerTwoCurrent] = [0, 0];

  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');

  if (playerOneValue >= 50) {
    document.querySelector('.player--0').classList.add('player--winner');
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
  }

  if (playerTwoValue >= 50) {
    document.querySelector('.player--1').classList.add('player--winner');
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
  }
});

document.querySelector('.btn--new').addEventListener('click', function () {
  [
    playerOneCurrent,
    playerOneTotal,
    playerTwoCurrent,
    playerTwoTotal,
    playerOneValue,
    playerTwoValue,
  ] = [0, 0, 0, 0, 0, 0];
  playerOneTurn = true;
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  document.querySelector('#score--0').textContent = playerOneValue;
  document.querySelector('#score--1').textContent = playerTwoValue;
});
