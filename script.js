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
                // let currentColor = document.querySelector('#submit-btn').style.backgroundColor;
                // document.querySelector('#submit-btn').style.backgroundColor = '#4BB543';
                // document.querySelector('#submit-btn').value = 'Email Sent! ';
                // document.querySelector('#submit-btn').style.color = '#fff';

                // setTimeout(function() {
                //     document.querySelector('#submit-btn').value = 'Send';
                //     document.querySelector('#submit-btn').style.backgroundColor = currentColor;
                //     document.querySelector('#contact-form').reset();
                // }, 3000);
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
			submitBtn.classList.add("loader");
            console.log(submitBtn.style.border.value);
		}, 125);
        setTimeout(() => {
			submitBtn.classList.remove("loader", "active");
			submitBtn.value = "Success!";
			submitBtn.classList.add("success");
		}, 1600);
        setTimeout(() => {
			submitBtn.value = "Send";
			submitBtn.classList.remove("success");
			submitBtn.blur();
		}, 2900);
    }

}
