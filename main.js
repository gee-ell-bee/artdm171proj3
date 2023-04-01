// variables
 let img = document.querySelector("img");
 const once = { once : true };

 document.addEventListener("DOMContentLoaded", init);

function init() {
    img.addEventListener("mouseover", wobbleImg);
    img.addEventListener("click", increaseSize, once);
    
    console.log(img);
};

function wobbleImg() {
    console.log("wobbled");
    if (img.style.maxWidth = "200vw") {
        img.style.maxWidth = "220vw";
    } else if (img.style.maxWidth = "300vw") {
        img.style.maxWidth = "280vw";
    }
    img.addEventListener("mouseleave", endWobble, once);
};

function endWobble() {
    console.log("end wobble");
    if (img.style.maxWidth = "220vw") {
        img.style.maxWidth = "200vw";
    } else if (img.style.maxWidth = "280vw") {
        img.style.maxWidth = "300vw";
    }
};

function increaseSize() {
    console.log("clicked");
    img.style.maxWidth = "300vw";
    img.parentElement.style.overflowX = "scroll";
    console.log(img);
    img.addEventListener("click", resetImg, once);
};

function resetImg() {
    console.log("resent");
    img.style.maxWidth = "200vw";
    img.parentElement.style.overflowX = "hidden";
    console.log(img);
    img.addEventListener("click", increaseSize, once);
};