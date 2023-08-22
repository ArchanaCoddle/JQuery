// Objective:
// The objective of this assignment is to learn how to implement form validation using jQuery

// Steps

// Create a form with 5 fields
// Name: text
// Address: text area
// DOB: date
// Age: dropdown
// Gender: radio button
// Agree to terms: checkbox

// Implement validation for each input field in the form using jQuery
// Customize the validation error messages for each input field to provide meaningful feedback to users.

// Test your form with different input scenarios to ensure that validation works as expected.

$(document).ready(() => {
  $('#submitForm').submit((e) => {
    e.preventDefault();
    $('p').text('');

    const persname = $('#persname').val();
    const address = $('#address').val();
    const dob = $('#date').val();
    const age = $('#age').val();
    const gender = $('.gender:checked').val();
    const agree = $('#agree:checked').val();
    console.log(persname, address, dob, age, gender, agree);
    console.log(address.length);

    if (persname === '') {
      $('#nameError').text('Please enter your name');
    }

    if (address === '') {
      $('#addressError').text('Please enter your address');
    } else if (address.length >= 60) {
      $('#addressError').text('Address is so lengthy');
    }

    if (dob === '') {
      $('#DOBError').text('Please enter your date of Birth');
    }

    if (age === 'nill') {
      $('#ageError').text('Please select an age range');
    }

    if (gender === undefined) {
      $('#genderError').text('Please select a gender');
    }

    if (agree !== 'on') {
      $('#agreeError').text('Please agree to the terms');
    }

    if (persname !== '' && address !== '' && dob !== '' && age !== 'nill' && gender !== undefined && agree === 'on') {
      alert('your information is submitted successfully.');
    }
  });
});
