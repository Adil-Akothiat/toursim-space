const navigation = document.querySelector(".nav_items");
const list_item = document.querySelector(".list_items");
const planetNames = document.querySelectorAll(".planet_names span");
const planetInfos = document.querySelectorAll(".pla");
const planetImage = document.querySelectorAll(".im");
const btnSlider = document.querySelectorAll(".buttons button");
const crewImage = document.querySelectorAll(".crew_image img");
const cardInfo = document.querySelectorAll(".card_info");
const techBtn = document.querySelectorAll(".tech_btns button");
const techImages = document.querySelectorAll(".tech_images img");
const techInfo = document.querySelectorAll(".tech_card");

navigation.addEventListener("click", mangNav);
function mangNav(e) {
    const item = e.target;
    if(item.alt === "hamber") {
        list_item.classList.add("open");
        document.getElementsByTagName("section")[0].style.visibility="hidden";
    }else if(item.alt === "close") {
        list_item.classList.remove("open");
        document.getElementsByTagName("section")[0].style.visibility="visible";
    };
};
for(i=0; i < planetNames.length; i++) {
    planetNames[i].onclick = function() {
        planetNames.forEach(ele=> {
            ele.classList.remove("focus");
        });
        this.classList.add("focus");
        planetImage.forEach(el=> {
            el.classList.remove("show");
            if(this.textContent == el.alt) {
                el.classList.add("show");
            };
        });
        planetInfos.forEach(info=> {
            info.classList.remove("sh");
            if(this.textContent == info.dataset.pl) {
                info.classList.add("sh");
            };
        });
    };
};
for(i=0; i < btnSlider.length; i++) {
    btnSlider[i].onclick = function() {
        btnSlider.forEach(btn=> {
            btn.classList.remove("focus_crew");
        });
        this.classList.add("focus_crew");
        crewImage.forEach(img=> {
            img.classList.remove("show_cr");
            if(this.dataset.name == img.alt) {
                img.classList.add("show_cr");
            };
        });
        cardInfo.forEach(card=> {
            card.classList.remove("show_card");
            if(this.dataset.name == card.dataset.name) {
                card.classList.add("show_card");
            };
        });
    };
};
for(i=0; i < techBtn.length; i++) {
    techBtn[i].onclick = function() {
        techBtn.forEach(btn => {
            btn.classList.remove("focus_tech");
        });
        this.classList.add("focus_tech");
        techImages.forEach(img => {
            img.classList.remove("show_tech");
            if(this.dataset.tech == img.alt) {
                img.classList.add("show_tech");
            };
        });
        techInfo.forEach(info=> {
            info.classList.remove("show_tech_card");
            if(this.dataset.tech == info.dataset.tech) {
                info.classList.add("show_tech_card");
            }
        })
    };
};
function addNum() {
    if(document.body.clientWidth >= 1200) {
        document.querySelectorAll("ul li")[0].innerHTML = `
        <a class="an_focus" href="/index.html"><span style="color: rgb(144, 144, 144);">01 </span>HOME</a>
        `;
        document.querySelectorAll("ul li")[1].innerHTML = `
        <a class="an_focus" href="/pages/destination.html"><span style="color: rgb(144, 144, 144);">02 </span>DESTINATION</a>
        `;
        document.querySelectorAll("ul li")[2].innerHTML = `
        <a class="an_focus" href="/pages/crew.html"><span style="color: rgb(144, 144, 144);">03 </span>CREW</a>
        `;
        document.querySelectorAll("ul li")[3].innerHTML = `
        <a class="an_focus" href="/pages/technology.html"><span style="color: rgb(144, 144, 144);">04 </span>TECHNOLOGY</a>
        `;
    }else {
        document.querySelectorAll("ul li")[0].innerHTML = `
        <a class="an_focus" href="/index.html">HOME</a>
        `;
        document.querySelectorAll("ul li")[1].innerHTML = `
        <a href="/pages/destination.html">DESTINATION</a>
        `;
        document.querySelectorAll("ul li")[2].innerHTML = `
        <a href="/pages/crew.html">CREW</a>
        `;
        document.querySelectorAll("ul li")[3].innerHTML = `
        <a href="/pages/technology.html">TECHNOLOGY</a>
        `;
    };
};
addNum();
window.onresize = function()  {
    addNum();
};