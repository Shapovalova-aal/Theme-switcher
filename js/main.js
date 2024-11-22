


let checkbox = document.querySelector('.checkbox');
let wrapper = document.querySelector('.wrapper');
let body = document.body;
let img = document.querySelector('.block-form__image');
let src = [];
for (i = 0; i < img.children.length; i++) {
   src[i] = img.children[i].src;
}
img.querySelector('.dark').remove();

if(localStorage.getItem('dark')=="true"){
   theme();
}


function theme() {
   checkbox.classList.toggle('dark');
   if (checkbox.classList.contains('dark')){ 
      checkbox.firstElementChild.checked = true;
      localStorage.setItem('dark', true);
   }else{
      checkbox.firstElementChild.checked = false;
      localStorage.setItem('dark', false);
   }  
   console.log(checkbox.firstElementChild.checked);   
   body.classList.toggle('dark');
   img.classList.toggle('dark');
   if (img.classList.contains('dark')) {
      img.firstElementChild.src = src[0];
   }else{
      img.firstElementChild.src= src[1];
   }
}
checkbox.addEventListener('click', theme);