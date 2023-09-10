let scrollToAbout=(a)=>{
    window.scrollTo({
        top: a.offsetTop,
        behavior:'smooth'
    });
}

// Add an event listener to the ABOUT link
let aboutSection = document.getElementById('aboutdiv');
let aboutLink = document.querySelector('.navbutton a[href="#aboutdiv"]');

aboutLink.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default behavior of jumping to the target
    scrollToAbout(aboutSection); // Call the smooth scroll function
});

let projectSection = document.getElementById('projectarea');
let projectLink = document.querySelector('.navbutton a[href="#projectarea"]');

projectLink.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default behavior of jumping to the target
    scrollToAbout(projectSection); // Call the smooth scroll function
});

