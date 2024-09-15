// Get references to the form and display area
const form = document.getElementById('resume-builder') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const Name = (document.getElementById('Name') as HTMLInputElement).value;
    const Email = (document.getElementById('Email') as HTMLInputElement).value;
    const Phone = (document.getElementById('Phone') as HTMLInputElement).value;
    const Education = (document.getElementById('Education') as HTMLTextAreaElement).value;
    const Experience = (document.getElementById('Experience') as HTMLTextAreaElement).value;
    const Skills = (document.getElementById('Skills') as HTMLTextAreaElement).value;

    // Generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b> ${Name}</p>
    <p><b>Email:</b> ${Email}</p>
    <p><b>Phone:</b> ${Phone}</p>

    <h3>Education</h3>
    <p>${Education}</p>

    <h3>Experience</h3>
    <p>${Experience}</p>

    <h3>Skills</h3>
    <p>${Skills}</p>
    `;

    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
        resumeDisplayElement.style.pointerEvents = 'none'; // Disable interaction
        
        // Disable form inputs to prevent further edits
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            (input as HTMLInputElement).disabled = true;
        });
        
        // Optionally, hide the form if no further input is needed
        form.style.display = 'none';
    } else {
        console.error('The resume display element is missing.');
    }
});
