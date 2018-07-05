const main2Div = document.querySelector(".main2");
const main3Div = document.querySelector(".main3");
const main3Img = document.querySelector("#m3");
const main4Img = document.querySelector("#m4");


function fadeBackground(e) {
    const scrollYBottom = window.scrollY + window.innerHeight; // Sidens bund placering (Y bund)
    if (main2Div.offsetTop <= scrollYBottom) {
        const opac = 1 - (scrollYBottom-main2Div.offsetTop)/main2Div.offsetTop;
        main2Div.style.background = `linear-gradient(rgba(156, 47, 47, ${opac}), rgba(156, 47, 47, ${opac} )), url("resources/images/background1.jpg") no-repeat `;
        main2Div.style.backgroundSize = "cover";
    }
}

function zoomImage(e) {
    const scrollYBottom = window.scrollY + window.innerHeight; // Sidens bund placering (Y bund)
    var syb;
    var syb2;

    if (scrollYBottom > (main2Div.offsetTop + main2Div.offsetHeight)) {
        // syb = scrollYBottom - 2.3 * window.innerWidth;
        syb = scrollYBottom - (main3Div.offsetTop + main3Div.offsetHeight);
        main3Img.style.transform = 'translate3d(-25%, ' + (syb) + 'px, 0) scale(' + (100 + scrollYBottom / 5) / 380 + ')';
        // console.log("syb: "+syb + " sybny: "+ sybny);
    }

    if (scrollYBottom > (main3Div.offsetTop + main3Div.offsetHeight)) {
        syb2 = scrollYBottom - (main4Img.offsetTop+main4Img.offsetHeight);
        main4Img.style.transform = 'translate3d(0, ' + (syb2 * 0.8 - 50) + 'px, 0)';
    }
}

function myFunc(e) {
    fadeBackground(e);
    zoomImage(e);
}


window.addEventListener('scroll', myFunc);


