let min = 1,
    max = 10, 
    winningNum = 2,
    guessesLeft = 3;

const game = document.querySelector('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

 //Assign UI min and max
 minNum.textContent = min;
 maxNum.textContent = max;

 //Listen for guess 
 guessBtn.addEventListener('click', function(){
     let guess = parseInt(guessInput.value);

     if(isNaN(guess) || guess < min || guess > max){
         setMessage(`Please enter a number between ${min} and ${max}`, 'red');

     }
    if(guess === winningNum){
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green';
        setMessage(`${winningNum} is correct, YOU WIN!`, 'green');

    } else{
        guessesLeft -= 1;

        if(guessesLeft === 0){
            guessInput.disabled = true;
            guessInput.style.borderColor = 'red';
            setMessage(`Game Over, you lost. The correct number was ${2}`, 'red');
    

        }else{
            guessInput.style.borderColor = 'red';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
            guessInput.value = '';
        }

    }


  });
  function gameOver(won, msg){
      let color;
      won === true ? color = 'green' : color ='red';



    guessInput.disabled = true;
    guessInput.style.borderColor = 'color';
    setMessage(msg);

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
  }

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}