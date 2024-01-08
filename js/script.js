var elements = document.querySelectorAll (".fade-in");

function isElementInViewport (el) {
    var rect = el.getBoundingClientRect ();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function toggleElement (el) {
    if (isElementInViewport (el)) {
        el.classList.add ("visible");
    } else {
        el.classList.remove ("visible");
    }
}

function toggleElements () {
    for (var i = 0; i < elements.length; i++) {
        toggleElement (elements[i]);
    }
}

window.addEventListener ("scroll", toggleElements);

toggleElements ();

function toggleMenu() {
    var navList = document.querySelector(".header-list");
    if (navList.style.display == "none") {
        navList.style.display = "block";
    } else {
        navList.style.display = "none";
    }
}

var button = document.getElementById("info-arrow");
var text = document.getElementById("info-text");

button.addEventListener("click", function() {
    if (text.style.display == "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
});
