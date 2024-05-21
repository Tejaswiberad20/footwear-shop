function validateLogin() {
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;

    if (name === '' || password === '') {
        alert('Please fill in all fields.');
    } 
     let passwordError = document.getElementById("passwordError");
 
         let passwordPattern = /^\d{8}$/;
         if (!passwordPattern.test(password)) {
             alert("Password must be 8 digits long.");
             return false;
         }
        else{
            alert("Form Submited")
        }
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