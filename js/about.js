function changeimg(imgname){
    const mainimg=document.getElementById('main-image');
    mainimg.src = imgname;
}
function clock() {
    const hrs = document.getElementById('hrs');
    const min = document.getElementById('min');
    const sec = document.getElementById('sec');
    const ampm = document.getElementById('ampm');

    const date = new Date();
    hrs.innerText = (date.getHours() < 10 ? "0" : "") + date.getHours() % 12 || 12;
    min.innerText = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    sec.innerText = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
    ampm.innerText = date.getHours() >= 12 ? 'PM' : 'AM';

    

}
setInterval(clock, 1000);
clock();

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