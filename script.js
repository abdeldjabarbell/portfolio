
document.getElementById("facebookButton").addEventListener("click", function() {
    window.location.href = 'https://www.facebook.com/abdeldjabar.bellakhdar.3';
});

document.getElementById("instaButton").addEventListener("click", function() {
    window.location.href = 'https://www.instagram.com/abdeldjabar6918/?hl=en';
});

document.getElementById("tweetButton").addEventListener("click", function() {
    window.location.href = 'https://www.facebook.com/abdeldjabar.bellakhdar.3';
});

document.getElementById("linkdButton").addEventListener("click", function() {
    window.location.href = 'https://www.linkedin.com/in/abdeldjabar-bellakhdar-2b480a1a9/';
});



document.getElementById("fertiweb").addEventListener("click", function() {
    window.open('https://ferticonnect.free.nf/', '_blank');
});

document.getElementById("sspweb").addEventListener("click", function() {
    window.open('https://geradz.github.io/SSP.V0.1/', '_blank');
});

document.getElementById("miraweb").addEventListener("click", function() {
    window.open('https://abdeldjabarbell.github.io/miradz/mira_stors.html?', '_blank');
});

document.getElementById("mirawebAdmin").addEventListener("click", function() {
    window.open('https://abdeldjabarbell.github.io/miradz/index.html?', '_blank');
});

document.getElementById("techinnovweb").addEventListener("click", function() {
    window.open('https://abdeldjabarbell.github.io/techinnov-USTHB/', '_blank');
});

document.getElementById("techinnovwebAdmin").addEventListener("click", function() {
    window.open('https://abdeldjabarbell.github.io/techinnov-USTHB-ADMIN/', '_blank');
});

document.getElementById("alcogaweb").addEventListener("click", function() {
    window.open('', '_blank');
});




















let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};























let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let heihgt = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + heihgt){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');

            });

        };

    });



let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);







menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');




};



















ScrollReveal({ 
    reset: true ,
    distance: '80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content, .heading ,header ,.up-cv ', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ,.content-cv ', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});













 


const typed = new Typed('.multiple-text',{
    strings: ['Renewable Eenrgy Engineer','Web developer','Graphic designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true


});








function sendEmeil (){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "abdeldjabarportfolio@gmail.com",
        Password : "F23FF9C5884BB101841AB262DC6AB2A5AC26",
        To : 'abdeldjabarbellakhdar69@gmail.com',
        From : 'abdeldjabarportfolio@gmail.com',
        Subject : document.getElementById('email-sub').value,
        Body : "namFull Name : "+document.getElementById('Name').value
        +"<br> phone : "+document.getElementById('mobilenumber').value
        +"<br> Email-subject : "+ document.getElementById('email-sub').value
        +"<br> Email : <br> "+document.getElementById('message').value


    }).then(
      message => alert(message)
    );
}






document.getElementById("download_CV_Button").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1iSKfn5Xdwp3vfwuacsRzh2KeZwvzag2A/view?usp=drive_link"; // Remplacez par le lien vers votre CV
    link.download = "abdeldjabar_BELLAKHDAR_CV.pdf"; // Nom du fichier à télécharger
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
  
