function validateLogin() {
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let mob = document.getElementById('mob').value;
    let addr = document.getElementById('addr').value;
    let email = document.getElementById('email').value;

    if (name === '' || password === '' || email === '' || mob === '' || addr === '') {
        alert('Please fill in all fields.');
        return false;
    } 
    
    let passwordPattern = /^\d{8}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be 8 digits long.");
        return false;
    }
    
    if (!isValidEmailAddress(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    

    alert("Form Submitted");
    return true;
}


     

