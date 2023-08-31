// to display error msg

function printError(elemID, hintMsg) {
    document.getElementById(elemID).innerHTML = hintMsg;
}

// validation form

function validateForm() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            hobbies.push(checkboxes[i].value);
        }
    }


    var nameErr = emailErr = mobileErr = countryErr = genderErr = true;

    if (name == "") {
        printError("nameErr", "Please enter your name");
    }

    else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) == false) {
            printError("nameErr", "Please enter a valid name");
        }
        else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if (email == "") {
        printError("emailErr", "Please enter your email , it is mandatory");
    }

    else {
        var regex = /^\S+@+\S+\.\S+$/;

        if (regex.test(email) == false) {
            printError("emailErr", "Pleas enter a valid email ID");
        }
        else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number , it is mandatory");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) == false) {
            printError("mobileErr", "Please enter a valid mobile number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    if (country == "Select") {
        printError("countryErr", "Please select country");
    }

    else {
        printError("countryErr", "");
        countryErr = false;
    }

    if (gender == "") {
        printError("genderErr", "Please select gender value");
    }
    else {
        printError("genderErr", "");
        genderErr = false;
    }


    if ((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
        return false;
    }

    else {
        var preview = "You have entered following details: \n" +
            "Full Name : " + name + "\n" +
            "Email ID : " + email + "\n" +
            "Mobile Number : " + mobile + "\n" +
            "Country : " + country + "\n" +
            "Gender : " + gender + "\n";
        if (hobbies.length) {
            preview += "Hobbies : " + hobbies.join(", ");
        }

        alert(preview);
    }
};







