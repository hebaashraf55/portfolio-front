let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAA('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = windo.scrollY;
        let offset = sex.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;
        if (top >= offset && top < offser + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nave a [href*=' + id + ' ] ').classList.add('active')
            })
        }
    })
}




menuIcon.onclick =()=> {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}
