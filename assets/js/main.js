// Add your javascript here

import Alpine from 'alpinejs'
import morph from '@alpinejs/morph'
 
window.Alpine = Alpine
Alpine.plugin(morph)

Alpine.start()
domReadyLoop();

document.addEventListener("DOMContentLoaded", function() {
    let radialElements = document.querySelectorAll('.radial-background');
    for (let i = 0; i < radialElements.length; i++) {
        radialElements[i].style.backgroundImage = `radial-gradient(circle at 0px 0px, rgba(32, 32, 42, 0.9) 0%, rgba(215, 215, 255, 0.01) 85%, transparent 100%)`;
    }
    window.addEventListener('mousemove', function(event) {
        if (event.target.classList.contains('radial-background') || event.target.closest('.radial-background')) {
            let element = event.target.classList.contains('radial-background') ? event.target : event.target.closest('.radial-background');
            let {
                clientX,
                clientY
            } = event;
            const rect = element.getBoundingClientRect();
            clientX = clientX - rect.left;
            clientY = clientY - rect.top;
            element.style.backgroundImage = `radial-gradient(circle at ${clientX}px ${clientY}px, rgba(32, 32, 42, 0.9) 0%, rgba(215, 215, 255, 0.01) 85%, transparent 100%)`;
        }
    });
    
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.to("#hero", {
        scrollTrigger: {
            trigger: "#features",
            start: "top 100%",
            end: "top 10%",
            scrub: true
        },
        opacity: 0,
        scrub: true
    });
    gsap.fromTo("#hero-main img.bounce-image", {
        scale: 0.8
    }, {
        scale: 1,
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
    });

    gsap.set("#features", {
        opacity: 0
    });
    gsap.to("#features", {
        scrollTrigger: {
            trigger: "#features-header",
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
        },
        y: -150,
        opacity: 1,
        scrub: true
    });

    gsap.to("#radical", {
        scrollTrigger: {
            trigger: "#features-header",
            start: "top 80%",
            end: "bottom 50%",
            scrub: true
        },
        x: -50,
        opacity: 1,
        scrub: true
    });

    gsap.to("#how-to-use-it", {
        scrollTrigger: {
            trigger: "#features",
            start: "bottom 90%",
            end: "bottom 20%",
            scrub: true
        },
        y: -150,
        opacity: 1,
        scrub: true
    });

});

window.scrollTop = function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function domReadyLoop(){
    if(document.getElementById('loader')){
        let intervalCount = 0;
        let maxIntervalCount = 10; // -> 10*500ms = 5s max
        let domReadyInterval = setInterval(function(){
            if(document.readyState === 'complete' || intervalCount++ > maxIntervalCount){
                clearInterval(domReadyInterval);
                document.getElementById('loader').classList.add('opacity-0');
                setTimeout(function(){
                    document.getElementById('loader').remove();
                }, 300);
            }       
        }, 500);
    }
}


document.addEventListener("DOMContentLoaded", function() {
    hljs.highlightAll();
  });
  document.addEventListener('htmx:afterSwap', function(evt) {
    setTimeout(function(){
        domReadyLoop();
      hljs.highlightAll();
    }, 10);
  });
  // document.body.addEventListener('htmx:afterSwap', function(evt) {
  //   alert('updated');
  //   hljs.highlightAll();
  // });