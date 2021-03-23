// document.body.style.background = 'red';
// setTimeout(() => document.body.style.background = '', 3000);

var backdrop  = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var modalNoButton = document.querySelector(".modal__action--negotive");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

// console.dir(modalNoButton);


for(var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener("click", function() {
        // modal.style.display = "block";
        // backdrop.style.display = "block";
        modal.classList.add("open");
        backdrop.classList.add("open");
    })
};  


backdrop.addEventListener("click", function() {
    mobileNav.classList.remove("open");
    closeModal();
});

if(modalNoButton) {
    modalNoButton.addEventListener("click", closeModal);
}


function closeModal() {
    // modal.style.display = "none";
    // backdrop.style.display = "none";
    if(modal) {
        modal.classList.remove("open");
        
    }
    backdrop.classList.remove("open");
    
};

toggleButton.addEventListener("click", function() {
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
})