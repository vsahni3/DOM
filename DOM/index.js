buttons = document.querySelectorAll('.drum');
for (let i = 0; i < buttons.length; i++) {
  btn = buttons[i];
  btn.addEventListener('click', handleClick);
}


function handleClick() {
  var audio = new Audio('sounds/tom-1.mp3');
  audio.play();
}
