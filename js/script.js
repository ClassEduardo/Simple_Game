class GameJumpMario {
   constructor() {
      this.game_board = document.querySelector('.game_board')
      this.callJump();
      this.loopGame();
      this.addClass();
      this.countScore();
   }
   
   addClass() {
      const pipe = this.game_board.querySelector('.pipe');

      pipe.style.animation = 'pipe_animation 1.4s linear infinite';
      pipe.style.display = 'inherit';
   }

   callJump() {
      document.addEventListener('keypress', () => {
         this.jump()
      })
   }
   
   jump() {      
      const mario = this.game_board.querySelector('.mario');
      mario.classList.add('jump')
         setTimeout(() => { 
            mario.classList.remove('jump')
         }, 530)
   }
   
   loopGame(){
      const pipe = this.game_board.querySelector('.pipe');
      const mario = this.game_board.querySelector('.mario');

      const buttonReset = document.querySelector('.restart');
      const buttonStart = document.querySelector('.start');

      const loopGameLoss = setInterval(() => { 
         const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
         const pipePosition = pipe.offsetLeft;

         if(pipePosition <= 143 && pipePosition > 0 && marioPosition < 105) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
            
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './img/game-over.png';
            mario.style.width = '85px'
            mario.style.marginLeft = '47px'

            buttonReset.removeAttribute('disabled');
            buttonStart.removeAttribute('onclick');

            buttonStart.style.background = 'rgba(239, 239, 239, 0.4)'
            buttonStart.style.color = 'rgba(16, 16, 16, 0.3)'

            clearInterval(loopGameLoss);
         }
         
      }, 10)
   }

   countScore() {
      const pipe = this.game_board.querySelector('.pipe');

      const loopScore = setInterval(() => { 
         const pipePosition = pipe.offsetLeft;

         let score = 0;
         if(pipePosition <= -50) {
            score++;
            console.log(score)
         }
      }, 5)
   }

   creatScore(ponto) {
      const p = document.createElement('p');
      console.log(ponto)
      p.innerHTML = 'Score: ' + ponto;
      p.classList.add('score');
   }
}

function timeStartGame(mnsg, time) {
   return new Promise((resolve, ) => {
      setTimeout(() =>{ 
         resolve(mnsg);
      }, time)
   })
}

function startGame() {
   timeStartGame('0', 0)
      .then(resposta => {
         console.log(resposta);
         return timeStartGame('1', 1000);
      })
      .then(resposta => {
         console.log(resposta); 
         return timeStartGame('2', 1000);
      })
      .then(resposta => {
         console.log(resposta); 
         return timeStartGame('GO!', 1000);
      })
      .then((resposta) => {
         console.log(resposta);
      })
      .then(() => {
         const startGame = new GameJumpMario();
      })
      .catch();
}   