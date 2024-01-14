document.addEventListener('DOMContentLoaded', function() {
    const medicationList = document.getElementById('medication-list');
    const addMedicationForm = document.getElementById('medication-form');

    // Example data for demonstration purposes
    let medications = [];

    // Function to display medications
    function displayMedications() {
        // Clear the existing content
        medicationList.innerHTML = '';

        // Display the updated medication list
        const heading = document.createElement('h2');
        heading.textContent = 'Medication Schedule';
        medicationList.appendChild(heading);

        if (medications.length === 0) {
            const noMedsParagraph = document.createElement('p');
            noMedsParagraph.textContent = 'No medications added.';
            medicationList.appendChild(noMedsParagraph);
        } else {
            medications.forEach((medication, index) => {
                const medicationParagraph = document.createElement('p');
                medicationParagraph.textContent = `${index + 1}. ${medication.name} - ${medication.time}`;
                medicationList.appendChild(medicationParagraph);
            });
        }
    }

    // Function to add a new medication
    function addMedication(name, time) {
        medications.push({ name, time });
        displayMedications();
    }

    // Display initial medications
    displayMedications();

    // Add Medication Form
    addMedicationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const medicationName = document.getElementById('medication-name').value;
        const medicationTime = document.getElementById('medication-time').value;

        if (medicationName && medicationTime) {
            addMedication(medicationName, medicationTime);
            alert('Medication added successfully!');
            addMedicationForm.reset();
        } else {
            alert('Please fill in both Medication Name and Medication Time.');
        }
    });
});



// mainR related JS:

// Inside the 'project.js' file

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const displayContacts = document.getElementById('display-contacts');
    const emergencyContacts = []; // Array to store contacts

    // Function to display emergency contacts
    function displayEmergencyContacts() {
        displayContacts.innerHTML = '<h2>Emergency Contacts</h2>';
        if (emergencyContacts.length === 0) {
            displayContacts.innerHTML += '<p>No emergency contacts added.</p>';
        } else {
            emergencyContacts.forEach((contact, index) => {
                displayContacts.innerHTML += `<p>${index + 1}. ${contact.name} - ${contact.phoneNumber}</p>`;
            });
        }
    }

    // Add Emergency Contact
    function addEmergencyContact() {
        const contactName = document.getElementById('contact-name').value;
        const contactNumber = document.getElementById('contact-number').value;

        if (contactName && contactNumber) {
            emergencyContacts.push({ name: contactName, phoneNumber: contactNumber });
            displayEmergencyContacts();
            alert('Emergency contact added successfully!');
            contactForm.reset();
        } else {
            alert('Please fill in both Name and Phone Number.');
        }
    }

    // Add Emergency Contact Button
    const addContactBtn = document.getElementById('add-contact-btn');
    addContactBtn.addEventListener('click', addEmergencyContact);
});





