let theme = localStorage.getItem('theme');

theme == null ? setTheme('light') : setTheme(theme);

let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode) {
    switch (mode) {
        case 'light':
            document.getElementById('theme-style').href = 'default.css';
            break;
        case 'blue':
            document.getElementById('theme-style').href = 'blue.css';
            break;
        case 'green':
            document.getElementById('theme-style').href = 'green.css';
            break;
        case 'purple':
            document.getElementById('theme-style').href = 'purple.css';
            break;
    }

    localStorage.setItem('theme', mode);
}