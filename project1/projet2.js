'use strict';
const modal = document.querySelector('.modal');
const hidden = document.querySelector('.hidden');
const open_modal =document.querySelectorAll('.show-modal');
// const close_modal = document.querySelector('.close-modal');
//cette fonction pour afficher le text window..
const openmodal=function(){
    modal.classList.remove('hidden');
};
//tous les buttons cliquee permettent d'ouvrir la fenetre window text
for (let i=0;i<open_modal.length;i++){
    console.log(open_modal[i].textContent)
      
    open_modal[i].addEventListener('click',openmodal);
}
const closemodal=function(){
   modal.classList.add('hidden');

}
document.querySelector('.close-modal').addEventListener('click',closemodal);



 


















