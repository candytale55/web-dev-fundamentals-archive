const reportingForDuty = (rank, lastName) => {
  return (rank + " " + lastName +" reporting for duty!")
}


// TESTING
console.log(reportingForDuty('Private', 'Fido'));
// Should return 'Private Fido reporting for duty!'
