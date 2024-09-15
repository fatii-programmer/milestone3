// Get references to the form and display area
var form = document.getElementById('resume-builder');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var Name = document.getElementById('Name').value;
    var Email = document.getElementById('Email').value;
    var Phone = document.getElementById('Phone').value;
    var Education = document.getElementById('Education').value;
    var Experience = document.getElementById('Experience').value;
    var Skills = document.getElementById('Skills').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> ".concat(Name, "</p>\n    <p><b>Email:</b> ").concat(Email, "</p>\n    <p><b>Phone:</b> ").concat(Phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(Education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(Experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(Skills, "</p>\n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
        resumeDisplayElement.style.pointerEvents = 'none'; // Disable interaction
        // Disable form inputs to prevent further edits
        var inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(function (input) {
            input.disabled = true;
        });
        // Optionally, hide the form if no further input is needed
        form.style.display = 'none';
    }
    else {
        console.error('The resume display element is missing.');
    }
});
