let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    // console.log(n)
    let i;
    let slides = document.getElementsByClassName("mySlides");
    // console.log(slides)
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { 
        slideIndex = 1 
    }

    if (n < 1) { 
        slideIndex = slides.length 
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

setInterval(() => {
    plusSlides(slideIndex)
}, 2400);

function hiddenSlides() {
    const hidden = document.querySelector('#slideshow-container')
    const hash = window.location.hash

    if(hash !== "#produtos") {
        hidden.style.display = 'none';
    } else {
        hidden.style.display = 'block';
    }
}

var observer = new MutationObserver( handleMutationObserver );
var config = { childList: true, attributes: true, subtree: true  };
var target = document.querySelector( 'body' );
  
function handleMutationObserver( mutations ) {
    hiddenSlides()
    mutations.forEach(function(mutation) {
        if(mutation.type == 'childList') {
            // hiddenSlides()
        }
  });
  
}

observer.observe( target, config );
hiddenSlides() 