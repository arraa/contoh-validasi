jQuery.validator.setDefaults({
    debug: true,
    success: "valid",
});

$.validator.addMethod(
    "strong_password",
    function (value, element) {
        let password = value;
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(password)) {
            return false;
        }
        return true;
    },
    function (value, element) {
        let password = $(element).val();
        if (!/^(?=.*[A-Z])/.test(password)) {
            return "Password must contain at least one uppercase.";
        } else if (!/^(?=.*[a-z])/.test(password)) {
            return "Password must contain at least one lowercase.";
        } else if (!/^(?=.*[0-9])/.test(password)) {
            return "Password must contain at least one digit.";
        }

        return false;
    }
);

$("#form").validate({
    rules: {
        Nama: {
            required: true,
        },
        NoWA: {
            required: true,
            number: true,
            minlength: 9,
        },
        Password: {
            strong_password: true,
        },
        confirmPassword: {
            equalTo: Password,
        },
        CV: {
            required: true,
        },
    },
    messages: {
        NoWA: "number must > 9",
        Nama: "Please input this field",
        Place: "Please input this field",
        Dob: "Please input this field",
        gander: "Please input this field",
        email: "Please input this field",
        Password: "Your password doesn’t match our requirements!",
        confirmPassword: "Your password doesn’t match!",
        IDLine: "Please input this field",
        CV: "Please input this field",
    },
    errorElement: "p",
    errorClass: "text-red-700 text-xs italic border-red-500",
    validClass: "valid",
    highlight: function (element, errorClass, validClass) {
        $(element).addClass(errorClass).removeClass(validClass);
    },
});
