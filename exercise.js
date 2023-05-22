const submit = document.querySelector('input[type="submit"]');
const ul = document.querySelector('ul');
const input = document.querySelector('input.shoppinglist-input')

const removeClickedListener = (event) => {
    // Stops the page from changing
    event.preventDefault();


    // Add your removeChild code here
    // ...
}

const submitListener = (event) => {
    // Stops the page from changing
    event.preventDefault();

    // Add your createElement code here
    // ...
}

submit.addEventListener("click", submitListener);
document.querySelector('li').addEventListener('click', removeClickedListener)