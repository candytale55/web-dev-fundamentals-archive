// Define five fortunes and randomly select one of them to display the fortune to the user.

let fortune1 ="You'll pretend not to see someone you know, and they'll do the same. A win for both parties.";
let fortune2 ="You will confidently give someone the wrong directions, then walk away like nothing happened.";
let fortune3 ="You'll open the fridge multiple times expecting something new to appear. It won't.";
let fortune4 ="Be cautious of your new neighbours.";
let fortune5 ="Beware of the color green"; 

let randomNumber = Math.round(Math.random() * (5 - 1) + 1);

let selectedFortune;


switch (randomNumber) {
  case 1:
    selectedFortune = fortune1;
    break;
  case 2:
    selectedFortune = fortune2;
    break;
  case 3:
    selectedFortune = fortune3;
    break;
  case 4:
    selectedFortune = fortune4;
    break;
  case 5:
    selectedFortune = fortune5;
    break;
  default:
    selectedFortune="This shouldn't happen ever";
}



console.log(selectedFortune);
