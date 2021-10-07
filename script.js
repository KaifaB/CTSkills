//clicked Tab Mountain 1
document.addEventListener('click', function (e) {
    // Find query of other tab
    let other = document.getElementById("tab-2");

	// If the clicked element doesn't match, do nothing
	if (!e.target.matches('#tab-1')) return 0;

	//Change elements
	e.target.classList.add("active");
    other.classList.remove("active");

    document.getElementById("trees").style.display = "none";
    document.getElementById("birds").style.display = "block";

}, false);

//clicked Tab Mountain 2
document.addEventListener('click', function (e) {
    // Find query of other tab
    let other = document.getElementById("tab-1");
    //Find query of tab to show

	// If the clicked element doesn't match, do nothing
	if (!e.target.matches('#tab-2')) return 0;

	// Change elements
	e.target.classList.add("active");
    other.classList.remove("active");

    document.getElementById("birds").style.display = "none";
    document.getElementById("trees").style.display = "block";

}, false);

//For nav-scroll event

window.onscroll = function() {
    "use strict";
    var myNav = document.getElementById("nav-1");
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        console.log("passed 50")
        myNav.classList.add("scroll");
    } else {
        console.log("before 50")
        myNav.classList.remove("scroll");
    }
  };