
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim() {
    var tl = gsap.timeline();
    tl.from(".bindup", {
    })
        .to(".bindup", {
            y: 0,
            duration: 2,
            delay: -1,
            ease: Expo.easeInOut,
            stagger: 0.2

        })
        .from(".binddown", {
            y: '-10',
            opacity: 0,
            duration: 2,
            delay: -1,
            ease: Expo.easeInOut
        })
}

firstPageAnim();

function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}

circleMouseFollower();

var timeout;

function circleSkew() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);

        timeout = setTimeout(function () {
            document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100);
    });
}

circleSkew();

document.querySelectorAll(".proj").forEach(function (proj) {
    var rotate = 0;
    var diffrot = 0;

    proj.addEventListener("mouseleave", function (dets) {
        gsap.to(proj.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
    });

    proj.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - proj.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(proj.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
    });
});

let currDate= document.getElementById("date");
let d= new Date();
currDate.innerHTML= d.toLocaleDateString();

let currTime= document.getElementById("time");
let t= new Date();
currTime.innerHTML= d.toLocaleTimeString();


document.querySelector('.cross').style.display='none';
document.querySelector('.hamcross').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.ham').style.display='inline'
    document.querySelector('.cross').style.display='none'
}
else{
    document.querySelector('.ham').style.display='none'
    setTimeout(()=>{
        document.querySelector('.cross').style.display='inline'
    }, 300);
}
})