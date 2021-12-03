const btnSearch=document.querySelector('.btn');
const modalSearch=document.querySelector('.modal-wrapper');
const inputSearch=document.querySelector('.modal-wrapper input');



btnSearch.addEventListener('click', function(){
    modalSearch.style.transform="scale(1)";
    inputSearch.focus();
})


modalSearch.addEventListener('click' , function(){
    modalSearch.style.transform="scale(0)";
    
})

inputSearch.addEventListener('click', function(e){
    e.stopPropagation();
})