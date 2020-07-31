// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

// FORM VALIDATION

class VerifyForm {

    fullName = '';
    dateOfBirth;
    email;
    contactNumber;
    faculty;
    nic;

    constructor(mainform = null) {
        const inputFields = Array.from(mainForm.children);
        inputFields.forEach(input => {
            input.children[0].addEventListener('blur', (e) => {
                if (e.target.name === 'firstname' || e.target.name === 'lastname') {
                    this.verifyName(e.target);
                }else if(e.target.name==='dateofbirth'){
                    this.verifyDOB(e.target);
                };
            })
        })
    }

    verifyEmail() {

    }

    verifyName(target = null) {  
        if (target.value !== '') {
            let fullName = '';

            if (this.fullName === '') {
                fullName = target.value;
            } else {
                fullName = this.fullName + ` ${target.value}`;
            }

            this.fullName = fullName;
            
        } else {
            target.classList.add('error');
            target.nextElementSibling.textContent = 'Please Enter A Valid Value';
        }
    }

    verifyDOB(target='') {
        if(target.value!==''){
            let minDate = new Date('1990-07-31');
            let maxDate = new Date('2000-01-01');
            let selectedDate = new Date(target.value);

            if(selectedDate >= minDate && selectedDate <= maxDate){
                console.log(minDate , maxDate , selectedDate);
            }else{
                target.classList.add('error');
                target.nextElementSibling.textContent = 'Sorry You\'re Not Eligible';
            }
            
        }else{
            target.classList.add('error');
            target.nextElementSibling.textContent = 'Please Enter A Valid Date';
        }
    }

    verifyNIC() {

    }

}


// window load event lister ====call verify clss with main form element====

window.addEventListener('load', () => {
    const verifyContactForm = new VerifyForm(document.getElementById('mainForm'));
    // console.log(inputFields);
})