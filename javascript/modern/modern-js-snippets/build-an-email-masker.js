// will mask (hide or replace sensitive information) the username part of an email address with asterisks.

let email = "fakeaccount@gmail.com";

function maskEmail(email){
  //console.log(email)
  let maskedEmail = email[0] + "*".repeat(email.indexOf("@")-2)+ email.slice(email.indexOf("@")-1);  
  return maskedEmail;
}

console.log(maskEmail(email));
