console.log("Loading CyberTech....")

const nav = document.querySelector(".nav"), 
    openbtn = document.querySelector(".openbtn"),
    closedbtn = document.querySelector(".closedbtn");
const languages = document.getElementById("languageMenu");

const close = document.getElementById("x");
const hamburgerButton = document.getElementById("hamburger-btn");
// openbtn.addEventListener("click", () => {
//     nav.classList.add("openNav");
// }); 


const optionMenu = document.querySelector(".select-menu");
const selectBtn = optionMenu.querySelector(".select-btn");
const options = Array.from(optionMenu.querySelectorAll(".option"));
const sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
console.log(options);
options.forEach(option => {
    option.addEventListener("click", () =>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        console.log(selectedOption)

        optionMenu.classList.remove("active");

    })
   
})

languages.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const lang = event.target.textContent;
        const object = event.target;
        console.log(object)
        // langalert(lang);
    }
});

close.addEventListener("click", () => {
    nav.classList.remove("openNav");
    nav.classList.add("link");
    // nav.style.width = 0;
    nav.style.display="none";
    
    
});

hamburgerButton.addEventListener("click", () => {
    nav.style.display = "block";
})


function Alert() {
    alert("Your submisson request has been submited. We would get back to you within 72 Hours. Thank You ")
}

// function langalert(lang) {
//     alert(`Language has been changed to ${lang}`);
// }
// 

