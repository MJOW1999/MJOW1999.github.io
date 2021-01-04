const icImages = document.querySelector('.ic__images');
const icButtons = document.querySelectorAll('.ic__button');
const numOfImages = document.querySelectorAll('.ic__images img').length;
let index = 1;
let translateX = 0;

icButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if(event.target.id === 'previous') {
      if(index !== 1){
        index--;
        translateX += 300;
      }
    }else{
      if(index !== numOfImages){
        index++;
        translateX -= 300;
      }
    }
    
    icImages.style.transform = `translateX(${translateX}px)`;
  });
});