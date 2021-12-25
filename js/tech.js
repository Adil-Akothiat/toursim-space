function rst() {
    if(document.body.clientWidth >= 1200) {
        techImages[0].setAttribute("src","/src/images/technology/image-launch-vehicle-portrait.jpg");
        techImages[1].setAttribute("src", "/src/images/technology/image-space-capsule-portrait.jpg");
        techImages[2].setAttribute("src", "/src/images/technology/image-spaceport-portrait.jpg");
    }else{
        techImages[0].setAttribute("src","/src/images/technology/image-launch-vehicle-landscape.jpg");
        techImages[1].setAttribute("src", "/src/images/technology/image-space-capsule-landscape.jpg");
        techImages[2].setAttribute("src", "/src/images/technology/image-spaceport-landscape.jpg");
    };  
}

rst();


window.onresize = function() {
    rst();
};

const list = document.querySelectorAll("ul li");

list[3].classList.add("focus_list");