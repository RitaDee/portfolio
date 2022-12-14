// Form validation
const form = document.getElementById('contact-me');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const error = document.getElementById('error-message');
error.style.visibility = 'hidden';

function formValidate(event) {
  if (email.value !== email.value.toLowerCase()) {
    error.style.visibility = 'visible';
    error.innerHTML = 'Please input your email address in lowercase.';
    event.preventDefault();
  } else {
    error.style.visibility = 'hidden';
  }
}

form.addEventListener('submit', formValidate);

function storeData() {
  const user = {
    UserName: userName.value,
    UserEmail: email.value,
    UserText: message.value,
  };
  localStorage.setItem('user', JSON.stringify(user));
}

userName.addEventListener('focusout', storeData);
email.addEventListener('focusout', storeData);
message.addEventListener('focusout', storeData);
const data = JSON.parse(localStorage.getItem('user'));
if (data) {
  userName.value = data.UserName;
  email.value = data.UserEmail;
  message.value = data.UserText;
}
