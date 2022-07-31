const element = document.querySelector('.voir-modal');
 
const voirNotification = {
    create(settings) {
        const checkLS = !localStorage.getItem('notif');
        if (checkLS) return;

        const newDiv = document.createElement('div');
        newDiv.classList.add('voir-modal');
        newDiv.classList.add('voir-left-top');
        newDiv.classList.add('background-blue');
        newDiv.classList.add('voir-show');
        newDiv.classList.add((settings?.text?.colorBgc || ''));
        newDiv.innerHTML =
        settings?.text?.text ? 
        '<div class="voir-content ' + (settings?.text?.colorText || '') + '">' +
            settings?.text?.text +
        '</div>'
        +
        `<div class="voir-close"><i class='bx bx-cross'></i></div>` 
        : ''
            
        const elementMain = document.querySelector('.voir-main');
        
        document.body.insertBefore(newDiv, elementMain);

        const closeEl = document.querySelector('.voir-close');
        closeEl.addEventListener('click', () => {
            localStorage.setItem('notif', false);
            document.querySelector('.voir-modal').classList.remove('voir-show')
        });
    }
};

window.settings = {
    text: {
        text: 'Thanks you',
        colorText: 'text-black',
        colorBgc: 'background-yellow'
    }
}

window.voirNotification = voirNotification;

// voirNotification.create(settings)