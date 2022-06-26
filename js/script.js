class GameJumpMario {
   constructor() {
      this.game_board = document.querySelector('.game_board')
      this.callJump();
      this.loopGame();
      this.addClass();
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

      const loop = setInterval(() => { 
         const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
         const pipePosition = pipe.offsetLeft;

         if(pipePosition <= 132 && pipePosition > 0 && marioPosition < 105) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './img/game-over.png';
            mario.style.width = '85px'
            mario.style.marginLeft = '47px'

            buttonReset.removeAttribute('disabled');

            clearInterval(loop);
         };
      }, 10)
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