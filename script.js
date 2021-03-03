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

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_458rago', 'template_fnagptr', '#contact-form')
            .then(function() {
                sendSuccess();
            }, function(error) {
                alert('Cannot send email. Error: ', error);
            });
    });

    function sendSuccess() {
        let submitBtn = document.querySelector('#submit-btn');
        if (submitBtn.classList.contains('active') || submitBtn.classList.contains('success')) {
            return false;
        }

        submitBtn.classList.add('active');
        setTimeout(() => {
			document.querySelector('.loader').style.display = "block";
            document.querySelector('#submit-btn').style.display = "none";
		}, 125);
        setTimeout(() => {
			document.querySelector('.loader').style.display = "none";
            document.querySelector('#submit-btn').style.display = "";
            submitBtn.classList.remove('active');
			submitBtn.value = "Success!";
			submitBtn.classList.add("success");
		}, 1800);
        setTimeout(() => {
			submitBtn.value = "Send";
			submitBtn.classList.remove("success");
			submitBtn.blur();
		}, 3000);
    }

}
