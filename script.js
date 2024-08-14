gsap.from("#mainimg",{
    y:-200,
    duration:2,
    opacity:0
})
gsap.from("h1",{
    y:-200,
    duration:2,
    opacity:0
})

gsap.to("#main",{
    opacity:0.8,
    duration:3,

})

gsap.to("#row",{
    y:20,
    opacity:1,
    duration:2,
    delay:1
})