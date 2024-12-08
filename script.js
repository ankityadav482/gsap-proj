var tl = gsap.timeline()

tl.from("h3",{
    y:-100,
    duration:0.80
})

tl.from(".nav-part2 h4",{
    y:-100,
    stagger:0.5,
    opacity:0,
    duration:0.80
})
tl.from("#box .left h1",{
    x:-300,
    opacity:0,
    duration:0.80
},'anmi')

tl.from("#box .left  button",{
    x:-300,
    duration:0.80
})

tl.from("#box .right img",{
    x:400,
    opacity:0
},'anmi')

tl.to("#box .left button i",{
    marginLeft:"40px",
    duration:0.5,
    repeat:-1,
    yoyo:true
})