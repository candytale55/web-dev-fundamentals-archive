/*
Given the percentage of DNA shared between two people, 
their likely familial relationship can be calculated.
whatRelation() has one number parameter, percentSharedDNA, 
and returns the likely relationship in a string. 
*/


const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }
    if (percentSharedDNA > 34) {
        return 'You are likely parent and child or full siblings.'
    }
    if (percentSharedDNA > 13) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    if (percentSharedDNA > 5) {
        return 'You are likely 1st cousins.'
    }
    if (percentSharedDNA > 2) {
        return 'You are likely 2nd cousins.'
    }
    if (percentSharedDNA > 0) {
        return 'You are likely 3rd cousins'
    }
    return 'You are likely not related.'
}



// You are likely identical twins.
console.log(whatRelation(100));

// You are likely parent and child or full siblings.
console.log(whatRelation(99));
console.log(whatRelation(35));

// You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.
console.log(whatRelation(34));
console.log(whatRelation(33));
console.log(whatRelation(14));

// You are likely 1st cousins.
console.log(whatRelation(13));
console.log(whatRelation(12));
console.log(whatRelation(6));

// You are likely 2nd cousins.
console.log(whatRelation(5));
console.log(whatRelation(3));

// You are likely not related
console.log(whatRelation(2));
console.log(whatRelation(1));
console.log(whatRelation(0)); 
