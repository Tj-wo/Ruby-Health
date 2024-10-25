document.getElementById('doctor-register-btn').addEventListener('click', function() {
    document.body.innerHTML = '';
    document.body.appendChild(createDoctorRegistrationForm());
});

document.getElementById('patient-register-btn').addEventListener('click', function() {
    document.body.innerHTML = ''; 
    document.body.appendChild(createPatientRegistrationForm()); 
});

function createDoctorRegistrationForm() {
    const section = document.createElement('section');
    section.className = 'register-form';
    section.innerHTML = `
        <h2>Doctor Registration</h2>
        <form id="providerRegistrationForm" onsubmit="registerUser(); return false;">
            <label for="providerName">Full Name:</label>
            <input type="text" id="providerName" name="name" required>
            <label for="providerEmail">Email:</label>
            <input type="email" id="providerEmail" name="email" required>
            <label for="providerPassword">Password:</label>
            <input type="password" id="providerPassword" name="password" required>
            <label for="providerConfirmPassword">Confirm Password:</label>
            <input type="password" id="providerConfirmPassword" name="confirmPassword" required>
            <label for="providerPhoneNumber">Phone Number:</label>
            <input type="tel" id="providerPhoneNumber" name="phoneNumber" required>
            <label for="providerDob">Date of Birth:</label>
            <input type="date" id="providerDob" name="dob" required>
            <label>Gender:</label>
            <div>
                <input type="radio" id="maleDoctor" name="gender" value="Male" required>
                <label for="maleDoctor">Male</label>
                <input type="radio" id="femaleDoctor" name="gender" value="Female" required>
                <label for="femaleDoctor">Female</label>
            </div>
            <label for="specialization">Area of Specialization:</label>
            <textarea id="specialization" name="specialization" rows="3" placeholder="Your expertise"></textarea>
            <input type="checkbox" id="providerTerms" name="terms" required>
            <label for="providerTerms">I agree to the <a href="/Views/terms.html">Terms and Conditions</a></label>
            <button type="submit">Register</button>
        </form>
    `;
    return section;
}

function createPatientRegistrationForm() {
    const section = document.createElement('section');
    section.className = 'register-form';
    section.innerHTML = `
        <h2>Patient Registration</h2>
        <form id="registrationForm" onsubmit="registerUser(); return false;">
            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <label for="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required>
            <label for="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" required>
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" required>
            <label>Gender:</label>
            <div>
                <input type="radio" id="malePatient" name="gender" value="Male" required>
                <label for="malePatient">Male</label>
                <input type="radio" id="femalePatient" name="gender" value="Female" required>
                <label for="femalePatient">Female</label>
            </div>
            <label for="medicalHistory">Medical History (optional):</label>
            <textarea id="medicalHistory" name="medicalHistory" rows="4" placeholder="Describe any medical conditions"></textarea>
            <input type="checkbox" id="terms" name="terms" required> 
            <label for="terms">I agree to the <a href="/Views/terms.html">Terms and Conditions</a></label>
            <button type="submit">Register</button>
        </form>
    `;
    return section;
}
