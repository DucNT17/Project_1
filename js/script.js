let navbar = document.querySelector('.header .flex .navbar');
let profile = document.querySelector('.header .flex .profile');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   profile.classList.remove('active');
}

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   navbar.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   navbar.classList.remove('active');
}
function loader(){
   document.querySelector('.loader').style.display = 'none';
}

function fadeOut(){
   setInterval(loader, 1000);
}

window.onload = fadeOut();

document.querySelectorAll('input[type="number"]').forEach(numberInput => {
   numberInput.oninput = () =>{
      if(numberInput.ariaValueMax.length > numberInput.maxlength) numberInput.ariaValueMax.slice(0, numberInput.maxlength);
   };
});