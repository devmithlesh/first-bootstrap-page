//--------------- SLIDER ----------------
var span = document.getElementsByClassName("arrow-bar");
var div = document.getElementsByClassName("box-slider");
var l = 0;
span[1].onclick = () => {
    l++;
    for (var i of div) {
        if (l == 0) {
            i.style.left = "0px";
        }
        if (l == 1) {
            i.style.left = "-740px";
        }
        if (l == 2) {
            i.style.left = "-1040px";
        }
        if (l == 3) {
            i.style.left = "-1900px";
        }
        if (l > 3) {
            l = 3;
        }
    }
};
span[0].onclick = () => {
    l--;
    for (var i of div) {
        if (l == 0) {
            i.style.left = "0px";
        }
        if (l == 1) {
            i.style.left = "-740px";
        }
        if (l == 2) {
            i.style.left = "-1040px";
        }
        if (l == 3) {
            i.style.left = "-1900px";
        }
        if (l < 0) {
            l = 0;
        }
    }
};
//--------------- SLIDER ----------------
var span = document.getElementsByClassName("arrow_r");
var div = document.getElementsByClassName("box-slider");
var l = 0;
span[1].onclick = () => {
    l++;
    for (var i of div) {
        if (l == 0) {
            i.style.left = "0px";
        }
        if (l == 1) {
            i.style.left = "-740px";
        }
        if (l == 2) {
            i.style.left = "-1040px";
        }
        if (l == 3) {
            i.style.left = "-1900px";
        }
        if (l > 3) {
            l = 3;
        }
    }
};
span[0].onclick = () => {
    l--;
    for (var i of div) {
        if (l == 0) {
            i.style.left = "0px";
        }
        if (l == 1) {
            i.style.left = "-740px";
        }
        if (l == 2) {
            i.style.left = "-1040px";
        }
        if (l == 3) {
            i.style.left = "-1900px";
        }
        if (l < 0) {
            l = 0;
        }
    }
};

// transition

window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}
