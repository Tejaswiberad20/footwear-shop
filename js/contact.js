function star(n) {
    const star1 = document.getElementById('s1');
    const star2 = document.getElementById('s2');
    const star3 = document.getElementById('s3');
    const star4 = document.getElementById('s4');
    const star5 = document.getElementById('s5');
    const rating = document.getElementById('rating');
    const submit_btn = document.getElementById('submit_btn');

    if (n >= 1) {
        star1.src = '../images/starfill.png';
    } else {
        star1.src = '../images/star (1).png';
    }
    if (n >= 2) {
        star2.src = '../images/starfill.png';
    } else {
        star2.src = '../images/star (1).png';
    }
    if (n >= 3) {
        star3.src = '../images/starfill.png';
    } else {
        star3.src = '../images/star (1).png';
    }
    if (n >= 4) {
        star4.src = '../images/starfill.png';
    } else {
        star4.src = '../images/star (1).png';
    }
    if (n == 5) {
        star5.src = '../images/starfill.png';
        
    } else {
        star5.src = '../images/star (1).png';
    }


    // Update rating text
    rating.innerText = "Rating is: " + n + "/5";
}


function msgsending(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let msg = document.getElementById('msg').value;


    if (name === '' || email === ''|| msg === '') {
        alert('Please fill in all fields.');
    } 
        else{
            alert("Your Massage will be send")
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