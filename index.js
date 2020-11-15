const form = document.querySelector('[name="verify"]');
const inputs = form.querySelectorAll('.inputs input');

function handleInput(e) {
    // check for data that was inputted and if there is a next input
    const input = e.target;
    if (input.nextElementSibling && input.value) {
        input.nextElementSibling.focus()
        //select the text when the next input is focused
        input.nextElementSibling.select()
    }
}


function handlePaste(e) {
    const paste = e.clipboardData.getData('text');
    //loop over each input, and populate with the index of that string
    inputs.forEach((input, i) => {
        input.value = paste[i] || '';
        //auto submit the for if all fields are filled after a paste
        if (input.value !== '') {
            form.submit()
        }
    })

}

inputs[0].addEventListener('paste', handlePaste)
form.addEventListener('input', handleInput)

