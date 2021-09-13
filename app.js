/* Variables  */
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.nav-list');
const bars = document.querySelectorAll('.hamburger span');
let isActive = false;

/* Functions and Events */
function addRequiredClass() {
    if (window.innerWidth < 768) {
        navbar.classList.add('mobile');
    } else {
        navbar.classList.remove('mobile') ;
    }
}

window.addEventListener('resize', addRequiredClass);
window.onload = addRequiredClass;

hamburger.addEventListener('click', function() {
    mobileNav.classList.toggle('open');
    if(!isActive) {
        bars[0].style.transform = 'rotate(45deg)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg)';
        isActive = true;
    } else {
        bars[0].style.transform = 'rotate(0deg)';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'rotate(0deg)';
        isActive = false;
    }
})
/* TESTMONIALS */
// vars
var	testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
	ignoreTouch = 30;

window.onload = function() {
    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }
        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }
        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() { playSlide(currentSlide -= 1);})

    testimRightArrow.addEventListener("click", function() {playSlide(currentSlide += 1);})    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
            case 39:
                testimRightArrow.click();
                break;
            case 39:
                testimRightArrow.click();
                break;
            default:
                break;
        }
    })
		
	testim.addEventListener("touchstart", function(e) {touchStartPos = e.changedTouches[0].clientX;})
	
	testim.addEventListener("touchend", function(e) {
        touchEndPos = e.changedTouches[0].clientX;
        touchPosDiff = touchStartPos - touchEndPos;

        if (touchPosDiff > 0 + ignoreTouch) {
                testimLeftArrow.click();
        } else if (touchPosDiff < 0 - ignoreTouch) {
                testimRightArrow.click();
        } else {
            return;
        }
    })
}

 // FIXING THE NAVBAR IN SCROLL
 const nav = document.querySelector('#main');
 let topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}
window.addEventListener('scroll', fixNav);