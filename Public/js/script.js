document.getElementById('doctor-register-btn').addEventListener('click', function() {
    document.getElementById('doctor-register').style.display = 'block';
    document.getElementById('patient-register').style.display = 'none';
});

document.getElementById('patient-register-btn').addEventListener('click', function() {
    document.getElementById('patient-register').style.display = 'block';
    document.getElementById('doctor-register').style.display = 'none';
});

function registerUser(event, userType) {
    event.preventDefault(); 

    const form = userType === 'doctor' ? document.getElementById('providerRegistrationForm') : document.getElementById('registrationForm');

    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    
    alert(`${userType === 'doctor' ? 'Doctor' : 'Patient'} registered successfully!`);
    
    
    window.location.href = 'dashboard.html'; 
}

function loginUser(event) {
    event.preventDefault(); 

    
    alert("Login successful!");

    
    window.location.href = 'dashboard.html'; 
}
