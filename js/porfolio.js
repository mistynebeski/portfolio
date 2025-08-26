const prt_section = document.querySelector("portfolio");

const zoom_images = document.querySelectorAll(".zoom-img");
const zoom_icons = document.querySelectorAll(".zoom-icon");

/* ------------ Modal Pop Up Animation ------------ */

let currentIndex = 0;
//Icons zoom
zoom_icons.forEach((icn)=> 
    icn.addEventListener("click", () => {
        document.body.classList.add("image_zoom");
        changeImage(currentIndex);
    })
);



//Images zoom
zoom_images.forEach((icn, i)=> 
    icn.addEventListener("click", () => {
        prt_section.classList.add("open");
        document.body.classList.add("stopScrolling");
        currentIndex = i;
        changeImage2(currentIndex);
    })
);
