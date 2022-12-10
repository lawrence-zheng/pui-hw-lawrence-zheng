let currentPage = "home"

function selectDesign() {
    if (currentPage != "design") {
        currentPage = "design";
        document.getElementsByClassName("selected")[0].classList.remove("selected");;
        document.getElementById("navlink-design").classList.add("selected");

    }
}


function selectHome() {
    if (currentPage != "home") {
        currentPage = "home";
        document.getElementsByClassName("selected")[0].classList.remove("selected");
        document.getElementById("navlink-home").classList.add("selected");

    }
}




const changeNav = (entries, observer) => {
	entries.forEach((entry) => {
        //console.log("dsad + " + entry.target.getAttribute('id') + "   current: " + currentPage);    
		if(entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            if (entry.target.getAttribute('id')=="top"){
                selectHome();
            }  else if (entry.target.getAttribute('id')=="design") {
                selectDesign();
            }

		}
	});
}


const options = {
	threshold: 0.35
}

const observer = new IntersectionObserver(changeNav, options);

const sections = document.querySelectorAll('.section');
sections.forEach((section) => {
	observer.observe(section);
});