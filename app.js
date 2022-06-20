const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransition(){
    // Button click active class
    for (let i = 0; i < secBtn.length; i++){
        secBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            //currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            currentBtn[0].classList.remove('active-btn'); 
            //this.className += ' active-btn';
            this.classList.add('active-btn');
        });
    }
}

pageTransition();