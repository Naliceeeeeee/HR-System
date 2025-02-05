let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;
        // console.log(arrowParent);
        arrowParent.classList.toggle("showMenu");
    })
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})
// Check the initial screen width and toggle the class accordingly
if (window.innerWidth <= 700) {
    sidebar.classList.add("close");
}

// Add a resize event listener to update the class when the screen width changes
window.addEventListener('resize', function() {
    if (window.innerWidth <= 700) {
        sidebar.classList.add("close");
    } else {
        sidebar.classList.remove("close");
    }
});

