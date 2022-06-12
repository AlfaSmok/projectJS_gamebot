'use strict';


const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const guessNumber = function() {
  const x = Math.floor(Math.random() * 100) + 1;
  console.log(x);
  let y = prompt('Угадай число от 1 до 100');

  const changeNumber = function() {
    if (y===null) {
      alert('Игра окончена');
    } else if (isNumber(y)) {
      y = +y;
      if (y === x) {
        alert('Поздравляю, Вы угадали!!!');
        return guessNumber();
      } else if (y < x) {
        y = prompt('Загаданное число больше');
      } else if (y > x) {
        y = prompt('Загаданное число меньше');
      }
      return changeNumber();
    } else if (!isNumber(y)) {
      y = prompt( 'Введите число!');
      return changeNumber();
    }
    
  };

  changeNumber();

};

guessNumber();
