/*
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

THESE ARE VALID US PHONE FORMS:
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
 */



function telephoneCheck(str) {
  const myRegex = /^(1\s?)?(\d{3}|\(\d{3}\))(\s?-?)\d{3}?\s?-?\d{4}$/;
  return myRegex.test(str);
}


// true
console.log(telephoneCheck("1 456 789 4444"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("555 555 5555"));


// false
console.log(telephoneCheck("123**&!!asdf#"));
console.log(telephoneCheck("2(757)622-7382"));
console.log(telephoneCheck("2(757)6227382"));
console.log(telephoneCheck("(275)76227382"));
console.log(telephoneCheck("27576227382"));
console.log(telephoneCheck("10 (757) 622-7382"));
console.log(telephoneCheck("0 (757) 622-7382"));
console.log(telephoneCheck("2 (757) 622-7382"));
console.log(telephoneCheck("(6054756961)"));
console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("5555555"));
console.log(telephoneCheck("555-5555"));
console.log(telephoneCheck("(555-555-5555"));
console.log(telephoneCheck("55 55-55-555-5"));
console.log(telephoneCheck("(555)5(55?)-5555"));
console.log(telephoneCheck("(555-555-5555"));



// CHECK: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-telephone-number-validator/16090