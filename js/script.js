class GameJumpMario {
   constructor() {
      this.game_board = document.querySelector('.game_board')
      this.callJump();
      this.loopGame();
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

      const loop = setInterval(() => { 
         const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
         const pipePosition = pipe.offsetLeft;
         
         if(pipePosition <= 132&& pipePosition > 0 && marioPosition < 105) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './img/game-over.png';
            mario.style.width = '85px'
            mario.style.marginLeft = '47px'

            clearInterval(loop);
         }
      }, 10)


   }
}

const startGame = new GameJumpMario();
