const themeBtn = document.getElementById("theme-toggle");
const icon = themeBtn.querySelector("i");

if(localStorage.getItem("theme")==="light"){
    document.documentElement.style.filter="invert(1)";
    document.querySelectorAll("img").forEach(img=>{
        img.style.filter="invert(1)";
    });
    icon.className="fas fa-sun";
}

themeBtn.addEventListener("click",()=>{

    if(document.documentElement.style.filter==="invert(1)"){

        document.documentElement.style.filter="invert(0)";

        document.querySelectorAll("img").forEach(img=>{
            img.style.filter="invert(0)";
        });

        localStorage.setItem("theme","dark");
        icon.className="fas fa-moon";

    }else{

        document.documentElement.style.filter="invert(1)";

        document.querySelectorAll("img").forEach(img=>{
            img.style.filter="invert(1)";
        });

        localStorage.setItem("theme","light");
        icon.className="fas fa-sun";
    }

});

