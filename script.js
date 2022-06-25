

const form = document.getElementById("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const phone = document.getElementById("phone");


// When Click if Input empty or incorrrect
function error(input, message) {

    // form-control class should keep when click on the input 
    input.className = "form-control is-invalid";

    // after input tag add new elemet for invalid-feedback
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';

};

// if input not empty when click or corrrect
function success(input) {
    input.className = "form-control is-valid"
};

// check validate with regex expression
function checkvalidateEmail(input) {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value)) {
        success(input);
    } else {
        error(input, " you entired wrong e-mail ")
    }

};

// empty check 

function checkRequired(inputs) {

    inputs.forEach(input => {

        if (input.value === "") {
            error(input, ` ${input.id} is required `)
        } else {
            success(input)
        }
    });
}

// length check for username and password  

function checkLength(input, min, max) {
   
    if (input.value.length < min) {
        error(input, `${input.id} it must be min ${min} character `)
    } else if (input.value.length > max) {
        error(input, `${input.id} it must be max ${max} character`);
    } else {
        success(input);
    }

}

// is match password 

function checkPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        error(input2, "Passwords not match ")
    }
}

// phone length check 

function checkPhone(input) {
    var regex_phone = /^\d{10}$/;
    if (!regex_phone.test(input.value)) {
        error(input, "It must be ten character")
    }
}


//  submit for form push register ; 

form.addEventListener("submit", function (e) {

    // we blocked happen real submit when click 
    e.preventDefault();

    checkRequired([username, email, password, repassword, phone]);

    checkvalidateEmail(email);

    checkLength(username, 7, 15);
    checkLength(password, 7, 12);

    checkPasswords(password, repassword);

    checkPhone(phone);

});


