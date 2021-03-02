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

let formId = 'contact-form';

let  form = document.getElementById(formId);

function handleForm (event) {
    event.preventDefault();
}

form.addEventListener('submit', handleForm);

let data = {
    "access_token": "7n3ga0zsl58d0n3lgl1qsijm"
};

function onSuccess() {
    window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
}

function onError(error) {
    window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
}

let sendBtn = document.getElementById('submit-btn');

document.getElementById('submit-btn').onclick = function sendEmail(event) {
    event.preventDefault();
    setTimeout(function() {
        sendBtn.value = "Sending...";
        sendBtn.disabled = true;
    }, 1);
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            onSuccess();
        } else if (request.readyState == 4) {
            onError(request.response);
            alert('Failed');
        }
    }

    let contactorName = document.querySelector('#' + formId + " [name='name']").value;
    let subject = document.querySelector('#' + formId + " [name='subject']").value;
    let email = document.querySelector('#' + formId + " [name='email']").value; 
    let message = document.querySelector('#' + formId + " [name='message']").value;

    data['name'] = contactorName;
    data['subject'] = subject;
    data['email'] = email;
    data['message'] = message;

    let params = toParams(data);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-wwww-form-urlencoded");

    request.send(params);

    return false;
}

function toParams(data) {
    let form_data = [];

    for (var key in data) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    }

    return form_data.join('&');
}
