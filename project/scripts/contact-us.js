
/*js for contact-us html form first two inputs*/
/*DOM: selecting an element requirement*/
const reasonSelect = document.getElementById('reason');
const selectSubject = document.getElementById('topic');

/*array requirement*/
const subjectsQuestions = ["I want to receive information about a product", "I would like to receive information about the company", "I'm looking to buy Avoranti products", "Other"];
const subjectsClaims = ["I have received a damaged order", "I have received the wrong item(s)", "I have found a quality issue with one of my products", "I haven't received my order yet", "Other"];
const subjectsProducts = ["Dark Chocolate - 70%", "Dark Chocolate - 65%", "Dark Chocolate - 60%", "Milk Chocolate", "White Chocolate", "Premium Cocoa Powder", "Roasted Cocoa Nibs"];

/*function requirement (2 out of 2)*/
function updateSubjectOptions(list) {
    /*DOM: modifying an element requirement*/
    selectSubject.innerHTML = '<option value="" disabled selected>Please select a subject</option>';

    list.forEach(item => { /*method array requirement*/
        const option = document.createElement('option');
        option.textContent = item;
        option.value = item;
        selectSubject.appendChild(option);
    });
};

/*Event listening requirement*/
reasonSelect.addEventListener('change', function () {
    selectSubject.disabled = false;
    selectSubject.focus();

    /*Conditional Branching requirement*/
    if (this.value === 'General Question') {
        updateSubjectOptions(subjectsQuestions);
    } else if (this.value === 'Claim') {
        updateSubjectOptions(subjectsClaims);
    } else if (this.value === 'Product Review') {
        updateSubjectOptions(subjectsProducts);
    }
});


