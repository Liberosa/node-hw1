const validateCardNumber = number => {
    const pattern = /^\d{8,16}$/;
    return pattern.test(number);
}

const validateRegularDate = date => {
    const pattern = /\b(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})\b/;
    return pattern.test(date);
}

const validateNonRegularDate = date => {
    const pattern = /\b(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])\b/;
    return pattern.test(date);
}

const validatePhoneNumber = number => {
    const pattern = /\+\d{2}\(\d{2}\)\d{4}-\d{4}/;
    return pattern.test(number);
}

const validateNumber = number => {
    const pattern = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)$/;
    return pattern.test(number);
};

module.exports = {validateCardNumber, validateRegularDate, validateNonRegularDate, validatePhoneNumber, validateNumber};