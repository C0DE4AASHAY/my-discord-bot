document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for your message! I will get back to you soon.");
    });

    // Tab switching functionality
    function opentab(tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tab-contents");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tab-links");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active-link", "");
        }
        document.getElementById(tabName).style.display = "block";
        event.currentTarget.className += " active-link";
    }

    // Attach the opentab function to the window object
    window.opentab = opentab;
});
