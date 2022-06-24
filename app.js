const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransition() {
    // Button click active class
    for (let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList.remove('active-btn');
            this.classList.add('active-btn');
        });
    }

    // Sections active class
    allSections.addEventListener('click', e => {
        const id = e.target.dataset.id;
        if (id) {
            // remove selected from the other btns
            secBtns.forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            // hide other sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

    // toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    });

    // send contact form
    const sendButton = document.querySelector('#send');
    sendButton.addEventListener('click', () => {
        const subjectInput = document.getElementById('subjectInput');
        const nameInput = document.getElementById('nameInput');
        const messageInput = document.getElementById('messageInput');
        
        if(subjectInput.value && nameInput.value && messageInput.value){
            let message = `${messageInput.value}\n\n${nameInput.value}`;
            window.open(`mailto:aram532@yandex.ru?subject=${subjectInput.value}&body=${message}`);

            subjectInput.value = '';
            nameInput.value = '';
            messageInput.value = '';
        }
    });
}

pageTransition();