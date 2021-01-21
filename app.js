// JavaScript ES6

class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }

  set numberOfStudents(num){
    if (num.isNan){
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    } else {
      this._numberOfStudents = num;
    }
  } // Fin numberOfStudents(num)

  quickFacts(){
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
  } // quickFacts()

  static pickSubstituteTeacher(subTeachers){
    const index = Math.floor(subTeachers.length * Math.random());
    
    return subTeachers[index];
  } // pickSubstituteTeacher()
}



class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy(){
    return this._pickupPolicy;
  }
} // PrimarySchool


class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams){
    super(name, "high", numberOfStudents, sportsTeams);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams(){
    return this._sportsTeams;
  }
} // HighSchool


class MiddleSchool extends School{
  constructor(name, numberOfStudents){
    super(name, "middle", numberOfStudents);
  }
} // MiddleSchool

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
//console.log(lorraineHansbury);
lorraineHansbury.quickFacts();



const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log("Substitute teacher: " + sub);



 const alSmith = new HighSchool('Al E. Smith', 415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
 //console.log(alSmith);
 alSmith.quickFacts();
 console.log(alSmith.sportsTeams);

 const innsmouthMiddle = new MiddleSchool("Innsmouth Middle", 560);
 innsmouthMiddle.quickFacts();
 
 

// For reference: https://www.youtube.com/watch?v=9p2VeKRKZ1Q
