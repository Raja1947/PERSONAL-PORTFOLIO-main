
/*----------typing animation----------*/
var typed = new Typed(".typing",{
    strings:["","Web Developer.","Web Designer."],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
var typed2 = new Typed(".typing2",{
    strings:["","Web Developer.","Web Designer.","Food Lover.", "Cricket Lover."],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/*--------------------Responsive--------------------*/
var sidemenu = document.querySelector(".nav");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
