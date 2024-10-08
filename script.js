
var h5Timer = document.querySelector(".part1 h5");
var grow = 0;

var tl = gsap.timeline();
tl.from('.line h1',{
    y:120,
    stagger:0.2,
    delay:0.5
})
tl.from(".part1, .line h2",{
    opacity:0,
    onStart:function () {
        setInterval(() => {
            if(grow<100){
                h5Timer.innerHTML = `<i>${grow++}</i>`;
            }else{
                h5Timer.innerHTML = `<i>${grow}</i>`;
            }
        }, 30);
    }
})
tl.to(".loader",{
    opacity:0,
    duration:0.4,
    delay:3,
})