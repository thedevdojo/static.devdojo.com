// Add your javascript here

import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()


document.addEventListener("DOMContentLoaded", function() {
    let radialElements = document.querySelectorAll('.radial-background');
    for (let i = 0; i < radialElements.length; i++) {
        radialElements[i].style.backgroundImage = `radial-gradient(circle at 0px 0px, rgba(32, 32, 42, 0.9) 0%, rgba(215, 215, 255, 0.01) 85%, transparent 100%)`;
    }
    window.addEventListener('mousemove', function(event) {
        if (event.target.classList.contains('radial-background')) {
            let {
                clientX,
                clientY
            } = event;
            const rect = event.target.getBoundingClientRect();
            clientX = clientX - rect.left;
            clientY = clientY - rect.top;
            event.target.style.backgroundImage = `radial-gradient(circle at ${clientX}px ${clientY}px, rgba(32, 32, 42, 0.9) 0%, rgba(215, 215, 255, 0.01) 85%, transparent 100%)`;
        }
    });
    
});

// document.addEventListener('alpine:init', () => {
//     Alpine.data('gradientHover', () => ({
//         angle: 45, 
//         rotatingInterval: null, 
//         rotateBackground(){ 
//             let that=this; 
//             this.rotatingInterval = setInterval(function(){ 
//                 that.angle +=1; 
//             }, 10); 
//         },
//         init(){
//             this.$el.addEventListener("mouseenter", (event) => {
//                 console.log('rad');
//             });
//         }
//     }))
// })

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
    gsap.fromTo("#hero-main img", {
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
            markers: true
        },
        y: -150,
        opacity: 1,
        scrub: true
    });

    gsap.to("#radical", {
        scrollTrigger: {
            trigger: "#features-content",
            start: "top 90%",
            end: "bottom 80%",
            scrub: true,
        },
        x: -50,
        opacity: 1,
        scrub: true
    });

    // gsap.to("#yay", {
    //     scrollTrigger: {
    //         trigger: "#features-content",
    //         start: "top 70%",
    //         scrub: true
    //     },
    //     y: 0,
    //     opacity: 1,
    //     scrub: true
    // });

});