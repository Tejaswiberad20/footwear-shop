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