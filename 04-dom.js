// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents

// Getting a reference to an element
const submit = document.querySelector('input[type="submit"]');
// Changing an element properties
submit.value = "Send"































// Responding to user events
const reset = document.querySelector('input[type="reset"]');
reset.addEventListener("click", (event) => {
    const reallyReset = confirm("Are your sure you want to reset the form values?");
    if (!reallyReset) {
        event.preventDefault();
    }
});






















// adding new elements
const form = document.querySelector('form')
const lastDivInForm = form.querySelector('.buttons')

const label = document.createElement('label');
label.innerText = 'Address'

const input = document.createElement('input')
input.setAttribute('name', 'address')

const div = document.createElement("div")
div.appendChild(label);
div.appendChild(input);

form.insertBefore(div, lastDivInForm);
