var i = 0;
var score = 0;

while (i < 10) {

   setTimeout(() => {
      i++;
      console.log(i)

      if(i == 50) {
         score++;
         console.log('i == 50');
      }
   }, 1000)
}
