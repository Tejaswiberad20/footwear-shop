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

function darkMmode(){
    const imgdark = document.getElementById('imgdark');
    imgdark.classList.add('active');
    const imglight=document.getElementById('imglight');
    imglight.classList.remove('active');

    const bodyelement=document.getElementById('body');
    bodyelement.className="dark";


}
function lightMode(){
    const imgdark = document.getElementById('imgdark');
    imgdark.classList.remove('active');
    const imglight=document.getElementById('imglight');
    imglight.classList.add('active');

    const bodyelement=document.getElementById('body');
    bodyelement.className="light";

}
     

