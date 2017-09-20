$(() => {
  console.log('script loaded');

  // listener for submitting the new student form
  $('.new-student-form').on('submit', e => {
    e.preventDefault(); // stops default behavior of page refresh


    // grab values from form
    const fname = $('.new-student-fname').val(),
          lname = $('.new-student-lname').val(),
          image = $('.new-student-image').val(),
          house = parseInt($('.new-student-house').val()) === 0 ? Math.ceil(Math.random() * 4) : $('.new-student-house').val();

    // create new object to send form data in
    const newStudentData = {
      fname: fname,
      lname: lname,
      image: image,
      house: house
    };
    console.log(newStudentData);

    // send ajax request to make enroll a new student
    $.ajax({
      method: 'POST',
      url: '/students',
      data: newStudentData,
      success: response => {
        console.log(response);
        window.location.replace(`/students/${response.student_id}`);
      }, error: msg => {
        console.log(msg);
      }
    }); // ends ajax method
  }); // ends submit function for new student form


  // send ajax request to edit student informtion
  $('.edit-student-form').on('submit', e => {
    e.preventDefault(); // stops default behavior of page refresh

    // grab values from form
    const fname = $('.student-fname-input').val(),
          lname = $('.student-lname-input').val(),
          image = $('.student-image-input').val(),
          house = $('.student-house-input').val();
          id = $('.student-id-input').val();

    // create new object to send form data in
    const modifiedStudentData = {
      fname: fname,
      lname: lname,
      image: image,
      house: house,
      id: id
    };

    console.log(modifiedStudentData);

    // send ajax request to modify a student
    $.ajax({
      method: 'PUT',
      url: `/students/${modifiedStudentData.id}`,
      data: modifiedStudentData,
      success: updatedStudent => {
        console.log(updatedStudent);
        window.location.replace(`/students/${updatedStudent.student_id}`);
      }, error: msg => {
        console.log(msg);
      }
    }); // ends ajax method
  }); // ends submit function for edit student form

  // delete student button
  $('.delete-student').on('click', () => {
    const studentId = $('.delete-student').data('id');

    $.ajax({
      method: 'DELETE',
      url: `/students/${studentId}`,
      success: response => {
        console.log('success');
        window.location.replace('/students');
      },
      error: msg => {
        console.log(msg)
      }
    }); // ends ajax method
  }); // ends function to delete student :( on click

}); // ends document.ready
