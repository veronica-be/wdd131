const contactForm = document.getElementById('contactUs');

contactForm.addEventListener('submit', function () {
    let count = Number(localStorage.getItem('submission-count')) || 0;
    count += 1;
    localStorage.setItem('submission-count', count);

    const lastSubmission = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        reason: document.getElementById('reason').value,
        topic: document.getElementById('topic').value,
        msg: document.getElementById('message').value
    };

    localStorage.setItem('last_name', lastSubmission.name);
    localStorage.setItem('last_email', lastSubmission.email);
    localStorage.setItem('last_reason', lastSubmission.reason);
    localStorage.setItem('last_topic', lastSubmission.topic);
    localStorage.setItem('last_msg', lastSubmission.msg);

});
